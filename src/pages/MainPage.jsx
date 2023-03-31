import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import '../App.css';
import {
  Box,
  styled,
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import InfoMainPage from '../components/InfoMainPage';
import AddQuizForm from './AddQuizForm';

export default function MainPage() {
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

  const { pathname } = useLocation();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const callBackFind = (e) => {
    console.log(e.target.value);
  };
  const [showForm, setFormAddQuiz] = useState(false);
  const openFormAddQuiz = () => setFormAddQuiz(true);
  const closeFormAddQuiz = () => setFormAddQuiz(false);
  return (
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
              <NavBar callBackFind={callBackFind} openFormAddQuiz={openFormAddQuiz}/>
            </>
          ) : (
            <></>
          )}
        </NavBarWraper>
      </Grid>
      <Grid item xs={12} md={10} lg={10}>
        <BodyWraper>
          <AddQuizForm showForm={showForm} closeFormAddQuiz={closeFormAddQuiz}/>
        {/* <FindPanel req={'/quiz'} noButton={'false'}/> */}
          {pathname === '/' ? (<><InfoMainPage/></>) : (<><Outlet/></>)}
        </BodyWraper>
      </Grid>
      <Grid item xs={12}>
        <FooterWraper></FooterWraper>
      </Grid>
    </Grid>
  );
}