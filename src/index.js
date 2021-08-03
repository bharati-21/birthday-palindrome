/* VARIABLES */
const checkBtn = document.querySelector('.btn-check');
const birthdateIp = document.querySelector('#birthdate');
const loadingDiv = document.querySelector('.loading');
const messageDiv = document.querySelector('.message');
const outputSec = document.querySelector('.check-output');

checkBtn.addEventListener('click', handleCheckButtonClick);

function handleCheckButtonClick(e) {
    const birthdate = birthdateIp.value;
    if(birthdate==="" || birthdate=== null) {
        showSection(true);
        showMessage(true,"Please select your birthdate","error");
    }
    else {
        showMessage(false);
        console.log(birthdate.split('-'));
        showLoadingDiv(true);
        const isPalindrome = checkIfPalindrome(birthdate.split('-'));
        console.log(isPalindrome);
        setTimeout(displayOutput, 3000);
    }
}

function showSection(flag) {
    if(flag) {
    outputSec.classList.remove('display-none');
    outputSec.classList.add('display-block');
    }
    else {
        outputSec.classList.add('display-none');
    outputSec.classList.remove('display-block');
    }
}

function showMessage(flag, message, className) {
    if(flag) {
        messageDiv.className = `message display-block ${className}`;
        messageDiv.innerHTML = message;
    }
    else {
        messageDiv.className = "message display-none";
    }
}

function showLoadingDiv(flag) {
    if(flag) {
        loadingDiv.classList.remove('display-none');
        loadingDiv.classList.add('display-block');
    }
    else {
        loadingDiv.classList.add('display-none');
        loadingDiv.classList.remove('display-block');
    }
}

function checkIfPalindrome(birthdate) {
    console.log(birthdate);

    // mm-dd-yyyy
    let birthday = birthdate[1] + birthdate[2] + birthdate[0];
    console.log(birthday);
    for(var i = 0, j = birthday.length-1; i<j; i++, j--) {
        if(birthday[i]!==birthday[j]) break;
    }
    if(i===j) return true;

    // mm-dd-yy
    birthday = birthdate[1] + birthdate[2] + birthdate[0].substring(2,);
    console.log(birthday);
    for(i = 0, j = birthday.length-1; i<j; i++, j--) {
        if(birthday[i]!==birthday[j]) break;
    }
    if(i===j) return true;

    // dd-mm-yyyyy
    birthday = birthdate[2] + birthdate[1] + birthdate[0];
    console.log(birthday);
    for(i = 0, j = birthday.length-1; i<j; i++, j--) {
        if(birthday[i]!==birthday[j]) break;
    }
    if(i===j) return true;

    // yyyy-mm-dd
    birthday = birthdate.join("");
    console.log(birthday)
    for(i = 0, j = birthday.length-1; i<j; i++, j--) {
        if(birthday[i]!==birthday[j]) break;
    }
    if(i===j) return true;    

    return false;
}

function displayOutput() {
    showLoadingDiv(false);
}