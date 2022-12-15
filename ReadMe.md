Typescript와 IDE인 Vs code는 모두 MS사에서 만들어졌으며, 둘의 궁합은 아주 좋아서 개발하는데 굉장히 좋다.

타입스크립트의 기원
타입의 안정성때문이다.
덕분에 코드의 버그가 많이 줄어들게되고 생상성도 늘어난다.

특히 오류를 제거해주다보니 말도안되는 에러를 미리 방지할 수 있다.

```Javascript
function divide(a, b){
    return a/b;
}
divide("xxx"); // NaN 2개의 파라미터가 필요하고 숫자로만 이루어져야하지만 그냥 동작이 되어버린다.

const book = {name: "리액트를 다루는 기술"};
book.hello(); // 스크립트 에러가 발생한다. 애초에 존재하지도 않는 book의 hello메소드를 호출하였으니,
// 컴파일 단계에서 미연에 막아줬으면 좋았을 것이다.
```

1. 타입스크립트 값 정의하는 방법 알아보기

```Typescript
interface IPlayer {
    name: string;
    age?: number;
}

// 함수의 파라미터명 : 타입
// 함수의 파라미터 괄호 닫힌 후 : return타입
function playerMaker(name:string) : IPlayer{
    return {
        name
    };
};

const shin = playerMaker("shin");
console.log(shin);
console.log(shin.age = 13);
```

2. readonly 속성주기
   정의부에서 앞쪽에 readonly 라는 키워드를 추가하면 읽기 전용의 속성이 된다.

이후 object의 속성값을 변경하려고하면 typescript에서 방지를 해준다.

```Typescript
type IPlayer = {
    readonly name: string;
    age?: number;
}

function playerMaker(name:string) : IPlayer{
    return {
        name
    };
};

const shin = playerMaker("shin");
shin.age = 13;
shin.name = "이름을 바꿔보자"; //error
```

-any
any는 가급적 사용하지 않는다.
Typescript로부터 벗어나기 때문이다.
하지만 아주 가끔 any를 사용해서 타입스크립트로부터 벗어나야할때 간헐적으로 사용해주자.

3. Javascript에 존재하지 않았던 타입들

- unknown
  api로부터 데이터를 받는데 데이터의 타입을 모른다면? 이럴때 unknown을 처리해주면 된다.

```Typscript
let a: unknown;
if(typeof a === "number"){ //unknown타입은 먼저 체크를 해줘야한다.
    let b = a + 1; // 위 조건문에서 typeof로 number인지 체크했기 때문에 a는 number자료형이 된다.
}else if(typeof b === "string"){
    let b = a + "안녕"; // string으로 인지되었기때문에 가능
}
```

- void
  함수에서 아무것도 리턴하지 않을때 void를 붙여준다.
  아무것도 안붙여주고 return하지 않으면 기본값은 void이다.

```Typescript
function abc(){ // abc():void 로 ':void'가 숨어있다.
    console.log("hello");
}
const a = abc();
// a.toLowerCase(); //Error
```

- never
  never는 return시키고 싶지 않을때, 사용한다.
  다만 Exception이 발생했을때, 예외처리에 대한것은 가능하다.

```Typescript
function hello():never{
    throw new Error("xxx");
    //return "123"; //Error
}
```

또는 파라미터 등에 2가지 이상의 타입을 정의하고 정의한 타입으로 들어오지 않는다면 else문을 타면서 never가 된다.
2번쨰 예시를보자.

```Typescript
function test(name: string|number){
    if(typeof name === "string"){
        name; //string
    }else if(typeof name === "number"){
        name; //number
    }else{ // 여길 타면 안된다... 고로 never
        name; //name은 never타입이다. 정상적이지 않은 데이터라는 뜻
    }
}
```
