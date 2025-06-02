import { Item } from "./components/item/item";
import { Container } from "./styledTopModuleRight";

export const TopModuleRight = () => {
    return (
        <Container>
            <Item name="Favorite" iconClass="bi bi-heart" />
            <Item name="Sign in" iconClass="bi bi-person" />
            <Item name="Basket" iconClass="bi bi-handbag" />
        </Container>
    )
}