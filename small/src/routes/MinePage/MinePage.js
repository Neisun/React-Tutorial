import React,{Component} from 'react';
import { connect } from 'dva';
import {NavBar,Icon} from 'antd-mobile'
import styles from './MinePage.less';
// import {route} from 'dva/router'
class MinePage extends React.Component{
    linkTo(path){
        // 路由跳转的方法
        this.props.history.push(path)
    }
    back = () => {
        this.props.history.goBack();
    }
    componentDidMount(){
        // console.log(this.props.history)
    }
    render(){
        return (
            <div className={styles.minePage} >
                <NavBar
                    mode="light"
                    icon={< Icon type = "left" />}
                    leftContent="返回"
                    onLeftClick={this.back}
                    rightContent={[< Icon key = "1" type = "ellipsis" />]}>我的
                </NavBar>
                <div className={styles.main}>
                    <div className={styles.login} onClick={() => this.linkTo('/login')} >
                        <div className={styles.left} >
                            <img className={styles.user} src={require('../../assets/me_photo.png')} />
                            <span>请登录</span>
                        </div>
                        <div className={styles.right} >
                            <Icon type="right" size="sm" color="#fff" />
                        </div>
                    </div>
                    <div className={styles.cell} >
                        <div className={styles.left} >
                            <img className={styles.icon} src={require('../../assets/me_icon_serviceorder.png')} /> 
                            <span>服务订单</span>
                        </div>
                        <div className={styles.right} >
                            <Icon type="right" size="sm" color="#ccc" />
                        </div>
                    </div>
                    <div className={styles.cell} >
                        <div className={styles.left} >
                            <img className={styles.icon} src={require('../../assets/me_icon_shopOrder.png')} /> 
                            <span>商城订单</span>
                        </div>
                        <div className={styles.right} >
                            <Icon type="right" size="sm" color="#ccc" />
                        </div>
                    </div>
                    <div className={styles.cell} onClick={() => this.linkTo('/serviceAddress')} >
                        <div className={styles.left} >
                            <img className={styles.icon} src={require('../../assets/me_icon_serviceoAddress.png')} /> 
                            <span>服务地址</span>
                        </div>
                        <div className={styles.right} >
                            <Icon type="right" size="sm" color="#ccc" />
                        </div>
                    </div>
                    <div className={styles.cell} >
                        <div className={styles.left} >
                            <img className={styles.icon} src={require('../../assets/me_icon_myProduct.png')} /> 
                            <span>我的产品</span>
                        </div>
                        <div className={styles.right} >
                            <Icon type="right" size="sm" color="#ccc" />
                        </div>
                    </div>
                    <div className={styles.cell} >
                        <div className={styles.left} >
                            <img className={styles.icon} src={require('../../assets/me_icon_complaint.png')} /> 
                            <span>我要投诉</span>
                        </div>
                        <div className={styles.right} >
                            <Icon type="right" size="sm" color="#ccc" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

MinePage.propTypes = {
};

export default connect()(MinePage);
