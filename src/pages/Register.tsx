import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../components/Button';
import { FormStyle } from '../style/FormStyle';
import { useRegisterUserMutation } from '../redux/api/apiSlice';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { asyncLocalStorage } from '../utils/localStorageHandler';

interface IFormInputs {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required().min(6).max(64),
  })
  .required();

export default function Register() {
  const navigate = useNavigate();
  const [registerUser, result] = useRegisterUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IFormInputs) =>
    registerUser({
      email: data.email,
      password: data.password,
    });

  React.useEffect(() => {
    console.log(result);

    if (result.data) {
      asyncLocalStorage.saveToStore('token', result.data.token).then(() => {
        setTimeout(() => {
          navigate('/');
        }, 4000);
      });
    }
  }, [result.isSuccess]);

  return (
    <FormStyle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form__container">
          <input {...register('email')} placeholder="email" />

          <input
            {...register('password')}
            placeholder="password"
            type="password"
          />
          <Button
            type="submit"
            theme="red"
            text="Register"
            disabled={result.isLoading}
          />
        </div>
      </form>
      <div className="form__errors">
        <p className="form__error">{errors.email?.message}</p>
        <p className="form__error">{errors.password?.message}</p>
      </div>
    </FormStyle>
  );
}
