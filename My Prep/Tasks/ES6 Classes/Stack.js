const _itemArray = new WeakMap();

class Stack {

    constructor() {
        _itemArray.set(this, []);
    }

    push(obj) {
        _itemArray.get(this).push(obj)
    }

    peek() {
        console.log(_itemArray.get(this)[length - 1]);
    }

    pop() {
        if(_itemArray.get(this).length === 0) {
            throw new Error('Stack is empty!');
        }

        this._itemArray.get(this).pop();
    }

    get counter() {
        return _itemArray.get(this).length;
    }
}

const stack = new Stack();