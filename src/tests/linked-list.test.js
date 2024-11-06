import LinkedList from "../modules/linked-list";

describe("Linked List", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test("should start empty", () => {
    expect(list.head).toBeNull();
  });

  test("should append a node to the list", () => {
    list.append(10);
    expect(list.head).not.toBeNull();
    expect(list.head.value).toBe(10);
    expect(list.toArray()).toEqual([10]);
  });

  test("should append multiple nodes to the list", () => {
    list.append(10);
    list.append(20);
    list.append(30);

    expect(list.toArray()).toEqual([10, 20, 30]);
  });

  test("should prepend a node to the list", () => {
    list.append(10);
    list.prepend(5);

    expect(list.toArray()).toEqual([5, 10]);
  });

  test("should remove a node by value", () => {
    list.append(10);
    list.append(20);
    list.append(30);

    list.remove(20);
    expect(list.toArray()).toEqual([10, 30]);
  });

  test("should not remove anything if node not found", () => {
    list.append(10);
    list.append(20);

    list.remove(30);
    expect(list.toArray()).toEqual([10, 20]);
  });

  test("should find a node by value", () => {
    list.append(10);
    list.append(20);

    const node = list.find(20);
    expect(node).not.toBeNull();
    expect(node.value).toBe(20);
  });

  test("should return null if node not found", () => {
    list.append(10);
    const node = list.find(30);
    expect(node).toBeNull();
  });

  test("should handle removing the first node in a single-node list", () => {
    list.append(10);
    list.remove(10);
    expect(list.head).toBeNull();
  });

  test("should handle removing the last node in a multi-node list", () => {
    list.append(10);
    list.append(20);
    list.append(30);

    list.remove(30);
    expect(list.toArray()).toEqual([10, 20]);
  });

  test("should return the correct size of the list", () => {
    list.append(10);
    list.append(20);
    list.append(30);
    expect(list.size).toBe(3);
    list.pop();
    expect(list.size).toBe(2);
  });

  test("should return the tail of the list", () => {
    list.append(10);
    list.append(20);
    list.append(30);
    const tailNode = list.tail;
    expect(tailNode.value).toBe(30);
    expect(tailNode.nextNode).toBeNull();
  });

  test("should pop the last node from the list", () => {
    list.append(10);
    list.append(20);
    list.append(30);

    const poppedNode = list.pop();
    expect(poppedNode.value).toBe(30);
    expect(list.toArray()).toEqual([10, 20]);

    const secondPop = list.pop();
    expect(secondPop.value).toBe(20);
    expect(list.toArray()).toEqual([10]);

    const lastPop = list.pop();
    expect(lastPop.value).toBe(10);
    expect(list.toArray()).toEqual([]);
  });

  test("should check if a value exists in the list", () => {
    list.append(10);
    list.append(20);
    list.append(30);

    expect(list.contains(20)).toBe(true);
    expect(list.contains(40)).toBe(false);
  });

  test("should convert the list to a string representation", () => {
    list.append(10);
    list.append(20);
    list.append(30);

    expect(list.toString()).toBe("( 10 ) -> ( 20 ) -> ( 30 ) -> null");

    list.pop();
    expect(list.toString()).toBe("( 10 ) -> ( 20 ) -> null");

    list.remove(20);
    expect(list.toString()).toBe("( 10 ) -> null");

    list.remove(10);
    expect(list.toString()).toBe("null");
  });

  test("should return the node at the given index", () => {
    list.append(10);
    list.append(20);
    list.append(30);

    // Test retrieving nodes at different indices
    const nodeAtIndex0 = list.at(0);
    expect(nodeAtIndex0.value).toBe(10);

    const nodeAtIndex1 = list.at(1);
    expect(nodeAtIndex1.value).toBe(20);

    const nodeAtIndex2 = list.at(2);
    expect(nodeAtIndex2.value).toBe(30);
  });

  test("should return null if the index is out of bounds", () => {
    list.append(10);
    list.append(20);

    // Test index that is out of bounds
    const outOfBounds1 = list.at(3); // No node at index 3
    expect(outOfBounds1).toBeNull();

    const outOfBounds2 = list.at(-1); // Negative index
    expect(outOfBounds2).toBeNull();
  });
});
