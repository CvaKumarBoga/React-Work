import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";
import LoginForm from "./component/LoginForm";
import React from "react";
import "./setupTests";
import InputForm from './component/InputForm';
import Button from './component/Button';

configure({ adapter: new Adapter() });
describe("We are testing a Input Form", () => {

    const login = jest.fn();
    const details = "";
  
    it("Test to find component mount Input Form", () => {
      const wrap = shallow(<InputForm login={login} />);
    });
  
    it("Test to find inputs", () => {
      const wrap = shallow(<InputForm login={login} />);
      expect(wrap.find('input').length).toBe(2)
    });
  
    it("Test to find h1 tag", () => {
      const wrap = shallow(<InputForm login={login} />);
      expect(wrap.find('h1').at(0).text()).toBe('Login')
    });
  
    it("Test to find Button", () => {
      const wrap = shallow(<Button name="Login" function={login(details)}/>);
      wrap.find('button').at(0).simulate('click')
    });
  })