const q1 = document.getElementById('q1'); const q2 = document.getElementById('q2'); const q3 = document.getElementById('q3'); const q4 = document.getElementById('q4'); const q5 = document.getElementById('q5');
const han1 = document.getElementById('1han');
// const kan = document.getElementById('kan-wrapper');
const fu_result = document.getElementById('fu_result');
const han_result = document.getElementById('han-result');
const ten_result = document.getElementById('ten-result');
const tsumo_result = document.getElementById('tsumo-result');
const result_display = document.getElementById('result_display')

let fu_su = 'no_value';

function han1Cancel() { // 飜数：1飜→2飜に変更する
  if (han1.checked === true) {
    document.getElementById('2han').checked = true;
  }
}
function addDisabled(x) { // クラス"disabled"を付加
  x.classList.add('disabled');
}
function removeDisabled(x) { // クラス"disabled"を除去
  x.classList.remove('disabled');
}
function uncheckDisabled() { // 選択されていない選択肢のチェックを外す
  const disabled = document.querySelectorAll('.disabled input:checked')
  for (i = 0; i < disabled.length; i++) {
    disabled[i].checked = false;
  }
}

// 選択肢による項目のアクティブ・パッシブ化
const yesNo = document.querySelectorAll('.yes-no');
for (i = 0; i < yesNo.length; i++) {
  yesNo[i].addEventListener('change', function () {
    if (document.getElementById('q4-yes').checked === true && document.getElementById('q5-yes').checked === true) {
      han1Cancel();
    }
    if (document.getElementById('q3-no').checked === true) {
      removeDisabled(q4);
      removeDisabled(q5);
    }
    if (document.getElementById('q3-yes').checked === true) {
      addDisabled(q4);
      addDisabled(q5);
      uncheckDisabled();
      han1Cancel();
    }
    if (document.getElementById('q2-yes').checked === true) {
      han1Cancel();
    }
    if (document.getElementById('q1-no').checked === true) {
      removeDisabled(q3);
      addDisabled(q2);
    }
    if (document.getElementById('q1-yes').checked === true) {
      removeDisabled(q2);
      addDisabled(q3);
      addDisabled(q4);
      addDisabled(q5);
      uncheckDisabled();
    }
  });
}

// 槓子の有無確認と値取得
let ankan1Count = 0, ankan2Count = 0, minkan1Count = 0, minkan2Count = 0; // 初期値
const ankan1 = document.getElementById('ankan1'); const ankan2 = document.getElementById('ankan2'); const minkan1 = document.getElementById('minkan1'); const minkan2 = document.getElementById('minkan2');

// カンをカウントした時の挙動
const plusArea = document.querySelectorAll('.plus-area');
for (i = 0; i < plusArea.length; i++) {
  plusArea[i].addEventListener('click', function () {
    const thisClass = this.className;
    const kansTotal = ankan1Count + ankan2Count + minkan1Count + minkan2Count;
    if (kansTotal < 4) {
      switch (thisClass) {
        case 'plus-area ankan1+':
          ankan1Count++; ankan1.innerHTML = ankan1Count;
          break;
        case 'plus-area ankan2+':
          ankan2Count++; ankan2.innerHTML = ankan2Count;
          break;
        case 'plus-area minkan1+':
          minkan1Count++; minkan1.innerHTML = minkan1Count;
          break;
        case 'plus-area minkan2+':
          minkan2Count++; minkan2.innerHTML = minkan2Count;
          break;
        default:
          break;
      }
    }
  });
}

// 「0に戻す」ボタンの挙動
const kanZero = document.querySelectorAll('.zero');
for (i = 0; i < kanZero.length; i++) {
  kanZero[i].addEventListener('click', function () {
    const thisID = this.id;
    switch (thisID) {
      case 'ankan1-':
        ankan1Count = 0; ankan1.innerHTML = ankan1Count;
        break;
      case 'ankan2-':
        ankan2Count = 0; ankan2.innerHTML = ankan2Count;
        break;
      case 'minkan1-':
        minkan1Count = 0; minkan1.innerHTML = minkan1Count;
        break;
      case 'minkan2-':
        minkan2Count = 0; minkan2.innerHTML = minkan2Count;
        break;
      default:
        break;
    }
  });
}

// ●得点計算と表示●
document.getElementById('calculation').addEventListener('click', function () {

  // ①符数取得
  (function getFusu() {
    if (document.getElementById('q1-yes').checked === true) {
      if (document.getElementById('q2-yes').checked === true) { fu_su = 40; }
      if (document.getElementById('q2-no').checked === true) { fu_su = 30; }
    }
    if (document.getElementById('q1-no').checked === true) {
      if (document.getElementById('q3-yes').checked === true) { fu_su = 25; }
      if (document.getElementById('q3-no').checked === true) {
        if (document.getElementById('q4-yes').checked === true) {
          if (document.getElementById('q5-yes').checked === true) { fu_su = 20; }
          if (document.getElementById('q5-no').checked === true) { fu_su = 30; }
        }
        if (document.getElementById('q4-no').checked === true) {
          if (document.getElementById('q5-yes').checked === true) { fu_su = 30; }
          else if (document.getElementById('q5-no').checked === true) { fu_su = 40; }
        }
      }
    }
  })();

  // 符数が確定しているか（変数fu_suに数値が入っているか）を識別
  if (isFinite(fu_su) === false) {
    return false;
  }

  // ②カンによる符をカウント
  (function getKanFu() {
    let kan_fu = ankan1Count * 30 + ankan2Count * 20 + minkan1Count * 20 + minkan2Count * 10;

    // 平和か七対子の場合カンは起こりえないので槓子のカウントをしない
    if (document.getElementById('q3-yes').checked === true || document.getElementById('q4-yes').checked === true) {
      kan_fu = 0;
      fu_su += kan_fu;
    }
    else {
      fu_su += kan_fu;
    }
  })();

  // ③飜数取得
  const elements = document.getElementsByName('han');
  // 選択されているラジオボタンの値を取得
  for (let a = "", i = elements.length; i--;) {
    if (elements[i].checked) {
      let a = elements[i].value; // aには選択状態の値が代入されている
      han_su = a;
      break;
    }
  }

  // ④符数と飜数に応じた点数
  if (document.getElementById('oya').checked === true) {
    if (han_su == 1) {
      if (fu_su == 20) { alert('20符1飜のアガりはありません'); return false; }
      if (fu_su == 25) { alert('25符1飜のアガりはありません'); return false; }
      if (fu_su == 30) { getPoint = '1500'; tsumoAgari = '(ツモアガりなら500オール)'; }
      if (fu_su == 40) { getPoint = '2000'; tsumoAgari = '(ツモアガりなら700オール)'; }
      if (fu_su == 50) { getPoint = '2400'; tsumoAgari = '(ツモアガりなら800オール)'; }
      if (fu_su == 60) { getPoint = '2900'; tsumoAgari = '(ツモアガりなら1000オール)'; }
      if (fu_su == 70) { getPoint = '3400'; tsumoAgari = '(ツモアガりなら1200オール)'; }
      if (fu_su == 80) { getPoint = '3900'; tsumoAgari = '(ツモアガりなら1300オール)'; }
      if (fu_su == 90) { getPoint = '4400'; tsumoAgari = '(ツモアガりなら1500オール)'; }
      if (fu_su == 100) { getPoint = '4800'; tsumoAgari = '(ツモアガりなら1600オール)'; }
      if (fu_su == 110) { getPoint = '5300'; tsumoAgari = '(ツモアガりなら1800オール)'; }
    }
    if (han_su == 2) {
      if (fu_su == 20) { getPoint = '2000'; tsumoAgari = '(700オール)'; }
      if (fu_su == 25) { getPoint = '2400'; tsumoAgari = '' }
      if (fu_su == 30) { getPoint = '2900'; tsumoAgari = '(ツモアガりなら1000オール)'; }
      if (fu_su == 40) { getPoint = '3900'; tsumoAgari = '(ツモアガりなら1300オール)'; }
      if (fu_su == 50) { getPoint = '4800'; tsumoAgari = '(ツモアガりなら1600オール)'; }
      if (fu_su == 60) { getPoint = '5800'; tsumoAgari = '(ツモアガりなら2000オール)'; }
      if (fu_su == 70) { getPoint = '6800'; tsumoAgari = '(ツモアガりなら2300オール)'; }
      if (fu_su == 80) { getPoint = '7700'; tsumoAgari = '(ツモアガりなら2600オール)'; }
      if (fu_su == 90) { getPoint = '8700'; tsumoAgari = '(ツモアガりなら2900オール)'; }
      if (fu_su == 100) { getPoint = '9600'; tsumoAgari = '(ツモアガりなら3200オール)'; }
      if (fu_su == 110) { getPoint = '10600'; tsumoAgari = '(ツモアガりなら3600オール)'; }
    }
    if (han_su == 3) {
      if (fu_su == 20) { getPoint = '3900'; tsumoAgari = '(1300オール)'; }
      if (fu_su == 25) { getPoint = '4800'; tsumoAgari = '(ツモアガりなら1600オール)'; }
      if (fu_su == 30) { getPoint = '5800'; tsumoAgari = '(ツモアガりなら2000オール)'; }
      if (fu_su == 40) { getPoint = '7700'; tsumoAgari = '(ツモアガりなら2600オール)'; }
      if (fu_su == 50) { getPoint = '9600'; tsumoAgari = '(ツモアガりなら3200オール)'; }
      if (fu_su >= 60) { getPoint = '12000'; tsumoAgari = '(ツモアガりなら4000オール)'; }
    }
    if (han_su == 4) {
      if (fu_su == 20) { getPoint = '7700'; tsumoAgari = '(2600オール)'; }
      if (fu_su == 25) { getPoint = '9600'; tsumoAgari = '(ツモアガりなら3200オール)'; }
      if (fu_su >= 30) { getPoint = '11600'; tsumoAgari = '(ツモアガりなら3900オール)'; }
    }

    if (han_su == 5) { getPoint = '12000'; tsumoAgari = '(ツモアガりなら4000オール)'; }
    if (han_su >= 6) { getPoint = '18000'; tsumoAgari = '(ツモアガりなら6000オール)'; }
    if (han_su >= 8) { getPoint = '24000'; tsumoAgari = '(ツモアガりなら8000オール)'; }
    if (han_su >= 11) { getPoint = '36000'; tsumoAgari = '(ツモアガりなら12000オール)'; }
    if (han_su >= 13) { getPoint = '48000'; tsumoAgari = '(ツモアガりなら16000オール)'; }
  }
  if (document.getElementById('ko').checked === true) {
    if (han_su == 1) {
      if (fu_su == 20) { alert('20符1飜のアガりはありません'); return false; }
      if (fu_su == 25) { alert('25符1飜のアガりはありません'); return false; }
      if (fu_su == 30) { getPoint = '1000'; tsumoAgari = '(ツモアガりなら300,500)'; }
      if (fu_su == 40) { getPoint = '1300'; tsumoAgari = '(ツモアガりなら400,700)'; }
      if (fu_su == 50) { getPoint = '1600'; tsumoAgari = '(ツモアガりなら400,800)'; }
      if (fu_su == 60) { getPoint = '2000'; tsumoAgari = '(ツモアガりなら500,1000)'; }
      if (fu_su == 70) { getPoint = '2300'; tsumoAgari = '(ツモアガりなら600,1200)'; }
      if (fu_su == 80) { getPoint = '2600'; tsumoAgari = '(ツモアガりなら700,1300)'; }
      if (fu_su == 90) { getPoint = '2900'; tsumoAgari = '(ツモアガりなら800,1500)'; }
      if (fu_su == 100) { getPoint = '3200'; tsumoAgari = '(ツモアガりなら800,1600)'; }
      if (fu_su == 110) { getPoint = '3600'; tsumoAgari = '(ツモアガりなら900,1800)'; }
    }
    if (han_su == 2) {
      if (fu_su == 20) { getPoint = '1300'; tsumoAgari = '(400,700)'; }
      if (fu_su == 25) { getPoint = '1600'; tsumoAgari = ''; }
      if (fu_su == 30) { getPoint = '2000'; tsumoAgari = '(ツモアガりなら500,1000)'; }
      if (fu_su == 40) { getPoint = '2600'; tsumoAgari = '(ツモアガりなら700,1300)'; }
      if (fu_su == 50) { getPoint = '3200'; tsumoAgari = '(ツモアガりなら800,1600)'; }
      if (fu_su == 60) { getPoint = '3900'; tsumoAgari = '(ツモアガりなら1000,2000)'; }
      if (fu_su == 70) { getPoint = '4500'; tsumoAgari = '(ツモアガりなら1200,2300)'; }
      if (fu_su == 80) { getPoint = '5200'; tsumoAgari = '(ツモアガりなら1300,2600)'; }
      if (fu_su == 90) { getPoint = '5800'; tsumoAgari = '(ツモアガりなら1500,2900)'; }
      if (fu_su == 100) { getPoint = '6400'; tsumoAgari = '(ツモアガりなら1600,3200)'; }
      if (fu_su == 110) { getPoint = '7100'; tsumoAgari = '(ツモアガりなら1800,3600)'; }
    }
    if (han_su == 3) {
      if (fu_su == 20) { getPoint = '2600'; tsumoAgari = '(700,1300)'; }
      if (fu_su == 25) { getPoint = '3200'; tsumoAgari = '(ツモアガりなら800,1600)'; }
      if (fu_su == 30) { getPoint = '3900'; tsumoAgari = '(ツモアガりなら1000,2000)'; }
      if (fu_su == 40) { getPoint = '5200'; tsumoAgari = '(ツモアガりなら1300,2600)'; }
      if (fu_su == 50) { getPoint = '6400'; tsumoAgari = '(ツモアガりなら1600,3200)'; }
      if (fu_su == 60) { getPoint = '7700'; tsumoAgari = '(ツモアガりなら2000,3900)'; }
      if (fu_su >= 70) { getPoint = '8000'; tsumoAgari = '(ツモアガりなら2000,4000)'; }
    }
    if (han_su == 4) {
      if (fu_su == 20) { getPoint = '5200'; tsumoAgari = '(1300,2600)'; }
      if (fu_su == 25) { getPoint = '6400'; tsumoAgari = '(ツモアガりなら1600,3200)'; }
      if (fu_su == 30) { getPoint = '7700'; tsumoAgari = '(ツモアガりなら2000,3900)'; }
      if (fu_su >= 40) { getPoint = '8000'; tsumoAgari = '(ツモアガりなら2000,4000)'; }
    }

    if (han_su == 5) { getPoint = '8000'; tsumoAgari = '(ツモアガりなら2000,4000)'; }
    if (han_su >= 6) { getPoint = '12000'; tsumoAgari = '(ツモアガりなら3000,6000)'; }
    if (han_su >= 8) { getPoint = '16000'; tsumoAgari = '(ツモアガりなら4000,8000)'; }
    if (han_su >= 11) { getPoint = '24000'; tsumoAgari = '(ツモアガりなら6000,12000)'; }
    if (han_su >= 13) { getPoint = '32000'; tsumoAgari = '(ツモアガりなら8000,16000)'; }
  }


  // ⑤結果表示
  fu_result.innerHTML = fu_su;
  han_result.innerHTML = han_su;
  ten_result.innerHTML = getPoint;
  tsumo_result.innerHTML = tsumoAgari;
  result_display.style.display = 'block';
  document.getElementById('reset').style.display = 'inline';
});

// リセット
const kansCount = document.querySelectorAll('.count-value')
document.getElementById('reset').addEventListener('click', function () {
  //ラジオボタン解除
  const radioCheck = document.querySelectorAll('input:checked');
  for (let i = 0; i < radioCheck.length; i++) {
    radioCheck[i].checked = false;
  }
  // 結果削除
  fu_result.innerHTML = '？';
  han_result.innerHTML = '？';
  ten_result.innerHTML = '？';
  tsumo_result.innerHTML = '';
  result_display.style.display = 'none';
  document.getElementById('reset').style.display = 'none';
  // 初期値に戻す
  han1.checked = true
  han_su = 1;
  fu_su = 'no_value';
  getPoint = '';
  tsumoAgari = '';
  document.getElementById('ko').checked = true;
  // 槓子の値を戻す
  ankan1Count = 0; ankan2Count = 0; minkan1Count = 0; minkan2Count = 0;
  for (i = 0; i < kansCount.length; i++) {
    kansCount[i].innerHTML = '0';
  };
  // 質問のチェック状態の初期化
  addDisabled(q2); addDisabled(q3); addDisabled(q4); addDisabled(q5);
});

//トップへ戻る
document.getElementById('to-top').addEventListener('click', function () {
  scrollTo(0, 0);
})
