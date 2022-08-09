import React, { Component } from "react";
import { Menu } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { MenuOutlined } from "@ant-design/icons";

import { MenuStyle } from "./style";
import { logout } from "redux/login/actions";
import { MenuItem, TlItem, EmpItem, MobileMenu, SuperItem } from "./constant";
const { SubMenu } = Menu;
class MenuComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { path: "", active: "" };
  }
  async componentDidMount() {
    try {
      const { location } = this.props;
      let path = location.pathname.slice(1).toLowerCase();
      let url = path.replace("-", " ");
      // url = url === "roles right" ? url.replace(" ", " & ") : url;
      if (url !== "") this.setDefault(url);
      else this.setState({ path: "" });
    } catch (error) {
      console.log(error);
    }
  }
  setDefault = (url) => {
    try {
      let words = url.split(" ");
      let capWords = [];
      words.forEach((a) => {
        capWords.push(a[0].toUpperCase() + a.slice(1, a.length));
      });
      this.setState({ path: capWords.join(" ") });
    } catch (error) {
      console.log(error);
    }
  };
  setOpenKeys = (e) => {
    try {
      const { history } = this.props;
      if (e.key === "Log-out") this.props.logoutWarn();
      else if (e.key === "Change Password")
        this.props.history.push("/change-password");
      else {
        let url = e.key.toLowerCase();
        url = url.replace(/ /g, "-");
        url = url.replace(/\//g, "-");
        url = url.replace(/& /g, "");
        history.push("/" + url);
      }
    } catch (error) {
      console.log(error);
    }
  };
  menuUI = (path) => {
    let auth = localStorage?.auth;
    let it = JSON.parse(auth)?.role === 5;
    let role = JSON.parse(auth)?.role;
    let men = auth
      ? it
        ? SuperItem
        : role === 1 || role === 2 || role === 3
        ? MenuItem
        : EmpItem
      : [];
    return men.map((a, i) => {
      if (!it)
        return (
          <Menu.Item
            key={a.name}
            icon={a.icon}
            className={
              path.toLowerCase().includes(a.name.toLowerCase()) ||
              (path === "" && i === 0)
                ? "active"
                : ""
            }
          >
            {a.name}
          </Menu.Item>
        );
      else
        return (
          <SubMenu key={a.name} title={a.name} icon={a.icon}>
            {a.suboption.map((x, k) => (
              <Menu.Item
                key={x.name}
                icon={x.icon}
                className={
                  path.toLowerCase().includes(x.name.toLowerCase()) ||
                  (path === "" && i === 0 && k === 0)
                    ? "ant-menu-item-selected"
                    : ""
                }
              >
                {x.name}
              </Menu.Item>
            ))}
          </SubMenu>
        );
    });
  };
  render() {
    const { path } = this.state;
    return (
      <MenuStyle>
        <div className="menuTop"></div>
        <Menu onClick={this.setOpenKeys} mode="inline">
          {this.menuUI(path)}
          {window.innerWidth < 768 &&
            MobileMenu.map((a) => (
              <Menu.Item key={a.name} icon={a.icon}>
                {a.name}
              </Menu.Item>
            ))}
        </Menu>
      </MenuStyle>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  logout: (payload) => dispatch(logout(payload)),
});
export default withRouter(connect(null, mapDispatchToProps)(MenuComponent));
