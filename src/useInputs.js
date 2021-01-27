import {useState,useReducer, useCallback} from 'react';


// use State

// function useInputs(initialForm){
//     const[form,setForm]=useState(initialForm);
//     const onChange = useCallback(e=>{
//         const {name, value} =e.target;
//         setForm(form => ({...form, [name]:value}));
//     },[]);
//     const reset = useCallback(() => setForm(initialForm),[initialForm]);
//     return [form, onChange, reset]; //배열하고 객체로 넘겨줄수잇지만 배열로 넘겨주기로햇다.
// };

function reducer(state,action){
    switch(action.type){
        case 'CHANGE':
            return {
                ...state,
                [action.name]:action.value
            };
            case 'RESET':
                return Object.keys(state).reduce((acc,current) =>{
             acc[current]='';
             return acc;
                },{});
                default: return state;
            }
}
function useInputs(initialForm){
    const [form,dispatch]=useReducer(reducer,initialForm);
    //change
    const onChange= useCallback(e=>{
        const {name,value}=e.target;
        dispatch({
            type:'CHANGE',name,value
        });
    },[]);
    const reset=useCallback(()=>dispatch({type:'RESET'}),[]);
    return [form,onChange,reset];

}

// function reduer(state,action){
//     switch(action.type){
//         case 'CHANGE':
//             return{
//                 ...state,
//                 [action.name]:action.value
//             };
//             case 'RESET':
//                 return Object.keys(state).reduce((acc,current)=>{
//                     acc[current]='';
//                     return acc;
//                 },{});
//             default:
//                 return state;

//     }
// }
// function useInputs(initialForm){
//     const [form,dispatch]=useReducer(reducer,initialForm);
//     //change
//     const onChange=useCallback(e=>{
//         const{name,email}=e.target;
//         dispatch({ type:'CHANGE',name,email});
//     },[]);
//     const reset=useCallback(()=>dispatch({type:'RESET'}),
//     []);
//     return [form,onChange,reset];
// }
export default useInputs;