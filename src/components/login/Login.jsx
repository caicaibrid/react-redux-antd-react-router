import React,{Component} from "react"
import { connect } from 'react-redux'
import { login_in } from  '../../actions/login'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
import "./login.css"




class LoginForm extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const {dispatch} = this.props
				dispatch(login_in(values))
                location.hash="/"
            }
        });
    }
	render (){
        const { getFieldDecorator } = this.props.form;
        return (
			<div id="login">
				<Form id="components-form-demo-normal-login" onSubmit={this.handleSubmit} className="login-form animated slideInDown">
					<FormItem>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
							<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                        )}
					</FormItem>
					<FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
							<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                        )}
					</FormItem>
					<FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
							<Checkbox>Remember me</Checkbox>
                        )}
						<a className="login-form-forgot" href="">Forgot password</a>
						<Button type="primary" htmlType="submit" className="login-form-button">
							Log in
						</Button>
						Or <a href="">register now!</a>
					</FormItem>
				</Form>
			</div>
        );
	}
}
const Login = Form.create()(LoginForm);

function mapStateToProps(reducerAll){
    let {userInfo} = reducerAll;
    return userInfo
}


export default connect(mapStateToProps)(Login)
