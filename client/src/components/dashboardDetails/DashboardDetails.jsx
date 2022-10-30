import "./Style.css";
import { useRef, useState } from "react";
import DropDownMenu from "../dropDownMenu/DropDownMenu";
import SearchBox from "../searchbox/SearchBox";
import Table from "../table/Table";
import WrapperMain from "../wrapper/WrapperMain";
import DatePickers from "../datePicker/DatePicker";

const optionList = [
  { name: "0", title: "In-active" },
  { name: "1", title: "Active" },
];

const DashboardDetails = () => {
  const [users, setUsers] = useState({
    loading: false,
    error: false,
    data: [],
  });

  // filters state
  const [filters, setFilters] = useState({});
  const [checkBoxFilters, setCheckBoxFilter] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const formRef = useRef(null);

  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const handleCheckBoxFilters = (e) => {
    let { checked: value, name } = e.target;

    if (value) {
      setCheckBoxFilter((prev) => [...prev, name.toLowerCase()]);
    } else {
      setCheckBoxFilter((prev) =>
        prev.filter((el) => el !== name.toLowerCase())
      );
    }
  };

  const handleFilters = (e) => {
    let value = e.target.value;
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: value,
    }));

    if (value === "" && filters.hasOwnProperty(e.target.name)) {
      let temp = filters;
      delete temp[`${e.target.name}`];
      setFilters(temp);
    }
  };

  const handleReset = () => {
    formRef.current.reset();
    setFilters({});
    setCheckBoxFilter([]);
    setStartDate(null);
    setEndDate(null);
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = users.data.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const nPages = Math.ceil(users.data.length / recordsPerPage);

  return (
    <WrapperMain>
      <div className="dashboard-details-header">
        <h1>Subscriber List</h1>
        <span>
          <form ref={formRef} className="filters">
            <SearchBox value={filters.search} handleFilters={handleFilters} />
            <DropDownMenu
              title="Select an Options"
              options={optionList}
              handleCheckBoxFilters={handleCheckBoxFilters}
            />
            <DatePickers
              label={"From"}
              name={"startDate"}
              handleChange={(e) => setStartDate(e.target.value)}
            />
            <DatePickers
              label={"To"}
              name={"endDate"}
              handleChange={(e) => setEndDate(e.target.value)}
            />
            <span className="filter-clear" onClick={handleReset}>
              Clear All Filters
            </span>
          </form>
        </span>
      </div>

      <Table
        startDate={startDate}
        endDate={endDate}
        users={currentRecords}
        setUsers={setUsers}
        filters={filters}
        checkBoxFilters={checkBoxFilters}
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </WrapperMain>
  );
};
export default DashboardDetails;
