// Type assertion

let channel : any = 'Dominicode';

// Se usa esta forma si se esta usando
// en el proyecto

// let chanelStr = <string>channel;

let channelStr = channel as string;

// const myCanvas = document.getElementById('main') as HTMLCanvasElement;
const myCanvas = <HTMLCanvasElement>document.getElementById('main');