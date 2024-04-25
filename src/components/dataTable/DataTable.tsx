import { useEmployeeStore } from "../../store/employee.store";
import "./dataTable.scss";
import { useState } from "react";

const DataTable = () => {
  const employees = useEmployeeStore((s) => s.employees);
  const [entries, setEntries] = useState(10);
  const [page, setPage] = useState(1);

  const start = (page - 1) * entries;
  const end = start + entries;
  const entriesToShow = employees.slice(start, end);

  const handleEntriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEntries(parseInt(e.target.value));
    setPage(1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  return (
    <div className="dataTable">
      <div className="dataTable_header">
        <div className="dataTable_header_length">
          <label htmlFor="entries">
            Show
            <select name="entries" id="entries" onChange={handleEntriesChange}>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            entries
          </label>
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
          {entriesToShow.map((entry, index) => (
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
          ))}
        </tbody>
      </table>
      <div className="dataTable_footer">
        <div className="dataTable_footer_infos">
          <p>
            Showing {start + 1} to{" "}
            {end > employees.length ? employees.length : end} of{" "}
            {employees.length} entries
          </p>
        </div>
        <div className="dataTable_footer_btn">
          <button onClick={prevPage} disabled={page === 1}>
            Previous
          </button>
          <button onClick={nextPage} disabled={end >= employees.length}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
