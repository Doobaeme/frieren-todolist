const Quotes = [
  {
    jpQuote:
      "生きているということは誰かに知ってもらって覚えていてもらうことだ。",
    jpAuthor: "- ヒンメル",
    krQuote: "살아 있다는 것은 누군가에게 알려지고 기억되는 거야.",
    krAuthor: "  - 힘멜",
  },
  {
    jpQuote: "ほんの少しでいい。誰かの人生を変えてあげればいい。",
    jpAuthor: "- ヒンメル",
    krQuote:
      "조금이라도 좋으니까, 누군가의 인생을 바꿀 수 있다면 그걸로 충분해.",
    krAuthor: "  - 힘멜",
  },
  {
    jpQuote: "きっとそれだけで十分なんだ。",
    jpAuthor: "- ヒンメル",
    krQuote: "분명 그것만으로도 충분한 거야.",
    krAuthor: "  - 힘멜",
  },
  {
    jpQuote: "複雑なダンジョンほど攻略に燃える。",
    jpAuthor: "- ヒンメル",
    krQuote: "복잡한 던전일수록 더 열심히 도전하게 돼.",
    krAuthor: "  - 힘멜",
  },
  {
    jpQuote: "くだらないイベントほど心に残る。",
    jpAuthor: "- ヒンメル",
    krQuote: "사소한 이벤트일수록 마음에 남는 법이지.",
    krAuthor: "  - 힘멜",
  },
  {
    jpQuote: "でも僕は目の前で困っている人を見捨てるつもりはないよ。",
    jpAuthor: "- ヒンメル",
    krQuote: "하지만 나는 눈앞에서 곤경에 처한 사람을 외면할 생각은 없어.",
    krAuthor: "  - 힘멜",
  },
  {
    jpQuote:
      "相手に貸しを作ってしまったら本当の意味で助けたことにはならないだろう。",
    jpAuthor: "- ヒンメル",
    krQuote:
      "상대방에게 빚을 지게 만든다면, 그것은 진정한 의미에서 도운 것이 되지 않을 거야.",
    krAuthor: "  - 힘멜",
  },
  {
    jpQuote:
      "人間の寿命は短いってわかっていたのに……なんでもっと知ろうと思わなかったんだろう……",
    jpAuthor: "- フリーレン",
    krQuote:
      "인간의 수명이 짧다는 것을 알고 있었는데... 왜 더 알고 싶다고 생각하지 않았을까...",
    krAuthor: "  - 프리렌",
  },
  {
    jpQuote: "必死に生きてきた人の行きつく先が無であっていいはずがありません。",
    jpAuthor: "- ハイター",
    krQuote: "필사적으로 살아온 사람이 도달하는 끝이 '무(無)'일 리가 없습니다.",
    krAuthor: "  - 하이터",
  },
  {
    jpQuote:
      "怖がることは悪いことではない。この恐怖が俺をここまで連れてきたんだ。",
    jpAuthor: "- アイゼン",
    krQuote:
      "두려워하는 것은 나쁜 일이 아니야. 이 두려움이 나를 여기까지 이끌어 준 거야.",
    krAuthor: "  - 아이젠",
  },
  {
    jpQuote: "想いってのは言葉にしないと伝わらないんだぜ。",
    jpAuthor: "- ザイン",
    krQuote: "마음이라는 건 말로 표현하지 않으면 전해지지 않는 거야.",
    krAuthor: "  - 자인",
  },
];

const jpQuote = document.querySelector(".quote .jp-quot");
const jpAuthor = document.querySelector(".quote .jp-author");
const krQuote = document.querySelector(".quote .kr-quot");
const krAuthor = document.querySelector(".quote .kr-author");

const todaysQuote = Quotes[Math.floor(Math.random() * Quotes.length)];

jpQuote.innerText = todaysQuote.jpQuote;
jpAuthor.innerText = todaysQuote.jpAuthor;
krQuote.innerText = todaysQuote.krQuote;
krAuthor.innerText = todaysQuote.krAuthor;
