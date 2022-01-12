import PropTypes from 'prop-types';

const ToDoItem = ({ todo }) => {
  return (
    <li>
      <input type="checkbox" checked={todo.isCompleted} />
      <span>{todo.title}</span>
    </li>
  );
};

ToDoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ToDoItem;
