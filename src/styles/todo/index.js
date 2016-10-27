import { StyleSheet } from 'react-native';

export const AddTodoStyle = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row'
  },
  textInput: {
    marginRight:20,
    flex: 1
  },
  buttonAddTodo: {
    flex: 0
  }
});

export const TodoStyle = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  todoText: {
    marginRight:20,
    flex: 1
  },
  buttonRemoveTodo: {
    flex: 0
  }
});

export const TodoListStyle = StyleSheet.create({
  listView: {
    margin: 20
  },
  emptyView: {
    alignItems: 'center'
  }
});
