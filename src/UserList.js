import React,{useEffect} from 'react';

function User({user,onRemove,onToggle}){
    const {username,email,id,active}=user;//username, email, id를 user로 추출해준다.


   //배열을 사용하게되면
   useEffect(()=>{
    console.log('user값이 설정됨');   
    console.log(user);
    return ()=>{
        console.log('user 값이 바뀌기전');
        console.log(user);
    }
   },[user]);//useEffect함수는 user가 호출될때마다 실행되고 useEffect함수는  특정값이 업데이트된후에 실행이된다.

    // useEffect(()=>{
    //     console.log('컴포넌트가 화면에 나타남');//deps dependency약자[]
    //     //props -> state
    //     //REST API
    //     //D3 video.js
    //     //setinterval, setTimeout등 useEffect를 사용할수있다.
    //     return ()=> {
    //         console.log('컴포넌트가 화면에서 사라짐');
    //     }
    // },[]);
    return(
        <div>
            <b style={{
                color:active ? 'green':'black',
                cursor:'pointer'
                 }}
                 onClick={()=>onToggle(id)}>
                     {username}
                 </b>
      <span>({email})</span>
        {/* ()=> 함수가 없이 랜더링하게 되면 전체 id를랜더링하기때문에 function을 해줘야특정아이디만 불러온다 */}
        <button onClick={()=>onRemove(id)}>삭제</button>
    </div>
    )
}

function UserList({users,onRemove,onToggle}){//props로 users를 App.js에서 받아온다.
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
                   (user, index) => (<User user={user} key={user.id}
                   onRemove={onRemove}
                   onToggle={onToggle}/>)
                    )
                    
          }
        </div>
    )
}
export default UserList;