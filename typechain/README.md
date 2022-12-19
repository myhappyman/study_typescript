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
