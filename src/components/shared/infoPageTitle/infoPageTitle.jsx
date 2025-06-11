import { Container, Title } from "./styledInfoPageTitle";

export const InfoPageTitle = ({ text }) => {
    return (
        <Container>
            <Title>{text}</Title>
        </Container>
    )
}