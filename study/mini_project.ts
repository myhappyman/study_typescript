// key는 string, value는 string인 object라는 뜻
type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }

  //word가 Word클래스의 인스턴스이길 원하면 아래처럼 적는다.
  add(word: Word) {
    if (this.words[word.getTerm()] === undefined) {
      this.words[word.getTerm()] = word.getDef();
    }
  }
  def(term: string): string {
    return this.words[term];
  }

  /**
   * Dict에서는 단어를 삭제하고 업데이트하는 메소드를 만들기
   */
  drop(word: Word) {
    if (this.words[word.getTerm()]) {
      console.log("delete", word.getTerm());
      delete this.words[word.getTerm()];
    }
  }

  print() {
    console.log(this.words);
  }
}

abstract class Word {
  constructor(protected term: string, protected def: string) {}

  abstract modify(term: string, def: string): void;
  abstract printf(): string;
  abstract getTerm(): string;
  abstract getDef(): string;
  /**
   * 1. Word 클래스 내에서는 단어의 정의를 추가하거나 수정하는 메소드
   * 2. 단어를 출력하는 메소드를 만들어보기
   */
}

class WordMaker extends Word {
  // 단어 수정함수
  modify(term: string, def: string) {
    this.term = term;
    this.def = def;
  }

  // 단어 출력함수
  printf() {
    return `${this.term}: ${this.def}`;
  }

  getTerm() {
    return this.term;
  }

  getDef() {
    return this.def;
  }
}

const kimchi = new WordMaker("kimchi", "한국의 음식");

const dict = new Dict();
dict.add(kimchi);
const d = dict.def("kimchi");
console.log(d);
dict.print();
dict.drop(kimchi);
const d2 = dict.def("kimchi");
console.log(d);
console.log(d2);
