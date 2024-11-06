![Computer Science | Linked Lists](./src/misc/banner.png)

![Make & Leave Project - Static Badge](https://img.shields.io/badge/make_%26_leave_project-p?style=for-the-badge)

# About
A demonstration of what linked lists can do using JavaScript.

# Installation

To use this linked list, simply include the `LinkedList` class in your JavaScript code.

```bash
npm install @tekksunn/cs-linked-lists
```

# Linked List

This is a simple implementation of a **Linked List** in JavaScript. It provides various methods for interacting with the list, such as adding, removing, finding, and displaying nodes.

## Features

The linked list includes the following methods:

- **append(value)**: Adds a new node with the specified value to the end of the list.
- **prepend(value)**: Adds a new node with the specified value to the beginning of the list.
- **pop()**: Removes the last node in the list.
- **find(value)**: Finds the first node that matches the specified value and returns it.
- **at(index)**: Returns the node at the specified index.
- **contains(value)**: Checks if a node with the specified value exists in the list.
- **size**: Gets the number of nodes in the list.
- **tail**: Gets the last node in the list.
- **toString()**: Converts the list into a string representation.
- **remove(value)**: Removes the first node that matches the specified value.
- **toArray()**: Returns an array containing all the values from the linked list.

## Usage

**Create a new Linked List:**
```javascript
const list = new LinkedList();
```

**Append a node to the list:**
```javascript
list.append(10); // Adds a node with value 10 to the end of the list
```

**Prepend a node to the list:**
```javascript
list.prepend(5); // Adds a node with value 5 to the beginning of the list
```

**Get the size of the list:**
```javascript
console.log(list.size); // Gets the size of the list (number of nodes)
```

**Get the tail (last node):**
```javascript
console.log(list.tail); // Gets the last node in the list
```

**Access a node by index:**
```javascript
console.log(list.at(0)); // Returns the node at index 0 (first node)
```

**Check if the list contains a value:**
```javascript
console.log(list.contains(10)); // Returns true if the list contains the value 10
```

**Remove the last node:**
```javascript
list.pop(); // Removes the last node from the list
```

**Remove a specific value from the list:**
```javascript
list.remove(10); // Removes the first node with value 10
```

**Find a node by its value:**
```javascript
console.log(list.find(5)); // Returns the node with value 5
```

**Convert the list to a string:**
```javascript
console.log(list.toString()); // Returns a string representation of the list
```

**Convert the list to an array:**
```javascript
console.log(list.toArray()); // Returns an array with all values in the list
```

## Example

Here is a full example showing how the linked list works:

```javascript
const list = new LinkedList();

list.append(10);
list.append(20);
list.prepend(5);

console.log(list.size()); // 3
console.log(list.toString()); // "( 5 ) -> ( 10 ) -> ( 20 ) -> null"
console.log(list.at(1)); // Node with value 10

list.pop();
console.log(list.toString()); // "( 5 ) -> ( 10 ) -> null"

list.remove(10);
console.log(list.toString()); // "( 5 ) -> null"

console.log(list.contains(5)); // true
console.log(list.contains(10)); // false

console.log(list.find(5)); // Node with value 5
console.log(list.find(10)); // null

console.log(list.toArray()); // [5]
```

## Contributing

Feel free to fork this project and create a pull request if you'd like to contribute. Please make sure to write tests for any new features you add.

## License

This project is open source and available under the [MIT License](LICENSE).
