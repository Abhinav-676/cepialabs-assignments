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
        this.exp = this.parse_exp(exp)
        this.op_priority = {
            "-": 100,
            "+": 100,
            "*": 300,
            "/": 300
        }
        this.root = this.make(this.exp)
    }

    parse_exp(raw_exp) {
        const regex = /\d+(\.\d+)?|[+\-*/]/g;
        const tokens = raw_exp.match(regex)

        const recursor = (tokens, i) => {
            if (i == tokens.length - 1) {
                return new ValNode(Number(tokens[i]))
            }

            const l = new ValNode(Number(tokens[i]))
            const op = tokens[i + 1]
            const r = recursor(tokens, i + 2)

            return new OpNode(l, r, op)
        }

        return recursor(tokens, 0)
    }

    make(exp) {
        const copy_exp = this.copy_node(exp)
        let head = copy_exp

        const recursor = (node, parent) => { 
            if (node instanceof ValNode || node.right instanceof ValNode) {
                return
            }

            if (this.op_priority[node.op] >= this.op_priority[node.right.op]) {
                const right_node = node.right
                if (node == head) {
                    head = right_node
                } else {
                    parent.right = right_node
                }

                node.right = right_node.left
                right_node.left = node

                recursor(head, null)
                return
            }

            recursor(node.right, node)
        }

        recursor(head, null)
        return head
    }

    print_exp() {

    }

    evaluate() {
        // ES6 arrow functions
        const traverse_evaluate = (node) => {
            if (node instanceof ValNode) {
                return node;
            }

            node.right = traverse_evaluate(node.right);
            node.left = traverse_evaluate(node.left);

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
        return this.copy_node(this.root);
    }

    copy_node(node) {
        if (node instanceof ValNode) {
            return new ValNode(node.val);
        } 

        const leftCopy = this.copy_node(node.left);
        const rightCopy = this.copy_node(node.right);
        return new OpNode(leftCopy, rightCopy, node.op);
    }
} 