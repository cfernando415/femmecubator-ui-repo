import { makeStyles } from '@material-ui/core/styles';
import { CenterFocusStrong } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    justifyContent: 'center',
    marginTop: '5%',
  },
  rootMobile: {
    justifyContent: 'center',
  },
  paperContainer: {
    position: 'absolute',
    width: 'auto',
    height: 'auto',
  },
  bookMentor: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '28px',
    fontWeight: 700,
    paddingTop: '20px',
  },
  bookMentorDesc: {
    paddingLeft: '35px',
    paddingRight: '35px',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    paddingTop: '20px',
  },
  formTitle: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '28px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '38px',
    letterSpacing: '0em',
    marginLeft: '20px',
    marginBottom: '15px',
  },
  formMobileTitle: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '28px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '38px',
    letterSpacing: '0em',
    marginLeft: '35px', // 3.31.21 - added mobile style to adjust marginLeft
    marginBottom: '15px',
  },
  formSubtitle: {
    // textAlign: 'center',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '24px',
    letterSpacing: '0px',
    paddingBottom: '15px',
    marginLeft: '20px',
  },
  formMobileSubtitle: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '24px',
    letterSpacing: '0px',
    paddingBottom: '15px',
    marginLeft: '35px', // 3.31.21 - added mobile style to adjust marginLeft
  },
  inputSpacing: {
    marginTop: '8px',
    marginLeft: '10px', // 3.30.21 - changed from 20px to left align item
  },
  textFieldSpacing: {
    width: '16.875em',
  },
  schoolIcon: {
    height: '56.11px',
    width: '39.28px',
    color: '#550CCC',
  },
  button: {
    [theme.breakpoints.up(824)]: {
      marginLeft: '20px',
    },
    marginTop: '28px',
    marginBottom: '28px',
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: '#026FE4',
    color: '#FFFFFF',
    fontWeight: 'bold',
    padding: '10px 20px',
    fontSize: '18px',
  },
  registrationFormContainer: {
    [theme.breakpoints.between(768, 1024)]: { width: '40.5625em' },
    position: 'relative',
    width: '51.5625em',
    height: '34.25em',
    marginLeft: '2.5em',
    marginTop: '2.5em',
    marginBottom: '2.5em',
  },
  mobileInputField: {
    paddingBottom: '1.25em',
  },
  buttonGrid: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2.5em',
  },
  textField: {
    width: '16.875em',
  },
  buttonModal: {
    backgroundColor: '#026FE4',
    color: '#FFFFFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  chipStyle: {
    height: 'auto',
    padding: '8px 12px',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '700',
    color: '#FFF',
    display: 'flex',
    flexDirection: 'row-reverse',
    width: 'auto',
    borderColor: ' #026FE4',
    borderRadius: '30px',
    backgroundColor: '#026FE4',
    '&:hover': {
      backgroundColor: '#026FE4 !important',
      borderColor: ' #026FE4',
    },
    '&:first-child': {
      marginRight: '5px',
    },
    '&:focus': {
      backgroundColor: '#026FE4 !important',
      borderColor: ' #026FE4',
    },
  },
  checkIcon: {
    color: '#FFF',
  },
  alertBar: {
    //display: 'flex',
    width: '17em',
    padding: '10px 0 0 0',
    //marginBottom: '1em',
    marginLeft: '-5px',
  },
  chipDivStyle: {
    display: 'flex',
    padding: ' 21px 0px',
    marginLeft: '-5px',
  },
  chipOutline: {
    height: 'auto',
    padding: '8px 12px',
    border: '3px solid #757575',
    borderRadius: '30px',
    color: '#757575',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '700',
    '&:hover': {
      backgroundColor: '#026FE4 !important',
      color: 'white',
      borderColor: ' #026FE4',
    },
    '&:first-child': {
      marginRight: '5px',
    },
    '&:focus': {
      backgroundColor: '#026FE4 !important',
      borderColor: ' #026FE4',
    },
  },
  inputLabel: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: '16px',
    fontStyle: 'normal',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '400',
    lineHeight: '24px',
    // marginLeft: '-10px',
  },
  termsLabel: {
    color: '#4F4F4F',
    fontSize: '14px',
    fontStyle: 'normal',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '700',
    lineHeight: '24px',
    marginTop: '19px',
    display: 'inline-block',
    padding: '2px',
  },
}));

export default useStyles;
