import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";
import TodoList from "./todoList";
const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoItem, setTodoItem] = useState("");
  const addTodo = (e) => {
    e.preventDefault();
    if (todoItem) {
      setTodoList((prev) => [...prev, { index: Date.now(), text: todoItem }]);
      setTodoItem("");
    } else {
      alert("plz write something");
    }
  };
  return (
    <View style={style.container}>
      <View style={style.container}>
        <TextInput
          style={style.input}
          placeholder="Add a new todo"
          value={todoItem}
          onChangeText={(text) => setTodoItem(text)}
        />
        <Button
          style={{ fontSize: 20, color: "green" }}
          styleDisabled={{ color: "red" }}
          onPress={(e) => addTodo(e)}
          title="Press me"
        ></Button>
      </View>
      <View>
        <TodoList todos={todoList} />
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  input: {
    borderWidth: 1,
  },
});
export default TodoApp;
