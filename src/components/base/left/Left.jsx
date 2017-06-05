import React, {Component} from "react"
import {Layout, Menu, Icon} from 'antd';
const {Sider} = Layout;
const SubMenu = Menu.SubMenu;
import { collapsed_status,left_slide_checked } from  '../../../actions/left_slide'
import { connect } from 'react-redux'
import "./left.css"

class Left extends Component {
    state={
        collapsed:null
    }
    handleClick = (e) => {
        const {dispatch} = this.props;
        dispatch(left_slide_checked({
            current: e.key
        }))
    }
    onOpenChange = (openKeys) => {
        const props = this.props;
        const latestOpenKey = openKeys.find(key => !(props.openKeys.indexOf(key) > -1));
        const latestCloseKey = props.openKeys.find(key => !(openKeys.indexOf(key) > -1));
        let nextOpenKeys = [];
        if (latestOpenKey) {
            nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }
        if (latestCloseKey) {
            nextOpenKeys = this.getAncestorKeys(latestCloseKey);
        }
        const {dispatch} = this.props;
        dispatch(left_slide_checked({
            openKeys: nextOpenKeys
        }))
    }
    getAncestorKeys = (key) => {
        const map = {
            sub3: ['sub2'],
        };
        return map[key] || [];
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
        dispatch(collapsed_status())
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
                <Menu theme="dark"
                      mode="inline"
                      onOpenChange={this.onOpenChange}
                      onClick={this.handleClick}
                      openKeys={this.props.openKeys}
                      selectedKeys={[this.props.current]}
                >
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
                        title={<span><Icon type="hourglass"/><span className="nav-text">Team</span></span>}
                    >
                        <Menu.Item key="4">login</Menu.Item>
                        <Menu.Item key="5">Team 2</Menu.Item>
                            <SubMenu
                                key="sub3"
                                title={<span><Icon type="inbox"/><span className="nav-text">Team</span></span>}
                            >
                                <Menu.Item key="6">login</Menu.Item>
                                <Menu.Item key="7">Team 2</Menu.Item>
                            </SubMenu>
                    </SubMenu>
                    <SubMenu
                        key="sub4"
                        title={<span><Icon type="smile-o"/><span className="nav-text">Team</span></span>}
                    >
                        <Menu.Item key="8">login</Menu.Item>
                        <Menu.Item key="9">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="6">
                      <span>
                        <Icon type="link"/>
                        <span className="nav-text">File</span>
                      </span>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

function mapStateToProps(reducerAll){
     let {collapsed} = reducerAll;
     return collapsed
}

export default connect(mapStateToProps)(Left)
