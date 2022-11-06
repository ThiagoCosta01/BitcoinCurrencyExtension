const api = "http://economia.awesomeapi.com.br/json/last/BTC-USD"
const valor = document.getElementById("bitcoin");

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

/* 
Métodos a serem adicionados:
1-Opção para o usuário escolher o tempo de atualização(em segundos).
2-Opção para avisar caso o cotação chegue ao valor especificado. 
*/