export default class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert at the end of the list
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }

  // Insert at the beginning of the list
  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  // Remove a node by value
  remove(value) {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.nextNode;
      return;
    }

    let current = this.head;
    while (current.nextNode && current.nextNode.value !== value) {
      current = current.nextNode;
    }

    if (current.nextNode) {
      current.nextNode = current.nextNode.nextNode;
    }
  }

  // Find a node by value
  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.nextNode;
    }
    return null;
  }

  // Return the size of the list
  get size() {
    let current = this.head;
    let count = 0;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  // Return the last node (tail)
  get tail() {
    let current = this.head;
    while (current && current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  // Remove and return the last node (pop)
  pop() {
    if (!this.head) return null;

    if (!this.head.nextNode) {
      const poppedNode = this.head;
      this.head = null;
      return poppedNode;
    }

    let current = this.head;
    while (current.nextNode && current.nextNode.nextNode) {
      current = current.nextNode;
    }

    const poppedNode = current.nextNode;
    current.nextNode = null;
    return poppedNode;
  }

  // Check if a value is in the list
  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  // Convert list to string representation
  toString() {
    let current = this.head;
    let str = "";
    while (current) {
      str += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return str + "null";
  }

  // Convert list to array (for easy verification in tests)
  toArray() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.nextNode;
    }
    return arr;
  }

  at(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        return current;
      }
      count++;
      current = current.nextNode;
    }
    return null; // Return null if index is out of bounds
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}
