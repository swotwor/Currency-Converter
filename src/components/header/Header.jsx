import React from 'react';
import {
    Rate,
    Wrapper,
} from "./styledComponents";

const Header = props => {
    const {
        USD,
        EUR,
    } = props;

    return (
        <Wrapper>
            <Rate>
                USD = {(1 / USD).toFixed(2)} грн
            </Rate>
            <Rate>
                EUR = {(1 / EUR).toFixed(2)} грн
            </Rate>
        </Wrapper>
    );
};

export default React.memo(Header);