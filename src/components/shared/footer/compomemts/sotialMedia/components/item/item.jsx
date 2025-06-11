import { Link } from "./styledItem";

export const Item = ({ icon, link }) => {
    return (
        <li>
            <Link href={link}>
                <i className={icon}></i>
            </Link>
        </li>
    )
}