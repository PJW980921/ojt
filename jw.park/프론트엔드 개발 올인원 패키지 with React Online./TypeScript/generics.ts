/* 제네릭(generics) 
- 제네릭이란 일반적인 또는 포괄적인 뜻을 지니고 있습니다. 따라서 제네릭 함수는 
  일반적인 함수 또는 포괄적인 함수로 해석할 수 있습니다.
- 제네릭은 함수나 인터페이스, 클래스, 타입 별칭등을 다양한 타입을 함께 유연하게 동작하도록 사용할 수 있게 해줍니다.
- 주의할점은 고정적인 타입은 제네릭 타입을 사용하기 보다 명확한 타입을 명시해야 가독성 측면에서 
*/

/** 제네릭 사용 예시 코드 */
function arrowFun<T>  (value : T):T {
  console.log(typeof value)
return value;
}

arrowFun(10); // number

/**2개의 타입 변수가 필요할 때 */
function swap<T, U> (a: T, b: U){
  return [b, a];
}

const [a, b] = swap('1',2); 

/**3개의 타입 변수가 필요할 때 */
function swap2<T, U, Z> (d:T, e: U, f: Z) {
  return [d, e, f];
}

const [d, e, f] = swap2('1',2,null);

/** map 메서드 타입 정의 */

const arr = [1, 2, 3];

function map<T, U>(arr : T[], callback : (item : T) =>  U) : U[] {
 let result: U[] = [];
 for(let i = 0; i < arr.length; i++){
  result.push(callback(arr[i]))
 }
 return result
}

map(arr, (it) => it.toString());


/** forEach 메서드 타입 정의 */

function forEach<T>(arr: T[], callback : (item : T) => void){
  for(let i = 0; i < arr.length; i++){
    callback(arr[i]);
  }
}

