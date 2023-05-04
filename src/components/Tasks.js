const tasks = [
    {
        id:1,
        title:'First',
        date:'21/2/22',
        remainder:true
    },
    {
        id:2,
        title:'Second',
        date:'1/12/23',
        remainder:true
    },
    {
        id:3,
        title:'Third',
        date:'11/5/21',
        remainder:false
    }
]
const Tasks = () => {
  return (
    <>
    {tasks.map( (task) => (
        <h3 key={task.id}>{task.title}</h3>
    ))}
    </>
  )
}

export default Tasks
