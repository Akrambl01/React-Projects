import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const Button = styled.button`
  font-size: 20px;
  padding: 10px 20px;
  font-weight: 600;
  border-radius: var(--border-radius-lg);
  border: none;
  background-color: var(--color-brand-700);  
  color: white;
  cursor: pointer;
  margin: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <H1>The Wild Oasis</H1>
        <Button onClick={() => alert("dgfgf")}>Click Me</Button>
      </div>
    </>
  );
}

export default App;
