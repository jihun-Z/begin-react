//useState함수 불러오기
//import React, {useState} from 'react';
//import React, {useReducer} from 'react';



import React, { Component } from 'react';

//class형으로 바꾸기
class Counter extends Component {

    //클래스형 컴포넌트 만들기 내부클래스
    //내부클래스의 이벤트핸들러의 this가  
    //특정관계가 끊기게되는데 연결시켜주는방법이 3가지
    //constructor (props)를 받아 상수 super(props)를 연결시켜하는방법
    //this는 window 를호출하고 호출된 window에서는 this가 가르키는 자신이 없기때문에 undifind를 가르킨다
    //그래서 this.XXX.bind(this);bind으로 호출하고싶은 this를 넣어 가르키게한다.
 



    constructor(props){
        super(props);
        //state의 초기값은 객체여야하고 배열이면 error를 반환한다.
      this.state={
          counter:0,
          fixed:1,
          update:{
              toggle:false,
              dontChangeMe:1,
          }
      };
    }
    handleIncrease=()=> {
    
    // this.setState({
    //     counter: this.state.counter +1
    // });
//state 함수형 업데이트로 여러개가 한꺼번에 요청해서 처리한다.
    this.setState(state => ({
        counter:state.counter +1
    }));
    }
    handleDecrease = () => {
        //비동기식 요청으로인해서 하나씩업데이트된다.
      this.setState({
          counter: this.state.counter -1
      });
    }
    // handleToggle = ()=>{
    //     this.setState({
    //         updateMe:{
    //             ...this.state.updateMe,
    //             toggleMe: ! this.state.updateMe.toggleMe,
    //         }
    //     })
    // }

    render(){
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된값: {this.state.fixed}</p>
            </div>
        )
    };
}




// function reducer (state, action){
//     switch(action.type){
//         case 'INCREMENT':
//             return state +1;
//         case 'DECREAMENT':
//             return state -1;
//         default:
//            //return state;
//            throw new Error('Unhandled action');
//     }
// }
// //useState파라미터
// function Counter(){
//     //number 현재의 값 , dispatch action이발생하여 업데이트되는값 
//     //reducer - 위에 정의해놓은 함수  0--은 기본설정값
//     const [number,dispatch]=useReducer(reducer,0);

    
    
    
    
    
    
    
    
    //number란상태를 만들건데 useState(0) 0의값을 기본값으로 가지고
    // setNumber는 변화된값을 의미함.즉 이벤트 발생한후에 더하거나 뺀값을 가짐
    //배열 비구조할당또는 구조분해를 통해서 const[number, setNumber]로 선언한거다.
   // const [number,setNumber] = useState(0);
    // const increase=() =>{
    //     dispatch({
    //         type:'INCREMENT'
    //     })
        // console.log('+1');
        // //number+1은 이거다
        // setNumber(number+1);
       //함수형 업데이트라고 불른다.나중에 최적화하기에 도움이된다.
       //prevNumber(업데이트하기전) 을 => prevNumber + 1(이렇게 업데이트할거야)라고 이해하기 
      // setNumber(prevNumber => prevNumber +1);
//     };
//     const decrease=() =>{
//         dispatch({
//             type:'DECREAMENT'
//         })
//     };
//     //     console.log('-1');
//     //    setNumber(number-1);
//     //     setNumber(prevNumber => prevNumber -1);
//     // }
//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick={increase}>+1</button>
//             <button onClick={decrease}>-1</button>
//         </div>
//     )
// }
export default Counter;