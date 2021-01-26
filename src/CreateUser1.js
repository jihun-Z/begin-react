import React from 'react';
function CreateUser1({ username, email, onChange, onCreate}){
    return(
        <div>
            <input username="username" placeholder="계정명" onChange={onChange}
            value={username}/>
            <input email="email" placeholder="이메일" onChange={onChange}
            value={email}/>
            <button onClick={onCreate}>등록</button>
        </div>
    );
}
//컴포넌트 내보내기 
export default CreateUser1;