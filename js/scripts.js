'use strict';

document.addEventListener('DOMContentLoaded', function () {
    console.log('Content Loaded');
    const myList = document.querySelector('#myList');
    // Select the button to use for the function below:
    const generateList = document.querySelector('#generateList');

    generateList.addEventListener('click', function () {
       
        //Grabs input items - changed to select ALL input items
        const inputItems = document.querySelectorAll('input');
        //Creates the ul
        const listElement = document.createElement('ul');
        //Appends the ul
        myList.append(listElement);
    
        //Creates an array from the input 
        const myListArray = Array.from(inputItems);
     
        //For each item in the myListArray - add the value and append
        myListArray.forEach(function (inputItem) {
            const listItem = document.createElement('li');
            listItem.innerText = inputItem.value;
            listElement.append(listItem);
        });

    });
});
