import { makeStyles } from '@material-ui/core';
const subheaderColors = {
  mentors: {
    screen: '#a454c2',
    mobile: '#57D9A3',
  },
  threads: {
    screen: '#719AF5',
    mobile: '#BB6BD9',
  },
};
const font = {
  fontFamily: 'Open Sans, sans-serif',
  color: 'white',
  margin: '.5rem',
};

const useStyles = makeStyles(() => ({
  subheaderContainer: {
    display: 'flex',
    minHeight: '100px',
    minWidth: '100%',
  },
  subheader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    height: '90px',
    width: '100%',
    backgroundColor: ({ variant, isMobile }) =>
      isMobile
        ? subheaderColors[variant].mobile
        : subheaderColors[variant].screen,
    top: '64px',
    borderRadius: '0px',
    // paddingLeft: '11%',
    overflow: 'hidden',
  },
  subheaderItems: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subheaderIcon: {
    height: '90%',
    width: '9.5rem',
    margin: '.5rem 0 0 0',
  },
  mainText: {
    ...font,
    fontSize: 'clamp(18px, 2.5vw, 28px)',
    fontWeight: '700',
    lineHeight: '35px',
  },
  subText: {
    ...font,
    fontSize: '15px',
    lineHeight: '29px',
    padding: '.5rem 0 0 0',
    margin: '0 0 0 1.2rem',
  },
  closeIcon: {
    position: 'absolute',
    right: '1%',
    top: '19%',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
  },
}));

export default useStyles;
