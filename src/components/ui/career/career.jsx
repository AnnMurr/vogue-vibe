import { InfoPageEmail } from "../../shared/InfoPageEmail/InfoPageEmail";
import { Footer } from "../../shared/footer/footer";
import { Header } from "../../shared/header/header";
import { InfoPageTitle } from "../../shared/infoPageTitle/infoPageTitle";
import { Container, Heading, HeadingWrap, Wrapper, Text, ListItem } from "../../../assets/styles/styledInfoPages"

export const Career = () => {
    return (
        <>
            <Header />
            <section>
                <Container>
                    <Wrapper>
                        <HeadingWrap>
                            <Heading>Join the Vogue Vibe Team</Heading>
                        </HeadingWrap>
                        <Text>
                            At Vogue Vibe, we believe fashion is a movement — and we’re looking for
                            creative, driven people to help us lead it.
                        </Text>
                        <Text>
                            Whether you're a stylist, developer, marketer, or logistics wizard —
                            there's a place for you here. We value passion, innovation, and
                            individuality. Our team is made up of people who love what they do and
                            aren’t afraid to push boundaries.
                        </Text>
                        <InfoPageTitle text="Why Work With Us?" />
                        <ul>
                            <ListItem>
                                <strong>Creative Culture:</strong> We embrace fresh ideas and bold
                                thinking.
                            </ListItem>
                            <ListItem>
                                <strong>Flexible Work:</strong> Hybrid options and results-driven
                                approach.
                            </ListItem>
                            <ListItem>
                                <strong>Style Discounts:</strong> Enjoy exclusive employee perks.
                            </ListItem>
                        </ul>
                        <InfoPageTitle text="Open Positions" />
                        <Text>
                            We’re always on the lookout for talent. Send your CV or portfolio to
                            {" "} <InfoPageEmail /> {" "}
                            or check back soon for specific openings.
                        </Text>
                    </Wrapper>
                </Container>
            </section>
            <Footer />
        </>
    )
}