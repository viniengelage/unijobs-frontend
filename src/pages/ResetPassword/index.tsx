import React from 'react';
import { Form } from '@unform/web';
import { Container, ContainerForm, Lateral, FormLinks, LinkForm, Button, BackLink } from './styles';

import Input from './components/Input';

import Banner from '../../components/Banner';

interface ButtonsProps {
  active: boolean;
}

const ResetPassword: React.FC = () => {
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
            <Input name="password" type="password" label="Nova Senha" placeholder="Digite sua nova senha" />
            <Input name="password" type="password" label="Confirmar Senha" placeholder="Confirme sua nova senha" />
            <Button>Solicitar Nova Senha</Button>
            <BackLink to="login">Voltar</BackLink>
          </Form>
        </ContainerForm>
      </Container>
    </>
  )
}

export default ResetPassword;
