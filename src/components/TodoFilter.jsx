import { memo, useCallback } from 'react';

const TodoFilter = ({ filter, onFilterChange }) => {
    // 버튼 클릭 핸들러를 useCallback으로 감싸서 메모이제이션
    const handleClick = useCallback((value) => () => onFilterChange(value), [onFilterChange]);

    const filters = [
        { key: 'all', label: '전체' },
        { key: 'active', label: '활성' },
        { key: 'completed', label: '완료' },
    ];

    return (
        <div className="my-5 p-2.5 bg-gray-100 rounded">
            <span className="mr-2">필터: </span>
            {filters.map(({ key, label }) => (
                <button
                    key={key}
                    onClick={handleClick(key)}
                    className={`mr-1.5 px-2.5 py-1.5 rounded border-none ${
                        filter === key ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                    }`}
                >
                    {label}
                </button>
            ))}
        </div>
    );
};

// React.memo로 부모 리렌더링에도 불필요한 재렌더링 방지
export default memo(TodoFilter);
