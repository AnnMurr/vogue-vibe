import { Item } from "./components/item/item";
import { List } from "./styledNavBar";

export const NavBar = () => {
    return (
        <div>
            <List>
                <Item name="All collection" link="/" />
                <Item name="For women" link="/" />
                <Item name="For men" link="/" />
                <Item name="For girls" link="/" />
                <Item name="For boys" link="/" />
            </List>
        </div>
    )
}