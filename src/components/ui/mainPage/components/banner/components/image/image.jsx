import { banner } from "../../../../../../../assets/images";
import { Container, Img } from "./styledImage";

export const Image = () => {
    return (
        <Container>
            <Img src={banner} />
        </Container>
    )
}