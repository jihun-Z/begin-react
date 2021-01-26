import React ,{useState,useRef} from 'react';

function InputSample(){
  // const [text, setText]= useState('');

  // const onChange=(e) => {
  //   setText(e.target.value);
  // };
  // const onReset = () => {
  //   setText('');
  // };
  //   return (
  //     <div>
  //         <input onChange={onChange} value={text}/>
  //         <button onClick={onReset}>초기화</button>
  //         <div>
  //           <b>값: </b>
  //           어쩌고 저쩌고..
  //         {text}
  //         </div>
  //     </div>
      
  //   )

  // 여러개 input사용하기

  //객체로 useState관리하기
  const [inputs, setInputs]= useState({
    name:'',
    nickname: '',
  });
  //focus 초기화버튼 눌르면 input name으로 옴겨주기
  // import React ,{useState,useRef} 선언한후 from 'react';
  //상수 선언 const 상수 = useRef();
  // input 태그안에 ref={상수} 선언해줌
 const nameInput=useRef();

 
  const {name, nickname}=inputs; //name과 nickname을 비교적할당으로 추출하기
  const onChange= (e) => {
    const { name, value}= e.target;
   // const nextInputs={
   
   
   //   ...inputs ,//spread함수를 이용해서 더해준다.
     // [name]:value,//대괄호를 안쓰고 name으로 쓰면 string값으로 인식
   // };

   //객체상태를 업데이트해줄때에는
   //기존상태를 복사하고나서 
   //그곳에 특정값을 덮어씌우고 새로운 상태로 설정해줘야한다
   //이런것을 불변성을 지킨다라고 한다.
   //dom을 사용하게되면 useRef 훅을 사용하게된다.
    setInputs({
      ...inputs,
      [name]:value,
    });
  };
  const onReset= ()=>{
    setInputs({
      name:'',
      nickname:'',

    });
    nameInput.current.focus();

  };
  return (
    <div>
      <input name="name" placeholder="이름"
       onChange={onChange} value={name} ref={nameInput}/>
      <input name="nickname" placeholder="닉네임"
       onChange={onChange} value={nickname}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값:</b>
        {name}({nickname})
      </div>
    </div>
  );
}
export default InputSample;