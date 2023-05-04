import { useState } from 'react';


const AddTask = ({onAdd}) => {

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [remainder, setRemainder] = useState(false);

  // submit form
  const onSubmit = (e) => {
    e.preventDefault();
    if(!title){
      alert('Please add a task');
      return
    }

    onAdd({title, date, remainder})
    setTitle('');
    setDate('');
    setRemainder(false)
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label htmlFor="title">Task Title :</label>
            <input type="text" name="title" id="title" placeholder="Add Task" 
            value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-control">
            <label htmlFor="date">Date :</label>
            <input type="text" name="date" id="date" placeholder="DD-MM-YY" 
            value={date} onChange={(e) => setDate(e.target.value)}/>
        </div>
        <div className="form-control form-control-check">
            <label htmlFor="remainder">Set Remainder</label>
            <input type="checkbox" name="remainder" id="remainder"  checked={remainder}
            value={remainder} onChange={(e) => setRemainder(e.target.checked)}/>
        </div>
        <input type="submit" className="btn btn-block" value="Save Task" />
    </form>
  )
}

export default AddTask
