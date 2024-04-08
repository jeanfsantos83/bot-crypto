const axios = require("axios");

const SYMBOL = "BTCUSDT";
const BUY_PRICE = 69310;
const SELL_PRICE = 71700;

const API_URL = "https://testnet.binance.vision";

let isOpened = false;

async function start(){
    // comandos do robô
    const {data} = await axios.get(API_URL + "/api/v3/klines?limit=21&interval=15m&symbol=" + SYMBOL);
    const candle = data[data.length - 1];
    const price = parseFloat(candle[4]);

    console.clear();
    console.log("Price: " + price);

    if(price <= BUY_PRICE && isOpened === false) {
        console.log("comprar");
        isOpened = true;
    }
    else if(price >= SELL_PRICE && isOpened === true){
        console.log("vender");
        isOpened = false;
    }
    else
        console.log("aguardar");
}

setInterval(start, 3000);

start();