import {ValidationError} from 'yup';

interface Errors {
  [path: string]: string;
}

export default function getErros(err: ValidationError) {
  const validationErrors: Errors = {};
  err.inner.forEach((erro) => {
    validationErrors[erro.path as string] = erro.message;
  });

  return validationErrors;
}
