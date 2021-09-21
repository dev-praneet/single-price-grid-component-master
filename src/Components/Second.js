import styled from 'styled-components';
import { Dummy } from './First';

const Wrapper = styled.div`
    background-color: hsl(179, 62%, 41%);
    @media (min-width: ${props => props.theme.breakpoint.mobile}) {
        grid-area: second;
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

const Price = styled.span`
    vertical-align: baseline;
    color: white;
    font-size: 2em;
    font-weight: 700;
    // border: 2px solid red;
`;

const Freq = styled.span`
    vertical-align: super;
    color: hsl(179, 50%, 70%);
    padding-left: 0.7em;
`;

const Text = styled.p`
    color: white;
`;

const Button = styled.button`
    background-color: ${props => props.theme.color.brightYellow};
    color: white;
    font-weight: 700;
    display: block;
    width: 100%;
    margin: 0 auto;
    padding: 1em 0;
    border: 0;
    border-radius: 0.3em;
`;

export default () => {
    return (
        <Wrapper>
            <Container>
                <SubHead>
                    Monthly Subscription
                </SubHead>
                <Dummy height='1em' />
                <Price>
                    $29
                </Price>
                <Freq>
                    per month
                </Freq>
                <Dummy height='0.3em' />
                <Text>
                    Full access for less than $1 a day
                </Text>
                <Dummy height='1.3em' />
                <Button>
                    Sign Up
                </Button>
            </Container>
        </Wrapper>
    )
}