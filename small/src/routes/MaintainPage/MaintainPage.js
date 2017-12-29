import React,{Component} from 'react';
import { connect } from 'dva';
import styles from './MaintainPage.less';

class MaintainPage extends React.Component{
    render(){
        return (
            <div>
                维修
            </div>
        )
    }
}

MaintainPage.propTypes = {
};

export default connect()(MaintainPage);