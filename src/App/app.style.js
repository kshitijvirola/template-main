import styled from "styled-components";

const AppContainer = styled.div`
  height: 100vh;
  .form-error {
    color: red;
  }
  .pointer{
    cursor: pointer;
  }
  .txtWrap {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  a,a:hover {
    color: #000;
  }
`;

export { AppContainer };
