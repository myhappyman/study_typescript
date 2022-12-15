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
