import config from '/src/js/color/config.json';

export function drawArray(canvas, numbers) {
    let ctx = canvas.getContext('2d');
    //clearing the canvas
    ctx.clearRect(0, 0, 1000, 520);
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        ctx.fillStyle = config.chartColor;
        //width of a single array
        let width = 10;
        //drawing a sort element
        ctx.fillRect(i * width, 0, width, number);
    }
}