import { useEffect, useState } from "react";


import Search from "./Buscar";
import TodosList from "./FiltrarLista";
import MyNavbar from "./Navbar";

function MiApi() {

  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');

  const getData = async()=>{
    const res= await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    setTodos(data);
  }

  useEffect(()=>{
    getData();
  },[]);

  const filterTodos = todos.filter((item)=> item.title.includes(search) )
  const dataSort = filterTodos.sort((a, b)=>a.title.localeCompare(b.title));



  return (
    <div className="container">
      <MyNavbar />
      <Search value={search} onChange={ e => setSearch(e.target.value)}/>

      <TodosList filterTodos={dataSort} />
    </div>
  );
}

export default MiApi;
