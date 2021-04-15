import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  bannerContainer: ({ isMobile }) => ({
    padding: isMobile ? '0' : '1rem',
    width: isMobile ? '360px' : '50%',
    marginTop: isMobile ? '1rem' : '2rem',
  }),
  mainText: {
    color: '#550CCC',
    fontSize: ({ isMobile }) => (isMobile ? '22px' : '28px'),
    fontWeight: '700',
    lineHeight: '38px',
  },
  subText: {
    fontWeight: '400',
    fontSize: ({ isMobile }) => (isMobile ? '17px' : '21px'),
  },
  optionsContainer: {
    width: ({ isMobile }) => (isMobile ? '200px' : '300px'),
    margin: ({ isMobile }) => (isMobile ? '10px 4.5rem' : '2.5%  0 0 30%'),
    lineHeight: '28px',
  },
}));

export default useStyles;
