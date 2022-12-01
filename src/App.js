import {
  Wrapper,
  WrapperInner,
} from "./styledComponents";
import { useEffect, useState } from "react";
import { getExchangeRate } from "./logic/logic";
import Header from "./components/header";
import Converter from "./components/converter";

function App() {
    const [exchangeRate, setExchangeRate] = useState('');
    const { rates } = exchangeRate;

    useEffect(() =>{
        getExchangeRate(setExchangeRate);
    }, []);

    return (
        <Wrapper>
            <WrapperInner>
                {
                    exchangeRate
                        ? <>
                            <Header USD={rates?.USD} EUR={rates?.EUR}/>
                            <Converter rates={rates}/>
                          </>
                        : 'Loading...'
                }
            </WrapperInner>
        </Wrapper>
  );
}

export default App;
