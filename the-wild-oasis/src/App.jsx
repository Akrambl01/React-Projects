import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const Button = styled.button`
  font-size: 20px;
  padding: 10px 20px;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  background-color: #f1356d;
  color: white;
  cursor: pointer;
`;

function App() {
  return (
    <div>
      <H1>The Wild Oasis</H1>
      <Button onClick={()=> alert("dgfgf")} >Click Me</Button>
    </div>
  );
}

export default App;
