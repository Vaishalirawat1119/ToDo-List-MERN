import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function Create() {
  const [task, setTask] = useState();
  const handleAdd = () => {
    axios.post('http://localhost:30001/add', {task: task})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  return (
    <div className='create_form'>
      <input type="text" name='' id='' placeholder='Enter Task' onClick={(e) => setTask(e.target.value)}/>
      <button type='button' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create
