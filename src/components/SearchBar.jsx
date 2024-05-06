export default function SearchBar() {
  const styleSearchBar = {
    border: '2px solid #008000',
    padding: '8px 0',
    backgroundColor: '#00800030'
  };

  return (
    <div style={styleSearchBar}>
      <input type="text" placeholder="Search" style={{ width: '50%', padding: '5px 5px 4px 5px' }} />
    </div>
  );
}