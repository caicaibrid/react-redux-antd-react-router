import React, {Component} from "react"
import {Layout, Menu, Icon} from 'antd';
const {Sider} = Layout;
const SubMenu = Menu.SubMenu;
import { collapsed_status } from  '../actions/left_slide'
import { connect } from 'react-redux'

class Left extends Component {
    state={
        collapsed:null
    }
    componentWillReceiveProps(newProps){
        this.setState({
            collapsed:newProps.collapsed
        })
    }
    collapse(collapsed){
        this.setState({
            collapsed
        })
        /*修改切换左边菜单栏Icon的bug*/
        const {dispatch} = this.props;
        dispatch(collapsed_status(!collapsed))
    }
    render() {
        return (
            <Sider
                breakpoint="sm"
                collapsedWidth="0"
                width="240"
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
                        <Menu.Item key="1"><a href="#/welcome">welcome</a></Menu.Item>
                        <Menu.Item key="2"><a href="#/app">app</a></Menu.Item>
                        <Menu.Item key="3"><a href="#/Button">button</a></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={<span><Icon type="team"/><span className="nav-text">Team</span></span>}
                    >
                        <Menu.Item key="4"><a href="#/login">login</a></Menu.Item>
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

function mapStateToProps(reducerAll){
    let {leftReducer} = reducerAll
    return leftReducer
}

export default connect(mapStateToProps)(Left)