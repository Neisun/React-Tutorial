/*
 * @Author: hunaisong
 * @Date: 2017-12-27 09:16:14
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-12-29 16:02:06
 */
import React, {Component} from 'react'
import {connect} from 'dva'
import styles from './HomePage.less'
import {NavBar, Icon, Flex, Popover} from 'antd-mobile'
// 引入Link组件，作为路由的跳转使用
import {Link} from 'dva/router'
const Item = Popover.Item;
class HomePage extends React.Component {
    state = {
        visibleAfterSale: false,
        visibleFind:false,
        visibleMine:false,
        selected: ''
    };
    // 售后
    afterSaleSelect = (opt) => {
        // this.setState是异步的，很操蛋，所以最好在回调函数中执行state变化之后的行为
        // 
        this.setState({
            visibleAfterSale: false, 
            selected: opt.props.value
        },() => this.linkToPage(this.state.selected));
    };
    afterSaleVisibelChange = (visible) => {
        this.setState({
            visibleAfterSale:visible
        })
    };
    // 发现
    findSelect = (opt) => {
        this.setState({
            visibleFind: false, 
            selected: opt.props.value
        },() => this.linkToPage(this.state.selected));
    };
    findVisibelChange = (visible) => {
        this.setState({
            visibleFind:visible
        })
    };
    // 我的
    mineSelect = (value) => {
        this.setState({
            selected:value
        },() => this.linkToPage(this.state.selected))
    };
    linkToPage = (selected) => {
    //   return   ;
        // console.log(this.state.selected)
        switch (selected) {
            case '维修':
                console.log('维修')
                break;
            case '安装':
                console.log('安装')
                break;
            case '验真伪':
                console.log('验真伪')
                break;
            case '智能商城':
                console.log('智能商城')
                break;
            case '尚品之邀':
                console.log('尚品之邀')
                break;
            case '我的':
                console.log('我的')
                break;
            default:
                console.log('不跳转')
                break;
        }

    };
    render() {
        return (
            <div className={styles.homePage}>
                <NavBar
                    mode="light"
                    icon={< Icon type = "left" />}
                    leftContent="返回"
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[< Icon key = "1" type = "ellipsis" />]}>智能家电</NavBar>
                <ul className={styles.navBar}>
                    <li>
                        <Popover
                            overlayClassName="afterSale"
                            overlayStyle={{ color: 'currentColor',width:'3rem',fontSize:'0.38rem'}}
                            visible={this.state.visibleAfterSale}
                            overlay={[
                                (<Item 
                                    key="1" 
                                    style={{display:'flex',alignItems:'center',justifyContent:'center'}} 
                                    value="维修" >
                                    <Link to="/maintain" >维修</Link>
                                </Item>),
                                (<Item 
                                    key="2" 
                                    style={{display:'flex',alignItems:'center',justifyContent:'center'}} 
                                    value="安装">
                                    <Link to="/install" >安装</Link>
                                </Item>),
                                (<Item 
                                    key="3" 
                                    style={{display:'flex',alignItems:'center',justifyContent:'center'}} 
                                    value="验真伪">
                                    <Link to="/check" >验证为</Link>
                                </Item>),
                            ]}
                            align={{
                            overflow: { adjustY: 0, adjustX: 0 },
                            offset: [0, -10],
                            }}
                            placement='top'
                            onVisibleChange={this.afterSaleVisibelChange}
                            onSelect={this.afterSaleSelect}>
                            <div 
                                style={{
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent:'center'
                                }}>
                                售后
                            </div>
                        </Popover>
                    </li>
                    <li>
                        <Popover
                                overlayClassName="install"
                                overlayStyle={{ color: 'currentColor',width:'3rem',fontSize:'0.38rem'}}
                                visible={this.state.visibleFind}
                                overlay={[
                                    (<Item 
                                        key="4" 
                                        style={{display:'flex',alignItems:'center',justifyContent:'center'}} value="智能商城" >智能商城
                                    </Item>),
                                    (<Item 
                                        key="5" 
                                        style={{display:'flex',alignItems:'center',justifyContent:'center'}} value="尚品之邀">尚品之邀
                                    </Item>),
                                ]}
                                align={{
                                overflow: { adjustY: 0, adjustX: 0 },
                                offset: [0, -10],
                                }}
                                placement='top'
                                onVisibleChange={this.findVisibelChange}
                                onSelect={this.findSelect}>
                                <div 
                                    style={{
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent:'center'
                                    }}>
                                    发现
                                </div>
                            </Popover>
                    </li>
                    <li  onClick={() => this.mineSelect(this.refs.mine.title)} title="我的" ref="mine" >
                        <Link to="/mine" >我的</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default connect()(HomePage)