import React from 'react';
import { Layout, Menu, Breadcrumb, Form, Switch } from 'antd';
import './App.less'

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['host']} style={{fontSize: "1rem"}}>
        <Menu.Item key="create">
          Create Kahoot
        </Menu.Item>
        <Menu.Item key="host">
          Host Kahoot
        </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 5rem' }}>
      <Breadcrumb style={{ margin: '1.5rem 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">Content 
      <Form.Item label="开关">
        <Switch defaultChecked />
      </Form.Item>
      </div>
    </Content>
  </Layout>
  );
}

export default App;
