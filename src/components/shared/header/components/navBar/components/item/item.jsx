import { Container, Link } from "./styledItem";

export const Item = ({ name, link }) => {
    return (
        <Container>
            <Link href={link}>
                {name}
            </Link>
        </Container>
    )
}