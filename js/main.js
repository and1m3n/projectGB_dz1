const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
    
];

//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
 const renderProduct = item => {
     return `<div class="product-item">
                 <h3>${item.title}</h3>
                 <p>${item.price}</p>
                    <img src=https://www.howtablet.ru/wp-content/uploads/2019/10/%D0%9B%D1%83%D1%87%D1%88%D0%B8%D0%B5-15-%D0%B4%D1%8E%D0%B9%D0%BC%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BD%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA%D0%B8.jpg></img>
                 <button class="buy-btn">Купить</button>
             </div>`
 };
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item)).join('');
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
   
};

renderPage(products);