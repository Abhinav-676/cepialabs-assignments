// ES6 Classes
class OpNode {
    constructor(left, right, op) {
        this.left = left
        this.right = right
        this.op = op
    }
}

// ES6 Classes
class ValNode {
    constructor(val) {
        this.val = val
    }
}


// ES6 Classes
export class Expression {
    constructor(exp) {
        this.exp = exp
        this.op_stack = ['/', '*', '+', '-']
        this.root = this.make(exp, this.op_stack)
    }

    make(exp, op_stack) {
        // ES6 object destructuring 
        op_stack = [...op_stack]
        if (op_stack.length == 0) {
            return new ValNode(Number(exp))
        }

        let curr_op = op_stack.pop()

        for (let i = exp.length - 1; i >= 0; i--) {
            if (exp[i] === curr_op) {
                const l = this.make(exp.slice(0, i).trim(), this.op_stack)
                const r = this.make(exp.slice(i + 1, exp.length).trim(), op_stack)

                return new OpNode(l, r, curr_op)
            }
        }

        return this.make(exp, op_stack)
    }

    evaluate() {
        // ES6 arrow functions
        const traverse_evaluate = (node) => {
            if (node instanceof ValNode) {
                return node;
            }

            node.left = traverse_evaluate(node.left);
            node.right = traverse_evaluate(node.right);

            const l = node.left.val;
            const r = node.right.val;

            switch (node.op) {
                case '/':
                    return new ValNode(l / r);
                case "*":
                    return new ValNode(l * r);
                case "+":
                    return new ValNode(l + r);
                case "-":
                    return new ValNode(l - r); 
                default:
                    throw Error("Unknown operator: " + node.op);
            }
        }
        return traverse_evaluate(this.copy_root()).val;
    }

    copy_root() {
        // ES6 arrow functions
        const copy_node = (node) => {
            if (node instanceof ValNode) {
                return new ValNode(node.val);
            } 

            const leftCopy = copy_node(node.left);
            const rightCopy = copy_node(node.right);
            return new OpNode(leftCopy, rightCopy, node.op);
        }
        return copy_node(this.root);
    }
} 