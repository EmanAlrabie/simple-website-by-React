import React, { Component, Fragment } from 'react'
import './UserData.css'

//class based Component
// export default class UserData extends Component {

//     updateUserInfo(data){
//         this.props.changeUserInfo(data)
//     }

//     render() {

//         return (
// <div className='user-data'>
//     <p >Name: {this.props.userInfo.name}</p>
//     <p>Age: {this.props.userInfo.age}</p>

//     <button type="button" class="btn btn-info" onClick={()=>{
//             this.updateUserInfo({
//                 name: 'Mona',
//                 age:12,
//             })
//     }}> Edit my info</button>
// </div>
//         )
//     }
// }


//funcional based component

function UserData(props) {
    let {name, age} = props.userInfo

    const updateUserInfo = (data) => {
        props.changeUserInfo(data)
    }
    return (
        <Fragment>
            <div className='user-data'>
                <p >Name:{name} </p>
                <p>Age: {age}</p>

                <button type="button" class="btn btn-info" onClick={() => {
                    updateUserInfo({
                        name: 'Mona',
                        age: 12,
                    })
                }}> Edit user info</button>
            </div>

            {/* //map over data
            {
               
                props.userInfo.length >0 ? 
                props.userInfo.filter((user)=>user.age>18).map((user, index) => {
                    return (
                        <div className='user-data'>
                            <p >Name:{user.name} </p>
                            <p>Age: {user.age}</p>

                            <button type="button" class="btn btn-info" onClick={() => {
                                updateUserInfo({
                                    name: 'Mona',
                                    age: 12,
                                })
                            }}> Edit my info</button>
                        </div>
                    )

                }) 
                : <p> No active user</p>

            }
             */}
        </Fragment>
    )
}


export default UserData;