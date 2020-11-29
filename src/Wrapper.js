import React, { Children } from 'react';

//태그안에 값을 조회하는 함수 컴포넌트만들기
//wapper안에 값을 출력하려면 함수({children})을 선언하고
//태그에 {children}을 선언
function Wrapper(){
    const style={
        border:'2px solid black',
        padding: 16
    };

    return <div style={style}>{Children}</div>
}
export default Wrapper;
