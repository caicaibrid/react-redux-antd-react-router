import React, {Component} from "react"
/*
 * 获取action的状态
 * */
import { collapsed_status } from  '../../../actions/left_slide'
import { connect } from 'react-redux'
import {Icon} from 'antd';


class Ico extends Component {
    componentWillMount(){
        const {dispatch} = this.props
        dispatch(collapsed_status())
    }
    /*点击菜单栏旁边Icon*/
    toggle(){
        console.log(this.props,"000000000000")
        const {dispatch} = this.props
        dispatch(collapsed_status(this.props.collapsed))
    }
    render() {
        return (
            <Icon
                className="trigger"
                type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle.bind(this)}
            />
        )
    }
}


function mapStateToProps(reducerAll){
    let {collapsed} = reducerAll;
    return collapsed
}

export default connect(mapStateToProps)(Ico)