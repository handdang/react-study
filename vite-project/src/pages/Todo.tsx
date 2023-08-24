//앞글자가 대문자여야함
import TodoHead from '@/components/todo/header.tsx';
import '~/todo.scss'
const Todo = () => {
    return <div className="todolist-wrpper">
        <section>
            <p>투두리스트</p>
            <TodoHead />
        </section>
        
    </div>
}
export default Todo