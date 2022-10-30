import { useState } from "react";
import SearchBox from "../searchbox/SearchBox";
import Table from "../table/Table";
import WrapperMain from "../wrapper/WrapperMain";

const DashboardDetails = () => {
  const [users, setUsers] = useState({
    loading: false,
    error: false,
    data: [],
  });
  // filters state
  const [filters, setFilters] = useState({});

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
  console.log(filters, "filter");
  return (
    <WrapperMain>
      <SearchBox value={filters.search} handleFilters={handleFilters} />
      <Table users={users} setUsers={setUsers} filters={filters} />
    </WrapperMain>
  );
};
export default DashboardDetails;
