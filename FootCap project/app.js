let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let buy =document.getElementById("buy")
let user =document.getElementById("user")


openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'ASIAN',
        image: 'product1.PNG',
        price: 1200
    },
    {
        id: 2,
        name: 'NIKE',
        image: 'product2.PNG',
        price: 1000
    },
    {
        id: 3,
        name: 'SPARK',
        image: 'product3.PNG',
        price: 2200
    },
    {
        id: 4,
        name: 'ADIDAS',
        image: 'product4.PNG',
        price: 1500
    },
    {
        id: 5,
        name: 'PUMA',
        image: 'product5.PNG',
        price: 2000
    },
    {
        id: 6,
        name: 'PARAGON',
        image: 'product6.PNG',
        price: 1000
    },
    {
        id: 7,
        name: 'REEBOK',
        image: 'product7.PNG',
        price: 1200
    },
    {
        id: 8,
        name: 'BATA',
        image: 'product8.PNG',
        price: 1800
    }

];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }else{
        alert("product already added");
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

buy.onclick=()=>{
    alert("your order placed");
    listCard.remove(buy.parentElement)
    total.innerText = 0;
    quantity.innerText=0;
    location.reload()
}


user.onclick=()=>{
    
   let a= confirm("Do you want to logout")
    if( a==true ){
        window.open('./index.html')
    }
    else{
        alert("continue shopping")
    }
    
}
console.log(user);