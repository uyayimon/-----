const OYA_MANTSUMO = "(ツモアガりなら4000オール)";
const OYA_HANETSUMO = "(ツモアガりなら6000オール)";
const OYA_BAITSUMO = "(ツモアガりなら8000オール)";
const OYA_3BAITSUMO = "(ツモアガりなら12000オール)";
const OYA_YAKUTSUMO = "(ツモアガりなら16000オール)";
const KO_MANTSUMO = "(ツモアガりなら2000,4000)";
const KO_HANETSUMO = "(ツモアガりなら3000,6000)";
const KO_BAITSUMO = "(ツモアガりなら4000,8000)";
const KO_3BAITSUMO = "(ツモアガりなら6000,12000)";
const KO_YAKUTSUMO = "(ツモアガりなら8000,16000)";

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
      60: [12000, OYA_MANTSUMO],
      70: [12000, OYA_MANTSUMO],
      80: [12000, OYA_MANTSUMO],
      90: [12000, OYA_MANTSUMO],
      100: [12000, OYA_MANTSUMO],
      110: [12000, OYA_MANTSUMO],
    },
    4: {
      20: [7700, "(2600オール)"],
      25: [9600, "(ツモアガりなら3200オール)"],
      30: [11600, "(ツモアガりなら3900オール)"],
      40: [12000, OYA_MANTSUMO],
      50: [12000, OYA_MANTSUMO],
      60: [12000, OYA_MANTSUMO],
      70: [12000, OYA_MANTSUMO],
      80: [12000, OYA_MANTSUMO],
      90: [12000, OYA_MANTSUMO],
      100: [12000, OYA_MANTSUMO],
      110: [12000, OYA_MANTSUMO],
    },
    5: [12000, OYA_MANTSUMO],
    6: [18000, OYA_HANETSUMO],
    7: [18000, OYA_HANETSUMO],
    8: [24000, OYA_BAITSUMO],
    9: [24000, OYA_BAITSUMO],
    10: [24000, OYA_BAITSUMO],
    11: [32000, OYA_3BAITSUMO],
    12: [32000, OYA_3BAITSUMO],
    13: [48000, OYA_YAKUTSUMO],
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
      70: [8000, KO_MANTSUMO],
      80: [8000, KO_MANTSUMO],
      90: [8000, KO_MANTSUMO],
      100: [8000, KO_MANTSUMO],
      110: [8000, KO_MANTSUMO],
    },
    4: {
      20: [5200, "(1300,2600)"],
      25: [6400, "(ツモアガりなら1600,3200)"],
      30: [7700, "(ツモアガりなら2000,3900)"],
      40: [8000, KO_MANTSUMO],
      50: [8000, KO_MANTSUMO],
      60: [8000, KO_MANTSUMO],
      70: [8000, KO_MANTSUMO],
      80: [8000, KO_MANTSUMO],
      90: [8000, KO_MANTSUMO],
      100: [8000, KO_MANTSUMO],
      110: [8000, KO_MANTSUMO],
    },
    5: [8000, KO_MANTSUMO],
    6: [12000, KO_HANETSUMO],
    7: [12000, KO_HANETSUMO],
    8: [16000, KO_BAITSUMO],
    9: [16000, KO_BAITSUMO],
    10: [16000, KO_BAITSUMO],
    11: [24000, KO_3BAITSUMO],
    12: [24000, KO_3BAITSUMO],
    13: [32000, KO_YAKUTSUMO],
  },
}

let oyako;
let fu_su;
let kan_fu;
let han_su;
let point;
let tsumo_agari;

let ankan1Count = 0;
let ankan2Count = 0;
let minkan1Count = 0;
let minkan2Count = 0;
let kansTotal;

const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const q3 = document.getElementById("q3");
const q4 = document.getElementById("q4");
const q5 = document.getElementById("q5");

const message = document.getElementById("message");

const calcKansTotal = function () {
  return ankan1Count + ankan2Count + minkan1Count + minkan2Count;
}

const addClassDisabled = function () {
  for (let i = 0; i < arguments.length; ++i) {
    arguments[i].classList.add("disabled");
  }
}

const removeClassDisabled = function () {
  for (let i = 0; i < arguments.length; ++i) {
    arguments[i].classList.remove("disabled");
  }
}

const uncheckDisabledInput = function () {
  const disabled = document.querySelectorAll(".disabled input:checked");

  for (let i = 0; i < disabled.length; i++) {
    disabled[i].checked = false;
  }
}

const undefineFusu = function () {
  fu_su = undefined;
}

const displayKansCount = function () {
  document.getElementById("ankan1").innerHTML = ankan1Count;
  document.getElementById("ankan2").innerHTML = ankan2Count;
  document.getElementById("minkan1").innerHTML = minkan1Count;
  document.getElementById("minkan2").innerHTML = minkan2Count;
}

const showScore = function () {
  message.innerHTML = "";
  document.getElementById("fu_result").innerHTML = fu_su;
  document.getElementById("han_result").innerHTML = han_su;
  document.getElementById("ten_result").innerHTML = point;
  document.getElementById("tsumo_result").innerHTML = tsumo_agari;
  document.getElementById("result_display").style.display = "block";
  document.getElementById("result").style.display = "flex";
}

const hideScore = function () {
  document.getElementById("result").style.display = "none";
}

const isChecked = function (optionId) {
  return document.getElementById(optionId).checked
}

const calcScore = function () {
  // 符数取得
  if (isChecked("q1-yes")) {
    if (isChecked("q2-yes")) fu_su = 40;
    if (isChecked("q2-no")) fu_su = 30;
  }
  else {
    if (isChecked("q3-yes")) fu_su = 25;
    else {
      if (isChecked("q4-yes")) {
        if (isChecked("q5-yes")) fu_su = 20;
        if (isChecked("q5-no")) fu_su = 30;
      }
      if (isChecked("q4-no")) {
        if (isChecked("q5-yes")) fu_su = 30;
        if (isChecked("q5-no")) fu_su = 40;
      }
    }
  }

  if (fu_su === undefined) {
    hideScore();
    return;
  }

  // カンによる符の追加
  // 平和か七対子の場合カンは起こりえないので槓子のカウントをしない
  if (!isChecked("q3-yes") && !isChecked("q4-yes")) {
    kan_fu =
      ankan1Count * 30 +
      ankan2Count * 20 +
      minkan1Count * 20 +
      minkan2Count * 10;
    fu_su += kan_fu;
  }

  // 飜数
  const hanSelect = document.getElementsByName("han");

  for (let a = "", i = hanSelect.length; i--;) {
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

  // ありえないアガリ
  if (han_su == 1) {
    if (fu_su == 20 || fu_su == 25 || isChecked("q2-yes")) {
      message.innerHTML = "このアガリの1飜はありません";
      document.getElementById("result_display").style.display = "none";
      document.getElementById("result").style.display = "flex";
      return;
    }
  }

  if (isChecked("oya")) {
    oyako = "oya";
  } else {
    oyako = "ko";
  }

  if (han_su >= 5) {
    point = pointsArray[oyako][han_su][0];
    tsumo_agari = pointsArray[oyako][han_su][1];
  } else {
    point = pointsArray[oyako][han_su][fu_su][0];
    tsumo_agari = pointsArray[oyako][han_su][fu_su][1];
  }

  showScore();
}


const radioButtons = document.querySelectorAll("input");

for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener("change", function () {
    if (isChecked("q3-no")) {
      removeClassDisabled(q4, q5);
      undefineFusu();
    }
    if (isChecked("q3-yes")) {
      addClassDisabled(q4, q5);
      uncheckDisabledInput();
    }
    if (isChecked("q1-no")) {
      removeClassDisabled(q3);
      addClassDisabled(q2);
      undefineFusu();
    }
    if (isChecked("q1-yes")) {
      removeClassDisabled(q2);
      addClassDisabled(q3, q4, q5);
      uncheckDisabledInput();
      undefineFusu();
    }

    calcScore();
  });
}

const kanPlus = document.querySelectorAll(".count-box");

for (let i = 0; i < kanPlus.length; i++) {
  kanPlus[i].addEventListener("click", function () {
    const plusID = this.id;

    if (calcKansTotal() < 4) {
      switch (plusID) {
        case "ankan1+": ankan1Count++;
          break;
        case "ankan2+": ankan2Count++;
          break;
        case "minkan1+": minkan1Count++;
          break;
        case "minkan2+": minkan2Count++;
          break;
        default:
          break;
      }
    }

    displayKansCount();
    calcScore();
  });
}

const kanZero = document.querySelectorAll(".zero");

for (let i = 0; i < kanZero.length; i++) {
  kanZero[i].addEventListener("click", function (event) {
    event.stopPropagation();  // プラスされないようにする
    const zeroID = this.id;

    switch (zeroID) {
      case "ankan1-": ankan1Count = 0;
        break;
      case "ankan2-": ankan2Count = 0;
        break;
      case "minkan1-": minkan1Count = 0;
        break;
      case "minkan2-": minkan2Count = 0;
        break;
      default:
        break;
    }

    displayKansCount();
    calcScore();
  });
}

// リセット
document.getElementById("reset").addEventListener("click", function () {
  const radioCheck = document.querySelectorAll("input:checked");
  for (let i = 0; i < radioCheck.length; i++) {
    radioCheck[i].checked = false;
  }

  const pointDisplay = document.querySelectorAll("#result_display span");
  for (let i = 0; i < pointDisplay.length; i++) {
    pointDisplay[i].innerHTML = "";
  }

  document.getElementById("1han").checked = true;
  han_su = 1;
  fu_su = undefined;
  point = undefined;
  tsumo_agari = undefined;
  document.getElementById("ko").checked = true;

  ankan1Count = 0;
  ankan2Count = 0;
  minkan1Count = 0;
  minkan2Count = 0;

  displayKansCount();

  addClassDisabled(q2, q3, q4, q5);

  scrollTo(0, 0);

  hideScore();

  message.innerHTML = "";
});


document.getElementById("to-top").addEventListener("click", function () {
  scrollTo(0, 0);
});
