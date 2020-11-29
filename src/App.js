import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';
//import Wrapper from './Wrapper';
//import Counter from './Counter';
import InputSample from './InputSample';

function App() {
  const name="react";
  const style={
    backgroundColor:'black',
    color: 'aqua',
    fontSize: 24,
    padding: "1rem"
  };
  return (
    <div>
      {/*두개이상의 태그는 부모의태그로 감싸야한다.
      태그는 무조건 닫혀잇어야한다.
      태그안에 style태그는 상수로 선언하여
      - 다음단어는 carmel Case로 선언하여야한다
      background-color   ,-backgroundColor
      상수를쓸려면 el태그처럼 객체처럼 선언하고
      {키값}을 넣어주면됨
      */}
      <Hello/>
     
      <div style={style}>{name}</div>
    <div className="gray-box"></div>
    </div>
  );
}

const rootElement =document.getElementById("root");
ReactDOM.render(<App/>,rootElement);



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

function App4(){
  return (
    <InputSample/>
  )
}
export default App4;