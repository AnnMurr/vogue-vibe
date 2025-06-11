import { ItemWrap, LinkStyled } from "./styledItem";

export const Item = ({ text, link }) => {
    return (
        <ItemWrap>
            <LinkStyled to={link}> {text} </LinkStyled>
        </ItemWrap>
    )
}