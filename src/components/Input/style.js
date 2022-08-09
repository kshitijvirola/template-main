import styled from "styled-components";
import { size } from "App/device";
import { Theme } from "App/theme";

const FormWrapper = styled.div`
  padding: 0;
  margin: 0;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
					 

  .ant-input-affix-wrapper {
			  
    padding: 0;
												
    box-shadow: none;
    border-radius: 5px;
    border: 1px solid #e4e4e4;
    input.ant-input {
      max-height: 33px;
      border-radius: 5px 0 0 5px;
      padding: 5px 10px;
    }
  }
  .ant-input-prefix {
    margin-right: 5px;
  }
  input,
  textarea {
    background: #F2F2F2;
    display: block;
    width: 100%;
    line-height: 1.5;
    margin: 0;
    -webkit-appearance: none;    
    height: 2.2rem;				 
    font-size: 15px;
    font-weight: 300;
    padding: 2px 20px;
    color: #505050;
    font-family: "Rubik", sans-serif;
    border: 1px solid #e4e4e4;
    border-radius: 5px;
    ::placeholder {
      color: #c5c5c5;
    }
    :-ms-input-placeholder {
      color: #c5c5c5;
    }
    ::-ms-input-placeholder {
      color: #c5c5c5;
    }
    :hover,
    :focus {
      outline: none;
    }
    @media ${size["desktop-sm-max"]} {
      font-size: 13px;
      padding: 2px 10px;
    }
    @media ${size["tablet-max"]} {
      font-size: 14px;
    }
  }
  // textarea {height: 40px;}
  .ant-input-suffix {
    border-radius: 0 5px 5px 0;
    background: #F2F2F2;
    margin-left: 0px;
    padding-right: 5px;
    .anticon {
      color: ${Theme.mainColor};
    }
  }
  .empty {
    border: 1px solid #e81c1c;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="password"] {
    border-radius: 5px 0 0 5px;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  .ant-input-affix-wrapper-disabled .ant-input-suffix {
    background: transparent; // #f1f1f1;
  }
`;

export { FormWrapper };
