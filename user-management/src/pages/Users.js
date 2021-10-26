import React, { Fragment, useState, useEffect } from 'react';
import UserData from '../components/UserData.js'
import UserImage from '../components/UserImage.js'
import './Users.css'

//class based component
// export default class users extends Component {

//     state={
//         numberOfUsers:2,
//         userInfo:{
//             name:'Eman',
//             age: 24,
//         },
//         user2Info:{
//             name:'Sara',
//             age: 21,
//         }
//     }

//     changeUserInfo(data){
//         this.setState({
//             ...this.state,
//             userInfo: data
//         })
//     }
//     componentDidMount(){
//         setTimeout(() => {
//             alert('Welcome to XXXX website')
//         }, 1000);

//     }
//     componentDidUpdate(){
//              alert('your info update successfully')
//          }

//     componentWillUnmount(){
//             alert('The code changed')
//     }

//     render() {
//         return (
//             <div className='users'>
//                 <div className='userItems'>
//                 <UserImage />
//                 <UserData userInfo={this.state.userInfo} changeUserInfo={this.changeUserInfo.bind(this)}/>
//                 </div>

//             </div>
//         )
//     }
// }


//functional based component 

function Users() {
    const [numberOfUsers, setNumberOfUsers] = useState(3);
    const [userInfo, setuserInfo] =
        useState([{
            name: 'Eman',
            age: 24
        },
        {
            name: 'Sara',
            age: 15,
        },
        {
            name: 'Mona',
            age: 30,
        }]);

    const changeUserInfo = (data) => {
        setuserInfo(data)
    }

    // //componentDidMount
    // useEffect(()=>{
    //     alert('Welcome to XXXX website')
    // },[]);

    // //componentDidUpdate
    // useEffect(()=>{
    //   if(userInfo.name == 'Eman'){
    //       return
    //   }
    //   else{
    //     alert('your info update successfully')
    //   }

    // });

    // // componentWillUnmount
    // useEffect(()=>{
    //     return(
    //         alert('Unmount')
    //     )

    // }, []);

    return (
        <Fragment>

            <div className='users'>
                
                <div className='userItems'>
                    <h1>
                        {numberOfUsers} 
                        active users
                    </h1>
                    <br />
                    <button type="button" class="btn btn-info"
                        onClick={() => {
                            setNumberOfUsers(numberOfUsers + 1)
                        }}>increment number of users</button>
                    <br />
                    <br />
                    {
                        userInfo.length > 0 ?
                            userInfo.map((user) => {
                                return (
                                    <Fragment>
                                        <UserImage />
                                        <UserData userInfo={user} changeUserInfo={changeUserInfo} />
                                    </Fragment>
                                )

                            })
                            : <p>No active user</p>

           }
                </div>
            </div>
        </Fragment>
    )
}

export default Users;