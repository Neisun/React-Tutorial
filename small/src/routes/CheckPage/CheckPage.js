import React,{Component} from 'react';
import { connect } from 'dva';
import styles from './CheckPage.less';

class CheckPage extends React.Component{
    render(){
        return (
            <div>
                验真伪
            </div>
        )
    }
}

CheckPage.propTypes = {
};

export default connect()(CheckPage);