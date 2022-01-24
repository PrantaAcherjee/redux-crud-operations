import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './App.css';
import { addUser,deleteUser,updateUser } from './features/Users';

function App() {
const userList=useSelector((state)=>state.users.value);
const dispatch=useDispatch();
const [name,setName]=useState('')
const [userName,setUserName]=useState('')
const [newUserName,setNewUserName]=useState('')

  return (
    <div className="App">
    <h3>Redux CRUD Operations</h3>
    {/* add user  */}
    <div>
    <input type="text" placeholder='name...' onChange={e=>{setName(e.target.value)}}/>
    <input type="text" placeholder='useraName...' onChange={e=>{setUserName(e.target.value)}} />
    <button onClick={()=>{
      dispatch(addUser({id:userList[userList.length-1].id+1,name:name,userName:userName,}))
    }}>addUser</button>
    </div>
    {/* display user  */}
    <div>
    {
      userList.map(user=> <div key={user.id}>

     <p>{user.name}</p>
     <p><small>{user.userName}</small></p> 
      <input type="text" placeholder='new userName'
      onChange={e=>setNewUserName(e.target.value)}/>
      <button onClick={()=>dispatch(updateUser({id:user.id,userName:newUserName}))}>updateUser</button>
      <button onClick={()=>dispatch(deleteUser({id:user.id}))}>deleteUser</button>
      </div>)
    }
    </div>

    </div>
  );
}

export default App;
