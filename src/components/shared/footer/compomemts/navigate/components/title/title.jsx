import { Text, TitleWrap } from "./styledTitle";

export const Title = ({ text }) => {
    return (
        <TitleWrap>
            <Text>{ text }</Text>
        </TitleWrap>
    )
}