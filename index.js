
const crypto = "https://min-api.cryptocurrency.com/data/pricemulitfull?stms=BTC&tsyms=USD.EUR";
const histo = "https://api.coindesk.com/v1/bpi/historical/close.json";
const calcExchange = "https://blockchain.info/ticker";
let value;

const option = [{
        option: "View current market value as well as today's opening price, daily high, daily low, and other current statistical data.",
        value: 1
    },
    {
        option: "View variations in price using time parameters, or ubmit a search using specific selected time frames.",
        value: 2
    },
    {
        option: "Using current market pricing, alculate the value of your wallet in several different exchanges world-wide.",
        value: 3
    }
];

function hideButton(buttonId) {
    let jqueryId = '#' + buttonId;
    $(jqueryId).css('display', 'none');
}

function showButton(buttonId) {
    let jqueryId = '#' + buttonId;
    $(jqueryId).css('display', 'block');
}

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

function setEventListeners() {
  handleNavigation()
}

$(setEventListeners)

    // function renderStartPage() {
    //     //hide all buttons/text
    //     $('welcomeMessage').text(" ");
    //     $('instructions').text(" ");}

        //renderOptions();
       // function renderOptions() {
        //     ObjectEntries(forEach((options, index) => {
        //         $('.options').append('<li>' + '<input type="radio" name="options" value="' + index + '" />' + options + '</li>');
        //     }));
        //     showButton('submit');
        // }
        
// $('#submit').click(function(event) {
//                     hideButton('submit');
//                 });
//                 //validateAnswer()  

//                 function validateAnswer() {
//                     let numberChecked = $("input[optionp='option']:checked").length;
//                     if (numberChecked === 0) {
//                         return false;
//                     } else {
//                         return true;
//                     }}

//   /*              let validAnswer = validateAnswer();
//                 if (validAnswer === false) {
//                     alert("Please select an answer to continue");
//                     else(
//                         if validAnswer === true) {
//                         renderDataPages()
//                     }

//                     function renderDataPages() {
//                         if (userChoice.value = 1) {
//                             generatePricePage() {} else if (userChoice.value = 2) {
//                                 generateHistoPage()
//                             } else {
//                                 generate calcExchangePage()
//                             }

//                             function generateResults() {
//                                 function getCurrentDataFromApi(userInput, callback) {
//                                     const query = {
//                                             data {
//                                                 url: crypto,
//                                                 part: key:
//                                             }
//                                             dataType: 'JSON',
//                                             type: 'GET',
//                                             success: 'callback'
//                                         }
//                                         .getJSON(crypto, displayResults)

//                                     function displayResults {
//                                         let price = PRICE
//                                         openDay = OPENDAY
//                                         highDay = HIGHDAY
//                                         lowDay = LOWDAT
//                                         changeDay = CHANGEDAY
//                                         mktcap = MKTCAP
//                                         supply = SUPPLY
//                                     } else if (userChoice.value = 2) {
//                                         generateHistoPage
//                                         render input text buttons < start date > 'beginDate', < end date > 'endDate'

//                                         {
//                                             function getHistoryFromApi(userInputOne, userInputTwo, callback)
//                                             const settings =

//                                                 data = {
//                                                     url: histo,
//                                                     beginDate = `${userInputOne} in:beginDate}`
//                                                     endDate = `${userInputTwo} in:endDate`
//                                                 }
//                                             type: "GET",
//                                                 dataType = 'JSON'
//                                         }
//                                         $getJSON(url, )

//                                         function displayData {
//                                             on.click(function(event) {
//                                                         if userInput = 1 {}
//                                                         if userInput = 2 {}
//                                                         if userInput = 3 {}
//                                                         if userInput = 4 {}
//                                                         if userInput = 5 {}
//                                                         if userInput = null {}
//                                                         else(
//                                                                 if userChoice.value = 3) {
//                                                                 function calculateCoin() {
//                                                                     const query = {
//                                                                             data {
//                                                                                 url: calcExchange,
//                                                                                 q: `${userInput} in:name`
//                                                                                 part: key:
//                                                                             }
//                                                                             dataType: 'JSON',
//                                                                             type: 'GET 7cors=true',
//                                                                             success: 'callback'
//                                                                         }
//                                                                         .getJSON(crypto, displayResults)
//                                                                     render text box and submit button.
//                                                                     display current market value of bitcoin(usd)
//                                                                     let bitStash = (userInput)
//                                                                     onclick {
//                                                                         if (value = null) {
//                                                                             error
//                                                                         } else if (value = undefined) {
//                                                                             error
//                                                                         } else {
//                                                                             function calculateCoin {
//                                                                                 (bitStash, currentMarketValue) display results
//                                                                             }

//                                                                             $(.return).click(function(event) {
//                                                                                         $(renderStartPage)
//                                                                                     };

//                                                                                   */

// function handleNavigation() {
//   $('nav a').click(function(event) {
//     event.preventDefault()
//     const currentPage = $(event.currentTarget).data('page')
//     $('.page').hide()
//     $(`.${currentPage}`).show()
//   })
// }