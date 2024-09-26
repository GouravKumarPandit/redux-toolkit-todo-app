
function AddTodo() {

	return (
		<form className="space-x-3 mt-12">
			<input
				type="text"
				className="bg-teal-300 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-[60%]"
				placeholder="Enter a Todo..."
			/>
			<button
				type="submit"
				className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
			>
				<span className="text-xl">+</span> Add Todo
			</button>
		</form>
	)
}

export default AddTodo