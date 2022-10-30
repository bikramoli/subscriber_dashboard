import React from "react";
import { useState } from "react";
import "./Style.css";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const [initVal, setInitVal] = useState(0);
  const [finVal, setFinVal] = useState(10);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
    if (currentPage == finVal) {
      setFinVal(finVal + 10);
      setInitVal(initVal + 10);
    }
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
    if (currentPage == finVal + 1) {
      setFinVal(finVal - 10);
      setInitVal(initVal - 10);
    }
  };

  return (
    <nav>
      <div class="b-pagination-outer">
        <ul id="pagination">
          <li>
            <a onClick={prevPage} href="#">
              Previous
            </a>
          </li>
          {pageNumbers.slice(initVal, finVal).map((pgNumber, index) => (
            <li key={pgNumber}>
              <a
                onClick={() => setCurrentPage(pgNumber)}
                className={`${currentPage == pgNumber ? "active" : ""} `}
              >
                {pgNumber}
              </a>
            </li>
          ))}
          <li>
            <a onClick={nextPage} href="#">
              Next
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Pagination;
