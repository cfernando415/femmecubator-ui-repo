import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'white',
    height: '100vh',
  },
  mentorDirectory: {
    backgroundColor: 'white',
    margin: ({ isMobile }) => (isMobile ? '0' : '0 2rem'),
  },
  directoryTab: {
    fontWeight: '600',
    color: '#550CCC',
    fontSize: '20px',
  },
  directoryHeader: {
    color: '#495057',
    fontSize: '25px',
    margin: '1rem 0 0 5rem',
    fontWeight: '600',
  },
  mentorListContainer: {
    overflow: 'scroll',
    maxHeight: ({ isMobile }) => (isMobile ? '65vh' : '70vh'),
    marginTop: ({ isMobile }) => (isMobile ? '0' : '3rem'),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
  tabs: {
    borderBottom: '1px #BDBDBD solid',
    margin: ({ isMobile }) => (isMobile ? '1rem' : '1.2rem 2rem 2rem 2rem'),
  },
}));

export default useStyles;
