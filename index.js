 
const crypto = "https://min-api.cryptocurrency.com/data/pricemulitfull?stms=BTC&tsyms=USD.EUR";
const histo = "https://api.coindesk.com/v1/bpi/historical/close.json";
const calcExchange = "https://blockchain.info/ticker";
let value;


function handleNavigation() {
  // select nav elements on"click'
  $('nav a').click(function(event) {
    //prevent default
    event.preventDefault();
    //current page is current target using data method 
    const currentPage = $(this).data('page')
    //hiding elements using class
    $('.page').hide()
    //display current page
    $(`.${currentPage}`).show()
    
  });
}

function showStartPage() {
  $('.page').hide();
  $('.start-page').show();
}


function setEventListeners() {
  handleNavigation()
}

$(() => {
  setEventListeners()
  showStartPage();
})
