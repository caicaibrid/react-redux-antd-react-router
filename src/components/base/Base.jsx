import React, {Component} from "react"
import {connect} from "react-redux"

import Left from "./left/Left"
import Bottom from "./footer/Bottom"
import Middle from "./content/Middle";
import Top from "./header/Top";

import {Layout} from 'antd';

class Base extends Component {
    render() {
        return (
            <Layout id="components-layout-demo-side" className="ant-layout-has-sider">
                <Left collapsed={this.props.collapsed}/>
                <Layout>
                    <Top username={this.props.username}/>
                    <Middle content={this.props.children}/>
                    <Bottom />
                </Layout>
            </Layout>
        );
    }
}
function mapStateToProps(reducerAll){
    let {collapsed,userInfo} = reducerAll;
    return Object.assign({},collapsed,userInfo)
}

export default connect(mapStateToProps)(Base)