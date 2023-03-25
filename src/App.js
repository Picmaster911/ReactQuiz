import React from 'react';
import './App.css';
import {
  Box,
  styled,
  Grid,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import QuizList from './pages/QuizList';
import Header from './components/Header';
import NavBar from './components/NavBar';

const HeadarWraper = styled(Box)(() => ({
  backgroundColor: 'rgb(55, 86, 145)',
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const NavBarWraper = styled(Box)(() => ({
  backgroundColor: 'rgb(130, 162, 223)',
  height: '100%',
  display: 'flex',
  overflow: 'hidden',
  justifyContent: 'center',
  paddingTop: '50px',
}));

const BodyWraper = styled(Box)(() => ({
  height: '100vh',
  backgroundColor: 'white',
  overflow: 'auto',
  padding: '40px',
}));

const FooterWraper = styled(Box)(() => ({
  backgroundColor: 'rgb(138, 144, 155)',
  height: '150px',
  display: 'flex',
  alignItems: 'center',
}));

function App() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div className='App'>
      <Grid container>
        <Grid item xs={12}>
          <HeadarWraper>
            <Header />
          </HeadarWraper>
        </Grid>
        <Grid item xs={0} md={2} lg={2}>
          <NavBarWraper>
            {!isMatch ? (
              <>
                <NavBar />
              </>
            ) : (
              <></>
            )}
          </NavBarWraper>
        </Grid>
        <Grid item xs={12} md={10} lg={10}>
          <BodyWraper>
            <QuizList />
          </BodyWraper>
        </Grid>
        <Grid item xs={12}>
          <FooterWraper></FooterWraper>
        </Grid>
      </Grid>
    </div>
  );
}
export default App;
