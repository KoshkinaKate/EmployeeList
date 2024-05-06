import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList'

export default function HomePage(props) {
  const styleHomePage = {
    border: '2px solid #ffa500',
    padding: '0 5px 5px 5px',
    marginRight: '2.5px',
    backgroundColor: '#ffa50030'
  };

  return (
    <section id="home-page" style={styleHomePage}>
      <Header title="Employee Directory" />
      <SearchBar />
      <EmployeeList employees={props.employees} setSelectedEmployee={props.setSelectedEmployee} />
    </section>
  );
}