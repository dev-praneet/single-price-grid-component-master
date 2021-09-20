import styled from 'styled-components';
import { GlobalStyle } from './Components/GlobalStyle';
import Theme from './Components/Theme';
import First from './Components/First';
import Second from './Components/Second';
import Third from './Components/Third';

const Container = styled.div`
  
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
