import React, { useState, useEffect } from "react";
import { useEmployeeStore } from "../../store/employee.store";
import "./dataTable.scss";
import { Search } from "../search/Search";
import { Employee } from "../../types/interfaces";

const DataTable = () => {
  const employees = useEmployeeStore((s) => s.employees);
  const [entries, setEntries] = useState(10);
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
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="7">7</option>
                <option value="10">10</option>
              </select>
              entries
            </label>
          </div>
        )}
        <div className="dataTable_header_search">
          <Search setSearch={setSearch} />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th scope="row">First Name</th>
            <th scope="row">Last Name</th>
            <th scope="row">Start Date</th>
            <th scope="row">Department</th>
            <th scope="row">Date of Birth</th>
            <th scope="row">Street</th>
            <th scope="row">City</th>
            <th scope="row">State</th>
            <th scope="row">Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {isDataNotFound ? (
            <tr>
              <td colSpan={9}>No results found</td>
            </tr>
          ) : (
            entriesToShow.map((entry, index) => (
              <tr key={index}>
                <td scope="row">{entry.firstname}</td>
                <td scope="row">{entry.lastname}</td>
                <td scope="row">{entry.startDate}</td>
                <td scope="row">{entry.department}</td>
                <td scope="row">{entry.dateBirth}</td>
                <td scope="row">{entry.street}</td>
                <td scope="row">{entry.city}</td>
                <td scope="row">{entry.state}</td>
                <td scope="row">{entry.zip}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {!isDataNotFound && (
        <div className="dataTable_footer">
          <div className="dataTable_footer_infos">
            <p>{renderEntryInfo()}</p>
          </div>
          <div className="dataTable_footer_btn">
            <button onClick={firstPage} disabled={currentPage === 1}>
              First
            </button>
            <button onClick={prevPage} disabled={currentPage === 1}>
              {"<"}
            </button>

            <button onClick={nextPage} disabled={currentPage === numberOfPages}>
              {">"}
            </button>
            <button onClick={lastPage} disabled={currentPage === numberOfPages}>
              Last
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;
