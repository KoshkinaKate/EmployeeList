export default function EmployeeListItem(props) {
  const {
    name, position, setSelectedEmployee,
    officeNum, mobileNum, smsNum, email
  } = props;
  
  const styleEmployeeListItem = {
    border: '2px solid #ff0000',
    margin: '10px 5px',
    backgroundColor: '#ff000030'
  };

  function changeEmployee() {
    setSelectedEmployee({ name, position, officeNum, mobileNum, smsNum, email })
  }

  return (
    <div onClick={changeEmployee} className="employee" style={styleEmployeeListItem}>
      <h3>{name}</h3>
      <p>{position}</p>
    </div>
  );
}