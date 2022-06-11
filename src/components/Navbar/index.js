import React from "react";
import { Layout, Button, Space } from "antd";
import "./index.css";
import logoImage from "../../assets/logo.png";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header>
      <div className="logo">
        <img src={logoImage} alt="logo" className="logo" />
      </div>
      <Space>
        <Button type="primary" className="bg-black">
          Start Free Trial
        </Button>
        <Button type="primary" className="bg-orange">
          Login
        </Button>
      </Space>
    </Header>
  );
};

export default Navbar;
