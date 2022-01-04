import { useState } from "react"
import ExchangeRates from "./ExchangeRates"


const CurrencyConveter = () => {
    const currency = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA']
    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC')
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC')
    const [amount, setAmount] = useState(1)

    console.log(amount)

    const convert = () => {
        var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://alpha-vantage.p.rapidapi.com/query',
  params: {
    interval: '5min',
    function: 'TIME_SERIES_INTRADAY',
    symbol: 'MSFT',
    datatype: 'json',
    output_size: 'compact'
  },
  headers: {
    'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
    'x-rapidapi-key': '590f8f074dmsh7a805149f7d4a8bp12b027jsndcdb7daa8fd2'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
    }


    return (
      <div className="currency-converter">
        <h2>Currency Conveter</h2>

        <div className="input-box">
        <table>
            <tbody>
                <tr>
                    <td>Primary Currency</td>
                    <td>
                        <input 
                        type="number"
                        name="Currency-amount-1"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        
                        />
                    </td>

                    <td>
                        <select
                            value={chosenPrimaryCurrency}
                            name="Currency-option-1"
                            className="currency-options"
                            onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                            >

                                {currency.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                        </select>
                    </td>
                </tr>
{/* Second table row goes here */}
<tr>
                    <td>Secondary Currency</td>
                    <td>
                        <input 
                        type="number"
                        name="Currency-amount-2"
                        value={""}
                        // onChange={(e) => setAmount(e.target.value)}
                        
                        />
                    </td>

                    <td>
                        <select
                            value={"chosenSecondary"}
                            name="Currency-option-"
                            className="currency-options"
                            onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                            >

                        {currency.map((currency, _index) => (<option key={_index}>{currency}</option>))}

                        </select>
                    </td>
                </tr>

            </tbody>
        </table>



        <button id="convert-button" onClick={convert}>Convert</button>
        </div>

        <ExchangeRates />
      </div>
        
    )
  }
  
  export default CurrencyConveter
  