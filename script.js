function API(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}
const api = "http://economia.awesomeapi.com.br/json/last/BTC-USD"
const resposta = API(api);
const BTC_json = JSON.parse(resposta);
const currencyBTC = BTC_json.BTCUSD.ask;
const valor = document.getElementById("bitcoin");
valor.textContent = currencyBTC;