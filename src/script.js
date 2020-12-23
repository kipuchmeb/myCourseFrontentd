
/*Вычисления для квадратного уравнения*/
let btn = document.querySelector('.btn1');
btn.addEventListener('click', quadraticEquation);

let out2 = document.querySelector('.out2');

/*Напишите скрипт, который будет находить корни квадратного уравнения. 
Для этого сделайте 3 инпута, в которые будут вводиться коэффициенты уравнения.*/
function quadraticEquation(){
    let a = +document.querySelector('.a').value;
    let b = +document.querySelector('.b').value;
    let c = +document.querySelector('.c').value;

    let x, x1, x2 = 0;
    let D = b ** 2 - 4 * a * c;

    if(D > 0) {
        x1 = (-b - Math.sqrt(D)) / 2 * a;
        x2 = (-b + Math.sqrt(D)) / 2 * a;
        out2.innerHTML = `X1 = ${x1.toFixed(3)}, X2 =  ${x2.toFixed(3)}`;
    } else if(D === 0){
        x = -b / 2 * a;
        out2.innerHTML = `X = ${x}`
    } else {
        out2.innerHTML =' Нет корней'
    }


}
//------------------------------------------------------------------------
/*Вычисления для проверки тройки Пифагора*/
let btnPifagor = document.querySelector('.btnPifagor');
btnPifagor.addEventListener('click', pifagor);


let outPifagor2 = document.querySelector('.outPifagor2');

/*Даны 3 инпута. В них вводятся числа. Проверьте, что эти числа являются 
тройкой Пифагора: квадрат самого большого числа должен быть равен сумме 
квадратов двух остальных.*/
function pifagor(){
    let aP = +document.querySelector('.aP').value;
    let bP = +document.querySelector('.bP').value;
    let cP = +document.querySelector('.cP').value;

   let max = Math.max(aP, bP, cP);
   
   if(max === aP && (aP**2) === (bP**2 + cP**2) ){
        outPifagor2.innerHTML = "Числа являются тройкой Пифагора";
   } else if(max === bP && (bP**2) === (aP**2 + cP**2)) {
        outPifagor2.innerHTML = "Числа являются тройкой Пифагора";
   } else if(max === cP && (cP**2) === (aP**2 + bP**2)) {
        outPifagor2.innerHTML = "Числа являются тройкой Пифагора";
   } else {
        outPifagor2.innerHTML = "Числа не являются";
   }
}
//-------------------------------------------------------------------------

/*Дан инпут и кнопка. В инпут вводится число.
 По нажатию на кнопку выведите список делителей этого числа.*/
 let btnDivisor = document.querySelector('.btnDivisor');
 btnDivisor.addEventListener('click', divisorList);

 function divisorList(){
    let inputDivisor = +document.querySelector('.inputDivisor').value;
    console.log(inputDivisor);

    let ulDivisor = document.querySelector('.ulDivisor');
    
    let result = [];
    for(let i = 0; i <=inputDivisor; i++){
        if(inputDivisor % i === 0) result.push(i);        
    }

    for(let i = 0; i < result.length; i++){
        let li = document.createElement('li');
        li.textContent = result[i];
        ulDivisor.append(li);
    }
    

    console.log(result);

}
 