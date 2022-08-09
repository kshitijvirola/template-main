import styled from "styled-components";
import { size } from "App/device";
import { Theme } from "App/theme";

const StyleComponent = styled.div`
  position: fixed;
  width: 100%;
  z-index: 99;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover {
    color: ${Theme.mainColor};
  }
  .ant-menu {
    height: 4.5em;
    .ant-menu-submenu-selected {
      color: #000;
    }
    .title {
      padding-left: 1rem !important;
    }
    .anticon-unordered-list {
      font-size: 1.4rem;
    }
    .ant-menu-item,
    .ant-menu-item-active,
    .ant-menu-item:hover,
    .ant-menu-item-selected,
    .ant-menu-submenu-selected,
    &.ant-menu-horizontal {
      :after {
        border-bottom: none !important;
        color: #fff;
      }
      a,
      .ant-menu-submenu-open {
        font-weight: 700;
        color: ${Theme.mainColor};
      }
    }
    .ant-menu-item {
      padding: 15px 0 0 20px;
      height: 3em;
      line-height: 25px;
      a:hover {
        color: #000;
      }
    }
    .title {
      padding-left: 2rem;
      margin-right: 1rem;
      font-size: 1.125rem;
      white-space: nowrap;
    }
    .contact {
      margin-left: auto;
      padding: 20px 20px 0;
      .setting {
        font-size: 20px;
      }
    }
    .left {
      padding: 0.5rem;
      margin-right: 2em;
    }
    .marLeft{
      margin-left: auto;
    }
    .first {
      opacity: 0 !important;
      @media ${size["tablet-max"]} {
        opacity: 1 !important;
        color: ${Theme.mainColor};
        font-size: large;
      }
    }
    .ant-menu-submenu:after {
      display: none;
    }
  }
  .ant-drawer-content-wrapper {
    width: 300px;
    .ant-drawer-body {
      padding: 0;
      > div {
        box-shadow: none;
      }
      .ant-menu-item {
        padding-top: 0;
      }
    }
  }
`;

export { StyleComponent };
