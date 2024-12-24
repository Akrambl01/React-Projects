import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  ${(prorps) =>
    prorps.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}
  ${(prorps) =>
    prorps.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 20px;
    `}
`;

Row.defaultProps = { 
    type: "vertical",
    };

export default Row;
