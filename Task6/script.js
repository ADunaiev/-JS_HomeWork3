const prices = [
    {
        direction: "Одеса-Львів",
        price: '70'
    },
    {
        direction: "Одеса-Киів",
        price: '50'
    },
    {
        direction: "Одеса-Варшава",
        price: '120'
    },
    {
        direction: "Одеса-Дніпро",
        price: '50'
    },
    {
        direction: "Одеса-Ялта",
        price: '80'
    },
    {
        direction: "Одеса-Харьків",
        price: '75'
    }
];

var ticketsPrice =0;
var bookings = [];
var bookingNumber = 0;

document.addEventListener('DOMContentLoaded', function() {

    // filling directions
    const directionSelect = document.getElementById('direction-select');
    if(!directionSelect) throw "Can't find id 'direction-select'";

    let textHTML = "";
    textHTML += "<option value='' disabled selected>Choose direction</option>";

    for(let i = 0; i < prices.length; i++) {
        textHTML += "<option value='";
        textHTML += i+1;
        textHTML += "'>";
        textHTML += prices[i].direction;
        textHTML += "</option>";
    }
    directionSelect.innerHTML = textHTML;

    // вмикаємо select у Materialize
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);

    // turning on date picker
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);

    // Matrialize collapsible
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);

    // activation of search button
    const searchBtn = document.getElementById('search-btn');
    if(!searchBtn) throw "Can't find id 'search-btn'";
    searchBtn.addEventListener('click', searchBtnClicked);

    // activation of bookings button
    const bookingsBtn = document.getElementById('bookings-btn');
    if(!bookingsBtn) throw "Can't find id 'bookings-btn'";
    searchBtn.addEventListener('click', bookingsBtnClicked);

});

function bookingsBtnClicked(e) {
    e.preventDefault();
}

function searchBtnClicked(e) {
    e.preventDefault();
    ticketsPrice = 0;

    // finding result-div
    const resultDiv = document.getElementById('result-div');
    if(!resultDiv) throw "Can't find id 'result-div'";

    // finding direction-select
    const directionSelect = document.getElementById('direction-select');
    if(!directionSelect) throw "Can't find id 'direction-select'";

    // finding date-input
    const dateInput = document.getElementById('date-input');
    if(!dateInput) throw "Can't find id 'date-input'";

    if(directionSelect.value < 1 || dateInput.value == "") {
        alert("Please choose direction and date!");
    } else {

        let existingBookings = bookings.filter((booking) => booking.direction == prices[directionSelect.value-1].direction && booking.date == dateInput.value);

        for(let eb of existingBookings) {
            console.log(eb.seat);
        }
        //drawing seats
        let textHTML = "";
        textHTML += "<div class='row grey lighten-4 valign-wrapper'><div class='col s12'><br><br>";
        textHTML += "<div class='row'><div class='col s12 center-align'>";

        for(let i=0; i < 7; i++) {
            textHTML += "<div class='coupe'><div class='seat'><label><input type='checkbox' name='seat-checkbox'/><span>";
            textHTML += 4*i+1;
            textHTML += "</span></label></div><div class='seat'><label><input type='checkbox' name='seat-checkbox'/><span>";
            textHTML += 4*i+3;
            textHTML += "</span></label></div><div class='seat'><label><input type='checkbox' name='seat-checkbox'/><span>";
            textHTML += 4*i+2;
            textHTML += "</span></label></div><div class='seat'><label><input type='checkbox' name='seat-checkbox'/><span>";
            textHTML += 4*i+4;
            textHTML += "</span></label></div></div>";
        }

        textHTML += "</div></div>";

        textHTML += "<div class='row flexbox'><div class='col s12'><div class='col s3 offset-s6 valign-wrapper right'>";
        textHTML += "<span><b>Total price: </b></span><span><b id='tickets-price'>0</b></span><b>$ </b><span></span></div><div class='col s3'>";
        textHTML += "<button type='submit' id='book-btn' class='btn waves-effect waves-light center-align'>book</button></div></div></div>";
        textHTML += "</div></div>";
        resultDiv.innerHTML = textHTML;


        //setting seat checkboxes
        const seatCheckboxes = document.getElementsByName('seat-checkbox');
        if(!seatCheckboxes) throw "Can't find elements with name 'seat-checkbox'";
       
        for(let i = 0; i < seatCheckboxes.length; i++) {
            if(existingBookings.find((element) => element.seat == seatCheckboxes[i].nextSibling.innerText)) {
               seatCheckboxes[i].disabled = true;
            } else {
               // console.log((i+1) + " = " + seatCheckboxes[i].nextSibling.innerText);
                seatCheckboxes[i].addEventListener('change', seatCheckboxClicked);
            }            
        }

        // setting BOOK button
        const bookBtn = document.getElementById('book-btn');
        if(!bookBtn) throw "Can't find id 'book-btn'";
        bookBtn.addEventListener('click', bookBtnClicked);
        
    } 
}

function bookBtnClicked(e) {
    e.preventDefault();

    if(ticketsPrice > 0) {
    
        bookingNumber++;

        // finding result-div
        const resultDiv = document.getElementById('result-div');
        if(!resultDiv) throw "Can't find id 'result-div'";

        // finding direction-select
        const directionSelect = document.getElementById('direction-select');
        if(!directionSelect) throw "Can't find id 'direction-select'";

        // finding date-input
        const dateInput = document.getElementById('date-input');
        if(!dateInput) throw "Can't find id 'date-input'";

        //setting seat checkboxes
        const seatCheckboxes = document.getElementsByName('seat-checkbox');
        if(!seatCheckboxes) throw "Can't find elements with name 'seat-checkbox'";


        for(let item of seatCheckboxes) {
            if(item.checked) {
                bookings.push(
                    {
                        booking: `${bookingNumber}`,
                        direction: `${prices[directionSelect.value-1].direction}`,
                        date: `${dateInput.value}`,
                        seat: `${item.nextSibling.innerText}`
                    }
                )
            }
        }

        resultDiv.innerHTML = "";

    } else {
        alert("Please choose your seats!");
    }

}

function seatCheckboxClicked(e) {

        // finding direction-select
        const directionSelect = document.getElementById('direction-select');
        if(!directionSelect) throw "Can't find id 'direction-select'";

        //finding price info
        const ticketsPriceInfo = document.getElementById('tickets-price');
        if(!ticketsPriceInfo) throw "Can't find id 'tickets-price'";

        let currentPrice = prices[directionSelect.value-1].price;

        console.log(this.nextSibling.innerText);
        
        if (this.checked) {
            ticketsPrice += parseInt(currentPrice);
        } else {
            ticketsPrice -= parseInt(currentPrice);
        }

        ticketsPriceInfo.innerText = ticketsPrice;
}

/*
          <div class="col s12">
            <ul class="collapsible popout">

              <li>
                <div class="collapsible-header">
                  <table>
                    <tbody>
                      <tr>
                        <td><span>бронювання 1</span></td>
                        <td><span>Одеса-Харьків</span></td>
                        <td><span>30.10.23</span></td>
                        <td><span>2 квітка</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="collapsible-body">
                  <p>
                    <table>
                      <tbody>
                        <tr>
                          <td><span>бронювання 1</span></td>
                          <td><span>Одеса-Харьків</span></td>
                          <td><span>30.10.23</span></td>
                          <td><span>місце 1</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          */