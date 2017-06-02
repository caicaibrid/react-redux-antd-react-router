import React,{Component} from "react"

class Button extends Component{
	static defaultProps  = {
	    id:"test",
	    count:"默认的Button的值"
	}
	//Updating
	componentWillReceiveProps = (newProps) => {
	    console.log("componentWillReceiveProps = 在组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用","当前的props:"+JSON.stringify(this.props),"最新的props:"+JSON.stringify(newProps))
	}
	shouldComponentUpdate = (newProps, newState)=>{
		console.log("shouldComponentUpdate = 如果shouldComponentUpdate()返回false，那么componentWillUpdate()，render()和componentDidUpdate()将不会被调用","最新的props:"+JSON.stringify(newProps), newState)
		return true
	}
	componentWillUpdate = (newProps,nextState)=>{
		console.log("componentWillUpdate = ","最新的props:"+JSON.stringify(newProps),nextState)
	}
	componentDidUpdate = (prevProps,prevState)=>{
		console.log("componentDidUpdate = ","当前的props:"+JSON.stringify(prevProps),prevState)
	}
	// Unmounting
	componentWillUnmount = ()=>{
		console.log("componentWillUnmount = 此函数在组件被卸载和销毁之前被立即调用")
	}
	//Mounting
	componentWillMount = ()=>{
		console.log("componentWillMount = 此方法在mounting之前被立即调用，它在render()之前调用，因此在此方法中setState不会触发重新渲染。服务器渲染中调用的唯一的生命周期钩子")
	}
	componentDidMount = ()=>{
		console.log("componentDidMount = Dom 已经渲染完毕,可以在此发起ajax请求,操作dom -----子组件")
	}
	render (){
		return (<div id={this.props.id} data-count={this.props.count} >{this.props.count}</div>)
	}
}


export default Button