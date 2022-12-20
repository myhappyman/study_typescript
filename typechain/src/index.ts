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

    //sha256알고리즘과 위의 암호화로 사용할 데이터들을 hex값으로 만들어주는 코드다.
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}

class Blockchain {
  // blocks는 Block클래스의 배열
  private blocks: Block[];
  constructor() {
    this.blocks = []; // 초기화
  }

  /**
   * 이전 해쉬값을 불러옵니다.
   * @returns
   */
  private getPrevHash() {
    if (this.blocks.length === 0) return ""; // blocks가 길이가 0이라는건 이전값이 없으니 빈문자열
    return this.blocks[this.blocks.length - 1].hash; // 그게 아니라면 마지막의 hash값을 가져온다.
  }

  /**
   * Block인스턴스를 추가합니다.
   * @param data
   */
  public addBlock(data: string) {
    const newBlock = new Block(
      this.getPrevHash(),
      this.blocks.length + 1,
      data
    );
    this.blocks.push(newBlock);
  }

  public getBlocks() {
    return [...this.blocks];
  }
}

const blockchain = new Blockchain();
blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");

console.log(blockchain.getBlocks());
