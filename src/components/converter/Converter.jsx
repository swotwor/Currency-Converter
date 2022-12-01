import React, { useEffect, useState } from 'react';
import {
    Icon,
    Wrapper,
    CurrencyBlock,
    CurrencyInput,
    CurrencySelection,
    FirstBlockOfCurrency,
    SecondBlockOfCurrency,
} from "./styledComponents";
import arrows from '../../assets/arrows.png';
import ChangeCurrencyDropDown from "../changeCurrencyDropDown";

const Converter = props => {
    const {
        rates,
    } = props;
    const [firstCurrencySelection, setFirstCurrencySelection] = useState('EUR');
    const [secondCurrencySelection, setSecondCurrencySelection] = useState('USD');
    const [firstCurrencyValue, setFirstCurrencyValue] = useState('0');
    const [secondCurrencyValue, setSecondCurrencyValue] = useState('0');
    const [firstCurrencyState, setFirstCurrencyState] = useState(false);
    const [secondCurrencyState, setSecondCurrencyState] = useState(false);

    const onChangeFirstCurrency = value => {
        // /^\d*\.?\d+$/.test(value)  -  не могу понять, почему не работает такая конструкция.
        // Не удается полностью очистить с точкой input, пришлось сделать немного по-другому...
        if(+value || value === 0 || value === '') {
            const result = (value / rates[firstCurrencySelection]) * rates[secondCurrencySelection];
            setSecondCurrencyValue(result.toFixed(2));
            setFirstCurrencyValue(value);
            setFirstCurrencyState(false);
        }
    };
    const onChangeSecondCurrency = value => {
        if(+value || value === 0 || value === '') {
            const result = (rates[firstCurrencySelection] / rates[secondCurrencySelection]) * value;
            setFirstCurrencyValue(result.toFixed(2));
            setSecondCurrencyValue(value);
            setSecondCurrencyState(false);
        }
    };
    const onChangeCurrencyButton = () => {
        setFirstCurrencySelection(secondCurrencySelection);
        setSecondCurrencySelection(firstCurrencySelection);
    }

    useEffect(() => {
        onChangeSecondCurrency(secondCurrencyValue);
    }, [firstCurrencySelection]);
    useEffect(() => {
        onChangeSecondCurrency(firstCurrencyValue);
    }, [secondCurrencySelection])

    return (
        <Wrapper>
            <CurrencyBlock>
                <FirstBlockOfCurrency>
                    <CurrencyInput
                        value={firstCurrencyValue}
                        onChange={event => onChangeFirstCurrency(event.target.value)}
                    />
                    <CurrencySelection onClick={() => setFirstCurrencyState(prevState => !prevState)}>
                        {firstCurrencySelection}
                        {
                            firstCurrencyState
                                ? <ChangeCurrencyDropDown
                                    rates={rates}
                                    changeCurrency={setFirstCurrencySelection}
                                  />
                                : null
                        }
                    </CurrencySelection>
                </FirstBlockOfCurrency>
                <Icon onClick={onChangeCurrencyButton} arrows={arrows}/>
                <SecondBlockOfCurrency>
                    <CurrencySelection onClick={() => setSecondCurrencyState(prevState => !prevState)}>
                        {secondCurrencySelection}
                        {
                            secondCurrencyState
                                ? <ChangeCurrencyDropDown
                                    rates={rates}
                                    changeCurrency={setSecondCurrencySelection}
                                  />
                                : null
                        }
                    </CurrencySelection>
                    <CurrencyInput
                        value={secondCurrencyValue}
                        onChange={event => onChangeSecondCurrency(event.target.value)}
                    />
                </SecondBlockOfCurrency>
            </CurrencyBlock>
        </Wrapper>
    );
};

export default React.memo(Converter);