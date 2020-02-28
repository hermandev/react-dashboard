import React, { useState } from 'react'
import LogoCode from '../../../assets/image/logo.png';
import { Route, Switch, Link } from 'react-router-dom'
import './style.css'
import { Layout, Menu, Card } from 'antd';
import pageRouter from '../../../config/router/index'
const { Header, Content, Footer, Sider } = Layout;


const Dashboard = () => {
    return (
        <Layout>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }}
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline">
                    {pageRouter.map(menu => (
                        <Menu.Item key={menu.id}>
                            <Link to={menu.link}>
                                {menu.icon}
                                <span className="nav-text">{menu.name}</span>
                            </Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <Card>
                        <Switch>
                            <Route path="/" component={() => <h1>Dashboard</h1>} exact />
                            <Route path="/master" component={() => <h1>Master</h1>}  />
                            <Route path="/usb" component={() => <h1>Usb</h1>}  />
                            <Route path="/warning" component={() => <h1>warning</h1>}  />
                        </Switch>
                    </Card>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
}


export default Dashboard