var obj5 = {
    val: 5,
    next: null
};

var obj4 = {
    val: 4,
    next: obj5
};

var obj3 = {
    val: 3,
    next: obj4
};

var obj2 = {
    val: 2,
    next: obj3
};

var obj1 = {
    val: 1,
    next: obj2
};

function reversePrint(obj) {
    if (!obj) {
        return;
    }

    reversePrint(obj.next);
    console.log(obj.val);
}

reversePrint(obj1);

console.log("Hi");
