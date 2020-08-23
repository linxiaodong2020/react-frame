import * as React from "react";
import { Layout } from "antd";
import "./index.scss";
import BreadCrumb from "./bread-crumb";
const { Header, Sider, Content } = Layout;
export interface IFrameProps {}

export default class Frame extends React.Component<IFrameProps> {
  public render() {
    return (
      <Layout className="frame-wrapper">
        <Sider className="sider">Sider</Sider>
        <Layout className="main">
          <Header className="header">Header</Header>
          <Content className="content">
            <BreadCrumb />
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
