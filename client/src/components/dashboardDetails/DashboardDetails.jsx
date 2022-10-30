import "./Style.css";
import { useState } from "react";
import DropDownMenu from "../dropDownMenu/DropDownMenu";
import SearchBox from "../searchbox/SearchBox";
import Table from "../table/Table";
import WrapperMain from "../wrapper/WrapperMain";

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
  console.log(checkBoxFilters, "checkBoxFilters");
  return (
    <WrapperMain>
      <div className="filters">
        <SearchBox value={filters.search} handleFilters={handleFilters} />
        <DropDownMenu
          title="Select an Options"
          options={optionList}
          handleCheckBoxFilters={handleCheckBoxFilters}
        />
      </div>
      <Table
        users={users}
        setUsers={setUsers}
        filters={filters}
        checkBoxFilters={checkBoxFilters}
      />
    </WrapperMain>
  );
};
export default DashboardDetails;
