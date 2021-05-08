import { makeStyles } from '@material-ui/core/styles';

const color = {
  white: '#ffffff',
  primaryBlue: '#026FE4',
  gray: '#495057',
  black: '#000000',
  icon: '#E50000',
  iconBackground: '#FFEAEA',
};

const useStyles = makeStyles(() => ({
  root: {
    width: '320px',
    height: '503px',
    borderRadius: '8px',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '600',
  },
  h3Heading: {
    color: color.gray,
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 'bold',
    fontSize: '21px',
    marginLeft: '16px',
  },
  content: {
    color: color.black,
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '700',
    fontSize: '15px',
    width: '180px',
    lineHeight: '23px',
    marginLeft: '16px',
  },
  fromNowContent: {
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '24px',
    marginLeft: '16px',
  },
  slotButton: {
    width: 'fit-content',
    height: '40px',
    marginLeft: '20%',
    marginTop: '40px',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '18px',
    padding: '3.5px 21px',
    backgroundColor: color.white,
    color: color.primaryBlue,
    borderRadius: '4px',
    border: '1px solid #026FE4',
  },
  h2: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '700',
    fontSize: '21px',
    lineHeight: '29px',
    marginTop: '30px',
    marginLeft: '20px',
  },
  textFirst: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '19px',
    // alignContent: 'center',
    color: color.gray,
    display: 'flex',
    // alignItems: 'center',
    // textAlign: 'center',
  },
  addButton: {
    width: 'fit-content',
    height: '40px',
    marginLeft: '20%',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'column',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '18px',
    padding: '3.5px 21px',
    backgroundColor: color.white,
    color: color.primaryBlue,
    borderRadius: '4px',
    border: '1px solid #026FE4',
  },
  largeIcon: {
    width: '70px',
    height: '70px',
    // color: color.icon,
    // backgroundColor: color.iconBackground,
  },
}));

export default useStyles;
