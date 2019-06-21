import React from "react";
// cnpm i antd
import { Layout, Row, Col, Avatar, Input, Menu, Dropdown, Icon, Badge } from 'antd'
import MenuItem from "antd/lib/menu/MenuItem";
import SubMenu from "antd/lib/menu/SubMenu";
import { Link } from 'react-router-dom'

function DropMenu() {
    return (
        <Menu>
            <MenuItem>
                <a href="#">1111</a>
            </MenuItem>
            <MenuItem>
                <a href="#">2222</a>
            </MenuItem>
        </Menu>
    )
}

const { Header, Footer, Sider, Content } = Layout
class PageLayout extends React.Component {
    render() {
        return (
            <Layout>
                <Header style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>
                    <Row>
                        <Col span={10}>react + antd 实践</Col>
                        <Col span={8}>
                            <Input placeholder="请输入你想要的..."></Input>
                        </Col>
                        <Col span={6}>
                            <Avatar style={{ backgroundColor: 'orange', marginRight: 20 }} icon="user"></Avatar>
                            <Dropdown overlay={DropMenu}>
                                <span>Hi
                                    <Icon type="down" />
                                </span>
                            </Dropdown>
                        </Col>
                    </Row>
                </Header>
                <Layout>
                    <Sider>
                        {/* px为单位直接数字型 其他单位写明 为字符串 */}
                        <Menu style={{width:156,height:'90vh',overflow:'auto',minWidth:256}}
                              defaultOpenKeys={['sub1']} mode="inline"
                        >
                            <Menu.SubMenu key="sub1" title={
                                <span>
                                    <Icon type="smile-o" />部分ui组件实践
                                </span>
                            }>
                                <Menu.Item key="sub1-1">
                                    <Link to={"table"}>表格</Link>
                                </Menu.Item>
                                <Menu.Item key="sub1-2">
                                    <Link to={"label"}>标签</Link>
                                </Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                    </Sider>
                    <Content>
                        {/* 外面传进什么就接收什么 */}
                        {this.props.children}
                    </Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        )
    }
}
export default PageLayout