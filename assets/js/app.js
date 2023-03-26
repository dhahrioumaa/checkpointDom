let openshopping=document.querySelector('.shopping');
let closeshopping=document.querySelector('.closeshopping');
let list=document.querySelector('.list');
let listcard=document.querySelector('.listcard');
let body=document.querySelector('body');
let total=document.querySelector('.total');
let quantity=document.querySelector('.quantity');
openshopping.addEventListener('click',()=>{
    body.classList.add('active');
})
closeshopping.addEventListener('click',()=>{
    body.classList.remove('active');
})

let products = [
    {
        id:1,
        name: 'PRODUCT NAME1',
        Image: '1 (2).png',
        price: 120000
    },
    {
        id:2,
        name: 'PRODUCT NAME2',
        Image: '2.png',
        price: 13000
    },
    {
        id:3,
        name: 'PRODUCT NAME3',
        Image: '3.png',
        price: 22000
    },
    {
        id:4,
        name: 'PRODUCT NAME4',
        Image: '4.png',
        price: 125000
    },
    {
        id:5,
        name: 'PRODUCT NAME5',
        Image: '6.png',
        price: 150000
    },
    {
        id:6,
        name: 'PRODUCT NAME6',
        Image: '5.png',
        price: 160000
    },
];

let listcards=[];
function initApp (){
    products.forEach((value,key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML= `
       <img  class="produit-image"src="Image/${value.Image}"/>
       <div class="title">${value.name}</div>
       <div class="price">${value.price.toLocaleString()}</div>
       <button onclick="addToCard(${key})">Add To Card </button>
       <button class="heart-btn" onclick="changeHeartColor(${key})"><i class='bx bx-heart'></i></button>

        `;
        list.appendChild(newDiv);

    })

}
function changeHeartColor(key) {
    let heartBtn = document.querySelectorAll('.heart-btn')[key];
    heartBtn.classList.toggle('red-heart');
}

initApp();
function addToCard(key){
    if(listcards[key] == null) {
        listcards[key] = products[key];
        listcards[key].quantity = 1;
    } 
    reloadCard();
}
function reloadCard(){
    listcard.innerHTML = '';
    let count = 0;
    let totalprice = 0;
    listcards.forEach((value,key) => {
        totalprice = totalprice + value.price;
        count= count + value.quantity;
        if(value !=  null){
        let newDiv =document.createElement('li');
        newDiv.innerHTML =`
        <div><img  src="Image/${value.Image}"/></div>
        <div>${value.name}</div>
        <div>${value.price.toLocaleString()}</div>
        <div>${value.quantity}</div>
        <div>
        <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
         <div class="count">${value.quantity}</div>
         <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
         <button  class="remove" onclick="deleteFromCard(${key})"><i class='bx bxs-trash-alt'></i></button>

         </div>



        `;
       
        listcard.appendChild(newDiv);
        }
    })
    total.innerText = totalprice.toLocaleString();
    quantity.innerText = count;
}
function deleteFromCard(key) {
    delete listcards[key];
    reloadCard();
}
function changeQuantity(key,quantity){
    if(quantity == 0){
        delete listcards[key];

    }
    else{
       listcards[key].quantity = quantity;
       listcards[key].price = quantity*products[key].price; 
    }
    reloadCard();

}


