// Highlight of this problem is constant time O(1) (note 2) is required instead of linear time. And the key to solve it is to create two stack: one regular 'stack' and a 'min' stack to store minimun value of all elements being added. To further explain, when a new element is added to the 'stack', compare this element with the smallest element in 'min' stack. If the new element is smaller than the smallest element in 'min' stack, add this new element to the 'min' stack. Otherwise, duplicate the smallest element in 'min' stack and push it to 'min' stack again. This way, the top element in the 'min' stack in always the minimum. And when we need to access the minimum value, we just need to get the top element in 'min' stack.

class MinStack {
    constructor() {
        this.stack = [];
        this.min = [];
    }

//construct (note 1) two stack under class MinStack. One regular
//'stack and the other 'min' stack used to store minimum value

    push(x) {
        if (!this.min.length) this.min.push(x);
        else this.min.push(Math.min(x, this.getMin()));

//If length (note 3) of 'min' stack does not exist (note 4), then
//it's an empty array. Push (note 5) element 'x' into 'min'
//stack.If 'min' stack is not empty, compare 'x' and the smallest
//value currently in 'min' stack, and push the smaller value into
//'min' stack. 

        this.stack.push(x);

//Push (note 5) element 'x' into the regular 'stack'.

    }

    pop() {
        this.min.pop()
        return this.stack.pop()

//Pop (note 6) last element from both stack

    }

    top() {
        return this.stack[this.stack.length-1];

//return last element of the stack

    }

    getMin() {
        return this.min[this.min.length-1];

//return last element of the stack which is also the minumum

    }
}