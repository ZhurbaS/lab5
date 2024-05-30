function calculateC(A, B) {
    for (let i = 0; i < A.length; i++) {
        if (A[i] !== B[i]) {
            C.push(1 / (A[i] - B[i]));
        } else {
            C.push(1);
        }
    }
    return C;
}

function swapMaxAndFirst(C) {
    let maxIndex = 0;
    for (let i = 1; i < C.length; i++) {
        if (C[maxIndex] < C[i]) {
            maxIndex = i;
        }
    }
    let temp = C[0];
    C[0] = C[maxIndex];
    C[maxIndex] = temp;
}

function bubbleSort(C) {
    for (let i = 0; i < C.length - 1; i++) {
        for (let j = 0; j < C.length - i - 1; j++) {
            if (C[j] > C[j + 1]) {
                let temp = C[j];
                C[j] = C[j + 1];
                C[j + 1] = temp;
            }
        }
    }
}

let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let B = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
let C = [];

calculateC(A, B);

console.log("Array A:", A);
console.log("Array B:", B);
console.log("Array C:", C);

swapMaxAndFirst(C);

console.log("Array C after swapping:", C);

bubbleSort(C);

console.log("Array C after bubble sorting:", C);