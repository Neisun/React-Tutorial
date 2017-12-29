import React,{Component} from 'react';
import { connect } from 'dva';
import styles from './ServiceAddressPage.less';
import {NavBar,Icon,InputItem,Button,Checkbox} from 'antd-mobile'

class ServiceAddressPage extends React.Component{
    state = {
        items:[
            {
                editeFlag:true,
                setDefaultFlag:true,
                name:'张三',
                phone:'15931893881',
                address:'东城区雍和宫航星园3号楼5层易建科技',
            }
        ]
    }
    back = () => {
        this.props.history.goBack();
    }
    changeEdite = (index) => {
        let items = this.state.items.slice();
        items[index].editeFlag = !items[index].editeFlag;
        this.setState({
            items:items
        })
    }
    setAddress = () => {
        let index = this.state.currentIndex;
        let items = this.state.items.slice();
        items[index].setDefaultFlag = !items[index].setDefaultFlag;
        this.setState({
            items:items
        })
        console.log(this.state.items)
    }
    deleteAddress = (index) => {
        let items = this.state.items.slice();
        items.splice(index,1);
        this.setState({
            items:items
        })
    }
    addAddress = () => {
        let items = this.state.items.slice();
        this.setState({
            items:items.concat({
                editeFlag:false,
                setDefaultFlag:false,
                name:'',
                phone:'',
                address:'',
            })
        })
    }
    // 直接匿名函数的形式会出现问题。。。，所以用这种形式
    onChangeName = (index,value) => {
        let items = this.state.items.slice();
        items[index].name = value;
        this.setState({
            items:items
        })
        // console.log(this.state.items)
    }
    onChangePhone = (index,phone) => {
        let items = this.state.items.slice();
        items[index].phone = phone;
        this.setState({
            items:items
        })
        // console.log(this.state.items)
    }
    onChangeAddress = (index,address) => {
        let items = this.state.items.slice();
        items[index].address = address;
        this.setState({
            items:items
        })
    }
    changeCheck = (index,e) => {
        let checked = e.target.checked;
        let items = this.state.items.slice();
        items[index].setDefaultFlag = checked;
        for (let i = 0; i < items.length; i++) {
            if (items[index].setDefaultFlag) {
                items[i].setDefaultFlag = false;
                items[index].setDefaultFlag = true;
            }
        }
        this.setState({
            items:items
        })
    }
    render(){
        const CheckboxItem = Checkbox.CheckboxItem;
        const cells = this.state.items.map((item,index) => {
            return (
                <div className={styles.cell} key={index}>
                    <div className={styles.userInfo} >
                        <InputItem
                            placeholder="输入您的姓名"
                            value={item.name}
                            disabled={item.editeFlag}
                            onChange={this.onChangeName.bind(this,index)}
                        ></InputItem>
                        <InputItem
                            type="number"
                            placeholder="输入您的手机号"
                            value={item.phone}
                            onChange={this.onChangePhone.bind(this,index)}
                            disabled={item.editeFlag}
                        ></InputItem>
                    </div>
                    <div className={styles.address} >
                        <InputItem
                        value={item.address}
                        placeholder="输入您的地址"
                        onChange={this.onChangeAddress.bind(this,index)}
                        disabled={item.editeFlag}
                        ></InputItem>
                    </div>
                    <div className={styles.action} >
                        <div className={styles.left} >
                            <CheckboxItem 
                                onChange={this.changeCheck.bind(this,index)}
                                checked={item.setDefaultFlag}
                                >
                                {item.setDefaultFlag?'默认地址':'设为默认'}
                            </CheckboxItem>
                        </div>
                        {/* 对于编辑，个人觉得UI设计图渣 */}
                        <div className={styles.right} >
                            <a onClick={() => this.changeEdite(index)}  >
                                <img src={require('../../assets/addr_edit.png')} />
                                编辑
                            </a>
                            <a onClick={() => this.deleteAddress(index)} >
                                <img src={require('../../assets/addr_delete.png')} />
                                删除
                            </a>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className={styles.serviceAddressPage} >
                <NavBar
                    mode="light"
                    icon={< Icon type = "left" />}
                    leftContent="返回"
                    onLeftClick={this.back}
                    rightContent={[< Icon key = "1" type = "ellipsis" />]}>服务地址
                </NavBar>
                <div className={styles.list} >
                    {cells}
                </div>
                <div  className={styles.addBtn} >
                    <Button onClick={() => this.addAddress()} >新建地址</Button>
                </div>
            </div>
        )
    }
}

ServiceAddressPage.propTypes = {
};

export default connect()(ServiceAddressPage);