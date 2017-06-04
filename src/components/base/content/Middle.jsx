import React, {Component} from "react"
import {Layout} from 'antd';
const { Content } = Layout;

export default class Middle extends Component {
    render() {
        return (
            <Content style={{ margin: '24px 16px 0' }}>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    {this.props.content}
                </div>
            </Content>
        );
    }
}

