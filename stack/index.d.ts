declare class Stack {
    count: number;
    storage: object;

    isEmpty(): boolean;
    size(): number;
    peek(): any;
    push(value: any): void;
    pop(): any;
    clear(): void;
}

export = Stack;
