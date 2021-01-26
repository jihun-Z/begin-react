import React from 'react';

function User({user}){
    return(
        <div>
        <b>{user.username}</b><span>({user.email})</span>
    </div>
    )
}

function UserList({users}){//props로 users를 App.js에서 받아온다.
    // const users=[
        
    //         { id: 1,
    //             username: 'velopert',
    //                 email:'public@naver.com'
    //         } ,
    //         {
    //             id:2,
    //             username: 'leejihun',
    //             email:'liz@naver.com'
            
    //         },
    //         {
    //             id:3,
    //             username: 'its',
    //             email: 'its@naver.com'            
    //         }
    // ];
    return (
        // <div>
        //     <div>
        //         <b>{user[0],username}</b><span>({user[0].email})</span>
        //     </div>
        //     <div>
        //         <b>{user[1],username}</b><span>({user[1].email})</span>
        //     </div>
        //     <div>
        //         <b>{user[2],username}</b><span>({user[2].email})</span>
        //     </div>
        // </div>
        <div>
            {
                users.map(
                   (user, index) => (<User user={user} key={user.id}/>)
                    )
                    
          }
        </div>
    )
}
export default UserList;