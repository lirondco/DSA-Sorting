// 4. Implementing merge sort

function mSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mSort(left);
    right = mSort(right);
    return merge(left, right, array);
};

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};

//Question 3: qSort function

function qSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    console.log(array)
    const middle = partition(array, start, end);
    array = qSort(array, start, middle);
    array = qSort(array, middle + 1, end);
    return array;
};

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}

//5. Sorting a linked list using merge sort

function main() {
const testLinkedList = new LinkedList();
testLinkedList.insertLast(7)
testLinkedList.insertFirst(1)
testLinkedList.insertFirst(9)
testLinkedList.insertFirst(16)
testLinkedList.insertFirst(13)
testLinkedList.insertFirst(15)
testLinkedList.insertFirst(11)
testLinkedList.insertFirst(19)
testLinkedList.insertFirst(17)
testLinkedList.insertFirst(8)
console.log(qSort(process(testLinkedList.head)))
}

const process = obj => (({ value, next }) => 
  [ value, ...((next !== null) ? process(next): []) ])(obj);

//main()

// 6. Bucket sort

function sortBinary(arr) {
    let i = 0;
    for (let j = 0; j < arr.length; j++) {
        if(arr[j] === 0){
            swap(arr, i, j);
            i++;
        }
    }
    return arr;
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

const binaryArray = [1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0]
//console.log(sortBinary(binaryArray))

const books = [
    {
        title: 'Como Agua Para Chocolate',
        author: 'Laura Esquivel'
    },
    {
        title: 'Sipur Al Ahava VaHoshech',
        author: 'Amos Oz'
    },
    {
        title: 'Madame Bovary',
        author: 'Gustave Flaubert'
    },
    {
        title: 'Ir Hayona',
        author: 'Nathan Alterman'
    },
    {
        title: 'In the presence of absence',
        author: 'Mahmoud Darwish'
    }
]

console.log(books.sort(function(a, b){
    if(a.title < b.title) { return -1; }
    if(a.title > b.title) { return 1; }
    return 0;
}))