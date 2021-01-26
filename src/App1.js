import React ,{useRef,useState} from 'react';
import UserList from './UserList1';
import CreateUser from './CreateUser1';


function App(){
    const [inputs,setInputs]=useState({//초기값 설정 inputs와 setInputs를 추출해서 useState로 명햇다.
        username:'',
        email:'',
    })
    const {usename, email}=inputs//inputs로 username email등을 추출해준다
    const onChange= e => {
        const{name, value}=e.target;//e.target으로 name의 키값과 벨류를 추출한다.
        setInputs({
            ...inputs,//spread로 복사해서 
            [name]:value//키값 name과 value값을 덮어씌운다.
        });
    };
    //users의 배열이 컴포넌트 상태로써 관리가 되지않기때문에 useState로 바꿔줘야한다.
    const[users,setUsers]=useState([
        {
            id:1,
            username:'velopert',
            email:'public.vell'
        },
        {
            id:2,
            username:'velopert',
            email:'public.vell22'
        },
        {
            id:3,
            username:'velopert',
            email:'public.vell33'
        }
    ]);
    const nextId=useRef(4);
    const onCreate=()=>{
        //새로운 객체 유저를 만들어준다.
        const user={
            id:nextId.current,
            username,
            email,
        };
        //spread복사를 통해서 기존의 배열을 복사하고 user를 뒤에 붙여넣기한다.
        setInputs([...users,user]);
        //concat을 이용한 배열 복사 
       // setInputs(users.concat(user))//배열을 합친다음,그위에 다음에 생성되는user객체를 넣어준다.
        setInputs({
            username:'',
            email:''
        });
        console.log(nextId.current);//생성되는 배열의 인덱스를 출력
        nextId.current +=1;//생성되는 다음아이디의 인덱스를 추가

    }
    return (
        <>
            <CreateUser username={username}
            email={email} onChange={onChange} onCreate={onCreate}/>
            <UserList users={users}/>
        </>
    )
}
export default App;