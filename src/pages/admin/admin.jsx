import React, {Component} from 'react'
import {Button, message} from 'antd'



export default class Admin extends Component{

    handleClick=()=>{
        message.success('I have been success')
    }
    render(){
        return(
            <div>
                <Button type='primary' onClick={this.handleClick}>学习</Button>
            </div>
        )
    }
}
