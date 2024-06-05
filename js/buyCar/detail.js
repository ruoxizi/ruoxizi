import products from './products.js';
import cart from './cart.js';

let listProduct = document.getElementById('listProduct');
let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');

const loadTemplate = () => {
    fetch('../../template.html')
        .then(response => response.text())
        .then(html => {
            app.innerHTML = html;
            let contentTab = document.getElementById('contentTab');
            contentTab.innerHTML = temporaryContent.innerHTML;
            temporaryContent.innerHTML = null;
            cart();
            initApp();
        })
}
loadTemplate();
const initApp = () => {
    let productId = new URLSearchParams(window.location.search).get('id');
    let thisProduct = products.filter(value => value.id == productId)[0];
    if (!thisProduct) {
        window.location.href = "/";
    }

    let detail = document.querySelector('.detail');
    detail.querySelector('.image img').src = thisProduct.image;
    detail.querySelector('.name').innerText = thisProduct.name;
    detail.querySelector('.price').innerText = '$' + thisProduct.price;
    detail.querySelector('.description').innerText = thisProduct.description;
    detail.querySelector('.addCart').dataset.id = thisProduct.id;


    let listProductHTML = document.querySelector('.listProduct');
    products.forEach(product => {
        let newProduct = document.createElement('div');
        newProduct.classList.add('item');
        newProduct.innerHTML = `<a  href="./detail.html?id=${product.id}">
            <img src="${product.image}">
        </a>
        <br /> <br /><br />
        <div class="block">
        <h2>${product.name}</h2>
        </div>
        <div class="BlockpPrice">
        <div class="price">$${product.price}</div>
        </div>

        <button 
            class="addCart" 
            data-id='${product.id}'>
                添加到购物车
        </button>`;
        listProductHTML.appendChild(newProduct);
    });

}