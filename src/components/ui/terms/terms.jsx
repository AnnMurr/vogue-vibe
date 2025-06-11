import { InfoPageEmail } from "../../shared/InfoPageEmail/InfoPageEmail";
import { Footer } from "../../shared/footer/footer";
import { Header } from "../../shared/header/header";
import { InfoPageTitle } from "../../shared/infoPageTitle/infoPageTitle";
import { Container, Heading, HeadingWrap, ListItem, Text, Wrapper } from "../../../assets/styles/styledInfoPages";

export const Terms = () => {
    return (
        <>
            <Header />
            <section>
                <Container>
                    <Wrapper>
                        <HeadingWrap>
                            <Heading>Terms of Website Use</Heading>
                        </HeadingWrap>
                        <Text><strong>Last updated:</strong> January 1, 2025</Text>
                        <Text>
                            Please read these Terms of Use carefully before using the Vogue Vibe
                            website. By accessing or using any part of the site, you agree to be bound
                            by these terms.
                        </Text>
                        <InfoPageTitle text="1. Website Access" />
                        <Text>
                            Access to our website is permitted on a temporary basis. We reserve the
                            right to withdraw or amend the service we provide without notice.
                        </Text>
                        <InfoPageTitle text="2. Intellectual Property Rights" />
                        <Text>
                            All content, including text, graphics, logos, images, and code, is the
                            property of Vogue Vibe or its licensors and is protected by copyright and
                            trademark laws. You may not reproduce, distribute, or use any content
                            without our written permission.
                        </Text>
                        <InfoPageTitle text="3. Acceptable Use" />
                        <Text>You agree not to:</Text>
                        <ul>
                            <ListItem>
                                Use the website in any way that violates local or international laws.
                            </ListItem>
                            <ListItem>Transmit viruses, worms, or any malicious code.</ListItem>
                            <ListItem>Attempt unauthorized access to our systems or networks.</ListItem>
                        </ul>
                        <InfoPageTitle text="4. User Accounts" />
                        <Text>
                            When you create an account with us, you are responsible for maintaining
                            the confidentiality of your password and account. We are not liable for
                            any loss or damage resulting from your failure to do so.
                        </Text>
                        <InfoPageTitle text="5. Product Information" />
                        <Text>
                            While we aim to provide accurate product descriptions and pricing,
                            occasional errors may occur. We reserve the right to correct any errors
                            and cancel orders if necessary.
                        </Text>
                        <InfoPageTitle text="6. Links to Other Websites" />
                        <Text>
                            Our site may contain links to third-party websites. These links are
                            provided for your convenience only. We do not endorse or accept
                            responsibility for any third-party content or privacy practices.
                        </Text>
                        <InfoPageTitle text="7. Limitation of Liability" />
                        <Text>
                            Vogue Vibe will not be liable for any indirect, incidental, or
                            consequential damages arising out of your use or inability to use the
                            website or services.
                        </Text>
                        <InfoPageTitle text="8. Changes to the Terms" />
                        <Text>
                            We may revise these terms at any time by updating this page. You are
                            expected to check this page from time to time to take notice of any
                            changes we make.
                        </Text>
                        <InfoPageTitle text="9. Governing Law" />
                        <Text>
                            These terms shall be governed and construed in accordance with the laws of
                            the Republic of Lithuania, without regard to its conflict of law
                            provisions.
                        </Text>
                        <InfoPageTitle text="10. Contact Us" />
                        <Text>
                            If you have any questions about these Terms, please contact us:<br />
                            <strong>Email:</strong>
                            {" "} <InfoPageEmail /> {" "}<br />
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