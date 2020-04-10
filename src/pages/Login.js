import React, { Component } from 'react'
import { Flex, List, InputItem, WhiteSpace, WingBlank ,Button} from 'antd-mobile';
import {Link} from 'react-router-dom';
import {loginApi} from '../apis/apis';

export default class Login extends Component {
    state = {
        phone:'',
        pwd:''
    }
    loginHandler = ()=>{
        //收集手机号 和密码，然后发送接口登录
        // const phone = this.refs.phone.state.value;
        // const pwd = this.refs.pwd.state.value;
        const {phone,pwd} = this.state;
        const params  = {
            password:pwd,
            phoneNum:phone,
        }
        loginApi(params)
        .then((res)=>{
            //1.用localStorage保存token
            //2. 跳转到首页
            const {token,data} = res.data;
            if(token){
                localStorage.setItem('token',token);
                localStorage.setItem('phone',data.phone);
                this.props.history.push('/');
            }else{
                //....
            }

            console.log('res',res)
        })
        .catch((err)=>{
            console.log('err',err)
        })
        console.log(phone,pwd)
      
    }
    phoneChange = (val)=>{
        console.log('val',val)
        this.setState({phone:val});
    }
    pwdChange = (val)=>{
        this.setState({pwd:val});
    }
    render() {
        const {phone,pwd} = this.state;
        return (
            <div style={{ backgroundColor: '#fff', height: '100%' }}>
                <Flex justify="center" style={{ paddingTop: 50 }}>
                    <img alt="" style={{ width: 100, height: 100 }} src={require('../assets/imgs/logo.png')} />
                </Flex>
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <WingBlank size="lg">
                    <List>
                        <InputItem
                        ref="phone"
                        value={phone}
                        onChange={this.phoneChange}
                            placeholder="请输入手机号"
                        >
                            {/* <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} /> */}
                            <div><i className="iconfont icon-user" style={{ fontSize: 25, color: '#29C775' }}></i></div>
                        </InputItem>

                        <InputItem
                            ref="pwd"
                            value={pwd}
                            onChange={this.pwdChange}
                            placeholder="请输入密码"
                        >
                            <div><i className="iconfont icon-i-pwd" style={{ fontSize: 25, color: '#29C775' }}></i></div>
                        </InputItem>
                    </List>
                    <WhiteSpace size="xl" />
                    <Button style={{backgroundColor:'#29C775',color:'#fff'}} onClick={this.loginHandler}>登录</Button>
                    <WhiteSpace />
                    <Flex justify="between">
                        <Link to="/reg" style={{color:'#29C775'}}>手机快速注册</Link>
                        <Link to="/forgot" style={{color:'#29C775'}}>忘记密码</Link>
                    </Flex>
                </WingBlank>

            </div>
        )
    }
}
