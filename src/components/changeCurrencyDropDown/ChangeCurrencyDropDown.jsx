import React from 'react';
import {
    Wrapper,
    Currency,
} from "./styledComponents";

const ChangeCurrencyDropDown = props => {
    const {
        rates,
        changeCurrency,
    } = props;

    const handleChangeCurrency = currentCurrency => {
        changeCurrency(currentCurrency);
    };

    return (
        <Wrapper>
            {
                Object.keys(rates).map(name => (
                    <Currency key={name} onClick={() => handleChangeCurrency(name)}>
                        {name}
                    </Currency>
                ))
            }
        </Wrapper>
    );
};

export default React.memo(ChangeCurrencyDropDown);