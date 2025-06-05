import { Container } from "./styledBanner";
import { Image } from "./components/image/image";
import { Title } from "./components/title/title";
import { Subtitle } from "./components/subtitle/subtitle";
import { Button } from "./components/button/button";
import { Content, Wrapper } from "./styledBanner";

export const Banner = () => {
    return (
        <section>
            <Container>
                <Wrapper>
                    <Image />
                    <Content>
                        <Title />
                        <Subtitle />
                        <Button />
                    </Content>
                </Wrapper>
            </Container>
        </section>
    )
}