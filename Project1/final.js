let score=document.getElementById('score')
score.innerText=localStorage.getItem('score')+' / '+localStorage.getItem('length')


let user=document.getElementsByClassName('user')[0]
user.innerHTML=localStorage.getItem('value')