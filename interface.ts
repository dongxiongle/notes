interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObj = {
  size: 10,
  label: 'size 10 object'
};

printLabel(myObj);

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSqurare = { color: 'white', area: 100 };
  if (config.color) {
    newSqurare.color = config.color;
  }
  if (config.width) {
    newSqurare.area = config.width * config.width;
  }
  return newSqurare;
}
let mySquare = createSquare({ color: 'black' });