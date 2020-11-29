import React from 'react';

function Hello({name,color, isSpecial}){
    // name, color처럼 비구조할당선언하게되면
    // 바로쓸수가 잇다.
    //falsy한값은 화면에 출력이 안되지만 0은 예외로 출력이된다.
    return (<div style={{
        color
    }}>
        
        {isSpecial ? <b>*</b>: null}
        {isSpecial && <b>*</b>}
        안녕하세요{name}
        </div>
   
    );
}

//name값이 없다고 설정하려면
Hello.defaultProps={
    //name기본값을 설정해준다.
    //App.js Hello.default Hello
    name:'이름없음'
}
export default Hello;