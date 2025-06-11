import { Link } from "react-router-dom";
import styled from "styled-components";

export const ItemWrap = styled.div`
    padding: 3px 0;
`

export const LinkStyled = styled(Link)`
    color: #000;
    font-size: 14px;

    &:hover {
        opacity: 0.6;
    }
`