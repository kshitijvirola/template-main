import React, { Component } from "react";
import { Menu, Drawer, Modal } from "antd";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import {
  UnorderedListOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { PageConst } from "./constant";
import { StyleComponent } from "./style";
import { logout } from "redux/login/actions";
import { RemoveConst } from "App/AppConstant";
import { Menu as MenuUI } from "components/Form";
import { MobileMenu } from "components/Menu/constant";
const { confirm } = Modal;

class Header extends Component {
  constructor() {
    super();
    this.state = { hidden: false };
  }
  handleClick = (e) => {
    if (e.key === "Profile") this.props.history.push("/profile");
    else if (e.key === "Change Password")
      this.props.history.push("/change-password");
    else if (e.key === "Log-out") this.logoutWarn();
    else if (e.key === "menu") this.setState({ hidden: !this.state.hidden });
  };
  logoutWarn = () => {
    try {
      this.setState({ hidden: false });
      confirm({
        title: RemoveConst.logMessage,
        icon: <QuestionCircleOutlined />,
        content: RemoveConst.logMessage,
        okText: RemoveConst.yes,
        okType: "danger",
        cancelText: RemoveConst.no,
        getContainer: () => document.getElementById("App"),
        onOk: () => {
          this.props.logout();
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  toggleMenu = (val) => this.setState({ hidden: !val });
  render() {
    const { hidden } = this.state;

    return (
      <StyleComponent id="menu-form">
        <Menu
          onClick={this.handleClick}
          mode="horizontal"
          triggerSubMenuAction="click"
        >
          {localStorage.auth && (
            <Menu.Item key="menu" className="first">
              <UnorderedListOutlined />
            </Menu.Item>
          )}
          <Menu.Item key="title" className="title">
            <NavLink to="/">{PageConst.title}</NavLink>
          </Menu.Item>
          {localStorage.auth && JSON.parse(localStorage.auth)?.role === 1 && (
            <Menu.Item key="app" className="contact">
              <NavLink to="/setting">
                <SettingOutlined className="setting" />
              </NavLink>
            </Menu.Item>
          )}
          {localStorage?.auth && window.innerWidth > 450 && (
            <Menu.SubMenu
              key="SubMenu"
              title={<b>{JSON.parse(localStorage.auth).UserName}</b>}
              className={`left ${
                JSON.parse(localStorage.auth)?.role !== 1 && "marLeft"
              }`}
            >
              {MobileMenu.map((a) => (
                <Menu.Item
                  key={a.name}
                  icon={a.icon}
                  style={{
                    height: "32px",
                    lineHeight: "32px",
                    color: "#141b5a",
                  }}
                >
                  {a.name}
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          )}
        </Menu>
        {hidden && (
          <Drawer
            width={300}
            key={"left"}
            visible={true}
            placement={"left"}
            onClose={() => this.toggleMenu(hidden)}
            title={JSON.parse(localStorage.auth).user}
            getContainer={() => document.getElementById("menu-form")}
          >
            <MenuUI logoutWarn={this.logoutWarn} />
          </Drawer>
        )}
      </StyleComponent>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  logout: (payload) => dispatch(logout(payload)),
});

export default withRouter(connect(null, mapDispatchToProps)(Header));
