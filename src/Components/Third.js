import styled from 'styled-components';
import { Dummy } from './First';

const Wrapper = styled.div`
    background-color: ${props => props.theme.color.cyan};
    @media (min-width: ${props => props.theme.breakpoint.mobile}) {
        grid-area: third;
    }
`;

const Container = styled.div`
    max-width: 90%;
    margin: 0 auto;
    padding: 1.5em 0;
`;

const SubHead = styled.h2`
    color: white;
    font-size: 1.1rem;
    font-weight: 700;
`;

const Text = styled.p`
    color: hsl(179, 50%, 80%);
    line-height: 1.3;
    font-size: 0.9rem;
`;

export default () => {
    return (
        <Wrapper>
            <Container>
                <SubHead>
                    Why Us
                </SubHead>
                <Dummy height='1em' />
                <Text>Tutorials by industry experts</Text>
                <Text>Peer and expert code review</Text>
                <Text>Coding exercises</Text>
                <Text>Access to our Github repos</Text>
                <Text>Community forums</Text>
                <Text>Flashcard decks</Text>
                <Text>New videos every week</Text>
            </Container>
        </Wrapper>
    )
}