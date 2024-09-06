import { useState } from "react";


// export default function UseState1() {
//     const [count, setCount] = useState('change me');
//     const [checked, setChecked] = useState(false);
//     return(
//         <div>
            
//             <input type="text" value={count} onChange={(e)=>setCount(e.target.value)} placeholder="请输入内容"/>
//             <p style={{color:'red'}}>{count}</p>
//             <label>
//             <input type='checkbox' checked={checked}  onChange={(e)=>setChecked(e.target.checked)}/>这是一个复选框
//             </label>
//             <p style={{color:'red'}}>{checked?'选中了':'未选中'}</p>
//         </div>
//     )
    
// }
// import useState from 'react' ;
export default function Form({}) {
  const [firstName, setfirstName]= useState('');
  const  [lastName, setlastName]= useState('');

  function handleFirstNameChange(e) {
    setfirstName( e.target.value );
    
  }

  function handleLastNameChange(e) {
    setlastName( e.target.value );
  }

  function handleReset() {
    setfirstName('');
    setlastName('');
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
      <h1>{}</h1>
      <input/>
    </form>
  );
}
