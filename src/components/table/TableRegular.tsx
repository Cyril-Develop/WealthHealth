import "./tableRegular.scss";

const TableRegular = ({ entriesToShow }) => {
  return (
    <div className="table">
      <div className="table_header">
        <div className="table_header_cell">First Name</div>
        <div className="table_header_cell">Last Name</div>
        <div className="table_header_cell">Start Date</div>
        <div className="table_header_cell">Department</div>
        <div className="table_header_cell">Date of Birth</div>
        <div className="table_header_cell">Street</div>
        <div className="table_header_cell">City</div>
        <div className="table_header_cell">State</div>
        <div className="table_header_cell">Zip Code</div>
      </div>
      {entriesToShow.map((entry, index) => (
        <div className="table_body" key={index}>
          <div className="table_body_cell">{entry.firstname}</div>
          <div className="table_body_cell">{entry.lastname}</div>
          <div className="table_body_cell">{entry.startDate}</div>
          <div className="table_body_cell">{entry.department}</div>
          <div className="table_body_cell">{entry.dateBirth}</div>
          <div className="table_body_cell">{entry.street}</div>
          <div className="table_body_cell">{entry.city}</div>
          <div className="table_body_cell">{entry.state}</div>
          <div className="table_body_cell">{entry.zip}</div>
        </div>
      ))}
    </div>
  );
};

export default TableRegular;
