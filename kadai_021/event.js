const btn = document.getElementById('btn');
const text = document.getElementById('text');

// 2秒後にtextを変更する
  btn.addEventListener('click', function() {
    setTimeout(function() {
      text.textContent = 'ボタンをクリックしました';
    }, 2000);
  });
