# Typescript basic course

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

# 1. 타입스크립트 값 정의하는 방법 알아보기

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

# 2. readonly 속성주기

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

# 3. Javascript에 존재하지 않았던 타입들

- unknown
  api로부터 데이터를 받는데 데이터의 타입을 모른다면? 이럴때 unknown을 처리해주면 된다.

```Typescript
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

# 4. call signature

```Typescript
const add = (a:number, b:number) => a+b;


// 바로 위에서 하던 파라미터의 자료형과 return값의 자료형이 필요없어졌다.
// Add라는 타입을 넣어줬기 때문이다.
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a+b;
```

# 5. overloading

오버로딩은 같은 이름의 함수이지만 전달하는 파라미터의 종류를 다양하게 사용할수 있게하고
그에 따른 결과 return값도 다르게 만들어줄 수 있는것을 말한다.

```Typescript
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
```

해당 예시에서 본거 처럼 push메소드에 string문자열을 넣어주면 바로 console.log가 찍히고,
Object형태인 Config type의 값으로 넘겨주어도 Object안의 string을 찾아서 console.log에 찍어주는걸 볼 수 있다.

```Typescript
type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};
```

다만 해당방식처럼 파라미터의 숫자가 다른 경우에는 optional처리를 해주고
조건문에 따라 결과값을 다르게 만들어 줄 수도 있다.
