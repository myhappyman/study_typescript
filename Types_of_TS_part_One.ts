// 함수의 파라미터명 : 타입
// 함수의 파라미터 괄호 닫힌 후 : return타입
// function myInfo(name: string): { name: string; age?: number } {
//   return {
//     name,
//   };
// }

type IPlayer = {
  name: string;
  age?: number;
};

function myInfo(name: string): IPlayer {
  return {
    name,
  };
}

const shin = myInfo("shin");
console.log(shin);
console.log((shin.age = 13));
