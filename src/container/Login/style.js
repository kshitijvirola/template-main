import { Theme } from "App/theme";
import styled from "styled-components";

const LoginStyle = styled.div`
  display: flex;
  height: 100vh;
  padding: 50px;
  padding-bottom: 6em;
  background-color: ${Theme.mainColor};
  .logo {
    width: 559.19px;
    height: 112px;
  }
  .coffee {
    margin: 25% 65%;
  }
  .box {
    max-width: 450px;
    width: 38%;
    margin-left: 30%;
    background: #fff;
    border-radius: 10px !important;
    padding: 20px 60px;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.15);
    text-align: center;
    label {
      text-align: left;
    }
    img {
      margin-top: 1em;
      max-height: 95px;
      margin-bottom: 11px;
    }
    .head {
      font-weight: bold;
      font-size: 30px;
    }
    .remember {
      color: #616161;
    }
    .check {
      padding: 1px;
    }
    .forgot {
      text-align: end;
      font-size: 12px;
    }
    .btnDiv{
      margin-top: 1rem
    }
  }
`;
export { LoginStyle };
