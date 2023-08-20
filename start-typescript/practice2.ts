// Function
// Fuction Statement
function add(a: number, b: number): number {
  return a + b;
}

const result: number = add(1, 2);

// Funcion Expression || arrow function
const addExp: (a: number, b: number) => number = function (
  a: number,
  b: number
): number {
  return a + b;
};

// Union & Intersection
// Union (|) - 여러 타입 중 하나
function printValue(value: number | string | string[]): void {
  console.log(value);
}

printValue(["1", "2"]);

// Intersection (&) - 여러 타입을 결합
const man2: {
  name: string;
  age: number;
} & {
  height: number;
  weight: number;
} = {
  age: 1,
  height: 200,
  weight: 70,
  name: "Jeon",
};

// Type Alias & Interface
// Alias
type NUM = number;

let numVer2: number = 1;
const a: NUM = 10;
numVer2 = a;

type UnionType = number | string | string[];

function printValueVer2(value: UnionType): void {
  console.log(value);
}

type Mankind = {
  name: string;
  age: number;
} & {
  height: number;
  weight: number;
};

const mankind: Mankind = {
  age: 1,
  height: 200,
  name: "Jeon",
  weight: 80,
};

// Intetface

interface IMankind {
  name: string;
  age: number;
  height: number;
  weight: number;
}

const mankindVer2: IMankind = {
  age: 1,
  height: 200,
  name: "Jeon",
  weight: 80,
};
