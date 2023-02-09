import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function Form() {
  const [ userName, typeUserName ] = useState('');
  const [password, typePassword] = useState('');
  const [port, typePort] = useState('');
  const [host, typeHost] = useState('');

  const userNameChange =(e)=>{
    typeUserName(e.target.value);
  }
  const passwordChange =(e)=>{
    typePassword(e.target.value);
  }
  const portChange =(e)=>{
    typePort(e.target.value);
  }
  const hostChange =(e)=>{
    typeHost(e.target.value);
  }

  const handleSubmit =(e)=>{

    console.log('checkkk')

    e.preventDefault()
  }
  return (
    <div className='form'>
      <form onSubmit={(e) => { handleSubmit(e) }}>

      <label >
          userName:
        </label><br/>
        <input type="text" value={userName} required onChange={(e) => {userNameChange(e)}} /><br/>

        <label >
          password:
        </label><br/>
        <input type="text" value={password} required onChange={(e) => {passwordChange(e)}} /><br/>

        <label >
          port:
        </label><br/>
        <input type="text" value={port} required onChange={(e) => {portChange(e)}} /><br/>

        <label >
          host:
        </label><br/>
        <input type="text" value={host} required onChange={(e) => {hostChange(e)}} /><br/>

      <input type="submit" value="Submit" />
      </form>
    </div>
  )



}

export default Form;