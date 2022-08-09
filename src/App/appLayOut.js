import React, { Component } from "react";

import { Menu, Header, Row, Col } from "components/Form";

class LayOut extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Header />
        <Row gutter={24} className="rowDiv">
          <Col xs={0} sm={0} md={6} lg={4} xl={4} className="manuDiv">
            <Menu />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={18}
            lg={20}
            xl={20}
            className="mainDiv anime"
          >
            {children}
          </Col>
        </Row>
      </>
    );
  }
}
export default LayOut;
