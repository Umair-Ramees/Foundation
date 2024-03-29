import { styled } from 'stitches.config';

const Job = styled('a', {
  fontFamily: '$body',
  letterSpacing: -0.5,
  fontSize: '$3',
  lineHeight: 1.4,
  fontWeight: '$regular',
  padding: '$4',
  backgroundColor: '$white100',
  border: '1px solid #FAFAFA',
  boxShadow: '$0',
  borderRadius: '$3',
  transition: 'transform $1 $ease, box-shadow $1 $ease',
  willChange: 'transform',
  textDecoration: 'none',
  color: 'inherit',
  '@bp1': {
    fontSize: '$4',
    padding: '$7',
  },
  '@hover': {
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '$1',
    },
    '&:active': {
      transform: 'translateY(0)',
      boxShadow: '$0',
    },
  },
});

export default Job;
