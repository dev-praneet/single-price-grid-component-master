import styled from 'styled-components';

const Wrapper = styled.div`
    @media (min-width: ${props => props.theme.breakpoint.mobile}) {
        grid-area: first;
    }
`;

const Container = styled.div`
    max-width: 90%;
    margin: 0 auto;
    padding: 2em 0;
`;

const Head = styled.h2`
    color: ${props => props.theme.color.cyan};
    font-size: 1.1rem;
    font-weight: 700;
    `;
    
const SubHead = styled.h3`
    font-size: 1rem;
    font-weight: 700;
    color: ${props => props.theme.color.brightYellow};
    
    `;
    
const Text = styled.p`
    font-size: 0.9rem;
    line-height: 1.4;
    color: ${props => props.theme.color.grayishBlue};

`;

export const Dummy = styled.div`
    height: ${props => props.height};
`;

export default () => {
    return (
        <Wrapper>
            <Container>
                <Head>
                    Join Our Community
                </Head>
                <Dummy height='1em' />
                <SubHead>
                    30-day, hassle-free money back guarantee
                </SubHead>
                <Dummy height='1em' />
                <Text>
                    Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.
                </Text>
            </Container>
        </Wrapper>
    )
}