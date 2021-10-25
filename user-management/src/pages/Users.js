import React, { Component } from 'react'
import UserData from '../components/UserData.js'
import UserImage from '../components/UserImage.js'
import './Users.css'
export default class users extends Component {
    
    state={
        numberOfUsers:2,
        user1Info:{
            name:'Eman',
            age: 24,
        },
        user2Info:{
            name:'Sara',
            age: 21,
        }
    }

    changeUserInfo(data){
        this.setState({
            ...this.state,
            user1Info: data
        })
    }
    componentDidMount(){
        setTimeout(() => {
            alert('Welcome to XXXX website')
        }, 1000);
        
    }
    componentDidUpdate(){
             alert('your info update successfully')
         }

    componentWillUnmount(){
            alert('The code changed')
    }
    
    render() {
        return (
            <div className='users'>
                <div className='userItems'>
                <UserImage />
                <UserData userInfo={this.state.user1Info} changeUserInfo={this.changeUserInfo.bind(this)}/>
                </div>
              
            </div>
        )
    }
}
