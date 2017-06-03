import React, {Component} from "react"
import {Layout,Icon } from 'antd';
const {Header, Content, Footer} = Layout;


import Left from "./Left"

export default class Base extends Component {
    state={
        collapsed:null
    }
    toggle(){
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <Layout id="components-layout-demo-side" className="ant-layout-has-sider">
                <Left collapsed={this.state.collapsed}/>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} >
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
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
