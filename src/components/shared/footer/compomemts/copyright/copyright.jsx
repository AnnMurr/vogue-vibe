import { Container, Text } from "./styledCopyright";

export const Copyright = () => {
    return (
        <Container class="footer__copyright-content">
            <Text>
                VOGUE VIBE UAB <br />
                Stiliaus al. 5, LT-08456 <br />
                Vilnius, Lietuva (Mode Plaza, 4 aukštas)
            </Text>
            <Text>© 2025 Vogue Vibe. Visos teisės saugomos.</Text>
        </Container>
    )
}