const canvas = document.getElementById('sorting_comb');
let ctx = canvas.getContext('2d');

export function drawArray(numbers) {
    //clearing the canvas
    ctx.clearRect(0, 0, 1000, 520);
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        ctx.fillStyle = '#b5b5b5';
        //width of a single array
        let width = 10;
        //drawing a sort element
        ctx.fillRect(i * width, 0, width, number);
    }
}