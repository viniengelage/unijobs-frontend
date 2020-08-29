import React from 'react';
import { Form } from '@unform/web';
import { Container, ContainerForm, Lateral, FormLinks, LinkForm, Button } from './styles';

import Input from './components/Input';

import Banner from '../../components/Banner';
const RegisterUser: React.FC = () => {
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
            <Input name="fullname" type="text" label="Nome Completo" placeholder="Digite seu Nome Completo" />
            <Input name="email" type="email" label="E-mail" placeholder="Digite seu E-mail" />
            <Input name="telephone" type="tel" label="Telefone ou Celular" placeholder="Digite seu Telefone ou Celular" />
            <Input name="ra" type="number" label="Ra do Aluno" placeholder="Digite seu RA" />
            <Input name="password" type="password" label="Senha do Aluno" placeholder="Digite sua Senha" />
            <Button>Cadastrar-se</Button>
          </Form>
        </ContainerForm>
      </Container>
    </>
  )
}

export default RegisterUser;
