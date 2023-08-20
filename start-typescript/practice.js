// 기본 타입 12가지
// number, string, boolean
var num = 1;
var string = "1";
var bool = true;
// array, object, enum
var numArr = [1, 2];
var boolArr = [true, false];
var man = {
    name: "jinseung",
    age: 17,
    married: false,
};
var GRADE;
(function (GRADE) {
    GRADE[GRADE["A"] = 0] = "A";
    GRADE[GRADE["B"] = 1] = "B";
    GRADE[GRADE["C"] = 2] = "C";
    GRADE[GRADE["D"] = 3] = "D";
    GRADE[GRADE["E"] = 4] = "E";
    GRADE[GRADE["F"] = 5] = "F";
})(GRADE || (GRADE = {}));
var myGrade = GRADE.A; // GRADE.A == 0 배열값
// ==========================================================================================================================
//any, unknown
var anyValue = 1;
anyValue = "1";
anyValue = true;
anyValue.hello();
var unknownValue = 1;
unknownValue = "1";
unknownValue = true;
// unknownValue.hello();
//void, never
function helloVoid() {
    console.log("hello");
    return;
}
function helloNever() {
    console.log("Hello");
    while (true) { }
}
//null, undefined
var nullValue = null;
var undefinedValue = null;
