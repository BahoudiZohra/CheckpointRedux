// import { useState } from "react"
import React from 'react';
import {useRef} from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';


const AddTask = () => {  

    const dispatch = useDispatch();

    const inputRef = useRef();
    const inputRef1 = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        if(inputRef.current.value.trim() !== ''){
            // DISPATCHING PROCESS WITH ACTION TYPE = 'add-task' AND THE TEXT OF THE TASK AS A PAYLOAD
            dispatch({type:'add-task', text:inputRef.current.value});
        }
        if(inputRef.current.value.trim() !== ''){
            // DISPATCHING PROCESS WITH ACTION TYPE = 'add-task' AND THE TEXT OF THE TASK AS A PAYLOAD
            dispatch({type:'add-task', text:inputRef1.current.value});
        }

    }


const addHandler = event => {
    dispatch({type:'add-task', text:inputRef.current.value,});
    dispatch({type:'add-task', text:inputRef1.current.value,});
}

  return (
<Form onSubmit={submitHandler} style={{ margin:'auto', width:'500px', marginTop:"50px"}}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label style={{fontWeight:'bold'}}>Description: </Form.Label>
        <Form.Control as="textarea" name="description" id="description" rows={3} ref={inputRef} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style={{fontWeight:'bold'}}>IsDone: </Form.Label>
        <Form.Control type="text" name="isDone" id="isDone" ref={inputRef1}/>
      </Form.Group>
      <Button variant="primary" value="Add"  onClick={(event) =>addHandler()}
      >Add new Task</Button>
    </Form>
  )
}

export default AddTask
