import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './App.css'

function App() {

	return (
		<>
			<div className='mx-auto w-[80%] rounded-md text-center'> 
				<AddTodo />
				<div className="mt-7 border-[1px] border-indigo-500" ></div>
				<Todos />
			</div>
		</>
	)
}

export default App
