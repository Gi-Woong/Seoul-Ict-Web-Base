// [출력값이 undefined인 경우]
console.log("undefined값인 경우");
// Case 1: 변수를 선언만 하고 값을 할당하지 않은 경우
let variable1;
console.log(variable1 === undefined); //undefined

// Case 2: 변수에 명시적 undefined 값을 할당한 경우
let variable2 = undefined;
console.log(variable2 === undefined); //true

// Case 3: 객체에서 존재하지 않는 프로퍼티에 접근하는 경우
let obj = { key: "value" };
let variable3 = obj.nonExistentKey;
console.log(variable3 === undefined); //true

// Case 4: 함수에서 return 문이 없는 경우 또는 return 문에 값이 없는 경우
function noReturn() {
  // return 문이 없는 경우 함수는 undefined를 반환합니다.
}
let variable4 = noReturn();
console.log(variable4 === noReturn()); //true
// noReturnValue 함수는 값을 반환하지 않기 때문에 variable4는 undefined가 됩니다.

// Case 5: 함수에서 명시적 undefined를 반환인자로 기입한 경우
function returnUndefined() {
  return undefined;
}
let variable5 = returnUndefined();
console.log(variable5 === undefined); //true

// Case 6: 배열에서 존재하지 않는 인덱스에 접근하는 경우
let arr = [1, 2, 3];
let variable6 = arr[5];
console.log(variable6 === undefined); //true

// Case 7: 함수 인자에 인자를 제공하지 않은채로 실행, 접근하는 경우
function accessArgument(arg) {
  arg == true;
}
let variable7 = accessArgument();
console.log(variable7 === undefined); //true

// [null값인 경우]
console.log("null값인 경우");

// Case 1: 변수에 null 값을 명시적으로 할당한 경우
let nullVal1 = null;
console.log(nullVal1 === null); //true

// Case 2 null로 초기화된 변수를 객체 프로퍼티 값으로 사용하는 경우
let nullVal2 = null;
let nullValObj = {
  key: nullVal2,
};
console.log(nullValObj["key"] === null); //true

//Case 3 null 값과 null을 비교하는 경우
console.log(null == null); //true
