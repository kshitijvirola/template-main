import React, { Component } from "react";
import { Col } from "antd";

export default class ColUI extends Component {
  render() {
    const { children, ...props } = this.props;
    return <Col {...props}>{children}</Col>;
  }
}
