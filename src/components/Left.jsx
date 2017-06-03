import React, {Component} from "react"
import {Layout, Menu, Icon} from 'antd';
const {Sider} = Layout;
const SubMenu = Menu.SubMenu;

export default class Left extends Component {
    state={
        collapsed:null
    }
    componentWillReceiveProps(newProps){
        this.setState({
            collapsed:newProps.collapsed
        })
    }
    collapse(collapsed){
        console.log(collapsed)
        this.setState({
            collapsed
        })
    }
    render() {
        return (
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                width="300"
                trigger={null}
                collapsible="true"
                collapsed={this.state.collapsed}
                onCollapse={this.collapse.bind(this)}
                style={{overflow:"auto"}}
            >
                <div className="logo"/>
                <Menu theme="dark" mode="inline"  defaultSelectedKeys={['3']}>
                    <SubMenu
                        key="sub1"
                        title={<span><Icon type="user"/><span className="nav-text">User</span></span>}
                    >
                        <Menu.Item key="1">Tom</Menu.Item>
                        <Menu.Item key="2">Bill</Menu.Item>
                        <Menu.Item key="3">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={<span><Icon type="team"/><span className="nav-text">Team</span></span>}
                    >
                        <Menu.Item key="4">Team 1</Menu.Item>
                        <Menu.Item key="5">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="6">
                      <span>
                        <Icon type="file"/>
                        <span className="nav-text">File</span>
                      </span>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}