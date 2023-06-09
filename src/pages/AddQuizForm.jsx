import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Typography, Button, Modal } from '@mui/material';
import { Box } from '@mui/material';
import InputTextValidator from '../components/forms/InputTextValidator';
import { quizsRules } from '../constants/rules';
import addQuizs from '../store/quizs/thunks';

export default function AddQuizForm({ showForm, closeFormAddQuiz }) {
  const { pathQuiz } = useParams();
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
  };
  const dispatch = useDispatch();
  async function addQuiz(quiz) {
    await dispatch(addQuizs.addQuizs(quiz));
  }
  const { control, handleSubmit, getValues } = useForm();
  const onSubmit = () => {
    let allQuiz = getValues();
    let { Questions, Answer } = getValues();
    Questions = Questions.split(',');
    Answer = Answer.split(',');
    allQuiz = {
      ...allQuiz,
      Questions,
      Answer,
      pathQuiz,
    };
    addQuiz(allQuiz);
    closeFormAddQuiz();
  };
  return (
    <React.Fragment>
      <Modal
        open={showForm}
        onClose={closeFormAddQuiz}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5">Додати новый Quiz </Typography>
          <form>
            <InputTextValidator
              style={{ margin: '5px', width: '100%' }}
              control={control}
              name="Quiz"
              label="Quiz"
              variant="outlined"
              rules={quizsRules.quiz}
            />
            <br />
            <InputTextValidator
              style={{ margin: '5px', width: '100%' }}
              maxRows={4}
              control={control}
              name="Description"
              label="Description"
              variant="outlined"
              rules={quizsRules.description}
            />
            <br />
            <InputTextValidator
              style={{ margin: '5px', width: '100%' }}
              multiline
              rows={5}
              control={control}
              name="Questions"
              label="Questions"
              variant="outlined"
              rules={quizsRules.questions}
            />
            <br />
            <InputTextValidator
              style={{ margin: '5px', width: '100%' }}
              multiline
              rows={5}
              control={control}
              name="Answer"
              label="Answer"
              variant="outlined"
              rules={quizsRules.answer}
            />
            <br />
            <InputTextValidator
              style={{ margin: '5px', width: '100%' }}
              multiline
              rows={5}
              control={control}
              name="Foto"
              label="Foto"
              variant="outlined"
              rules={quizsRules.foto}
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
            <Button
              onClick={handleSubmit(onSubmit)}
              variant="contained"
              color="primary"
            >
              Додати
            </Button>
            <Button
              onClick={closeFormAddQuiz}
              variant="contained"
              color="primary"
            >
              Скасувати
            </Button>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
