import React,{Component} from 'react';
import { connect } from 'dva';
import styles from './LoginPage.less';
import request from '../../utils/request'
import {NavBar,Icon,InputItem, Toast} from 'antd-mobile'

class LoginPage extends React.Component{
    state = {
        hasErrorUser: false,
        hasErrorPw:false,
        valueUser: '',
        valuePw: '',
    }
    back = () => {
        this.props.history.goBack();
    }
    onErrorClickUser = () => {
        if (this.state.hasErrorUser) {
            Toast.info('请输入合法的手机号');
        }
    }
    onChangeUser = (value) => {
        // 正则部分有待于优化，只检测了位数
        if (value.replace(/\s/g, '').length < 11) {
            this.setState({
                hasErrorUser: true,
            });
        } else {
            this.setState({
                hasErrorUser: false,
            });
        }
        this.setState({
            valueUser:value
        });
    }
    onErrorClickPw = () => {
        if (this.state.hasErrorPw) {
            Toast.info('密码最少6位');
        }
    }
    onChangePw = (value) => {
        // 正则部分有待于优化，只检测了位数
        if (value.length < 6) {
            this.setState({
                hasErrorPw: true,
            });
        } else {
            this.setState({
                hasErrorPw: false,
            });
        }
        this.setState({
            valuePw:value
        });
    }
    componentDidMount(){
        // 发送请求这么玩
        // request('https://www.dongqiudi.com/mobile/tab/1/archives?page=0')
        //     .then((res) => console.log(res))
    }
    render(){
        return (
            <div className={styles.loginPage} >
                <NavBar
                    mode="light"
                    icon={< Icon type = "left" />}
                    leftContent="返回"
                    onLeftClick={this.back}
                    rightContent={[< Icon key = "1" type = "ellipsis" />]}>登录
                </NavBar>
                <InputItem
                    type="phone"
                    placeholder="输入您的手机号"
                    clear={true}
                    error={this.state.hasErrorUser}
                    onErrorClick={this.onErrorClickUser}
                    onChange={this.onChangeUser}
                    value={this.state.valueUser}>用户名
                </InputItem>
                <InputItem
                    type="password"
                    placeholder="输入您的密码"
                    clear={true}
                    error={this.state.hasErrorPw}
                    onErrorClick={this.onErrorClickPw}
                    onChange={this.onChangePw}
                    value={this.state.valuePw}>密码
                </InputItem>
            </div>
        )
    }
}

LoginPage.propTypes = {
};

export default connect()(LoginPage);
