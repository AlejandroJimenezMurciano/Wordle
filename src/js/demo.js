//const sayHello = () => console.log('HELLO');
//export { sayHello };
const gameBoardElement = document.getElementById('game-board');
const allRows = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', '']
];

allRows.forEach((row, rowIndex) => {
  const row = document.createElement('div');
  row.setAtribute('id', 'row-' + rowIndex);
  row.forEach((boxElement, boxIndex) => {
    const boxElement = document.createElement('div');
    boxElement.setAtribute('id', 'row-' + rowIndex + 'box' + boxIndex);
    row.append(gameBoardElement);
    row.classList.add('box');
  });
  gameBoardElement.append(row);
});
