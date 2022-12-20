# typescript 프로젝트 구조 만들기

- package.json 만들기
  `npm init -y`

- typescript 설치하기
  `npm install -D typescript`

이걸 설치함으로써 package.json에 devDependencies가 설정된다.

- 타입스크립트 작성할 파일 만들기
  `mkdir src/index.ts`

- tsconfig.json 생성하기
  mac : `touch tsconfig.json`
  window: `code tsconfig.json`

해당 파일의 명은 반드시 tsconfig.json이어야하며, 해당 파일이 존재한다는건 타입스크립트 프로젝트라는걸 알 수 있다.

- tsconfig.json에 작성할 리스트

1. include 컴파일 위치 지정하기
   > include 키값에 배열형태로 적어주는데, 넣고싶은 디렉토리를 넣어주면 된다.

```json
{
  "include": ["src"] // src디렉토리의 모든 파일을 확인한다.
}
```

2. compilerOptions - outDir 배포위치 지정하기
   컴파일 후 작성된 자바스크립트 파일이 생성될 디렉토리를 지정해주는 작업이다.

```json
{
  "compilerOptions": {
    "outDir": "build" // 보통 build 디렉토리에 생성한다.
  }
}
```

3. compilerOptions - target
   자바스크립트 문법 몇버전으로 변환하기를 원하는지 지정할 수 있다.
   ex) ES3, ES4, ES5, ES6...
   최신 브라우저에서는 es6문법이 모두 동작하므로 제일 추천되는 버전이며, 타입스크립트로 더 많은 서버 관련 개발을 한다면, 좀 더 낮춰서 진행해도 된다.

```json
{
  "compilerOptions": {
    "outDir": "build", // 보통 build 디렉토리에 생성한다.
    "target": "ES6"
  }
}
```

4. compilerOptions - lib
   lib은 개발시 개발환경의 코드를 지정하는 옵션입니다. 웹개발을 통한 브라우저의 정보를 받고 싶다면, DOM을 입력하여 (document.~, window.~)의 정보들을 받아서 사용할 수도 있고, 또한 어떤 버전의 API의 정보들을 받아서 사용하는지 지정할 수 있습니다. 백엔드 작업이 아닌 프론트 & 브라우저 작업이라면 꼭 DOM을 입력하여 개발을 진행하고, 해당 옵션이 없다면 그저 JS 자체의 코드만 버전에 맞춰 제공됩니다.
   배열 형태로 입력하며, 문자열로 입력합니다.

```json
{
  "compilerOptions": {
    "lib": ["es6", "DOM"] // ES6 문법과 브라우저 환경에서 사용된다고 지정됨
  }
}
```

5. strict
   엄격 모드로 전체적인 typescript의 문법이 엄격해지고 강화된다. 광범위하게 파일들을 검사하기 떄문에 조금만 잘 못되어도 타입스크립트는 불평을 말하면서 고치라고 조언을 해준다.
   값은 boolean형태이다.

```json
{
  "compilerOptions": {
    "strict": true // 엄격 모드 사용
  }
}
```

6. d.ts

- d.ts파일은 js파일의 declare된 파일을 뜻한다. 정의파일로 타입스크립트는 해당 파일을 통해 사용하려는 js의 타입을 알아내고 사용자에게 제공한다.

d.ts파일 작성법
해당 파일은 js파일의 정의를 적어주는 call signature파일이므로 구현부를 작성하는게 아니라 정의부만 작성하여, typescript가 알아먹을 수 있도록 만든다.

7. allowJs
   boolean의 값을 가진다.
   타입스크립트에서 js파일을 허용한다는 뜻이다.
   import시 js파일에서도 함수들을 가져와서 불러올수 있게 해줍니다.

이런 행위는 아직 js로만 존재하는 모듈이고 typescript로 정의된 라이브러리가 아닌데, 사용하고 싶다면 유용하게 사용할수 있는 옵션이다.
자동으로 js의 함수들을 typescript가 추론해서 보호해주게 된다.

8. // @ts-check && JSDocs
   -@ts-check
   js파일도 타입스크립트로 부터 보호를 받고 싶을 수 있다. 이럴 땐, 최 상단에 주석으로 `// @ts-check` 라고 적어주게 되면 js파일들의 타입스크립트화를 할 수 있습니다.
   이것을 적어주면 타입스크립트에게 자바스크립트 파일을 확인하라고 알려주게 됩니다.

   -JSDocs
   타입스크립트가 제공하는 보호장치를 받고 싶을때 사용하는 옵션입니다.
   JSDocs들은 함수 바로 위 코멘트들을 적어주면 됩니다.
   코멘트만 잘 작성해줘도 타입스크립트가 읽어들이고 보호를 해줍니다.

```javascript
// @ts-check

/**
 * Initializes the project
 *
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 */
export function init(config) {
  return true;
}

/**
 * exit function
 * @param {number} code
 * @returns {number}
 */
export function exit(code) {
  return code + 1;
}
```

# BlockChain Project Start!

- 현 프로젝트의 구조상 구동시 불편함이 많아서 약간의 수정을 진행한다.

1. package.json script부분에 start항목을 추가하고 build디렉토리의 index.js를 바로 실행해주도록 명령어를 추가한다.

```json
"scripts": {
  "build": "tsc",
  "start": "node build/index.js"
}
```

앞으로 아래 명령어를 입력하면 바로 빌드가 되고 빌드된 index.js를 실행해준다.
`npm run build && npm run start`

2. ts-node
   위에서 설정으로 편해졌지만 그다지 효율적이지 않으므로 앞으로 우리에게 개발을 도와줄 모듈을 설치한다.
   `npm i -D ts-node`

해당 모듈을 설치하면 빌드없이 타입스크립트를 실행시켜준다.

배포용은 아니며 개발용으로 빠르게 빌드없이 새로고침할 때 사용하면 좋다.
설치가 완료되면 package.json에 설정을 추가한다.

```json
"scripts": {
  "build": "tsc",
  "dev": "ts-node src/index",
  "start": "node build/index.js"
},
```

2-1. nodemon
nodemon을 설치하면 알아서 커맨드를 재실행해준다.
`npm i nodemon`

일일히 커맨드를 실행할 필요가 없어서 서버를 재시작할일이 없다.
마찬가지로 dev에 옵션을 다시 재추가해준다.

```json
"scripts": {
  "build": "tsc",
  "dev": "nodemon --exec ts-node src/index.ts",
  "start": "node build/index.js"
},
```

3. 구동 테스트하기
   `npm run dev`
   여기까지 세팅이 완료되면 개발모드로 프로젝트를 구동해서 테스트 해본다.

정상적으로 index.ts파일이 실행되고 수정도 해보고 잘 동작되는지 확인해본다.
