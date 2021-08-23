import { 
  RecoilRoot,
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
  selector

 } from 'recoil';
 import axios from 'axios';
 import React,{ useState } from 'react';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <React.Suspense fallback={<h1>Cargando</h1>}>
        <UserData />
        <TodoFilter />
        <TodoStats />
        <ItemCreator />
        <TodoList />
      </React.Suspense>
    </RecoilRoot>
  );
}

let idUnico = 0;

const todoListState = atom({
  key: 'todoListState',
  default: []
})

const todoFilterSelector = selector({
  key: 'todoFilterSelector',
  get: ({get}) => {
    const list = get(todoListState)
    const filter = get(todoFilterState)
    
    switch (filter) {

      case 'pending':
        return list.filter(item => !item.isCompleted)
      case 'done':
        return list.filter(item => item.isCompleted)
      default: 
        return list
    }
  }
})

const todoStatsSelector = selector({
  key: "todoStatsSelector",
  get: ({get}) => {
    const list = get(todoListState)
    const total= list.length;
    const pending= list.filter(item => !item.isCompleted).length
    const done= list.filter(item => item.isCompleted).length
    const completedPercentage = total === 0 ? 0 : (done/total)*100

    const data = {
      total,
      pending,
      done,
      completedPercentage
    }
    return data
  }
})

const userDataSelector = selector({
  key:"userDataSelector",
  get: async ({get}) => {
    const response = await axios.get("http://localhost:3001/users/1")

    return response.data
  }
})

function ItemCreator() {
  const [text, setText] = useState('')
  //const [newTodo, setNewTodo] = useRecoilState(todoListState) permite consumir y establecer
  const setNewTodo = useSetRecoilState(todoListState);
  const onChangeText = (event) => {
    setText(event.target.value)
  }

  const onClick = () => {
    setNewTodo(oldTodoList => {
      return [...oldTodoList, {
        id: idUnico++, text, isCompleted: false
      }]
    })
    setText('')
  }

  return (
    <div>
      <input value={text} onChange={onChangeText}/>
      <button onClick={onClick}>Agregar</button>
    </div>
  )
}

/*
const toDos = [
  {id:1, text: "ToDo 1", isCompleted: false},
  {id:2, text: "ToDo 2", isCompleted: false},
  {id:3, text: "ToDo 3", isCompleted: true},
  {id:4, text: "ToDo 4", isCompleted: false}
]

*/

function TodoList() {

  const toDos = useRecoilValue(todoFilterSelector)
  return (
    <div>
      {
        toDos.map(item => <TodoItem key={item.id} {...item}/>)
      }   
    </div>
  )
}

function changeItem(id, todoList, changedItem) {

  const index = todoList.findIndex(item => item.id === id)
  return [...todoList.slice(0,index), changedItem, ...todoList.slice(index +1, todoList.length) ]

}

function TodoItem({id, text, isCompleted}) {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  
  const onChangeTodoItem = (event) => {
    const textValue = event.target.value 
    const changedItem = {
      id,
      text: textValue,
      isCompleted
    }
    setTodoList(changeItem(id, todoList, changedItem))
  }

  const onToggleCompleted = (event) => {
    
    const changedItem = {
      id,
      text,
      isCompleted: !isCompleted
    }
    setTodoList(changeItem(id, todoList, changedItem))  
  }

  function deleteItem(id, todoList) {

    const index = todoList.findIndex(item => item.id === id)
    return [...todoList.slice(0,index), ...todoList.slice(index +1, todoList.length) ]
  
  }
   
  const onClickDelete = () => {
    setTodoList(deleteItem(id, todoList))     
  }

  return (
    <div>
      <input value={text} onChange={onChangeTodoItem} />
      <input type="checkbox" checked={isCompleted} onChange={onToggleCompleted}/>
      <button onClick={onClickDelete}>X</button>
    </div>
  )
}

const todoFilterState = atom({
  key: "todoFilterState",
  default: 'all'
})

function TodoFilter() {

  const [filterState, setFilterState] = useRecoilState(todoFilterState)
  const onSelectedItem = (event) => {
    const {value} = event.target
    setFilterState(value)
  }

  return (
    <div>
      Filtro: 
      <select value={filterState} onChange={onSelectedItem}>
        <option value="all">Todos</option>
        <option value="pending">Pendientes</option>
        <option value="done">Finalizadas</option>
      </select>
    </div>
  )
}

function TodoStats() {
  const {total, done, pending, completedPercentage} = useRecoilValue(todoStatsSelector)
  return (
    <div>
      <span>Tareas Totales: {total}</span><br/>
      <span>Tareas Pendientes: {pending}</span><br/>
      <span>Tareas Realizadas: {done}</span><br/>
      <span>Progreso: {completedPercentage}%</span><br/>
    </div>
  )
}

function UserData() {

  const user = useRecoilValue(userDataSelector)
  return (
    <h1>{user.name}</h1>
  )
}


export default App;
