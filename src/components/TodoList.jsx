import { memo } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
    return (
        <div className="mt-4">
            {todos.length === 0 ? (
                <div className="py-4 text-center text-gray-500">할 일이 없습니다. 새로운 할 일을 추가해보세요!</div>
            ) : (
                todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
                ))
            )}
        </div>
    );
};

// React.memo로 부모 리렌더링에도 불필요한 재렌더링 방지
export default memo(TodoList);
