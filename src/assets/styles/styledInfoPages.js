import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    max-width: 1000px;
    margin: 0 auto;
`

export const Wrapper = styled.div`
    text-align: center;
    padding: 60px 0;
`

export const HeadingWrap = styled.div`
    padding-bottom: 40px;
`

export const Heading = styled.h2`
    font-weight: 500;
    letter-spacing: 2px;
`

export const Text = styled.p`
    font-size: 16px;
`

export const ListItem = styled.li`
    font-size: 16px;
`

export const LinkStyled = styled(Link)`
    color: #000;
    text-decoration: underline;
`

