import { Theme } from "App/theme";
import styled from "styled-components";
import { size } from "App/device";

const MenuStyle = styled.div`
  box-shadow: rgb(0 0 0 / 24%) 0px 6px 8px;
  border-right: 1px solid #f0f0f0;
  padding: 5px;
  min-height: 85em;
  @media ${size["tablet-max"]} {
    min-height: 30em;
  }
  .menuTop {
    display: flex;
    padding: 0.5em 1em;
    align-items: center;
    .anticon {
      font-size: 14px;
      color: #acb4ba;
    }
    h2 {
      margin-left: 10px;
      margin-bottom: 0;
    }
  }
  .ant-menu-inline {
    border-right: none;
  }
  .ant-menu-vertical,
  .ant-menu-vertical-left {
    border-right: none;
    padding: 0.5em 1em;
    .ant-menu-item {
      font-size: 16px;
      :hover {
        background: #ebeef0;
        border-radius: 10px;
        color: black;
      }
    }
    .active {
      background: #ebeef0;
      border-radius: 10px;
    }
  }
  .active,
  .ant-menu-item-selected {
    background: #ebeef0;
    border-radius: 10px;
  }
  .ant-menu-item:hover,
  .ant-menu-item-active,
  .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
  .ant-menu-submenu-active,
  .ant-menu-submenu-title:hover {
    color: ${Theme.mainColor};
  }
  .ant-menu-title-content {
    color: ${Theme.mainColor};
    font-weight: 700;
  }
`;
export { MenuStyle };
