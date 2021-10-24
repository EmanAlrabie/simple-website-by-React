import React, { Component } from 'react'
import Avtar from '../images/UserProfileAvata.jpg'
import './UserImage.css'
export default class userImage extends Component {
    render() {
        return (
            <div>
                <img src={Avtar} className='user-image'></img>
            </div>
        )
    }
}
