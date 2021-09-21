import styled from 'styled-components';
import { GlobalStyle } from './Components/GlobalStyle';
import Theme from './Components/Theme';
import First from './Components/First';
import Second from './Components/Second';
import Third from './Components/Third';

const Container = styled.div`
  max-width: 375px;
  margin: 0 auto;

  @media (min-width: ${props => props.theme.breakpoint.mobile}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
    "first first"
    "second third";
    max-width: 1000px;
  }
`;

function App() {
  return (
      <Theme>
        <GlobalStyle />
        <Container>
          <First />
          <Second />
          <Third />
        </Container>
      </Theme>
  );
}

export default App;
