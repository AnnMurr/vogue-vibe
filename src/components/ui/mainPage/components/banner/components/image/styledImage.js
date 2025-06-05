import styled from "styled-components";

export const Container = styled.div`
    height: 36rem;
    position: absolute;
    inset: 0;

    &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(58, 58, 58, 0.4);;
        z-index: 2;
        pointer-events: none;
    }
`

export const Img = styled.img`
    width: 100%;
    max-height: 36rem;
    object-fit: cover;
    position: absolute;
    z-index: 1;
`