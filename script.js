// Predefined chances for each item
const item1Chance = 50;  // 50% chance for Item 1
const item2Chance = 30;  // 30% chance for Item 2
const item3Chance = 20;  // 20% chance for Item 3

// Access DOM elements
const collectionList = document.getElementById('collection');

// Function to generate a random number between 1 and 100
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Function to handle the "Roll" action
function roll() {
    const random = getRandomNumber();
    let result = '';

    // Determine which item is rolled based on the predefined chances
    if (random <= item1Chance) {
        result = 'Item 1';
    } else if (random <= item1Chance + item2Chance) {
        result = 'Item 2';
    } else if (random <= item1Chance + item2Chance + item3Chance) {
        result = 'Item 3';
    } else {
        result = 'Nothing';
    }

    // Add the result to the collection list
    const listItem = document.createElement('li');
    listItem.textContent = result;
    collectionList.appendChild(listItem);
}
