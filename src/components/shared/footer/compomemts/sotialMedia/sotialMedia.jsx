import { Item } from "./components/item/item";
import { Container, List } from "./styledSotialMedia";

export const SotialMedia = () => {
    return (
        <Container>
            <List>
                <Item link="#" icon="bi bi-instagram" />
                <Item link="#" icon="bi bi-pinterest" />
                <Item link="#" icon="bi bi-telegram" />
            </List>
        </Container>
    )
}