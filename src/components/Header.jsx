export default function Header(props) {
  const styleHeader = {
    border: '2px solid #0000FF',
    padding: '7px 0',
    margin: '20px 0',
    backgroundColor: '#0000FF30'
  };

  return (
    <header>
      <h1 style={styleHeader}>{props.title}</h1>
    </header>
  )
}