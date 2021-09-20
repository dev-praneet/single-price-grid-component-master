import { ThemeProvider } from 'styled-components';

const theme = {
color: {
cyan: 'hsl(179, 62%, 43%)',
brightYellow: 'hsl(71, 73%, 54%)',
lightGray: 'hsl(204, 43%, 93%)',
grayishBlue: 'hsl(218, 22%, 67%)',
},
font: {
size: {
},
},
breakpoint: {
mobile: '850px',
},
};

const Theme = ({ children }) => {
return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;