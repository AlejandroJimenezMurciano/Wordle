// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
//import { sayHello } from './demo.js';
//sayHello();

/*
- eventos del dom 
- importaciones
- y constantes q necesites utilizar en el index
*/
const wordle = 'hello';
const gameBoardElement = document.getElementById('game-board');
const guessRows = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', '']
];
let currentRow = 0;
let currentTile = 0;

guessRows.forEach((guessRow, guessRowIndex) => {
    const rowElement = document.createElement('div')
    rowElement.setAttribute('id', 'guessRow-' + guessRowIndex)
    guessRow.forEach((_guess, guessIndex) => {
        const tileElement = document.createElement('div')
        tileElement.setAttribute('id', 'guessRow-' + guessRowIndex + '-tile-' + guessIndex)
        tileElement.classList.add('tile')
        rowElement.append(tileElement)
    });
    gameBoardElement.append(rowElement)
})
