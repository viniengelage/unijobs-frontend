import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationsErrors';
import {
  Container,
  ContainerForm,
  Lateral,
  FormLinks,
  LinkForm,
  ForgotPassword,
} from './styles';

import Input from '../../components/Input';
import Banner from '../../components/Banner/Logout';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

interface ButtonsProps {
  active: boolean;
}

interface SignInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        }
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
        });
      }
    },
    [signIn, addToast],
  );
  return (
    <>
      <Banner backIcon />
      <Container>
        <Lateral />
        <ContainerForm>
          <FormLinks>
            <LinkForm to="login">Entrar</LinkForm>
            <LinkForm to="registeruser">Registre-se</LinkForm>
          </FormLinks>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="email"
              type="email"
              label="E-mail"
              placeholder="Digite seu E-mail"
            />
            <Input
              name="password"
              type="password"
              label="Senha do Aluno"
              placeholder="Digite sua Senha"
            />
            <Button type="submit" style={{ width: '100%' }}>
              Entrar
            </Button>
            <ForgotPassword to="#/">Esqueceu sua senha?</ForgotPassword>
          </Form>
        </ContainerForm>
      </Container>
    </>
  );
};

export default Login;
