import { useState } from "react";
import { addUpdateTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";
import { LuFileEdit } from "react-icons/lu";

function AddTodo({editTodo}) {
	const [editCount, setEditCount] = useState(false);
	const [todo, setTodo] = useState(editTodo.todo);
	const dispatch = useDispatch();

	if(editTodo.todo && !editCount){
		setTodo(editTodo.todo);
		setEditCount(true);
	}

	function saveTodo(event, id = ""){
		event.preventDefault();
		const editTodoSave = {
			id: id, 
			todo: todo
		}
		dispatch(addUpdateTodo(editTodoSave));
		editTodo.todo = "";
		setTodo("");
		setEditCount(false);
	}

	return (
		<form className="space-x-3 mt-12" onSubmit={(event) => saveTodo(event, editTodo.id)}>
			<input
				type="text"
				value={todo}
				onChange={(event) => {
					setTodo(event.target.value); 
				}}
				className="bg-teal-300 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-[60%]"
				placeholder="Enter a Todo..."
			/>
			<button
				type="submit"
				className="text-white bg-indigo-500 border-0 py-2 px-6 w-[160px] focus:outline-none hover:bg-indigo-600 rounded text-lg"
			>
				{editTodo.todo ? (<div className="flex justify-around items-center"><LuFileEdit /> {`Edit Todo`}</div>) : (<span className="text-xl">+ Add Todo</span>) }
			</button>
		</form>
	)
}

export default AddTodo