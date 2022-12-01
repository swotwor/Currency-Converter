import axios from 'axios';

export async function getExchangeRate(setExchangeRate) {
    await axios.get('https://api.exchangerate.host/latest?base=UAH')
        .then(res => setExchangeRate(res.data))
}