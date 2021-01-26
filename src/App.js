import React,{useRef,useState,useMemo,useCallback} from 'react';
//import ReactDOM from 'react-dom';
//import Hello from './Hello';
//import Wrapper from './Wrapper';
//import Counter from './Counter';
//import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';



//useCallback 함수를 재사용하기위한 명령어 useMemo와는 비슷하지만 함수를 재사용하는데 초점이 맞춰져잇다.useMemo는 연산을 해서 값이 바뀌지않으면 전의값을 재사용햇지만 
   //useMemo hook 특정값이 바뀌엇을때만 특정함수를 실행하면서  연산되게하고 만약에 원햇던값이 바뀌지않앗더라면
   // 리랜더링될때 전에 잇던값을 재사용할수있게 해준다.
   function countActiveUsers(users){//users의 배열을 받아 함수를 구현한다.
    console.log('활성 사용자 수를 세는중');
    return users.filter(user=> user.active).length;//users.filter활성화된 user의 길이를 구하라

   };

// function App() {
//   const name="react";
//   const style={
//     backgroundColor:'black',
//     color: 'aqua',
//     fontSize: 24,
//     padding: "1rem"
//   };
//   return (
//     <div>
//       {/*두개이상의 태그는 부모의태그로 감싸야한다.
//       태그는 무조건 닫혀잇어야한다.
//       태그안에 style태그는 상수로 선언하여
//       - 다음단어는 carmel Case로 선언하여야한다
//       background-color   ,-backgroundColor
//       상수를쓸려면 el태그처럼 객체처럼 선언하고
//       {키값}을 넣어주면됨
//       */}
//       <Hello/>
     
//       <div style={style}>{name}</div>
//     <div className="gray-box"></div>
//     </div>
//   );
// }

// const rootElement =document.getElementById("root");
// ReactDOM.render(<App/>,rootElement);



//props함수 properties의 준말이며
//부모에서 자식으로 값을 전달해줄때 사용함
// <Child value="value"/>
//function App1(){
  
 
  //  return (
     // <Wrapper>
      //  <Hello name="react" color="red" />
      //  <Hello color="pink"/>

     // </Wrapper>
  //  )

//}

 //랜더링 설정하기
 //true or false에따라서 결과값이 틀려짐
 //isSpecial 은기본값이 true이므로 생략가능
//function App2(){
 // return (
    //<Wapper>
     // <Hello name="react" color="red" isSpecial={true}/>
     // <Hello color="pink"/>
  //  </Wapper>
 // )
//}



//이벤트 설정하기
//function App3(){
 // return(
  // <Counter/>
//  )
//}

// function App4(){
//   return (
//     <InputSample/>
//   )
// }
// export default App4;
function App() {
  const [inputs,setInputs]=useState({
    username :'',
    email:'',
  })
  const {username,email} = inputs;// inputs로 username email등을 추출해준다.
  const onChange = useCallback(e=>{
    const { name, value} =e.target;//e.target으로 namer값정해지면 value값을 덮어써준다.
    setInputs({
      ...inputs,//값을 복사해서 spred 
      [name]: value
    });
  },[inputs]);
  //users의 배열이 컴포넌트 상태로써 관리가 되지않고있기때문에 useState로 바꿔줘야한다.
   const [users,setUsers]=useState([
     {
       id:1,
       username:'velopert',
       email:'public.velopert@gmail.com',
       active:true,
     },
     {
       id:2,
       username:'tester',
       email:'tester@gmail.com',
       active:false,
     },
     {
       id:3,
       username:'liz',
       email:'liz@gmail.com',
       active:false,
     } 
   ]);
   const nextId= useRef(4);
   const onCreate = useCallback(()=>{
     //새로운 객체 유저를 만들어준다
     const user= {
       id: nextId.current,
       username,
       email,
     };
     //spread복사를 통해서 배열복사를한다.
     
    // setUsers([...users,user]);//이렇게하면은 기존의 배열을 복사하고 새로운 항목을 추가해준다.
     
     setUsers(users.concat(user));//concat을 이용해서 하는방법
     
     //onCreate버튼이 클릭될때 값을 등록하고 지운다
     setInputs({
       username:'',
       email:''
     });
     console.log(nextId.current);//4
     nextId.current +=1;
   },[username,email,users]);
   const onRemove =useCallback( id=>{
     setUsers(users.filter(user => user.id !== id));
   },[users]);
   const onToggle= useCallback(id=> {
     setUsers(users.map(
       user=> user.id=== id? {...user,active:!user.active} : user
     ));
   },[users]);
   const count=useMemo(()=>countActiveUsers(users),[users]);
   //함수 userActiveUsers함수에 users배열을 받아 count변수로 정해준다.
  //deps[users]값이 바뀌지않으면 전에 잇던 값을 재사용한다. deps의 [users]값이 바뀌면 바뀐값을 으로 대체한다.
  
   return (
     <>
      <CreateUser username={username}
      email={email}
       onChange={onChange}
       onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성 사용자 수 : {count}</div>
     </>
   )

}
export default App;
