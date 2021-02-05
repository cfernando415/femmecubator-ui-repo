import { makeStyles } from '@material-ui/core';
const subheaderColors = {
  mentors: '#BB6BD9',
  threads: '#719AF5',
};
const font = {
  fontFamily: 'Open Sans, sans-serif',
  color: 'white',
  margin: '.5rem',
};
const useStyles = makeStyles((theme) => ({
  subheaderContainer: {
    display: 'flex',
    minHeight: '100px',
    minWidth: '100%',
  },
  subheader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100px',
    width: '100%',
    backgroundColor: ({ variant }) => subheaderColors[variant],
    top: '64px',
    borderRadius: '0px',
    padding: '0rem 1.5rem 0rem 7rem',
    overflow: 'hidden',
  },
  subheaderItems: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subheaderIcon: {
    height: '100%',
    width: '10rem',
    margin: '1rem 0 0 0',
  },
  mainText: {
    ...font,
    fontSize: '28px',
    fontWeight: '700',
    lineHeight: '38px',
  },
  subText: {
    ...font,
    fontSize: '15px',
    lineHeight: '29px',
  },
}));

export default useStyles;
