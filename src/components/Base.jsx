import React, {Component} from "react"
import {Layout,Icon } from 'antd';
const {Header, Content, Footer} = Layout;
import { collapsed_status } from  '../actions/left_slide'
import { connect } from 'react-redux'

import Left from "./Left"

class Base extends Component {
    state={
        collapsed:false
    }
    componentWillMount(){
        const {dispatch} = this.props
        dispatch(collapsed_status())
    }
    /*点击菜单栏旁边Icon*/
    toggle(){
        const {dispatch} = this.props
        dispatch(collapsed_status(this.props.collapsed))
    }
    render() {
        return (
            <Layout id="components-layout-demo-side" className="ant-layout-has-sider">
                <Left collapsed={this.props.collapsed}/>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} >
                        <Icon
                            className="trigger"
                            type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle.bind(this)}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        xxx后台管理系统 by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

function mapStateToProps(reducerAll){
    let {leftReducer} = reducerAll
    return leftReducer
}

export default connect(mapStateToProps)(Base)