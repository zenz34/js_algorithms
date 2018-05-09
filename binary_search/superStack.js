function isEmpty(stack) {
    return stack.length <= 0 ? true : false;
}

function top(stack) {
    return stack[stack.length - 1];
}

function printStackTop(stack) {
    if (isEmpty(stack)) {
        console.log("EMPTY");
    } else {
        console.log(top(stack));
    }
}

function push(stack, num) {
    stack.push(num);
    printStackTop(stack);
}

function pop(stack) {
    if (isEmpty(stack)) {
        printStackTop(stack);
        return;
    }
    stack.pop();
    printStackTop(stack);
}

function inc(stack, count, incVal) {
    if (isEmpty(stack)) return;
    for (let i = 0; i < count; i++) {
        stack[i] += incVal;
    }
    printStackTop(stack);
}

function superStack(operations) {
    let stack = new Array();

    operations.map(op => {
        let opStrArr = op.split(" ");
        if (opStrArr[0] === "push") {
            push(stack, parseInt(opStrArr[1], 10));
        } else if (opStrArr[0] === "pop") {
            pop(stack);
        } else if (opStrArr[0] === "inc") {
            inc(stack, parseInt(opStrArr[1], 10), parseInt(opStrArr[2], 10));
        }
    });

    return stack;
}

superStack([
    "push 4",
    "pop",
    "push 3",
    "push 5",
    "push 2",
    "inc 3 1",
    "pop",
    "push 1",
    "inc 2 2",
    "push 4",
    "pop",
    "pop"
]);
