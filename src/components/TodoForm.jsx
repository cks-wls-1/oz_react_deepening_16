import { memo, useRef, useCallback } from 'react';

const TodoForm = ({ onAdd }) => {
    const inputRef = useRef(null);

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            const value = inputRef.current.value.trim();
            if (!value) return;

            onAdd(value);
            inputRef.current.value = '';
        },
        [onAdd],
    );

    return (
        <form onSubmit={handleSubmit} className="flex mb-5">
            <input
                type="text"
                ref={inputRef}
                placeholder="새로운 할 일을 입력하세요"
                className="flex-1 p-2.5 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="px-4 py-2.5 bg-blue-500 text-white border-none rounded-r-md cursor-pointer hover:bg-blue-600"
            >
                추가
            </button>
        </form>
    );
};

export default memo(TodoForm);
