// 1

function extractNumbers(str) {
    return str.match(/\d+/g)?.map(Number) || [];
}

console.log(extractNumbers("a1fg5hj6"));

// 2

function timer(i = 0, t = 1) {
    if (i > 144) return;
    console.log(i);
    setTimeout(() => timer(t, i + t), 1000);
}

timer();


// 3

async function productTitle() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error(`${response.status}`);
        }

        const data = await response.json();
        const titles = data.map(product => product.title);
        console.log( titles);
    } catch (error) {
        console.error('error');
    }
}

productTitle();

// 4

const blockButton = document.querySelector("body");
const redBody = document.querySelector("#red-body");
const greenBody = document.querySelector("#green-body");
const blueBody = document.querySelector("#blue-body");
const yellowBody = document.querySelector("#yellow-body");
const purpleBody = document.querySelector("#purple-body");

redBody.onclick = () => {
    blockButton.style.background = "red";
};
greenBody.onclick = () => {
    blockButton.style.backgroundColor = "green";
};
blueBody.onclick = () => {
    blockButton.style.backgroundColor = "blue";
};
yellowBody.onclick = () => {
    blockButton.style.backgroundColor = "yellow";
};
purpleBody.onclick = () => {
    blockButton.style.backgroundColor = "purple";
};

// 5

const button = document.getElementById('toggle-button');
const block = document.getElementById('toggle-block');

button.addEventListener('click', () => {
    if (block.style.display === 'none') {
        block.style.display = 'block';
        button.textContent = 'hide';
    } else {
        block.style.display = 'none';
        button.textContent = 'view block';
    }
});

// 6

let num = 0
const count = () => {
    num++
    console.log(num)
    if (num < 100) {
        count()
    }
}
count()

// 7

const request = new XMLHttpRequest()
request.open('GET','products.json')
request.setRequestHeader('Content-type','application/json')
request.send()

request.onload = () =>{
    const data = JSON.parse(request.response)
   console.log(data)
}