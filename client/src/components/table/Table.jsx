import { useEffect } from "react";
import moment from "moment/moment.js";
import CardWrapper from "../card/CardWrapper";
import users_datas from "../../assets/datas/users.json";
import "./Style.css";

const Table = (props) => {
  const { users, setUsers, filters, checkBoxFilters, startDate, endDate } =
    props;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setUsers({ loading: true, error: false, data: [] });
        const data = await users_datas;
        setUsers({ loading: false, error: false, data: data });
      } catch (error) {
        setUsers((prev) => ({ ...prev, loading: false, error: true }));
        console.log(error.message);
      }
    };
    fetchData();
  }, [setUsers]);

  console.log(users, "user");

  const filterData = (data) => {
    if (
      (!filters.hasOwnProperty("search") || filters.search === "") &&
      (!checkBoxFilters || checkBoxFilters.length === 0) &&
      (!startDate || !endDate)
    )
      return data;
    let temp = [];

    if (filters.hasOwnProperty("search") && filters.search)
      temp = [
        ...temp,
        ...data.filter(
          (el) =>
            el.email.toLowerCase().includes(filters.search.toLowerCase()) ||
            el.first_name
              .toLowerCase()
              .includes(filters.search.toLowerCase()) ||
            el.middle_name
              .toLowerCase()
              .includes(filters.search.toLowerCase()) ||
            el.last_name.toLowerCase().includes(filters.search.toLowerCase()) ||
            el.username.toLowerCase().includes(filters.search.toLowerCase()) ||
            el.country.toLowerCase().includes(filters.search.toLowerCase())
        ),
      ];

    if (checkBoxFilters && checkBoxFilters.length > 0) {
      console.log(data[0].status);
      temp = [
        ...temp,
        ...data.filter((el) =>
          checkBoxFilters.includes(el.active.toLowerCase())
        ),
      ];
      console.log("after check box", temp);
    }

    if (startDate && endDate)
      temp = [
        ...temp,
        ...data.filter((el) =>
          moment(el.join_date).isBetween(moment(startDate), moment(endDate))
        ),
      ];

    console.log(temp);
    return temp;
  };

  return (
    <>
      <CardWrapper>
        <h3>Recent activity</h3>

        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Fullname</th>
              <th>Email</th>
              <th>Username</th>
              <th>Country</th>
              <th>Status</th>
              <th>Join Date</th>
            </tr>
          </thead>
          <tbody>
            {users.data &&
              filterData(users.data).map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {item.first_name +
                      " " +
                      item.middle_name +
                      " " +
                      item.last_name}
                  </td>
                  <td>{item.email}</td>
                  <td>{item.username}</td>
                  <td>{item.country}</td>
                  <td>
                    <span className="badge success">
                      {item.active === "0" ? "Unactive" : "Active"}
                    </span>
                  </td>
                  <td>{item.join_date}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </CardWrapper>
    </>
  );
};
export default Table;
