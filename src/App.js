// import './App.css'
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { CreateTodoButton } from './CreateTodoButton'
import { TodoItem } from './TodoItem'

const todos = [
	{ text: 'Chop Onion', completed: false },
	{ text: 'Take the React intro course', completed: false },
	{ text: 'Cry with the Llorona', completed: false },
]

function App() {
	return (
		<>
			<TodoCounter />

			<TodoSearch />
			<input placeholder='onion' />

			<TodoList>
				{todos.map((todo) => (
					<TodoItem />
				))}
			</TodoList>

			<CreateTodoButton />
			<button>+</button>
		</>
	)
}

export default App
