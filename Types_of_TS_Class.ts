/**
 * class
 * class를 통해 private, public변수를 처리하는 방법을 알아본다.
 */

class Players {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string
  ) {}
}

const p1 = new Players("shinwoo", "park", "shin");

/**
 * abstract
 * 다른 클래스가 상속받을수 있도록 작성된느 클래스이다.
 * 직접 new형태로 인스턴스 생성은 불가능하다.
 * 재사용성을 높여준다.
 */

/*
abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string
  ) {}

  getFullname() {
    return `${this.firstName}${this.lastName}`;
  }
}

class Player extends User {}

const shin = new Player("shinwoo", "park", "shin");
shin.nickname = "shin2";
console.log(shin);
console.log(shin.getFullname());
*/

/**
 * abstract method
 * 추상 클래스 내의 abstract method들을 의미한다.
 * 해당 메소드들은 상속받은 클래스라면 무조건 구현해야하는 함수들을 의미한다.
 */

abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string
  ) {}
  abstract getName(): void;

  getFullname() {
    return `${this.firstName}${this.lastName}`;
  }
}

class Player extends User {
  getName() {
    return this.getFullname(); //딱히 구현할게 없으니 그냥 같은 fullname을...작성함
  }
}

const shin = new Player("shinwoo", "park", "shin");
shin.nickname = "shin2";
console.log(shin);
console.log(shin.getName()); //이전과 동작은 동일하다. 같은걸 뱉으니까...
