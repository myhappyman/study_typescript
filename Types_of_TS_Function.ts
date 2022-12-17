// 다형성 오버로딩 제네릭 등에 대하여 알아본다.

// - Overloading
// 오버로딩은 같은 이름의 함수이지만 전달하는 파라미터의 종류를 다양하게 사용할수 있게하고
// 그에 따른 결과 return값도 다르게 만들어줄 수 있는것을 말한다.
type Config = {
  path: string;
  params: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (param) => {
  if (typeof param === "string") {
    console.log(param);
  } else {
    console.log(param.path);
  }
};
// 해당 예시에서 본거 처럼 push메소드에 string문자열을 넣어주면 바로 console.log가 찍히고,
// Object형태인 Config type의 값으로 넘겨주어도 Object안의 string을 찾아서 console.log에 찍어주는걸 볼 수 있다.

type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

//다만 해당방식처럼 파라미터의 숫자가 다른 경우에는 optional처리를 해주고
//조건문에 따라 결과값을 다르게 만들어 줄 수도 있다.

/**
 * - 다형성
 * 다형성이란 여러가지 타입을 받아들이고 그것을 활용하여 사용하는것을 의미한다.
 */

/**
 * - concrete type
 * 컨크리트 타입에는 기존에 우리가 정의되어 있어 사용하던 타입들을 의미한다
 * > number, string, boolean, unknown, void등 기본적으로 정의된 타입
 */

/**
 * - generic
 * generic이란 placeholder와 비슷한것을 말한다.
 * concrete type대신에 사용할 수 있다.
 * 다양한 타입을 제공해야할때, 그것에 따라 매번 타입을 추가하고 제거하고 불편함을 감소시켜줄 수 있다.
 * 제네릭을 쓰려면 먼저 제네릭을 쓴다고 선언을 해줘야 한다.
 * 다만, 모든 타입을 사용할 수 있게 해주고 그에 따라 형변환이 되다보니 any와 무슨 차이가
 * 있을까 라는 생각이 들게 되는데,
 */

/*
type SuperPrint = {
    (arr: number[]): void
    (arr: boolean[]): void
    (arr: string[]): void
    (arr: (number|boolean)[]): void
}

const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}

superPrint([1,2,3,4,5]); // 1번째
superPrint([true, false, true]); // 2번째
superPrint(["a", "B", "c"]); // 3번째
superPrint([1, 2, true, false]); // 4번째
*/

//Generic 처리 하나만으로 위에서 각각 필요하던 형태에 따라 type을 정의하던걸 해결했다.
type SuperPrint = {
  <T>(arr: T[]): T;
};

const superPrint: SuperPrint = (arr) => arr[0];

superPrint([1, 2, 3, 4, 5]); // 1번째
superPrint([true, false, true]); // 2번째
superPrint(["a", "B", "c"]); // 3번째
superPrint([1, 2, true, false]); // 4번째

/**
 * 위 제네릭 처리의 arr과 return이 마음대로 사용할 수 있는게 사실 any와 진짜 무슨차이인가
 * 싶은 느낌이 들어서 아래처러 any로 선언하고 마우스 오버를 해보니 바로 차이점을 알 수 있었다.
 * any는 그저 어떤 형태의 함수를 생성하고 작성해보아도 모든 타입이 any return도 any였지만,
 * 제네릭 처리는 올려보니 각각 입력한 파라미터값에 따라 number, string,  number|string, 등등의
 * 조합으로 나오고 해당하는 return값도 자료형 정보를 잃지하고 유지해준다.
 */
// type SuperPrint = {
//   (arr: any[]): any;
// };

// Generic의 타입을 늘리고 싶으면 원하는 제네릭값을 마음대로 늘리면 된다.
type SuperPrint2 = {
  <T, V>(arr: T[], param?: V): T | V;
};

const superPrint2: SuperPrint2 = (arr, param) => {
  if (param) {
    return param;
  } else {
    return arr[0];
  }
};

const tests = superPrint2([1, 2, 3, 4], "test");
const test2 = superPrint2(["hi", "hello"]);
