let formsubmit=document.getElementById("formsubmit")
let form=document.getElementById("subContainer")

// let namevalue=name1.value
// localStorage.setItem('value',namevalue)
// console.log(localStorage.setItem('value',JSON.stringify(namevalue)));
// console.log(localStorage.getItem('value'));

let namevalue=document.getElementById('uname')
let emailvalue = document.getElementById('email');
let pswdvalue = document.getElementById('password');
console.log(namevalue.value);
console.log(emailvalue.value);
console.log(pswdvalue.value);

// function storeValues(e) {
//     e.preventDefault()
//     if (namevalue === '' || emailvalue === '' || pswdvalue === '') {
//         alert('Please enter all three values.');
//         return;
//     }

//     // localStorage.setItem('value', namevalue);
//     // console.log(localStorage.getItem(value));

//     console.log(namevalue);
//     localStorage.setItem("value",namevalue)
// }

formsubmit.addEventListener('click',(e)=>{
    e.preventDefault()
    if (namevalue === '' || emailvalue === '' || pswdvalue === '') {
        alert('Please enter all three values.');
    }

    // localStorage.setItem('value', namevalue);
    // console.log(localStorage.getItem(value));

    console.log(namevalue.value);
    localStorage.setItem("value",namevalue.value)

    location.href="./questions.html"
})