import Todo from "../models/Todo";

interface TodoItemProps {
  item: Todo;
  children?: React.ReactNode | React.ReactNode[];
}

const TodoItem: React.FunctionComponent<TodoItemProps> = (props) => {
  return <li>{props.item.text}</li>;
};

export default TodoItem;
