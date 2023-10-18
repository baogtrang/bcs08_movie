// tái sử dụng UserPage
// layout của Ant Design
import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet } from "react-router-dom";
import BreadCrumbNav from "../components/BreadCrumbNav";

const { Header, Content, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);
const HomeLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: 200,
        }}
      >
        <span className="text-white font-medium text-2xl">
          Cyber Flix Admin
        </span>
        <button className="text-black bg-white rounded px-5 h-10 leading-10 shadow shadow-white">
          Log in
        </button>
      </Header>

      <Layout>
        <Sider
          theme="dark"
          width={200}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        
        <Layout
          className="site-layout"
          style={{
            marginLeft: 200,
          }}
        >
        
          <BreadCrumbNav />
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
      {/* thay Content bằng Outlet để nhét nội dung của MoviePage và UserPage vào HomeLayout */}
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default HomeLayout;

