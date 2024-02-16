import './ListTask.css';
import { useSelector, useDispatch } from 'react-redux';
const ListTask = () => {
    /*--------------------------------THE SUBSCRIPTION PROCESS-----------------------------------
    THIS WILL AUTOMATICALLY SET UP A SUBSCRIPTION TO THE REDUX STORE FOR THIS COMPONENT.
    SO OUR COMPONENT WILL BE UPDATED AND WILL RECEIVE THE LATEST STATE (Array of tasks in our case) 
    AUTOMATICALLY WHENEVER THAT DATA CHANGES IN THE REDUX STORE*/
    const tasks = useSelector( state => state );

    // DISPATCHING PROCESS WITH ACTION TYPE = 'delete-task' AND THE ID OF THE TASK AS A PAYLOAD
    const dispatch = useDispatch();
    const deleteHandler = event => {
        dispatch({type:'delete-task',id:event.target.value});
    }

    return (
      <>

      <h2 style={{textAlign:'center', marginTop:'30px', marginBottom:'20px'}}>Liste of Tasks</h2>
        <ul >
            {tasks.map((task,id) => <li key={id}> <p>{task}</p> <button value={id} onClick={deleteHandler}>Delete Task</button> </li>)}
        </ul>

      </>
    )
}

export default ListTask;