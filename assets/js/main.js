// ====================================
//          Loops-Level-2_2
// ====================================




const numInput = document.body.querySelector("#numInput");
const output = document.body.querySelector("#output");

const loopIt = () => {
    const num = Number(numInput.value);
    let result = "";
    for (let i = 0; i < num; i++) {
        result += "o"
    }
    output.innerHTML = `L${result}P`
}


// ====================================
//          Loops-Level-3_2
// ====================================

const lvl2_3Output = document.body.querySelector("#lvl3-2")
let numArr = [5, 22, 15, 100, 55];

const checkIfDevidable = () => {
    for (let i = 0; i < numArr.length; i++) {
        for (let j = 2; j < numArr[i]; j++) {
            if (numArr[i] % j === 0) {
                lvl2_3Output.innerHTML += `${numArr[i]} is devidable by ${j}. The result is: ${numArr[i] / j} <br>`
            }
            
        }
        
    }
}
checkIfDevidable();

// ====================================
//          Loops-Level-3_3
// ====================================

const numInput2 = document.body.querySelector("#numInput2");
const output2 = document.body.querySelector("#output2");

const loopIt2 = () => {
    const num = Number(numInput2.value);
    let result = "";
    if (num % 2 !== 0){
        for (let i = 1; i <= num; i++) {
            if (i % 2 === 0) {
                result += "O"
            }
            else {
                result += "o"
            }
        }
        output2.innerHTML = `L${result}P`
    }else {
        for (let i = 1; i <= num; i++){
            result += "o"
        }
        output2.innerHTML = `L${result}P`
    }
    if (num === 0 ) {
        output2.textContent = " 0 ist leider keine gültige Eingabe"
    }
}
