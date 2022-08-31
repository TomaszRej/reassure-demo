import React, {useState, useEffect, FC, useMemo} from 'react';
import {View, Text} from 'react-native';

const getFilteredTodos = (todos: string[], filter: string) => {
  return todos.filter((todo: string) => todo === filter);
};

interface IProps {
  todos: string[];
  filter: string;
}

const Todos: FC<IProps> = ({todos, filter}) => {
  // 🔴 Avoid: redundant state and unnecessary Effect
  // const [newTodo, setNewTodo] = useState<string[]>([]);
  //
  // useEffect(() => {
  //   setNewTodo(getFilteredTodos(todos, filter));
  // }, [todos, filter]);

  // const newTodo = useMemo(() => getFilteredTodos(todos, filter), [todos, filter]);
  const newTodo = getFilteredTodos(todos, filter);

  return (
    <View>
      <Text>{JSON.stringify(newTodo)}</Text>
    </View>
  );
};

export default Todos;
