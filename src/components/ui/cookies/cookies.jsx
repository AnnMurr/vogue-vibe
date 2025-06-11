import { Wrapper, Container, HeadingWrap, Heading, Text, ListItem } from "../../../assets/styles/styledInfoPages"
import { InfoPageEmail } from "../../shared/InfoPageEmail/InfoPageEmail"
import { Footer } from "../../shared/footer/footer"
import { Header } from "../../shared/header/header"
import { InfoPageTitle } from "../../shared/infoPageTitle/infoPageTitle"


export const Cookies = () => {
    return (
        <>
            <Header />
            <section>
                <Container>
                    <Wrapper>
                        <HeadingWrap>
                            <Heading>Cookie Policy</Heading>
                        </HeadingWrap>
                        <Text><strong>Last updated:</strong> January 1, 2025</Text>
                        <Text>
                            This Cookie Policy explains how Vogue Vibe ("we", "our", or "us") uses
                            cookies and similar technologies when you visit our website.
                        </Text>
                        <InfoPageTitle text="1. What Are Cookies?" />
                        <Text>
                            Cookies are small text files that are stored on your device when you
                            visit a website. They help websites remember your preferences and
                            enhance your user experience.
                        </Text>
                        <InfoPageTitle text="2. Types of Cookies We Use" />
                        <ul>
                            <ListItem>
                                <strong>Essential Cookies:</strong> These are necessary for the
                                website to function properly (e.g., login sessions, cart management).
                            </ListItem>
                            <ListItem>
                                <strong>Performance Cookies:</strong> These help us understand how
                                users interact with the website by collecting anonymous data.
                            </ListItem>
                            <ListItem>
                                <strong>Functionality Cookies:</strong> These remember your
                                preferences (e.g., language, region) for a more personalized
                                experience.
                            </ListItem>
                            <ListItem>
                                <strong>Marketing Cookies:</strong> These are used to deliver relevant
                                ads and measure the effectiveness of our campaigns.
                            </ListItem>
                        </ul>
                        <InfoPageTitle text="3. Third-Party Cookies" />
                        <p>
                            We may allow third-party services like Google Analytics or Meta Pixel to
                            set cookies that help us analyze traffic or deliver ads. These providers
                            have their own cookie and privacy policies.
                        </p>
                        <InfoPageTitle text="4. How You Can Control Cookies" />
                        <Text>You have the right to accept or reject cookies. You can:</Text>
                        <ul>
                            <ListItem>Change your browser settings to block or delete cookies.</ListItem>
                            <ListItem>Use cookie consent banners to manage preferences.</ListItem>
                            <ListItem>
                                Opt out of tracking via third-party platforms (e.g., Google,
                                Facebook).
                            </ListItem>
                        </ul>
                        <Text>
                            Please note that disabling cookies may affect the functionality of
                            certain parts of our website.
                        </Text>
                        <InfoPageTitle text="5. Updates to This Policy" />
                        <Text>
                            We may update this Cookie Policy to reflect changes in technology,
                            legislation, or our practices. Any updates will be posted on this page
                            with a revised date.
                        </Text>
                        <InfoPageTitle text="6. Contact Us" />
                        <Text>
                            If you have any questions about our use of cookies, please contact us
                            at:<br />
                            <strong>Email:</strong>
                            {" "} <InfoPageEmail /><br />
                            <strong>Address:</strong> Vogue Vibe UAB, Stiliaus al. 5, LT-08456,
                            Vilnius, Lithuania
                        </Text>
                    </Wrapper>
                </Container>
            </section>
            <Footer />
        </>
    )
}