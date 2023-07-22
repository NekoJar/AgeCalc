const Btn = document.getElementById('btn')
const Birthday = document.getElementById('birthday')
const Result = document.getElementById('result')

function CalcuAge(){
    const BirthdayValue = Birthday.value;
    if(BirthdayValue === ''){
        alert('Please enter your birthday')
    }else{
        const age = getAge(BirthdayValue)
        Result.innerText = `Your age is ${age} years old`
    }
}

function getAge(birthday){
    const ageDifMs = Date.now() - new Date(birthday).getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Btn.addEventListener('click', CalcuAge)