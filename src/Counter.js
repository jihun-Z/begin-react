//useState함수 불러오기
//import React, {useState} from 'react';
import React, {useReducer} from 'react';
function reducer (state, action){
    switch(action.type){
        case 'INCREMENT':
            return state +1;
        case 'DECREAMENT':
            return state -1;
        default:
           //return state;
           throw new Error('Unhandled action');
    }
}
//useState파라미터
function Counter(){
    //number 현재의 값 , dispatch action이발생하여 업데이트되는값 
    //reducer - 위에 정의해놓은 함수  0--은 기본설정값
    const [number,dispatch]=useReducer(reducer,0);

    
    
    
    
    
    
    
    
    //number란상태를 만들건데 useState(0) 0의값을 기본값으로 가지고
    // setNumber는 변화된값을 의미함.즉 이벤트 발생한후에 더하거나 뺀값을 가짐
    //배열 비구조할당또는 구조분해를 통해서 const[number, setNumber]로 선언한거다.
   // const [number,setNumber] = useState(0);
    const increase=() =>{
        dispatch({
            type:'INCREMENT'
        })
        // console.log('+1');
        // //number+1은 이거다
        // setNumber(number+1);
       //함수형 업데이트라고 불른다.나중에 최적화하기에 도움이된다.
       //prevNumber(업데이트하기전) 을 => prevNumber + 1(이렇게 업데이트할거야)라고 이해하기 
      // setNumber(prevNumber => prevNumber +1);
    };
    const decrease=() =>{
        dispatch({
            type:'DECREAMENT'
        })
    };
    //     console.log('-1');
    //    setNumber(number-1);
    //     setNumber(prevNumber => prevNumber -1);
    // }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
        </div>
    )
}
export default Counter;