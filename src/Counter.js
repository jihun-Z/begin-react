//useState함수 불러오기
import React, {useState} from 'react';

//useState파라미터
function Counter(){
    //number란상태를 만들건데 useState(0) 0의값을 기본값으로 가지고
    // setNumber는 변화된값을 의미함.즉 이벤트 발생한후에 더하거나 뺀값을 가짐
    //배열 비구조할당또는 구조분해를 통해서 const[number, setNumber]로 선언한거다.
    const [number,setNumber] = useState(0);
    const increase=() =>{
        console.log('+1');
        //number+1은 이거다
       // setNumber(number+1);
       //함수형 업데이트라고 불른다.나중에 최적화하기에 도움이된다.
       //prevNumber(업데이트하기전) 을 => prevNumber + 1(이렇게 업데이트할거야)라고 이해하기 
       setNumber(prevNumber => prevNumber +1);
    }
    const decrease=() =>{
        console.log('-1');
       // setNumber(number-1);
        setNumber(prevNumber => prevNumber -1);
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
        </div>
    )
}
export default Counter;