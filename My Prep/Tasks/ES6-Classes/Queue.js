// Create a class that represents a queue. The queue
// should have methods for enqueueing and dequeuing
// items, and checking if it is empty.

class Queue {
    constructor() {
        this.queue = [];
    }

    push(value) {
        this.queue.push(value);
    }

    pop() {
        this.queue.pop();
    }

    isEmpty() {
        if(this.queue.length <= 0) {
            console.log("The queue is empty");
        } else {
            console.log("The queue is not empty");
        }
    }

    clear() {
        this.queue = [];
    }

    peek() {
        if (this.queue.length === 0) {
          return null;
        }
        return this.queue[this.queue.length - 1];
    }
}

let stack = new Stack();