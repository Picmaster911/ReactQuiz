const textRules = {
  required: (text) => `${text}  is required !`,
  minLength: (text) => `At least ${text}  is characters !`,
  maxLength: (text) => `Less than ${text}  is characters !`,
};

export const quizsRules = {
  quiz: {
    required: { value: true, message: textRules.required('Quiz') },
    minLength: { value: 3, message: textRules.minLength(3) },
    maxLength: { value: 50, message: textRules.maxLength(50) },
  },
  questions: {
    required: { value: true, message: textRules.required('Quiquestions') },
    minLength: { value: 3, message: textRules.minLength(3) },
    maxLength: { value: 50, message: textRules.maxLength(250) },
  },
  answer: {
    required: { value: true, message: textRules.required('Answer') },
    minLength: { value: 3, message: textRules.minLength(3) },
    maxLength: { value: 50, message: textRules.maxLength(250) },
  },
  description: {
    required: { value: true, message: textRules.required('Description') },
    minLength: { value: 3, message: textRules.minLength(3) },
    maxLength: { value: 50, message: textRules.maxLength(50) },
  },
  foto: {
    required: { value: true, message: textRules.required('Foto') },
    minLength: { value: 3, message: textRules.minLength(3) },
    maxLength: { value: 250, message: textRules.maxLength(250) },
  },
};
