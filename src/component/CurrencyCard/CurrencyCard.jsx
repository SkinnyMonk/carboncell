import { Card } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(3),
    // width: '30%',
    height: '100%',
    backgroundColor: 'rgb(23, 23, 23)',
    color: 'white',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    textAlign: 'center',
    margin: theme.spacing(2),
    transition: 'transform 0.3s ease',
    minWidth: '200px',
    '&:hover': {
        transform: 'scale(1.02)',
    },
    [theme.breakpoints.down('sm')]: {
        width: '90%',
        marginBottom: theme.spacing(2),
    },
}));


const Title = styled('h2')(({ theme }) => ({
    fontSize: '1.5rem',
    margin: '10px 0 5px',
    color: 'white',
    height: '3.6rem',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    [theme.breakpoints.down('md')]: {
        fontSize: '1rem',
    },
}));


const Info = styled('p')(({ theme, isCode }) => ({
    fontSize: isCode ? '1.2rem' : '0.8rem',
    margin: '5px 0',
    color: isCode ? 'grey' : 'white',
    fontWeight: isCode ? 'bold' : 'normal',
    [theme.breakpoints.down('md')]: {
        fontSize: isCode ? '1rem' : '0.7rem',
    },
}));

const CurrencyCard = ({ currency }) => {
    const decodeEntities = (html) => {
        const txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    };
    return (
        <StyledCard variant="outlined">
            <Title>{currency.description}</Title>
            <Info isCode>({currency.code})</Info>
            <Info>
                {currency.rate}
                <span dangerouslySetInnerHTML={{ __html: decodeEntities(currency.symbol) }} /> <span style={{ color: 'grey' }}>/BTC</span>
            </Info>
        </StyledCard>
    );
};

export default CurrencyCard;
