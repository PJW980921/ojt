/* type-guard (타입 좁히기)
 * 타입 가드란?
  데이터의 타입을 추론하지 못할 때, 될 수 있는 타입이 여러 개라고 가정할 수 있는 경우 
  조건문 등을 통해 데이터의 타입을 좁혀나가는 것
*/


/** 타입 체크로 타입 좁히기
  document.getElementById의 반환 타입이 HTMLElement | null 이므로,
  if (input)을 통해 null이 아닌 경우 HTMLElement로 타입이 좁혀집니다.
 */
  const input = document.getElementById('input');
  if(input){
    input; // HTMLElement
  } else{
    input; // null
  }
  
  
  /** 인스턴스 여부 체크로 타입 좁히기
    instanceof 연산자는 특정 값이 어떤 클래스의 인스턴스인지 확인할 때 사용됩니다.
    여기서 date가 Date의 인스턴스인지 확인하고, 맞다면 Date 타입으로 좁혀집니다.
   */
  const dateTypeCheck = (date : number | Date) => {
   if(date instanceof Date){
    date; // Date Type
   } else {
    date; // number Type
   }
  }
  
  /** typeof 체크로 타입 좁히기
    typeof 연산자는 원시 타입(Primitive Type)을 확인할 때 사용됩니다.
    number 또는 string 타입을 구분하는 데 유용하지만, Date 객체를 구분할 수 없습니다.
   */
  const sumValueTypeCheck = (value : number | string) => {
    if(typeof value === 'number'){
      return value; // number
    }else{
      return value; // string
    }
  }
  
  
  type Person = {
    name: string;
    age: number;
  };
  /** in 체크로 타입 좁히기
    in은 객체 내부에 특정 property가 존재하는지를 확인하는 연산자로 type guard로 활용할 수 있습니다.
   */
  const func = (value: number | string | Date | null | Person) => {
    if (typeof value === "number") {
      console.log(value.toFixed());
    } else if (typeof value === "string") {
      console.log(value.toUpperCase());
    } else if (value instanceof Date) {
      console.log(value.getTime());
    } else if (value && "age" in value) {
      console.log(`${value.name}은 ${value.age}살 입니다`)
    }
  }
  
  