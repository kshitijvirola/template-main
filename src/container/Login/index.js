import React, { Component } from "react";
import { connect } from "react-redux";
import { Image } from "antd";
import { Formik, Form } from "formik";
import { NavLink, withRouter } from "react-router-dom";
import * as Yup from "yup";

import { LoginStyle } from "./style";
import { LoginConst } from "./constant";
import {
  Label,
  Checkbox,
  Input,
  Button,
  FormGroup,
  FormItem,
} from "components/Form";
import { logo, coffee } from "components/Images";
import { FormValidation } from "App/AppConstant";

const loginValidationSchema = Yup.object().shape({
  user: Yup.string().trim().required(" "),
  password: Yup.string()
    .trim()
    .min(3, FormValidation.passwordMin)
    .max(25, FormValidation.passwordMax)
    .required(" "),
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      disable: false,
      init: {
        user: "",
        password: "",
      },
    };
  }
  chnageCheck = () => this.setState({ checked: !this.state.checked });
  render() {
    const { checked, disable, init } = this.state;
    return (
      <LoginStyle>
        <Image src={coffee} alt="coffee" preview={false} className="coffee" />
        <div className="box">
          <Image src={logo} alt="logo" preview={false} />
          <h1 className="head">Login</h1>
          <Formik
            initialValues={init}
            validationSchema={loginValidationSchema}
            onSubmit={this.handleSubmit}
            enableReinitialize
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <Form onSubmit={handleSubmit} noValidate>
                <FormItem>
                  <div className="inputdiv login">
                    <FormGroup>
                      <Label
                        title={LoginConst.user}
                        className={errors.user && touched.user ? "empty" : ""}
                      />
                      <Input
                        className={errors.user && touched.user ? "empty" : ""}
                        onBlur={handleBlur}
                        name="user"
                        value={values.user}
                        handleChange={handleChange}
                        max={255}
                        tabIndex="1"
                      />
                    </FormGroup>
                    {errors.user && touched.user ? (
                      <div className="form-error">{errors.user}</div>
                    ) : null}
                  </div>
                  <div className="inputdiv">
                    <FormGroup>
                      <Label
                        title={LoginConst.password}
                        className={
                          errors.password && touched.password ? "empty" : ""
                        }
                      />
                      <Input
                        className={
                          errors.password && touched.password ? "empty" : ""
                        }
                        password={true}
                        max={25}
                        onBlur={handleBlur}
                        type="password"
                        name="password"
                        value={values.password}
                        handleChange={handleChange}
                        tabIndex="2"
                      />
                    </FormGroup>
                    {errors.password && touched.password ? (
                      <div className="form-error">{errors.password}</div>
                      ) : null}
                      <div className="forgot">{LoginConst.fp}</div>
                  </div>
                  <NavLink to="/forget-pasword" className="forgetlbl">
                    {LoginConst.forgerPwd}
                  </NavLink>
                  <div className="rememberDiv">
                    <Checkbox
                      checked={checked}
                      text={LoginConst.remember}
                      onChange={this.chnageCheck}
                    />
                  </div>
                  <div className="btnDiv">
                    <Button htmlType="submit" disabled={disable}>
                      {LoginConst.login}
                    </Button>
                  </div>
                </FormItem>
              </Form>
            )}
          </Formik>
        </div>
      </LoginStyle>
    );
  }
}

export default withRouter(Login);
