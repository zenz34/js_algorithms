      for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            if (k == 0) {
                //count how many elements in the array that appear more than twice.
                if (entry.getValue() >= 2) {
                    count++;
                } 
            } else {
                if (map.containsKey(entry.getKey() + k)) {
                    count++;
                }
            }
        }

function kDiff(a, k) {
    let set = new Set();
    let count = 0;
    for (let val of a) {
        if (!set.has(val)) {
            set.set(val, 0);
        }
    }

    set.forEach((val1, val2, set) => {
        if (set.has(val1 + k)) {
            count++;
        }
    });

    return count;
}



function kDifference(a, k) {
    let set = new Set();
    let count = 0;
    for (let val of a) {
        set.add(val);
    }

    set.forEach((val1, val2, set) => {
        if (set.has(val1 + k)) {
            count++;
        }
    });

    return count;
}