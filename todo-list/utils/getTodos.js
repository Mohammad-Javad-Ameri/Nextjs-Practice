// This function retrieves the list of todos from local storage.
export const getTodos = () => {
  // It first tries to get the item with the key "todoList" from local storage.
  const allTodos = window.localStorage.getItem("todoList");
  // If the item exists, it parses the JSON string back into an object and returns it.
  // If the item does not exist it returns an empty array.
  return allTodos ? JSON.parse(allTodos) : [];
};
