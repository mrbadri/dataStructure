class Node {
    data: any;
    left: Node | null;
    right: Node | null;

    constructor(data: any, left: Node | null = null, right: Node | null = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
