import crypto from "crypto";

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    //hash의 값은 prevHash, height, data값을 통해 계산된다.
    this.hash = Block.calculateHash(prevHash, height, data);
  }

  static calculateHash(prevHash: string, height: number, data: string): string {
    const toHash = `${prevHash} ${height} ${data}`;
    // 위의 값들을 통해 암호화폐의 해쉬값을 생성할 것인데, 이것은 nodeJs의 crypto를 활용하여 작성 예정이다.
    return "";
  }
}
