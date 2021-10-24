import React, { Component } from 'react'
import UserData from '../components/UserData.js'
import UserImage from '../components/UserImage.js'
import './Users.css'
export default class users extends Component {
    render() {
        return (
            <div className='users'>
                <div className='userItems'>
                <UserImage/>
                <UserData />
                </div>
              
            </div>
        )
    }
}
