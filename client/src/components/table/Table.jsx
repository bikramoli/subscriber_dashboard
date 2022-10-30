import { useEffect } from "react";
import moment from "moment/moment.js";
import CardWrapper from "../card/CardWrapper";
import "./Style.css";
import axios from "axios";
import Pagination from "../pagination/Pagination";

const Table = (props) => {
  const {
    users,
    currentRecords,
    setUsers,
    filters,
    checkBoxFilters,
    startDate,
    endDate,
    nPages,
    currentPage,
    setCurrentPage,
  } = props;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setUsers({ loading: true, error: false, data: [] });
        const data = await axios.get("user.json").then((res) => {
          return res.data;
        });
        setUsers({ loading: false, error: false, data: data });
      } catch (error) {
        setUsers((prev) => ({ ...prev, loading: false, error: true }));
        console.log(error.message);
      }
    };
    fetchData();
  }, [setUsers]);

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
      {users.loading ? (
        <h1>loading...</h1>
      ) : users.error ? (
        <h1>Error while loading data</h1>
      ) : (
        <CardWrapper>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>FULLNAME</th>
                  <th>EMAIL</th>
                  <th>USERNAME</th>
                  <th>COUNTRY</th>
                  <th>STATUS</th>
                  <th>JOIN DATE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {currentRecords &&
                  filterData(currentRecords).map((item, index) => (
                    <tr key={index}>
                      <td>{item.id}</td>
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
                        <span className="badge">
                          {item.active === "0" ? (
                            <span className="badge warning">Inactive </span>
                          ) : (
                            <span className="badge success">Active </span>
                          )}
                        </span>
                      </td>
                      <td>{item.join_date}</td>
                      <td>
                        <a href="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="table-view-icon"
                            viewBox="0 0 20 20"
                            fill="blue"
                          >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path
                              fillRule="evenodd"
                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </CardWrapper>
      )}
    </>
  );
};
export default Table;
