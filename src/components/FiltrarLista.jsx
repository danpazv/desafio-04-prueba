import Listado from "./Listado"

export default function TodosList(props){
    return(
        <ul>
            {
                props.filterTodos.map(todo =>(
                    <Listado todo={todo} key={todo.id}/>))
            }
        </ul>
    )
}