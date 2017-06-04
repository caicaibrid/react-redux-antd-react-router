import React, {Component} from "react"
import screenfull from "screenfull"
/*
* 获取action的状态
* */
import { getLoginState } from  '../../../actions/login'

import { connect } from 'react-redux'
import { Menu, Icon, Layout, Modal  } from 'antd';
const { Header} = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import Ico from "./Ico"
import "./top.css"

class Top extends Component {
    componentWillMount(){
        const {dispatch} = this.props
        dispatch(getLoginState())
        setTimeout(function () {
            if(!this.props.username){
                Modal.warning({
                    title: 'Tip',
                    content: '系统登录超时，请重新登录！',
                    onOk(){
                        location.hash="/login"
                    }
                });
            }
        }.bind(this))
    }
    /*全屏展示*/
    fullScreen(){
        if (screenfull.enabled) {
            screenfull.request();
        }
    }
    render() {
        return (
            <Header style={{ background: '#fff', padding: 0 }} >
                <Ico />
                 <Menu className="login-status" mode="horizontal" style={{ float: 'right' , marginRight:"20px"}} >
                     <Menu.Item key="full" onClick={this.fullScreen.bind(this)} >
                        <Icon type="arrows-alt" onClick={this.fullScreen.bind(this)} />
                     </Menu.Item>
                     <SubMenu title={<span className="avatar"><img src={"http://img002.21cnimg.com/photos/album/20170601/m600/60A6649E763329FE3959A021E15C8DF9.jpeg"} alt="头像" /><i className="on bottom b-white" /></span>}>
                         <MenuItemGroup title="用户中心">
                             <Menu.Item key="setting:1">你好 - {this.props.username}</Menu.Item>
                             <Menu.Item key="setting:2">个人信息</Menu.Item>
                         </MenuItemGroup>
                         <MenuItemGroup title="设置中心">
                             <Menu.Item key="setting:3">个人设置</Menu.Item>
                             <Menu.Item key="setting:4">系统设置</Menu.Item>
                         </MenuItemGroup>
                     </SubMenu>
                 </Menu>
            </Header>
        )
    }
}


function mapStateToProps(reducerAll){
    let {userInfo} = reducerAll;
    return userInfo;
}

export default connect(mapStateToProps)(Top)