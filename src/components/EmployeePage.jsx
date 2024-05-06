import Header from './Header';

export default function EmployeePage({selectedEmployee}) {
  const styleEmployeePage = {
    border: '2px solid #a52a2a',
    padding: '0 5px 5px 5px',
    marginLeft: '2.5px',
    height: '773.3px',
    backgroundColor: '#a52a2a30'
  };

  return (
    <section id="employee-page" style={styleEmployeePage}>
      <Header title="Employee" />
      <div id="employee-info-container">
        <div className="employee employee-info">
          <h3>{selectedEmployee.name}</h3>
          <p>{selectedEmployee.position}</p>
        </div>
        <div className="employee employee-info">
          <h4>Call Office</h4>
          <p>{selectedEmployee.officeNum}</p>
        </div>
        <div className="employee employee-info">
          <h4>Call Mobile</h4>
          <p>{selectedEmployee.mobileNum}</p>
        </div>
        <div className="employee employee-info">
          <h4>SMS</h4>
          <p>{selectedEmployee.smsNum}</p>
        </div>
        <div className="employee employee-info-last">
          <h4>Email</h4>
          <p>{selectedEmployee.email}</p>
        </div>
      </div>
    </section>
  );
}