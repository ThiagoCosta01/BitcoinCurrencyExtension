const api = "http://economia.awesomeapi.com.br/json/last/BTC-USD"
const valor = document.getElementById("logoCurrency");

function API(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function requestCurrency(){
    const resposta = API(api);
    const BTC_json = JSON.parse(resposta);
    const currencyBTC = BTC_json.BTCUSD.ask;
    valor.textContent = currencyBTC;

}

function final(){
    requestCurrency()
}

requestCurrency()

setInterval(final,5000);
