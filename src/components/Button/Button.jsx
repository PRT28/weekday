import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const PrimaryButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '8px 18px',
  border: 'none',
  lineHeight: 1.5,
  backgroundColor: 'rgb(85, 239, 196)',
  color: '#000000',
  width: '100%',
  marginTop: '14px',
  fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
          backgroundColor: 'rgb(85, 239, 196)',
          border: 'none',
        },
        '&:active': {
            backgroundColor: 'rgb(85, 239, 196)',
            border: 'none',
          },
        '&:focus': {
            backgroundColor: 'rgb(85, 239, 196)',
            border: 'none',
          },
});

export const ScondaryButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '8px 18px',
    border: 'none',
    lineHeight: 1.5,
    backgroundColor: '#162ADC',
    color: '#FFF',
    width: '100%',
    marginTop: '14px',
    fontFamily: [
          ].join(','),
          '&:hover': {
            backgroundColor: '#162ADC',
            border: 'none',
          },
          '&:active': {
              backgroundColor: '#162ADC',
              border: 'none',
            },
          '&:focus': {
              backgroundColor: '#162ADC',
              border: 'none',
            },
  });

