import React, { Fragment, useState, useEffect } from 'react';
import UserData from '../components/UserData.js'
import UserImage from '../components/UserImage.js'
import './Users.css'

//class based component
// export default class users extends Component {

//     state={
//         numberOfUsers:2,
//         user1Info:{
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
//             user1Info: data
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
//                 <UserData userInfo={this.state.user1Info} changeUserInfo={this.changeUserInfo.bind(this)}/>
//                 </div>

//             </div>
//         )
//     }
// }


//functional based component 

function Users() {
    const [numberOfUsers, setNumberOfUsers] = useState(2);
    const [user1Info, setUser1Info] = 
    useState({
        name: 'Eman',
        age: 24
    });
    const [user2Info, setUser2Info] = useState({
        name: 'Sara',
        age: 21,
    });

    const changeUserInfo = (data) => {
        setUser1Info(data)
    }
    
    //componentDidMount
    useEffect(()=>{
        alert('Welcome to XXXX website')
    },[]);

    //componentDidUpdate
    useEffect(()=>{
      if(user1Info.name == 'Eman'){
          return
      }
      else{
        alert('your info update successfully')
      }
       
    });
     
    // componentWillUnmount
    useEffect(()=>{
        return(
            alert('Unmount')
        )
        
    }, []);

    return (
        <Fragment>
             
            <div className='users'>
                <div className='userItems'>
                <h1>
                {numberOfUsers}
                 active users
            </h1> 
            <br/>
            <button type="button" class="btn btn-info"
            onClick={()=>{
                setNumberOfUsers(numberOfUsers+1)
            }}>increment number of users</button>
           <br/>
           <br/>
                    <UserImage />
                    <UserData userInfo={user1Info} changeUserInfo={changeUserInfo} />
                </div>
            </div>
        </Fragment>
    )
}

export default Users;