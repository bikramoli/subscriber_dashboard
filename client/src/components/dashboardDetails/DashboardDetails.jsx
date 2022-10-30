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
  return (
    <WrapperMain>
      <SearchBox />
      <Table users={users} setUsers={setUsers} />
    </WrapperMain>
  );
};
export default DashboardDetails;
