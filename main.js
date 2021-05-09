const oya_mantsumo = "(ツモアガりなら4000オール)";
const oya_hanetsumo = "(ツモアガりなら6000オール)";
const oya_baitsumo = "(ツモアガりなら8000オール)";
const oya_3baitsumo = "(ツモアガりなら12000オール)";
const oya_yakutsumo = "(ツモアガりなら16000オール)";
const ko_mantsumo = "(ツモアガりなら2000,4000)";
const ko_hanetsumo = "(ツモアガりなら3000,6000)";
const ko_baitsumo = "(ツモアガりなら4000,8000)";
const ko_3baitsumo = "(ツモアガりなら6000,12000)";
const ko_yakutsumo = "(ツモアガりなら8000,16000)";

// { 親or子 { 翻数 { 符数[得点, ツモ上がり時の回収] } } }
const pointsArray = {
  oya: {
    1: {
      20: "",
      25: "",
      30: [1500, "(ツモアガりなら500オール)"],
      40: [2000, "(ツモアガりなら700オール)"],
      50: [2400, "(ツモアガりなら800オール)"],
      60: [2900, "(ツモアガりなら1000オール)"],
      70: [3400, "(ツモアガりなら1200オール)"],
      80: [3900, "(ツモアガりなら1300オール)"],
      90: [4400, "(ツモアガりなら1500オール)"],
      100: [4800, "(ツモアガりなら1600オール)"],
      110: [5300, "(ツモアガりなら1800オール)"],
    },
    2: {
      20: [2000, "(700オール)"],
      25: [2400, ""],
      30: [2900, "(ツモアガりなら1000オール)"],
      40: [3900, "(ツモアガりなら1300オール)"],
      50: [4800, "(ツモアガりなら1600オール)"],
      60: [5800, "(ツモアガりなら2000オール)"],
      70: [6800, "(ツモアガりなら2300オール)"],
      80: [7700, "(ツモアガりなら2600オール)"],
      90: [8700, "(ツモアガりなら2900オール)"],
      100: [9600, "(ツモアガりなら3200オール)"],
      110: [10600, "(ツモアガりなら3600オール)"],
    },
    3: {
      20: [3900, "(1300オール)"],
      25: [4800, "(ツモアガりなら1600オール)"],
      30: [5800, "(ツモアガりなら2000オール)"],
      40: [7700, "(ツモアガりなら2600オール)"],
      50: [9600, "(ツモアガりなら3200オール)"],
      60: [12000, oya_mantsumo],
      70: [12000, oya_mantsumo],
      80: [12000, oya_mantsumo],
      90: [12000, oya_mantsumo],
      100: [12000, oya_mantsumo],
      110: [12000, oya_mantsumo],
    },
    4: {
      20: [7700, "(2600オール)"],
      25: [9600, "(ツモアガりなら3200オール)"],
      30: [11600, "(ツモアガりなら3900オール)"],
      40: [12000, oya_mantsumo],
      50: [12000, oya_mantsumo],
      60: [12000, oya_mantsumo],
      70: [12000, oya_mantsumo],
      80: [12000, oya_mantsumo],
      90: [12000, oya_mantsumo],
      100: [12000, oya_mantsumo],
      110: [12000, oya_mantsumo],
    },
    5: [12000, oya_mantsumo],
    6: [18000, oya_hanetsumo],
    7: [18000, oya_hanetsumo],
    8: [24000, oya_baitsumo],
    9: [24000, oya_baitsumo],
    10: [24000, oya_baitsumo],
    11: [32000, oya_3baitsumo],
    12: [32000, oya_3baitsumo],
    13: [48000, oya_yakutsumo],
  },
  ko: {
    1: {
      20: "",
      25: "",
      30: [1000, "(ツモアガりなら300,500)"],
      40: [1300, "(ツモアガりなら400,700)"],
      50: [1600, "(ツモアガりなら400,800)"],
      60: [2000, "(ツモアガりなら500,1000)"],
      70: [2300, "(ツモアガりなら600,1200)"],
      80: [2600, "(ツモアガりなら700,1300)"],
      90: [2900, "(ツモアガりなら800,1500)"],
      100: [3200, "(ツモアガりなら800,1600)"],
      110: [3600, "(ツモアガりなら900,1800)"],
    },
    2: {
      20: [1300, "(400,700)"],
      25: [1600, ""],
      30: [2000, "(ツモアガりなら500,1000)"],
      40: [2600, "(ツモアガりなら700,1300)"],
      50: [3200, "(ツモアガりなら800,1600)"],
      60: [3900, "(ツモアガりなら1000,2000)"],
      70: [4500, "(ツモアガりなら1200,2300)"],
      80: [5200, "(ツモアガりなら1300,2600)"],
      90: [5800, "(ツモアガりなら1500,2900)"],
      100: [6400, "(ツモアガりなら1600,3200)"],
      110: [7100, "(ツモアガりなら1800,3600)"],
    },
    3: {
      20: [2600, "(700,1300)"],
      25: [3200, "(ツモアガりなら800,1600)"],
      30: [3900, "(ツモアガりなら1000,2000)"],
      40: [5200, "(ツモアガりなら1300,2600)"],
      50: [6400, "(ツモアガりなら1600,3200)"],
      60: [7700, "(ツモアガりなら2000,3900)"],
      70: [8000, ko_mantsumo],
      80: [8000, ko_mantsumo],
      90: [8000, ko_mantsumo],
      100: [8000, ko_mantsumo],
      110: [8000, ko_mantsumo],
    },
    4: {
      20: [5200, "(1300,2600)"],
      25: [6400, "(ツモアガりなら1600,3200)"],
      30: [7700, "(ツモアガりなら2000,3900)"],
      40: [8000, ko_mantsumo],
      50: [8000, ko_mantsumo],
      60: [8000, ko_mantsumo],
      70: [8000, ko_mantsumo],
      80: [8000, ko_mantsumo],
      90: [8000, ko_mantsumo],
      100: [8000, ko_mantsumo],
      110: [8000, ko_mantsumo],
    },
    5: [8000, ko_mantsumo],
    6: [12000, ko_hanetsumo],
    7: [12000, ko_hanetsumo],
    8: [16000, ko_baitsumo],
    9: [16000, ko_baitsumo],
    10: [16000, ko_baitsumo],
    11: [24000, ko_3baitsumo],
    12: [24000, ko_3baitsumo],
    13: [32000, ko_yakutsumo],
  },
};

let oyako;
let fu_su;
let kan_fu;
let han_su;
let getPoint;
let tsumoAgari;

const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const q3 = document.getElementById("q3");
const q4 = document.getElementById("q4");
const q5 = document.getElementById("q5");

// カン
let ankan1Count = 0;
let ankan2Count = 0;
let minkan1Count = 0;
let minkan2Count = 0;
let kansTotal;

const calcKansTotal = function () {
  kansTotal = ankan1Count + ankan2Count + minkan1Count + minkan2Count;
  return kansTotal;
};
const han1Cancel = function () {
  // 飜数：1飜→2飜に変更する
  if (document.getElementById("1han").checked === true) {
    document.getElementById("2han").checked = true;
  }
  han_su = 2;
};
const addDisabled = function (x) {
  // クラス"disabled"を付加
  x.classList.add("disabled");
};
const removeDisabled = function (y) {
  // クラス"disabled"を除去
  y.classList.remove("disabled");
};
const uncheckDisabled = function () {
  // 選択されていない選択肢のチェックを外す
  const disabled = document.querySelectorAll(".disabled input:checked");

  for (let i = 0; i < disabled.length; i++) {
    disabled[i].checked = false;
  }
};

const undefineFusu = function () {
  fu_su = undefined;
};

const hideScore = function () {
  document.getElementById("result_display").style.display = "none";
}

const showScore = function () {
  // 符数取得
  if (document.getElementById("q1-yes").checked === true) {
    if (document.getElementById("q2-yes").checked === true) {
      fu_su = 40;
    }
    if (document.getElementById("q2-no").checked === true) {
      fu_su = 30;
    }
  } else {
    // q1-no
    if (document.getElementById("q3-yes").checked === true) {
      fu_su = 25;
    } else {
      // q3-no
      if (document.getElementById("q4-yes").checked === true) {
        if (document.getElementById("q5-yes").checked === true) {
          fu_su = 20;
        }
        if (document.getElementById("q5-no").checked === true) {
          fu_su = 30;
        }
      } else {
        // q4-no
        if (document.getElementById("q5-yes").checked === true) {
          fu_su = 30;
        }
        if (document.getElementById("q5-no").checked === true) {
          fu_su = 40;
        }
      }
    }
  }

  // 符数が確定していなければキャンセル
  if (fu_su === undefined) {
    return false;
  }

  // カンによる符をカウント
  // 平和か七対子の場合カンは起こりえないので槓子のカウントをしない
  if (
    !document.getElementById("q3-yes").checked === true &&
    !document.getElementById("q4-yes").checked === true
  ) {
    kan_fu =
      ankan1Count * 30 +
      ankan2Count * 20 +
      minkan1Count * 20 +
      minkan2Count * 10;
    fu_su += kan_fu;
  }

  // 飜数：選択されているラジオボタンのvalueから取得
  const hanSelect = document.getElementsByName("han");

  for (let a = "", i = hanSelect.length; i--; ) {
    if (hanSelect[i].checked) {
      a = hanSelect[i].value;
      han_su = a;
      break;
    }
  }
  // 四槓子
  if (calcKansTotal() === 4) {
    han_su = 13;
  }

  // 20符1飜 or 25符1飜の場合
  if (han_su == 1) {
    if (fu_su === 20) {
      alert("20符1飜のアガりはありません");
      han1Cancel();
      han_su = 2;
    }
    if (fu_su === 25) {
      alert("25符1飜のアガりはありません");
      han1Cancel();
      han_su = 2;
    }
  }

  if (document.getElementById("oya").checked === true) {
    oyako = "oya";
  } else {
    oyako = "ko";
  }

  if (han_su >= 5) {
    getPoint = pointsArray[oyako][han_su][0];
    tsumoAgari = pointsArray[oyako][han_su][1];
  } else {
    getPoint = pointsArray[oyako][han_su][fu_su][0];
    tsumoAgari = pointsArray[oyako][han_su][fu_su][1];
  }

  // 結果表示
  document.getElementById("fu_result").innerHTML = fu_su;
  document.getElementById("han_result").innerHTML = han_su;
  document.getElementById("ten_result").innerHTML = getPoint;
  document.getElementById("tsumo_result").innerHTML = tsumoAgari;

  document.getElementById("result_display").style.display = "block";
};

// 選択肢が変更された時
const choices = document.querySelectorAll("input");

for (let i = 0; i < choices.length; i++) {
  choices[i].addEventListener("change", function () {
    if (
      document.getElementById("q4-yes").checked === true &&
      document.getElementById("q5-yes").checked === true
    ) {
      han1Cancel();
    }
    if (document.getElementById("q3-no").checked === true) {
      removeDisabled(q4);
      removeDisabled(q5);
      undefineFusu();
    }
    if (document.getElementById("q3-yes").checked === true) {
      addDisabled(q4);
      addDisabled(q5);
      uncheckDisabled();
      han1Cancel();
    }
    if (document.getElementById("q2-yes").checked === true) {
      han1Cancel();
    }
    if (document.getElementById("q1-no").checked === true) {
      removeDisabled(q3);
      addDisabled(q2);
      undefineFusu();
    }
    if (document.getElementById("q1-yes").checked === true) {
      removeDisabled(q2);
      addDisabled(q3);
      addDisabled(q4);
      addDisabled(q5);
      uncheckDisabled();
      undefineFusu();
    }

    showScore();

    if (fu_su === undefined) {
      hideScore();
    }
  });
}

// カンをカウントした時
const kanPlus = document.querySelectorAll(".count-box");

for (let i = 0; i < kanPlus.length; i++) {
  kanPlus[i].addEventListener("click", function () {
    const plusID = this.id;

    if (calcKansTotal() < 4) {
      switch (plusID) {
        case "ankan1+":
          ankan1Count++;
          document.getElementById("ankan1").innerHTML = ankan1Count;
          break;
        case "ankan2+":
          ankan2Count++;
          document.getElementById("ankan2").innerHTML = ankan2Count;
          break;
        case "minkan1+":
          minkan1Count++;
          document.getElementById("minkan1").innerHTML = minkan1Count;
          break;
        case "minkan2+":
          minkan2Count++;
          document.getElementById("minkan2").innerHTML = minkan2Count;
          break;
        default:
          break;
      }
    }
    showScore();
  });
}

// 「0に戻す」ボタン
const kanZero = document.querySelectorAll(".zero");

for (let i = 0; i < kanZero.length; i++) {
  kanZero[i].addEventListener("click", function (event) {
    event.stopPropagation(); // プラスの挙動が起こらないようにする
    const zeroID = this.id;

    switch (zeroID) {
      case "ankan1-":
        ankan1Count = 0;
        document.getElementById("ankan1").innerHTML = ankan1Count;
        break;
      case "ankan2-":
        ankan2Count = 0;
        document.getElementById("ankan2").innerHTML = ankan2Count;
        break;
      case "minkan1-":
        minkan1Count = 0;
        document.getElementById("minkan1").innerHTML = minkan1Count;
        break;
      case "minkan2-":
        minkan2Count = 0;
        document.getElementById("minkan2").innerHTML = minkan2Count;
        break;
      default:
        break;
    }
    showScore();
  });
}

// リセット
document.getElementById("reset").addEventListener("click", function () {
  // ラジオボタン解除
  const radioCheck = document.querySelectorAll("input:checked");

  for (let i = 0; i < radioCheck.length; i++) {
    radioCheck[i].checked = false;
  }

  // 結果削除
  const pointDisplay = document.querySelectorAll("#result_display span");

  for (let i = 0; i < pointDisplay.length; i++) {
    pointDisplay[i].innerHTML = "";
  }

  hideScore();

  // 初期値に戻す
  document.getElementById("1han").checked = true;
  han_su = 1;
  fu_su = undefined;
  getPoint = undefined;
  tsumoAgari = undefined;
  document.getElementById("ko").checked = true;

  // 槓を0に戻す
  ankan1Count = 0;
  ankan2Count = 0;
  minkan1Count = 0;
  minkan2Count = 0;
  const kansCountValue = document.querySelectorAll(".count-value");

  for (let i = 0; i < kansCountValue.length; i++) {
    kansCountValue[i].innerHTML = "0";
  }

  // 質問のチェック状態の初期化
  addDisabled(q2);
  addDisabled(q3);
  addDisabled(q4);
  addDisabled(q5);

  // トップへ戻る
  scrollTo(0, 0);
});

// ページトップへ
document.getElementById("to-top").addEventListener("click", function () {
  scrollTo(0, 0);
});
