const ToDoFooter = ({todo, onClearCompleted})=>{

    const completedSize = todo.filter((todo) => todo.isCompleted).length;
    return(
        <div>
            <span>{completedSize}/{todo.length} complited</span>
            <button onClick={onClearCompleted}>Clear Completed</button>
        </div>
    )
}
export default ToDoFooter