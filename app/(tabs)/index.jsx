import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const [nameList, setNameList] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([
        ...tasks,
        { id: Date.now().toString(), text: task, completed: false },
      ]);
      setTask("");
    }
  };

  const addName = () => {
    if (name.trim() !== "") {
      setNameList([...nameList, { id: Date.now().toString(), name: name }]);
      setName("");
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeName = (nameId) => {
    setNameList(nameList.filter((x) => x.id !== nameId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do App</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <Button title="Add" onPress={addTask} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write your name here"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Button title="Show Name" onPress={addName} />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text
              style={[
                styles.itemText,
                {
                  textDecorationLine: item.completed ? "line-through" : "none",
                },
              ]}
            >
              {item.text}
            </Text>
            <Button
              title="Toggle"
              onPress={() => toggleTaskCompletion(item.id)}
            />
            <Button title="Remove" onPress={() => removeTask(item.id)} />
          </View>
        )}
      />

      <Text style={styles.namesHeader}>Names Here</Text>

      <FlatList
        data={nameList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Button title="Remove" onPress={() => removeName(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    marginRight: 10,
    padding: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
  },
  namesHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
});

export default App;
