const users = ["Mike", "Jack", "Bob", "Jane"];

users.push({
    fullName: "John",
    friends: ["Bob", "Jane", "Chris", {fullName: "Jorge"}],
});

users.push([]);

console.log(users);
console.log(users[4].friends[3].fullName);

console.log('--------------------------------------------------------------------------------');

// print all users if it's a string or object like {fullName: "test"}
function printUsers(listOfUsers) {
    for (const user of listOfUsers) {
        if (typeof user === "string") {
            console.log(user);
        } else if (typeof user === "object" && user.hasOwnProperty("fullName")) {
            console.log(user.fullName)
        }
    }
}

printUsers(users);

const user = {
    fullName: "Jane Doe",
    sayHello: function () {
        return "Hello my name is " + this.fullName + "!";
    }
};

console.log(user.sayHello());

console.log(user.sayHello());


console.log('--------------------------------------------------------------------------------');

function printFullName(firstName, lastName) {
    fullName = firstName + " " + lastName;
    return fullName;
}

console.log(printFullName("Jane", "Doe"));

console.log(fullName);

console.log(printFullName("Jack", "White"));

console.log(fullName);

console.log('--------------------------------------------------------------------------------');

function changeSimpleName(firstName) {
    firstName = "New name";
}


let myName = "John Doe"; // string, number, null, undefined

changeSimpleName(myName);

console.log(myName);

function changeComplexName(someUser) {
    someUser.fullName = "New Name";
}

let myUser = {
    fullName: "Jack White"
};

changeComplexName(myUser);

console.log(myUser.fullName);

function addNewFriend(friends, fullName) {
    friends.push(fullName);
}

const friendsOfJack = ["Bob", "Jen"];

addNewFriend(friendsOfJack, "Jack");

console.log(friendsOfJack);

console.log('--------------------------------------------------------------------------------');

const testNumbers = [7, 11, 5, [9, 10, 11, 12], 4, 3, 12, [9, 4, 6, 1], 3];

function findSmallestNumber(numbers) {
    if (typeof numbers === "undefined" || numbers.length === 0) {
        return null;
    }

    let smallest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        const current = numbers[i];

        if (current < smallest) {
            smallest = current;
        }
    }

    return smallest;
}

function findSmallestNumberNested(numbers) {
    if (typeof numbers === "undefined" || numbers.length === 0) {
        return null;
    }

    let smallest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        const current = numbers[i];

        if (typeof current == "number" && current < smallest) {
            smallest = numbers[i];
            continue;
        }

        if (!Array.isArray(current)) {
            continue;
        }
        
        let minCurrent = findSmallestNumber(current);

        if (minCurrent < smallest) {
            smallest = minCurrent
        }
    }

    return smallest;
}



console.log(findSmallestNumberNested(testNumbers));

// console.log(findSmallestNumber([2, 3, 45, 56, 6, 7, 7, 8, 20, 33]));

// console.log(findSmallestNumber([99, 45, 5, 11, 12, 13, 15, 3]));

// console.log(findSmallestNumber([]));

// console.log(findSmallestNumber());

const $form = document.getElementById('test');

$form.addEventListener('submit', (event) => {
    event.preventDefault();
});