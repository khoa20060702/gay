let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        link: 'Untitled-1.html',
        details: 'a gay ',
        image: '1.PNG',
        price: 120000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        link: 'Untitled-1.html',
        details: '',
        image: '2.PNG',
        price: 120000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        link: 'Untitled-1.html',
        details: '',
        image: '3.PNG',
        price: 220000
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        link: 'Untitled-1.html',
        details: '',
        image: '4.PNG',
        price: 123000
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        link: 'Untitled-1.html',
        details: 'gay',
        image: '5.PNG',
        price: 320000
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        link: 'Untitled-1.html',
        details: 'gay ',
        image: '6.PNG',
        price: 120000
    }
];


let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <a href = "../HTML/${value.link}"><img src="../IMG/${value.image}"></a>
            <div class="title">${value.name}</div>
            <div clas="details">${value.details}</div>
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
                <div><img src="../IMG/${value.image}"/></div>
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
    total.innerText = "Total: " + totalPrice.toLocaleString();
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

function filter()
{   
    var check = document.getElementById("filter1");
    if ( check.checked == true )
    {
    // clear page
    list.innerHTML = ``;
    // creating new array with filtered objects
    var filtered = products.filter(
        function(a)
        {
            return a.details.match("gay ")
        }
    )
    // re-using code to fill page with filtered objects
    filtered.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <a href = "../HTML/${value.link}"><img src="../IMG/${value.image}"></a>
            <div class="title">${value.name}</div>
            <div clas="details">${value.details}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    }
    )
}
    else
    {
        products.forEach((value, key) =>{
            let newDiv = document.createElement('div');
            newDiv.classList.add('item');
            newDiv.innerHTML = `
                <a href = "../HTML/${value.link}"><img src="../IMG/${value.image}"></a>
                <div class="title">${value.name}</div>
                <div clas="details">${value.details}</div>
                <div class="price">${value.price.toLocaleString()}</div>
                <button onclick="addToCard(${key})">Add To Card</button>`;
            list.appendChild(newDiv);
        })
    }
    }
    function filter2()
    {   
        // clear page
        list.innerHTML = ``;
        // creating new array with filtered objects
        var filtered = products.filter(
            function(a)
            {
                return a.details.match("a ")
            }
        )
        // re-using code to fill page with filtered objects
        filtered.forEach((value, key) =>{
            let newDiv = document.createElement('div');
            newDiv.classList.add('item');
            newDiv.innerHTML = `
                <a href = "../HTML/${value.link}"><img src="../IMG/${value.image}"></a>
                <div class="title">${value.name}</div>
                <div clas="details">${value.details}</div>
                <div class="price">${value.price.toLocaleString()}</div>
                <button onclick="addToCard(${key})">Add To Card</button>`;
            list.appendChild(newDiv);
        })
        }

function add()
{
    // getting id for tagging
    var b = prompt("",b)
    // tagging
    products[b--].details = "gay"
}

  
  // Attaching the click event on the button


