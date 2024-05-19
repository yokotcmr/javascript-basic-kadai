num = Math.floor(Math.random() * 5);

 // 変数numの値を出力する（確認用）
 console.log(num);

// 変数(num)が3の倍数の場合3の倍数ですと出力する
if (num % 3 === 0) {
    console.log('3の倍数です');
}

// 変数(num)が5の倍数の場合5の倍数ですと出力する
if (num % 5 === 0) {
    console.log('5の倍数です');
}

// 変数(num)が3と5の倍数の場合3と5の倍数ですと出力する
if (num % 3 === 0 && num % 5 === 0) {
    console.log('3と5の倍数です');
}

// それ以外の場合： 変数(num)を出力する
else {
    console.log(num);
}