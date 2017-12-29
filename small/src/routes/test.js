import React, {Component} from 'react'
import {connect} from 'dva'

class Test extends React.Component{
    render(){
        return (
            <div>
                test
            </div>
        )
    }
}
export default connect()(Test)