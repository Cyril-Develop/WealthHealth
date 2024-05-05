import React, { useState, useEffect } from "react";
import { useEmployeeStore } from "../../store/employee.store";
import "./dataTable.scss";
import { Search } from "../search/Search";
import { Employee } from "../../types/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import TableMobile from "../table/mobile/TableMobile";
import TableRegular from "../table/desktop/TableRegular";

const DataTable = () => {
  const employees = useEmployeeStore((s) => s.employees);
  const [entries, setEntries] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState<Employee[]>();

  const start = (currentPage - 1) * entries;
  const end = start + entries;

  const entriesToShow = search
    ? search.slice(start, end)
    : employees.slice(start, end);
  const totalEntries = search ? search.length : employees.length;
  const numberOfPages = Math.ceil(totalEntries / entries);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const handleEntriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEntries(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const lastPage = () => {
    setCurrentPage(numberOfPages);
  };

  const firstPage = () => {
    setCurrentPage(1);
  };

  const renderEntryInfo = () => {
    const endEntry = Math.min(end, totalEntries);
    return `Showing ${start + 1} to ${endEntry} of ${totalEntries} entries`;
  };

  const isDataNotFound = search && entriesToShow.length === 0;
  const screenWidth = window.innerWidth;

  return (
    <div className="dataTable">
      <div className="dataTable_header">
        {!isDataNotFound && (
          <div className="dataTable_header_length">
            <label htmlFor="entries">
              Show
              <select
                name="entries"
                id="entries"
                onChange={handleEntriesChange}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="30">30</option>
              </select>
              entries
            </label>
          </div>
        )}
        <div className="dataTable_header_search">
          <Search setSearch={setSearch} />
        </div>
      </div>
      {isDataNotFound ? (
        <div className="dataTable_notFound">No results found</div>
      ) : screenWidth >= 1580 ? (
        <TableRegular entriesToShow={entriesToShow} />
      ) : (
        <TableMobile entriesToShow={entriesToShow} />
      )}
      {!isDataNotFound && (
        <div className="dataTable_footer">
          <div className="dataTable_footer_infos">{renderEntryInfo()}</div>
          <div className="dataTable_footer_btn">
            <button
              onClick={firstPage}
              className={currentPage === 1 ? "disable" : ""}
              disabled={currentPage === 1}
            >
              First
            </button>
            <button
              onClick={prevPage}
              className={currentPage === 1 ? "disable" : ""}
              disabled={currentPage === 1}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            <button
              onClick={nextPage}
              className={currentPage === numberOfPages ? "disable" : ""}
              disabled={currentPage === numberOfPages}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <button
              onClick={lastPage}
              className={currentPage === numberOfPages ? "disable" : ""}
              disabled={currentPage === numberOfPages}
            >
              Last
            </button>
          </div>
          <span className="dataTable_footer_currentPage">
            Page {currentPage} / {numberOfPages}
          </span>
        </div>
      )}
    </div>
  );
};

export default DataTable;
