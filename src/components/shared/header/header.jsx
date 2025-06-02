import { Logo } from "./components/logo/logo";
import { Container } from "../container/container";
import { TopModuleRight } from "./components/topModuleRight/topModuleRight";
import { NavBar } from "./components/navBar/navBar";
import { Search } from "./components/search/search";
import { Wrapper, TopModuleWrapper, TopModuleLeft, HeaderMenuWrapper } from "./styledHeader";

export const Header = () => {
    return (
        <header>
        <Container>
          <Wrapper>
            <div>
              <TopModuleWrapper>
                <TopModuleLeft></TopModuleLeft>
                <Logo />
                <TopModuleRight />
              </TopModuleWrapper>
            </div>
            <div>
              <HeaderMenuWrapper>
                <NavBar />
                <Search />
              </HeaderMenuWrapper>
            </div>
          </Wrapper>
        </Container>
      </header>
    )
}