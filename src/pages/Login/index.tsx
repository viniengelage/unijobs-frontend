import React from 'react';
import { Form } from '@unform/web';
import { Container, ContainerForm, Lateral, FormLinks, LinkForm, Button, ForgotPassword } from './styles';

import Input from './components/Input';

import Banner from '../../components/Banner';

interface ButtonsProps {
  active: boolean;
}

const Login: React.FC = () => {
  function handleSubmit() {
    console.log("show");
  }
  return (
    <>
      <Banner backIcon={true} />
      <Container>
        <Lateral />
        <ContainerForm>
          <FormLinks>
            <LinkForm to="login">Entrar</LinkForm>
            <LinkForm to="registeruser">Registre-se</LinkForm>
          </FormLinks>
          <Form onSubmit={handleSubmit}>
            <Input name="ra" type="number" label="Ra do Aluno" placeholder="Digite seu RA" />
            <Input name="password" type="password" label="Senha do Aluno" placeholder="Digite sua Senha" />
            <Button>Entrar</Button>
            <ForgotPassword to="forgot">Esqueceu sua senha?</ForgotPassword>
          </Form>
        </ContainerForm>
      </Container>
    </>
  )
}

export default Login;