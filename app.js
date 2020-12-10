// 大吉、吉、中吉、小吉、末吉、凶、大凶
let $kujis = ["大吉","吉","中吉","小吉","末吉","凶","大凶"];
let $kuji = Math.floor(Math.random() * $kujis.length);
document.write("<p>あなたの今年の運勢は、" + $kujis[$kuji] + "です</p>")