import { ItemWrap, Link } from "./styledItem";

export const Item = ({ text, link }) => {
    return (
        <ItemWrap>
            <Link href={link}> {text} </Link>
        </ItemWrap>
    )
}