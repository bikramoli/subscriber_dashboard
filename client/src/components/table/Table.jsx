import { useEffect } from "react";
import CardWrapper from "../card/CardWrapper";
import users_datas from "../../assets/datas/users.json";
import "./Style.css";

const Table = (props) => {
  const { users, setUsers } = props;

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
              <th>Country</th>
              <th>Status</th>
              <th>Join Date</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.data.map((item, index) => (
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
