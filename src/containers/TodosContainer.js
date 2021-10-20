import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Todos from "../components/Todos"
import { addTodo, toggleTodo } from "../modules/todos";

const TodosContainer = () => {
  
  // store에서 state값 가져오기
  const todos = useSelector(state => state.todos);


  // 액션들을 dispatch하는 함수 만들기
  const dispatch = useDispatch();

  const onCreate = text => dispatch(addTodo(text))
  const onToggle = id => dispatch(toggleTodo(id))
  
  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle}/>
}

export default TodosContainer;