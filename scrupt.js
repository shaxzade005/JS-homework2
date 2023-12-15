

let num = +prompt('Enter number')
let summa = 0;
if(num > 0){
  for(let i = 1; i <= num; i++){
    console.log(i)
    summa += i
  }
  console.log('Результат: ' + summa)
}else{
  console.log('Error')
}