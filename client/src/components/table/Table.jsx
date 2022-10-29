import CardWrapper from "../card/CardWrapper";
import "./Style.css";

const Table = () => {
  return (
    <>
      <CardWrapper>
        <h3>Recent activity</h3>

        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Username</th>
              <th>Email</th>
              <th>Country</th>
              <th>Status</th>
              <th>Package</th>
              <th>Join Date</th>
              <th>Expire Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Biramdnf</td>
              <td>bik@ndfnd.com</td>
              <td>Nepal</td>
              <td>
                <span className="badge success">Active</span>
              </td>
              <td>Unlimited</td>
              <td>10 oct 2022</td>
              <td>10 oct 2022</td>
            </tr>
          </tbody>
        </table>
      </CardWrapper>
    </>
  );
};
export default Table;
