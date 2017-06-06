import React, { Component } from 'react';
import Button from "./components/Button"
import head from "./images/head.gif"

class App extends Component {
  state = {
    count:1
  }
  increment=()=>{
    this.setState({count: this.state.count + 1})
  }
  componentDidMount(){
    console.log("componentDidMount = Dom 已经渲染完毕,可以在此发起ajax请求,操作dom -----父组件")
    console.log(process.env.NODE_ENV)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={head} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.increment}>+add</button>
        <Button count={this.state.count}/>
        <a href="#/login">login</a> ------------<a href="#/button">Button</a>
        <div className="container-fluid">{this.props.children}</div>
      </div>
    );
  }
}

export default App;
