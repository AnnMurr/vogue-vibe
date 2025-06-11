import { Footer } from "../../shared/footer/footer";
import { Header } from "../../shared/header/header";
import { InfoPageTitle } from "../../shared/infoPageTitle/infoPageTitle";
import { InfoPageEmail } from "../../shared/InfoPageEmail/InfoPageEmail";
import { Container, Wrapper, Heading, HeadingWrap, Text, ListItem } from "../../../assets/styles/styledInfoPages";

export const About = () => {
    return (
        <>
            <Header />
            <section>
                <Container>
                    <Wrapper>
                        <HeadingWrap>
                            <Heading>About Vogue Vibe</Heading>
                        </HeadingWrap>
                        <Text>
                            Vogue Vibe is more than just an online clothing store — it's a curated
                            destination for modern style lovers. We bring you handpicked collections
                            that combine fashion-forward trends with timeless elegance.
                        </Text>
                        <Text>
                            Founded in 2025 in Vilnius, Lithuania, Vogue Vibe was created with a
                            mission to make high-quality fashion accessible, inspiring, and
                            sustainable. Whether you're searching for bold statement pieces or
                            minimalist essentials — we've got your wardrobe covered.
                        </Text>
                        <InfoPageTitle text="What We Believe In" />
                        <ul>
                            <ListItem>
                                <strong>Quality:</strong> We source fabrics and styles that are made
                                to last.
                            </ListItem>
                            <ListItem>
                                <strong>Sustainability:</strong> Eco-friendly choices, responsible
                                production.
                            </ListItem>
                            <ListItem>
                                <strong>Individuality:</strong> Fashion is personal — we help you
                                express it.
                            </ListItem>
                        </ul>
                        <InfoPageTitle text="Contact Us" />
                        <Text>
                            Got questions? Reach out at
                            {" "} <InfoPageEmail /> {" "}
                            or follow us on social media for the latest drops and style tips.
                        </Text>
                    </Wrapper>
                </Container>
            </section>
            <Footer />
        </>
    )
}