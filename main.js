let q1 = document.getElementById('q1'); let q2 = document.getElementById('q2'); let q3 = document.getElementById('q3'); let q4 = document.getElementById('q4'); let q5 = document.getElementById('q5');
let kan = document.querySelector('.kan-wrapper');
let han1 = document.getElementById('1han');

let fu_result = document.getElementById('fu_result');
let han_result = document.getElementById('han-result');
let ten_result = document.getElementById('ten-result');
let tsumo_result = document.getElementById('tsumo-result');

let fu_su = 0;

// 選択肢による項目のアクティブ・パッシブ化
let yesNo = document.querySelectorAll('.yes-no');
for (i = 0; i < yesNo.length; i++) {
  yesNo[i].addEventListener('change', function () {
    if (document.getElementById('q3-no').checked === true) {
      q4.classList.remove('disabled');
      q5.classList.remove('disabled');
    }
    if (document.getElementById('q3-yes').checked === true) {
      q4.classList.add('disabled');
      q5.classList.add('disabled');
    }
    if (document.getElementById('q1-no').checked === true) {
      q3.classList.remove('disabled');
      q2.classList.add('disabled');
    }
    if (document.getElementById('q1-yes').checked === true) {
      q2.classList.remove('disabled');
      q3.classList.add('disabled');
      q4.classList.add('disabled');
      q5.classList.add('disabled');
    }
  });
}

// 槓子の有無と値取得
let ankan1Count = 0, ankan2Count = 0, minkan1Count = 0, minkan2Count = 0; // 初期値
let ankan1 = document.getElementById('ankan1'); let ankan2 = document.getElementById('ankan2'); let minkan1 = document.getElementById('minkan1'); let minkan2 = document.getElementById('minkan2');

document.getElementById('ankan1+').addEventListener('click', function () {
  let kansTotal = ankan1Count + ankan2Count + minkan1Count + minkan2Count;
  if (kansTotal < 4) { ankan1Count++; ankan1.innerHTML = ankan1Count; }
});
document.getElementById('ankan1-').addEventListener('click', function () {
  ankan1Count = 0; ankan1.innerHTML = ankan1Count;
});
document.getElementById('ankan2+').addEventListener('click', function () {
  let kansTotal = ankan1Count + ankan2Count + minkan1Count + minkan2Count;
  if (kansTotal < 4) { ankan2Count++; ankan2.innerHTML = ankan2Count; }
});
document.getElementById('ankan2-').addEventListener('click', function () {
  ankan2Count = 0; ankan2.innerHTML = ankan2Count;
});
document.getElementById('minkan1+').addEventListener('click', function () {
  let kansTotal = ankan1Count + ankan2Count + minkan1Count + minkan2Count;
  if (kansTotal < 4) { minkan1Count++; minkan1.innerHTML = minkan1Count; }
});
document.getElementById('minkan1-').addEventListener('click', function () {
  minkan1Count = 0; minkan1.innerHTML = minkan1Count;
});
document.getElementById('minkan2+').addEventListener('click', function () {
  let kansTotal = ankan1Count + ankan2Count + minkan1Count + minkan2Count;
  if (kansTotal < 4) { minkan2Count++; minkan2.innerHTML = minkan2Count; }
});
document.getElementById('minkan2-').addEventListener('click', function () {
  minkan2Count = 0; minkan2.innerHTML = minkan2Count;
});

// 翻数表示
let han_su = 1; //初期値
let han = document.getElementsByName('han');
for (i = 0; i < han.length; i++) {
  han[i].addEventListener('change', function () {
    han_su = this.value;
  })
}

// ●得点計算と表示●
document.getElementById('calculation').addEventListener('click', function () {
  //  ①符数取得
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

  //  ②カンによる符をカウント
  (function getKanFu() {
    let kan_fu = ankan1Count * 30 + ankan2Count * 20 + minkan1Count * 20 + minkan2Count * 10;

    if (document.getElementById('q3-yes').checked === true || document.getElementById('q4-yes').checked === true) {
      kan_fu = 0;
      fu_su += kan_fu;
    }
    else {
      fu_su += kan_fu;
    }
  })();

  //  ③符数と翻数に応じた結果表示
  if (document.getElementById('oya').checked === true) {
    if (han_su == 1) {
      if (fu_su == 20) { alert('20符1翻のアガりはありません'); return false; }
      if (fu_su == 25) { alert('25符1翻のアガりはありません'); return false; }
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
      if (fu_su == 20) { alert('20符1翻のアガりはありません'); return false; }
      if (fu_su == 25) { alert('25符1翻のアガりはありません'); return false; }
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
  // ロンアガりのとき（）を表示させないようにしたいけど選びなおしたときに融通がきかない
  // if (document.getElementById('q5-no').checked === true ) {
  //   tsumo_result.innerHTML = '';
  // }
  document.getElementById('result_display').style.display = 'initial';
  document.getElementById('reset').style.display = 'initial';
  fu_result.innerHTML = fu_su;
  han_result.innerHTML = han_su;
  ten_result.innerHTML = getPoint;
  tsumo_result.innerHTML = tsumoAgari;
})

// リセット
document.getElementById('reset').addEventListener('click', function () {
  //ラジオボタン解除
  let radioCheck = document.querySelectorAll('input:checked');
  for (let i = 0; i < radioCheck.length; i++) {
    radioCheck[i].checked = false;
  }
  // 結果削除
  fu_result.innerHTML = '？';
  han_result.innerHTML = '？';
  ten_result.innerHTML = '？';
  tsumo_result.innerHTML = '';
  document.getElementById('result_display').style.display = 'none';
  document.getElementById('reset').style.display = 'none';
  // 初期値に戻す
  ankan1Count = 0; ankan2Count = 0; minkan1Count = 0; minkan2Count = 0;
  han1.checked = true
  han_su = 1;
  fu_su = 0;
  document.getElementById('ko').checked = true;
  // 槓子の値を戻す
  let kansCount = document.querySelectorAll('.count-value')
  for (i = 0; i < kansCount.length; i++) {
    kansCount[i].innerHTML = '0';
  };
  // Q1を初期化
  q2.classList.add('disabled'); q3.classList.add('disabled'); q4.classList.add('disabled'); q5.classList.add('disabled');
});

//トップへ戻る
document.getElementById('to-top').addEventListener('click', function () {
  scrollTo(0, 0);
})
