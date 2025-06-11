import { Container, Icon } from "./styledSearch";

export const Search = () => {
    return (
        <Container>
            <Icon>
                <span>
                    <i className="bi bi-search"></i>
                </span>
            </Icon>
            <span>Search</span>
        </Container>
    )
}