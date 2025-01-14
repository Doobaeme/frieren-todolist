const quotes = [
  {
    jpQuote:
      "生きているということは誰かに知ってもらって覚えていてもらうことだ。",
    krQuote: "살아 있다는 것은 누군가에게 알려지고 기억되는 거야.",
    author: "- 힘멜 ヒンメル",
  },
  {
    jpQuote: "ほんの少しでいい。誰かの人生を変えてあげればいい。",
    krQuote: `
    조금이라도 좋으니까,
    누군가의 인생을 바꿀 수 있다면 그걸로 충분해.
    `,
    author: "- 힘멜 ヒンメル",
  },
  {
    jpQuote: "きっとそれだけで十分なんだ。",
    krQuote: "분명 그것만으로도 충분한 거야.",
    author: "- 힘멜 ヒンメル",
  },
  {
    jpQuote: "複雑なダンジョンほど攻略に燃える。",
    krQuote: "복잡한 던전일수록 더 열심히 도전하게 돼.",
    author: "- 힘멜 ヒンメル",
  },
  {
    jpQuote: "くだらないイベントほど心に残る。",
    krQuote: "사소한 이벤트일수록 마음에 남는 법이지.",
    author: "- 힘멜 ヒンメル",
  },
  {
    jpQuote: "でも僕は目の前で困っている人を見捨てるつもりはないよ。",
    krQuote: "하지만 나는 눈앞에서 곤경에 처한 사람을 외면할 생각은 없어.",
    author: "- 힘멜 ヒンメル",
  },
  {
    jpQuote:
      "相手に貸しを作ってしまったら本当の意味で助けたことにはならないだろう。",
    krQuote: `
    상대방에게 빚을 지게 만든다면,
    그것은 진정한 의미에서 도운 것이 되지 않을 거야.
    `,
    author: "- 힘멜 ヒンメル",
  },
  {
    jpQuote: `
    人間の寿命は短いってわかっていたのに……
    なんでもっと知ろうと思わなかったんだろう……
    `,
    krQuote: `
    인간의 수명이 짧다는 것을 알고 있었는데...
    왜 더 알고 싶다고 생각하지 않았을까...
    `,
    author: "- 프리렌 フリーレン",
  },
  {
    jpQuote: "必死に生きてきた人の行きつく先が無であっていいはずがありません。",
    krQuote: `
    필사적으로 살아온 사람이 도달하는 끝이
    '무(無)'일 리가 없습니다.
    `,
    author: "- 하이터 ハイター",
  },
  {
    jpQuote: `
    怖がることは悪いことではない。
    この恐怖が俺をここまで連れてきたんだ。
    `,
    krQuote: `
    두려워하는 것은 나쁜 일이 아니야.
    이 두려움이 나를 여기까지 이끌어 준 거야.
    `,
    author: "- 아이젠 アイゼン",
  },
  {
    jpQuote: "想いってのは言葉にしないと伝わらないんだぜ。",
    krQuote: `
    마음이라는 건
    말로 표현하지 않으면 전해지지 않는 거야.
    `,
    author: "- 자인 ザイン",
  },
];

const jpQuote = document.querySelector(".quote .jp-quot");
const krQuote = document.querySelector(".quote .kr-quot");
const author = document.querySelector(".quote .author");

function updateQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const quoteElements = [jpQuote, krQuote, author];
  quoteElements.forEach((el) => {
    el.classList.remove("fade-in");
    el.classList.add("fade-out");
  });

  setTimeout(() => {
    jpQuote.innerText = randomQuote.jpQuote;
    krQuote.innerText = randomQuote.krQuote;
    author.innerText = randomQuote.author;

    quoteElements.forEach((el) => {
      el.classList.remove("fade-out");
      el.classList.add("fade-in");
    });
  }, 1000);
}

updateQuote();
setInterval(updateQuote, 10000);
