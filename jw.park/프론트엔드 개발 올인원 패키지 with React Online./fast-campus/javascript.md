# 수강 명 : 프론트엔드 개발 올인원 패키지 with React Online

> ( 2025/02/11(화) Part 25 주요 학습 내용 )

## Part 25-10. var와 호이스팅

호이스팅은 JavaScript에서 변수 및 함수 선언이 코드 실행 전에 메모리에 등록되는 과정입니다.

### var(variable)

`var`는 JavaScript에서 변수를 선언할 때 사용하는 키워드 중 하나입니다. 하지만 현재는 `let`과 `const`가 도입되면서 사용이 권장되지 않습니다.

#### var의 특징

- **함수 스코프(Function Scope)**: `var`로 선언된 변수는 **함수 스코프**를 가집니다. 즉, 블록(`{}`) 내부에서 선언해도 함수 내부가 아니라면 전역 변수처럼 동작합니다.
- **중복 선언 가능**: 동일한 변수명을 여러 번 선언할 수 있습니다.
- **호이스팅(Hoisting)**: 선언된 변수가 해당 범위의 최상단으로 끌어올려지는 특성이 있습니다.

```javascript
console.log(name); // undefined
var name = 'Ji-won';
console.log(name); // "Ji-won"
```

위의 예제 코드는 아래 예제 코드와 같이 실행됩니다.

```javascript
var name;
console.log(name); // undefined
name = 'Ji-won';
console.log(name); // "Ji-won"
```

- 유지보수를 하기 위해 var 대신 let과 const 사용 권장합니다.
- let과 const는 **블록 스코프(Block Scope)**를 가집니다.
- const는 재할당이 불가능합니다.
- let과 const는 호이스팅되지만 TDZ로 인해 초기화 전 접근이 불가능합니다.

따라서 var는 의도치 않은 버그를 유발할 가능성이 크므로 사용을 지양하고, let과 const를 사용하는 것이 좋습니다.

## Part 25-18~19 함수 B~C

### arrow function () => {}

- 매개변수가 하나일 때, 괄호, return 생략이 가능합니다.

```javascript
const hello = (name) => {
  console.log('hello', name);
}; // 괄호 생략 전

const hello2 = name => {
  console.log('hello', name);
}; // 괄호 생략 후

const add  = (a,b) => a + b;
const sum = add(1,2);
console.log(sum) // 3


const hello3 = name => {
  return `hello3 ${name}`;
}; //return 생략 전

const hello4 = name => `hello4 ${name}`; // return 생략 후
```

- 주의할점은 arrow function은 this를 할당하지 않기 때문에 생성자 함수를 생성할 수 없습니다.

## Part 25-20_3 객체 C

### 객체 리터럴

- 객체 리터럴이란 중괄호({})로 감싸진 하나 이상의 속성 이름과 속성 값의 리스트를 말합니다.
- 문자열 뿐만 아니라 함수 표현식도 정의할 수 있습니다.

```javascript
const a = {
  name : 'Ji-won',
  hello1(){
    console.log('hello',this.name)
  }, // hello, Ji-won
  hello2: function() {
    console.log('hello2',this.name)
  }, // hello2, Ji-won
  hello3: () => {
    console.log('hello3',this.name)
  } // undefined
}
```

## Part 29~30 async function 과 await

### async function 과 await

- await을 사용하는 경우, 항상 async 함수 안에서 사용되어야 합니다.  
- async/await 문법을 사용하면 로직의 순서가 일정한 이유로 유지보수성 및 가독성이 향상됩니다.
