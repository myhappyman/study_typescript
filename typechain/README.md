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
