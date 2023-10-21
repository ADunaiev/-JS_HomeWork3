//база даних книжок
const books = [
    {
        source: "learningJS.jpg",
        name: 'Learning JavaScript: JavaScript Essentials for Modern Application',
        author: 'Ethan Brown',
        price: '16$',
    },
    {
        source: "scopAndClosures.jpg",
        name: "You Don't Know JS Yet: Scope & Closures",
        author: 'Kyle Simpson',
        price: '20$',
    },
    {
        source: "JSandJQuery.jpg",
        name: 'JavaScript and jQuery: Interactive Front-End Web Development',
        author: 'Jon Duckett',
        price: '22$',
    },
    {
        source: "JSandJQuery.jpg",
        name: 'JavaScript and jQuery: Interactive Front-End Web Development',
        author: 'Jon Duckett',
        price: '22$',
    },

]

document.addEventListener('DOMContentLoaded', () => {

    // заполняємо картки з книжками
    const booksDisplay = document.getElementById('books-display');
    if(!booksDisplay) throw "Can't find 'books-display'";

    var tempHTML = "";

    for(i=0; i < books.length; i++) {

        tempHTML += "<div class='col s3'><div class='card medium grey lighten-5'><div class='card-content'><img src='";
        tempHTML += books[i].source;
        tempHTML += "' alt='book";
        tempHTML += i;
        tempHTML += "' class='responsive-img'><span>";
        tempHTML += books[i].name;
        tempHTML += "</span><br><span style='font-size: small;'>";
        tempHTML += books[i].author;
        tempHTML += "</span><span class='new badge'><b>";
        tempHTML += books[i].price;
        tempHTML += "</b></span></div><div class='card-action'><button type='submit' class='btn' name='book-btn'>Select</button></div></div></div>";

    }

    booksDisplay.innerHTML = tempHTML;

    // знаходимо всі кнопки та ставимо їх на прослуховування
    const bookBtns = document.getElementsByName('book-btn');
    if(!bookBtns) throw "Can't find name 'book-btn'";

    for(let item of bookBtns) {
        item.addEventListener('click', bookBtnClicked);
    }

    // знаходимо кнопку buy
    const buyBtn = document.getElementById('buy-btn');
    if(!buyBtn) throw "Can't find id 'buy-btn'";

    buyBtn.addEventListener('click', buyBtnClicked);
});

function bookBtnClicked(elem) {

    // знаходимо поле для назви книжки
    const bookName = document.getElementById('book-name');
    if (!bookName) throw "Can't find id 'book-name'";

    // заполняэмо його назвою
    bookName.innerText = elem.target.parentElement.previousElementSibling.children[1].innerText;
}

function buyBtnClicked(e) {

    e.preventDefault();

    // знаходимо назву обраної книжки
    const bookName = document.getElementById('book-name');
    if (!bookName) throw "Can't find id 'book-name'";

    // знаходимо кількість книжок
    const bookQuantity = document.getElementById('book-quantity');
    if(!bookQuantity) throw "Can't find id 'book-quantity'";

    // знаходимо ім'я
    const userName = document.getElementById('user-name');
    if(!userName) throw "Can't find id 'user-name'";

    // знаходимо адресу доставки
    const userAddress = document.getElementById('user-address');
    if(!userAddress) throw "Can't find id 'user-address'";

    // знаходимо дату
    const deliveryDate = document.getElementById('delivery-date');
    if(!deliveryDate) throw "Can't find id 'delivery-date'";

    // знаходимо коментар
    const userComment = document.getElementById('user-comment');
    if (!userComment) throw "Can't find id 'user-comment'";

    // виводемо результат

    const resultDiv = document.getElementById('result-div');
    if (!resultDiv) throw "Can't find id 'result-div'";

    let textHTML = "";
    textHTML += "<div class='col s12'><div class='card grey lighten-5'><div class='card-content'><span class='card-title'>";
    textHTML += "Замовлення прийняте</span><span>";
    textHTML += userName.value;
    textHTML += ", дякуємо за замовлення. ";
    textHTML += bookQuantity.value;
    textHTML += " книжок '";
    textHTML += bookName.innerText;
    textHTML += "' будуть доставлени ";
    textHTML += deliveryDate.value;
    textHTML += " за адресою:<br>";
    textHTML += userAddress.value;
    textHTML += "<br><br>Ми почули Ваше побажання:<br>";
    textHTML += userComment.value;
    textHTML += "</span></div></div></div>";

    resultDiv.innerHTML = textHTML;

}

