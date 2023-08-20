// 기본 타입 12가지
// number, string, boolean

const num: number = 1;
const string: string = "1";
const bool: boolean = true;

// array, object, enum
const numArr: number[] = [1, 2];
const boolArr: boolean[] = [true, false];
const man: {
  name: string;
  age: number;
  married: boolean;
} = {
  name: "jinseung",
  age: 17,
  married: false,
};
enum GRADE {
  A,
  B,
  C,
  D,
  E,
  F,
}

const myGrade: GRADE = GRADE.A; // GRADE.A == 0 배열값
// GRADE[GRADE.A] => 'A';

// ==========================================================================================================================
//any, unknown
let anyValue: any = 1;
anyValue = "1";
anyValue = true;
anyValue.hello();

let unknownValue: unknown = 1;
unknownValue = "1";
unknownValue = true;
// unknownValue.hello();

//void, never
function helloVoid(): void {
  console.log("hello");
  return;
}

function helloNever(): never {
  console.log("Hello");
  while (true) {}
}

//null, undefined
const nullValue: null = null;
const undefinedValue: undefined = null;
