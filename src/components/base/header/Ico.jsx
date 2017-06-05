import React, {Component} from "react"
/*
 * 获取action的状态
 * */
/*import { collapsed_status } from  '../../../actions/left_slide'
import { connect } from 'react-redux'*/
import {Icon} from 'antd';


export default class Ico extends Component {
    render() {
        const {collapsed,onClick} = this.props
        console.log(this.props,"Ico.jsx")
        return (
            <Icon
                className="trigger"
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={onClick}
            />
        )
    }
}
