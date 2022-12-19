//type으로 특정 값만 사용하도록 제한하기
type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;

type Player = {
  nickname: string;
  team: Team; // 3가지의 값만 사용가능
  health: Health; // 3가지의 값만 사용가능
};

const nico: Player = {
  nickname: "nico",
  health: 10,
  team: "blue",
};

// interface
/**
 * type과 거의 비슷하지만 약간의 차이가 있다.
 * type키워드 대신 interface를 사용하고, '=' 기호를 제거한다.
 * 거의 흡사한 모습을 볼 수 있다.
 *
 * interface는 오직 한가지 용도로만 쓰이는데, 바로 Object의 형태를 특정한다.
 * Typescript에서는 object의 모양을 특정하는데 2가지 방법이 있는데, type과 interface이다.
 */
interface IPlayer {
  nickname: string;
  team: Team; // 3가지의 값만 사용가능
  health: Health; // 3가지의 값만 사용가능
}

const shin: Player = {
  nickname: "shin",
  health: 10,
  team: "blue",
};
