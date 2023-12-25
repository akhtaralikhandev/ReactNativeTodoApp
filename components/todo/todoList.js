import { View, Text, StyleSheet } from "react-native";

const TodoList = ({ todos }) => {
  return (
    <View>
      <Text style={styles.container}>Your todo list</Text>
      {todos.map((item, index) => (
        <View key={index} style={styles.todoContainer}>
          <Text>{item.text}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
  },
  todoContainer: {
    padding: 5,
    display: "flex",
    flexDirection: "column",
    gap: 4, // Use numbers for pixel values
  },
});

export default TodoList;
