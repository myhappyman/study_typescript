// 함수의 파라미터명 : 타입
// 함수의 파라미터 괄호 닫힌 후 : return타입
// function myInfo(name: string): { name: string; age?: number } {
//   return {
//     name,
//   };
// }

type IPlayer = {
  readonly name: string;
  age?: number;
};

function myInfo(name: string): IPlayer {
  return {
    name,
  };
}

const shin = myInfo("shin");
shin.age = 13;
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
