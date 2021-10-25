import React, { Component } from 'react'
import './UserData.css'

export default class UserData extends Component {
    
    updateUserInfo(data){
        this.props.changeUserInfo(data)
    }
    
    render() {
        
        return (
            <div className='user-data'>
                <p >Name: {this.props.userInfo.name}</p>
                <p>Age: {this.props.userInfo.age}</p>
                
                <button onClick={()=>{
                        this.updateUserInfo({
                            name: 'Mona',
                            age:12,
                        })
                }}> Edit my info</button>
            </div>
        )
    }
}
