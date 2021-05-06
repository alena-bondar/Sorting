import {initRandomNumbers} from './array-script.js';
import {drawArray} from './draw-sort-comb.js';

let buttonStartOne = document.querySelector('.button_start_one');
let intervalId;
//sorting items when the button is clicked
buttonStartOne.onclick = function () {
    if (intervalId) {
        clearInterval(intervalId);
    }
    let steps = [];

    function combSort(arr) {
        for (let i = 1; i < arr.length; i++) {
            for (let j = i - 1; j > -1; j--) {
                if (arr[j + 1] < arr[j]) {
                    [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
                    steps.push([...arr]);
                }
            }
        }
        return arr;
    }

    let randomNumbers = [...initRandomNumbers];
    combSort(randomNumbers);

    let increment = 0;
    intervalId = setInterval(function () {
        drawArray(steps[increment]);
        increment++;

        if (steps.length === increment) {
            clearInterval(intervalId);
        }
    }, 10);
}