import React, { Component } from "react";
import { Row } from "antd";

export default class RowUI extends Component {
  render() {
    const { children, ...props } = this.props;
    return <Row {...props}>{children}</Row>;
  }
}
