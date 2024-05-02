import "./tableMobile.scss";

const TableMobile = ({ entriesToShow }) => {
  return (
    <>
      {entriesToShow.map((entry, index) => (
        <div key={index} className="table">
          <div className="table_group">
            <div className="table_group_title">Last Name</div>
            <div className="table_group_value">{entry.lastname}</div>
          </div>
          <div className="table_group">
            <div className="table_group_title">First Name</div>
            <div className="table_group_value">{entry.firstname}</div>
          </div>
          <div className="table_group">
            <div className="table_group_title">Start Date</div>
            <div className="table_group_value">{entry.startDate}</div>
          </div>
          <div className="table_group">
            <div className="table_group_title">Department</div>
            <div className="table_group_value">{entry.department}</div>
          </div>
          <div className="table_group">
            <div className="table_group_title">Date of Birth</div>
            <div className="table_group_value">{entry.dateBirth}</div>
          </div>
          <div className="table_group">
            <div className="table_group_title">Street</div>
            <div className="table_group_value">{entry.street}</div>
          </div>
          <div className="table_group">
            <div className="table_group_title">City</div>
            <div className="table_group_value">{entry.city}</div>
          </div>
          <div className="table_group">
            <div className="table_group_title">State</div>
            <div className="table_group_value">{entry.state}</div>
          </div>
          <div className="table_group">
            <div className="table_group_title">Zip Code</div>
            <div className="table_group_value">{entry.zip}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TableMobile;
