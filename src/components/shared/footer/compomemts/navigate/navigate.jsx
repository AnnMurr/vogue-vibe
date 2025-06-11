import { Item } from "./components/item/item";
import { Title } from "./components/title/title";
import { Container } from "./styledNavigate";

export const Navigate = () => {
    return (
        <Container>
            <div>
                <Title text="About us" />
                <ul>
                    <Item text="About" link="/about" />
                    <Item text="Career" link="/career" />
                </ul>
            </div>
            <div>
                <Title text="Rules" />
                <ul>
                    <Item text="Privacy Policy" link="/privacy" />
                    <Item text="Terms of Website User" link="/terms" />
                    <Item text="Cookie Policy" link="/cookies" />
                </ul>
            </div>
            <div>
                <Title text="Buy Online" />
                <ul>
                    <Item text="For women" link="#" />
                    <Item text="For men" link="#" />
                    <Item text="For girls" link="#" />
                    <Item text="For boys" link="#" />
                </ul>
            </div>
        </Container>
    )
}