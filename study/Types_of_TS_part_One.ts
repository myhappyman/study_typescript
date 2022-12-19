// 함수의 파라미터명 : 타입
// 함수의 파라미터 괄호 닫힌 후 : return타입
// function myInfo(name: string): { name: string; age?: number } {
//   return {
//     name,
//   };
// }

type IPlayers = {
  readonly name: string;
  age?: number;
};

function myInfo(name: string): IPlayers {
  return {
    name,
  };
}

const shins = myInfo("shin");
shins.age = 13;
// shin.name = "shin2"  //error readonly

// 배열에도 타입을 정해주고 readonly를 걸어주면 push, pop과 같은 배열에 영향을 주는 메소드는 사용 불가능해진다.
// map이나 filter등은 기존 배열에 영향을 미치지 않으므로 사용가능하다.
const numbers: readonly number[] = [1, 2, 3, 4];
// numbers.push(5); // error readonly array

console.log(numbers.filter((i) => i === 2));

// Tuple을 활용하여 또한 배열의 위치값에 따라 자료형을 정해주고 필수값을 정해주고 사이즈를 정해줄 수도 있다.
// readonly도 추가하여 초기에 정의한 값 외에는 변경할수 없도록 할 수도 있다.
type TPeople = [string, number, boolean];
// const people : [string, number, boolean] = ["shin", 13, false];
const people: TPeople = ["shin", 13, false];

// any
// any는 typescript로부터 벗어나고 싶을때 사용한다. 아무것도 정의를 하지 않으면 any가 된다.

// - unknown
/**
 * api로부터 데이터를 받는데 데이터의 타입을 모른다면? 이럴때 unknown을 처리해주면 된다.
 */
let aa: unknown;
if (typeof aa === "number") {
  //unknown타입은 먼저 체크를 해줘야한다.
  let b = aa + 1; // 위 조건문에서 typeof로 number인지 체크했기 때문에 a는 number자료형이 된다.
} else if (typeof aa === "string") {
  let b = aa + "안녕"; // string으로 인지되었기때문에 가능
}

// - void
/**
 * 함수에서 아무것도 리턴하지 않을때 void를 붙여준다.
 * 아무것도 안붙여주고 return하지 않으면 기본값은 void이다.
 */
function abc() {
  // abc():void 로 ':void'가 숨어있다.
  console.log("hello");
}
const a = abc();
// a.toLowerCase(); //Error

// - never
/**
 * never는 return시키고 싶지 않을때, 사용한다.
 * 다만 Exception이 발생했을때, 예외처리에 대한것은 가능하다.
 */
function hello(): never {
  throw new Error("xxx");
  //return "123"; //Error
}

/**
 * 또는 파라미터 등에 2가지 이상의 타입을 정의하고 정의한 타입으로 들어오지 않는다면 else문을 타면서 never가 된다.
 * 2번쨰 예시를보자.
 * @param name
 */
function test(name: string | number) {
  if (typeof name === "string") {
    name; //string
  } else if (typeof name === "number") {
    name; //number
  } else {
    // 여길 타면 안된다... 고로 never
    name; //name은 never타입이다. 정상적이지 않은 데이터라는 뜻
  }
}
