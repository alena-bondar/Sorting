import {initRandomNumbers} from './array-script.js';
import {drawArray} from './draw-sort-shake.js';

let buttonStartTwo = document.querySelector('.button_start_two');
let intervalId;
//sorting items when the button is clicked
buttonStartTwo.onclick = function (e) {
    if (intervalId) {
        clearInterval(intervalId);
    }
    let steps = [];

    function swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        steps.push([...arr]);
    }

    function shakeSort(arr) {

        let left = 0;
        let right = arr.length - 1;
        while (right > left) {
            for (let i = left; i < right; i++) {
                if (arr[i] > arr[i + 1]) {
                    swap(arr, i, i + 1);
                }
            }
            right--;
            for (let j = right; j > left; j--) {
                if (arr[j] < arr[j - 1]) {
                    swap(arr, j, j - 1)
                }
            }
            left++;
        }
        return arr;
    }

    let randomNumbers = [...initRandomNumbers];
    shakeSort(randomNumbers);

    let increment = 0;
    intervalId = setInterval(function () {
        drawArray(steps[increment]);
        increment++;

        if (steps.length === increment) {
            clearInterval(intervalId);
        }
    }, 10);
}

