export type DataProps = {
    title: string;
    tasks: Array<TasksProps>;
    students: string[];
}

type TasksProps = {
    taskId: number;
    title: string;
    isDone: boolean;
}

type Tasks = {
    data: DataProps; 
};

export function Tasks (props: Tasks){
    const tasksList = props.data.tasks.length === 0
        ? <span>You don't have any information</span>
        : <ul>
            {props.data.tasks.map(task => {
                return (
                    <li>
                        <input type="checkbox" checked={task.isDone}/>
                        <span>{task.title}</span>
                    </li>
                )
            })}
        </ul>

    const studentsList = props.data.students.length === 0
    ? <span>You don't have any student</span>
    : <ul>
        {props.data.students.map(task => {
            return (
                <li>
                    {task}
                </li>
            )
        })}
    </ul>

    return (        
        <>
            <h1>{props.data.title}</h1>
            {tasksList}
            {studentsList}
        </>
    )
}

