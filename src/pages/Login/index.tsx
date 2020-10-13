import React, { useCallback, useRef, useState } from 'react';
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
import Banner from '../../components/Banner';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';


import Loading from '../../components/Loading';

interface ButtonsProps {
  active: boolean;
}

interface SignInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);


  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();


  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      setLoading(true);
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
        setLoading(false);
        history.push('/');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        }
        setLoading(false);
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
        });
      }
    },
    [signIn, addToast, history],
  );
  return (
    <>
      <Loading loading={loading} />
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
            <Input
              name="ra"
              type="number"
              label="RA do Aluno"
              placeholder="Digite seu RA"
            />
            <Input
              name="password"
              type="password"
              label="Senha do Aluno"
              placeholder="Digite sua Senha"
            />
            <Button>Entrar</Button>
            <ForgotPassword to="forgot">Esqueceu sua senha?</ForgotPassword>
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
