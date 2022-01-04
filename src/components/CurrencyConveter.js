import ExchangeRates from "./ExchangeRates"


const CurrencyConveter = () => {
    return (
      <div className="currency-converter">
        <h2>Currency Conveter</h2>

        <div className="input-box">
        <table>
            <body>
                <tr>
                    <td>Primary Currency</td>
                    <td>
                        <input 
                        type="number"
                        name="Currency-amount-1"
                        value={""}
                        
                        />
                    </td>

                    <td>
                        <select
                            value={""}
                            name="Currency-option-1"
                            className="currency-options"
                            >

                                <option></option>
                        </select>
                    </td>
                </tr>
            </body>
        </table>
        </div>

        <ExchangeRates />
      </div>
        
    )
  }
  
  export default CurrencyConveter
  