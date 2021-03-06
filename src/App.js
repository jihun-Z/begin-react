import React,{useRef,useReducer,useMemo,useCallback,createContext} from 'react';
//import ReactDOM from 'react-dom';
//import Hello from './Hello';
//import Wrapper from './Wrapper';
//import Counter from './Counter';
//import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
import produce from 'immer';
//import useInputs from './useInputs';


//window.produce = produce;
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

const initialState ={
  // inputs:{
  //   username:'',
  //   email: '',
  // },
  users:[
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
  ]
}

function reducer(state,action){
  switch(action.type){
    case 'CREATE_USER':
      return  produce(state,draft =>{
        draft.users.push(action.user);
      })
      // return{
      //   users:state.users.concat(action.user)
      // }
      case 'TOGGLE_USER':
         return produce(state,draft =>{
           const user = draft.users.find(user => user.id ===action.id);
           user.active = !user.active;
         })
        // return{
        //   ...state,
        //   users:state.users.map(user =>
        //     user.id === action.id ? {
        //       ...user,active: !user.active} :user)
            
        // };
        case 'REMOVE_USER':
          //immumer 불변성에서는 splice라는 함수를 사용해서 찾을수가 잇는데
          //splice함수를 이용하려면 index를 사용해야한다.
          return produce (state,draft =>{
           const index= draft.users.findIndex(user => user.id === action.id);
           draft.users.splice(index, 1);//index부터 1개를 없애겟다.
          });
          // return {
          //   ...state,
          //   users:state.users.filter(user => user.id !== action.id)
          // };
          default: 
            return state;
          }
        }
        export const UserDispatch = React.createContext(null);
        function App(){
          const [state,dispatch] =useReducer(reducer, initialState);
          const {users} =state;
          const count =useMemo(() =>countActiveUsers(users),[users]);
          return (
            <UserDispatch.Provider value={dispatch}>
              <CreateUser/>
              <UserList users={users}/>
              <div>활성 사용자 수 : {count}</div>
            </UserDispatch.Provider>
          );
        }
//     case 'CHANGE_INPUT':
//       return {
//         ...state,
//         inputs:{
//           ...state.inputs,
//           [action.name]:action.value
//         }
//       };
//       case 'CREATE_USER':
//         return{
//           inputs:initialState.inputs,
//           users:state.users.concat(action.user)
//         }
//         case 'TOGGLE_USER':
//           return{
//             ...state,
//             users:state.users.map(user => 
//               user.id===action.id?
//               {...user,active: !user.active}
//               :user //같지않으면 전에 user를 유지하겟다.
//               )
//           };
//           case 'REMOVE_USER':
//             return{
//               ...state,
//               users:state.users.filter(user => user.id !== action.id)
                
//             }
//       default:
//         throw new Error('Unhandled action');
//   }
// }


// export const UserDispatch= createContext(null);


// function App() {
//  const[state,dispatch]=useReducer(reducer,initialState);
//  const [form,onChange,reset]= useInputs({
//    username:'',
//    email:'',
//  });
//  const {username,email}= form;
//  const nextId=useRef(4);
//  const {users} =state;
 //const { username, email}=state.inputs;

// const onChange=useCallback(e=> {
// const{name,value}=e.target;
// dispatch({
//   type:'CHANGE_INPUT',
//   name,
//   value
// })
// },[]);
// const onCreate = useCallback(()=>{
//   dispatch({
//     type:'CREATE_USER',
//     user:{
//       id:nextId.current,
//       username,
//       email,
//     }
//   });
//   nextId.current +=1;
//   reset();
// },[username,email,reset]);

// const onToggle =useCallback(id => {
//   dispatch({
//     type:'TOGGLE_USER',
//     id
//   });
// },[]);
// const onRemove = useCallback(id =>{
//   dispatch({
//     type:'REMOVE_USER',
//     id

//   });
// },[]);

// const count = useMemo (()=> countActiveUsers(users),[users]);

//    //함수 userActiveUsers함수에 users배열을 받아 count변수로 정해준다.
//   //deps[users]값이 바뀌지않으면 전에 잇던 값을 재사용한다. deps의 [users]값이 바뀌면 바뀐값을 으로 대체한다.
  
//    return (
//      <UserDispatch.Provider value={dispatch}>
//       <CreateUser 
//       username={username}
//       email={email}
//       onChange={onChange}
//       onCreate={onCreate} />
//       <UserList users={users}/>
//       <div>활성 사용자 수 : {count}</div>
//      </UserDispatch.Provider>
//    )

// }
export default App;
