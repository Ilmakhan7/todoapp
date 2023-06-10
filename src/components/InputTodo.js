import React from 'react'
import { async } from '@firebase/util'
import { db } from '../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';



const InputTodo = () => {
    const [title,setTitle] = React.useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(title!=""){
            await addDoc(collection(db,"todos"),{
                title,
                completed:false
            })
            setTitle("")
        }
    }
  return (
   <form onSubmit={handleSubmit}>
    <input type={'text'} placeholder='Enter Todo Task' value={title}
    onChange={(e)=>setTitle(e.target.value)}/>
    <button>+</button>
   </form>
  )
}

export default InputTodo