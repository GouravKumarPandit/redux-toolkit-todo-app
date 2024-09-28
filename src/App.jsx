import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './App.css'
import { useState } from 'react'

function App() {
	const [editTodo, setEditTodo] = useState({id: "", todo: ""});

	function showEditTodo(todos){
		setEditTodo(todos)
	}

	return (
		<>
			<div className='mx-auto w-[80%] rounded-md text-center'> 
				<AddTodo editTodo={editTodo} />
				<div className="mt-7 border-[1px] border-indigo-500" ></div>
				<Todos showEditTodo={showEditTodo} />
			</div>
		</>
	)
}

export default App
