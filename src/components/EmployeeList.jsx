import EmployeeListItem from './EmployeeListItem';

export default function EmployeeList({ employees, setSelectedEmployee}) {
  const styleEmployeeList = {
    border: '2px solid #800080',
    marginTop: '20px',
    backgroundColor: '#80008030'
  };

  return (
    <div style={styleEmployeeList}>
      {/* Method 1 - Hard Coded (Incorrect) */}
      {/* 
        <EmployeeListItem name={employees[0].name} position={employees[0].position} />
        <EmployeeListItem name={employees[1].name} position={employees[1].position} />
        <EmployeeListItem name={employees[2].name} position={employees[2].position} />
        <EmployeeListItem name={employees[3].name} position={employees[3].position} />
        <EmployeeListItem name={employees[4].name} position={employees[4].position} />
        <EmployeeListItem name={employees[5].name} position={employees[5].position} />
      */}

      {/* Method 2 - Programmatically (Correct) */}
      {
        employees.map((employee, idx) => {
          return (
            <EmployeeListItem 
              key={idx}
              name={employee.name} 
              position={employee.position}
              officeNum={employee.officeNum}
              mobileNum={employee.mobileNum}
              smsNum={employee.smsNum}
              email={employee.email}
              setSelectedEmployee={setSelectedEmployee}
            />
          )
        })
      }
    </div>
  );
}