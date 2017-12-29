import React,{Component} from 'react';
import { connect } from 'dva';
import styles from './InstallPage.less';

class InstallPage extends React.Component{
    render(){
        return (
            <div>
                安装
            </div>
        )
    }
}

InstallPage.propTypes = {
};

export default connect()(InstallPage);