// 다형성 오버로딩 제네릭 등에 대하여 알아본다.

// - call signature

// const add = (a:number, b:number) => a+b;
type Add = (a: number, b: number) => number;
// 바로 위에서 하던 파라미터의 자료형과 return값의 자료형이 필요없어졌다.
// Add라는 타입을 넣어줬기 때문이다.
const add: Add = (a, b) => a + b;
