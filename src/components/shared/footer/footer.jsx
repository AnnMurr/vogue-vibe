import { Divider } from "../divider/divider";
import { Navigate } from "./compomemts/navigate/navigate";
import { SotialMedia } from "./compomemts/sotialMedia/sotialMedia";
import { Copyright } from "./compomemts/copyright/copyright";
import { Container, FooterBottom, FooterSection, TopWrap } from "./styledFooter";

export const Footer = () => {
    return (
        <FooterSection>
            <Container>
                <div>
                    <Divider />
                    <TopWrap>
                        <Navigate />
                    </TopWrap>
                </div>
            </Container>
            <FooterBottom>
                <Container>
                    <SotialMedia />
                    <Divider />
                    <Copyright />
                </Container>
            </FooterBottom>
        </FooterSection>
    )
}