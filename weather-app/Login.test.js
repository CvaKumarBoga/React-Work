import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";
import LoginForm from "./component/LoginForm";
import React from "react";
import "./setupTests";
import InputForm from './component/InputForm';
import Button from './component/Button';

configure({ adapter: new Adapter() });

  describe("We are testing a Login Form", () => {

  it("Test to mount a component", () => {
    const wrap = shallow(<LoginForm />);
  });

  it("Test to check instance of component", () => {
    const wrap = shallow(<LoginForm />);
    wrap.instance();
  });

  it("Test to find number of inputs", () => {
    const wrap = shallow(<LoginForm />);
    expect(wrap.find('InputForm').length).toBe(1)
  });

  it("Test to find number of divs", () => {
    const wrap = shallow(<LoginForm />);
    expect(wrap.find('div').length).toBe(1)
  });


  // it("Test to find the flags", () => {
  //   const wrap = shallow(<LoginForm />);
  //   const ins = wrap.instance();
  //   // expect(ins.state.flag1).toBe(true)
  //   wrap.login({ userName: "ABC", password: "1234" });
  // });
  
})