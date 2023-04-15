import React from 'react';
import { Typography, TextField, Button, Modal } from '@mui/material';
import { Box } from '@mui/material';

export default function AddQuizForm({ showForm, closeFormAddQuiz }) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'block',
    width: '40%',
    maxWidth: '400px',
    minWidth: '200px',
    // bgcolor: 'b5efff',
  };
  return (
    <React.Fragment>
      <Modal
        open={showForm}
        onClose={closeFormAddQuiz}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography variant='h5'>Додати новый Quiz </Typography>
          <form>
            <TextField
              style={{ margin: '5px', width: '100%' }}
              type='text'
              label='Quiz'
              variant='outlined'
            />
            <br />
            <TextField
              style={{ margin: '5px', width: '100%' }}
              maxRows={4}
              type='text'
              label='Foto'
              variant='outlined'
            />
            <br />
            <TextField
              style={{ margin: '5px', width: '100%' }}
              type='text'
              label='Description'
              variant='outlined'
              multiline
              rows={5}
            />
            <br />
          </form>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              marginTop: '20px',
            }}
          >
            <Button variant='contained' color='primary'>
              Додати
            </Button>
            <Button onClick={closeFormAddQuiz} variant='contained' color='primary'>
              Скасувати
            </Button>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
