import React from 'react';

function User({ user}){
    return (
        <div>
            <b>{user.username}</b><span>({user.email})</span>

        </div>

    );
}
 function UserList1 ({users}){//props로 users를 App.js에서 받아온다.
    // const user=[
    //     {id:1,
    //     username:'velor',
    //     email:'velor@namver.com'
            
    // },
    //     {id:2,
    //     username:'velor',
    //     email:'velor@namver.com'
            
    // },
    //     {id:3,
    //     username:'velor',
    //     email:'velor@namver.com'
            
    // }
    // ];
    return(
        
        <div>
        {
                users.map(
                    (user,index)=>(<User user={user} key={user.id}/>)
                )
    
            }
            </div>

    )

 }
 export default UserList1;