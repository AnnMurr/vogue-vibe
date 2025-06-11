import { InfoPageEmail } from "../../shared/InfoPageEmail/InfoPageEmail";
import { Footer } from "../../shared/footer/footer";
import { Header } from "../../shared/header/header";
import { InfoPageTitle } from "../../shared/infoPageTitle/infoPageTitle";
import { Container, Heading, HeadingWrap, LinkStyled, ListItem, Text, Wrapper } from "../../../assets/styles/styledInfoPages";

export const Privacy = () => {
    return (
        <>
            <Header />
            <section>
                <Container>
                    <Wrapper>
                        <HeadingWrap>
                            <Heading>Privacy Policy</Heading>
                        </HeadingWrap>
                        <Text><strong>Effective date:</strong> January 1, 2025</Text>
                        <Text>
                            At Vogue Vibe, your privacy is important to us. This Privacy Policy
                            explains how we collect, use, and protect your personal information when
                            you visit our website, make a purchase, or interact with us.
                        </Text>
                        <InfoPageTitle text="1. Information We Collect" />
                        <Text>We may collect the following types of information:</Text>
                        <ul>
                            <ListItem>
                                <strong>Personal Information:</strong> such as your name, email, phone
                                number, shipping and billing address.
                            </ListItem>
                            <ListItem>
                                <strong>Payment Details:</strong> via secure payment processors (we do
                                not store credit card information).
                            </ListItem>
                            <ListItem>
                                <strong>Browsing Data:</strong> IP address, browser type, pages
                                visited, and interactions via cookies or analytics tools.
                            </ListItem>
                        </ul>
                        <InfoPageTitle text="2. How We Use Your Information" />
                        <Text>We use your data to:</Text>
                        <ul>
                            <ListItem>Process and ship your orders.</ListItem>
                            <ListItem>Provide customer support.</ListItem>
                            <ListItem>Send promotional emails (if you opt in).</ListItem>
                            <ListItem>Improve our website experience using analytics and feedback.</ListItem>
                        </ul>
                        <InfoPageTitle text="3. Sharing Your Information" />
                        <Text>
                            We do not sell your personal information. We may share data with
                            third-party service providers (e.g., shipping, payment, email services)
                            under strict confidentiality agreements, only when necessary to provide
                            our services.
                        </Text>
                        <InfoPageTitle text="4. Cookies" />
                        <Text>
                            We use cookies to enhance your browsing experience, personalize content,
                            and analyze traffic. You can manage your cookie preferences via your
                            browser settings. For more info, see our <LinkStyled to="/cookies">Cookie Policy</LinkStyled>.
                        </Text>
                        <InfoPageTitle text="5. Data Security" />
                        <Text>
                            Your data is protected using industry-standard security practices,
                            including encryption and secure servers. However, no method of
                            transmission is 100% secure, and we encourage you to take care with your
                            login credentials.
                        </Text>
                        <InfoPageTitle text="6. Your Rights" />
                        <Text>You have the right to:</Text>
                        <ul>
                            <ListItem>Access or correct your personal data.</ListItem>
                            <ListItem>Request deletion of your account or data.</ListItem>
                            <ListItem>Withdraw consent for marketing communications.</ListItem>
                        </ul>
                        <Text>
                            To make such requests, contact us at
                            {" "} <InfoPageEmail /> {" "}.
                        </Text>
                        <InfoPageTitle text="7. Third-Party Links" />
                        <Text>
                            Our website may contain links to external sites. We are not responsible
                            for the privacy practices of those websites. Please read their policies
                            before submitting any personal data.
                        </Text>
                        <InfoPageTitle text="8. Changes to This Policy" />
                        <Text>
                            We may update this Privacy Policy from time to time. The updated version
                            will be posted on this page with a new effective date.
                        </Text>
                        <InfoPageTitle text="9. Contact U" />
                        <Text>
                            If you have any questions or concerns regarding this policy, contact us
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