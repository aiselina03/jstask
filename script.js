// //? 1den 100e qeder ededler 2vahid azalsin
for (let i = 1; i > 100; i -= 2) {
    console.log(i);
}

// //? 100den 1e qeder ededler 3vahid azalsin
for (let i = 100; i > 0; i -= 3) {
    console.log(i);
}

// //? 1dem 100e qeder 3e ve 5e bolunen ededleri qaytarsin
for (let i = 1; i < 100; i++) {
    if (i % 15 === 0) {
        console.log(i);
    }
}

//? indeksde hansi herfin oldugunu gostersin
let text = "aysel"
for (let i = 0; i < text.length; i++) {
    console.log(i + "-" + text[i]);
}

//? arrayde indeksde hansi ededin oldugunu gostersin
const arr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr.length; i++) {
    console.log(i + "-" + arr[i]);
}

//? while ile arrayde indeksde hansi ededin oldugunu gostersin
const arr = [1, 2, 3, 4, 5, 6];
let i = 0;
while (i < arr.length) {
    console.log(i + "-" + arr[i]);
    i++;
}

// //? 1den 100e qeder tek ededlerin cemi
let sum = 0;
for (let i = 1; i < 100; i += 2) {
    sum += i;
}
console.log(sum);

// //?  1den 100e qeder cut ededlerin sayi
let count = 0;
for (let i = 1; i < 100; i++) {
    if (i % 2 === 0) {
        count++;
    }
}
console.log(count);

// //? factoril tapilmasi
let fact = 1
let num = parseInt(prompt("ededi daxil edin"))
for (let i = 1; i <= num; i++) {
    fact *= i
}
console.log(fact);

// //? arrayda cut ededleri qaytarir
const arr = [12, 16, 22, 13, 9, 3, 1]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

// //? 200den boyuk eded olduqda true eks halda false qaytarsin
const arr = [12, 400, 22, 9, 3, 1]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 200) {
        console.log(true);
        //  break;
    }
    else {
        continue
        console.log(false);
    }
}

// //? menfi ededleri qaytarsin
const arr = [12, -16, 22, -13, 9, 3, -1];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        console.log(arr[i]);
    }
}

// //? arrayde olan cut ededlerin cemi ile tek ededlerin ceminin ferqi
let cutsum = 0
let teksum = 0
const arr = [12, 4, 22, 9, 3, 1];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        cutsum += arr[i]
    }
    else if (arr[i] % 2 != 0) {
        teksum += arr[i]
    }
}
console.log(cutsum - teksum);

// //? 100e qeder 11e bolunen ededlerin cemi
let sum = 0;
for (let i = 0; i < 100; i += 11) {
    sum += i;
}
console.log(sum);

// //? array edediorta tapilmasi
let edediorta = 0
let sum = 0
const arr = [12, 4, 22, 9, 3, 1];
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    edediorta = sum / arr.length
}
console.log(edediorta);

// //? cut ededler
const arr = [12, 4, 22, 9, 3, 1];
for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
        console.log(arr[i]);
    }
}

// ? username ve password 
let username=prompt("username daxil edin")
let password=prompt("password daxil edin")

if(username==="code-student" && password==="12345678"){
console.log("siz istifadeci olaraq daxil olduz")
}
else{
    console.log("sifre ve username sehvdir")
}
// username==="code-student" && password==="12345678" ? console.log("siz istifadeci olaraq daxil olduz") : console.log("sifre ve username sehvdir")


// ? Temperatur 
let temp=+prompt("temperatur daxil et")
if(temp>30 && temp<45 ){
    console.log('istidir')
}
else if (temp>20 && temp<30){
    console.log('normal')
}
else if(temp>-10 && temp<20)  {
    console.log('soyuq')
}
else{
    console.log("duzgun daxil edin");
}

let salary=+prompt("salary daxil et")
if(salary>350){
console.log( `${salary *12} `);
}
else{
    console.log("maasin azdir hesablamiram");
}
// salary>350 ? console.log( `12*${salary} `) :   console.log("maasin azdir hesablamiram")


// ? Ucbucaq
let birinci=prompt("1ci eded daxil edin")
let ikinci=prompt("2ci eded daxil edin")
let ucuncu=prompt("3cu eded daxil edin")

if(birinci==ikinci && ikinci==ucuncu && birinci==ucuncu){
    console.log("beraberterefli ucbucaqdir");
}
else if(birinci<ikinci+ucuncu && birinci>ikinci-ucuncu){
    console.log("bu ucbucagin terefleridi");
}
else{
    console.log("ucbucagin terefleri deyil");
}


// ? 3e bolunen cut ededler
let num=prompt("eded daxil edin")
if(num%3==0){
  if (num%2==0) {
    console.log('Bu eded 3 e bolunen cut ededdir');

  } else {
    console.log('Bu eded 3 e bolunurr');
  }
}
  else{
    console.log("bu eded bolunmur");
  }


// ? Switch case ayin sirasini daxil etdikde fesli qaytarir
const month = +prompt("ay daxil edin")
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("qis");
    break;
  case 3:
  case 4:
  case 5:
    console.log("yaz");
    break;
  case 6:
  case 7:
  case 8:
    console.log("yay");
    break;
  case 9:
  case 10:
  case 11:
    console.log("payiz");
    break;
}
