import React,{useState} from 'react';
import ReactDOM from 'react-dom';

import "./style.css";
import LifeCycleSample from './LifeCycleSample';

//랜덤색상을 생성하기
function getRandomColor(){
    return "#"+Math.floor(Math.random() * 16777215).toString(16);

}

function App(){
    const [color,setColor]=useState("#000000");
    const [visible,setVisible]= useState(true);
    const onClick= () => {
        setColor(getRandomColor());
    };
    const onToggle= () =>{
        setVisible(!visible());
    };

    return(
        <>
            <button onClick={onClick}>랜덤색상</button>
            <button onClick={onToggle}>토글</button>
            {visible && <LifeCycleSample color={color}/>}
        </>
    );

}
const rootElement = document.getElementById("root");
ReactDOM.render(<App/>,rootElement);