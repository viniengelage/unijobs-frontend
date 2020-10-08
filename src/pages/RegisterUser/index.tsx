import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationsErrors';
import {
  Container,
  ContainerForm,
  Lateral,
  FormLinks,
  LinkForm,
} from './styles';

import Courses from '../../services/courses';

import Users from '../../services/users';

import Input from '../../components/Input';
import SelectField from '../../components/SelectField';
import Button from '../../components/Button';
import Banner from '../../components/Banner/Logout';
import api from '../../services/api';

import { useToast } from '../../hooks/toast';

interface SignUpFormData {
  email: string;
  name: string;
  academic_record: number;
  phone: number;
  user_type: string;
  password: string;
  password_confirmation: string;
}

const RegisterUser: React.FC = () => {
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  // const signUp = useCallback(async (data: SignUpFormData) => {
  //   await api.post('/users', data);
  // }, []);

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          academic_record: Yup.number().required('Apenas números são aceitos'),
          course: Yup.string().required('Escolha seu curso'),
          phone: Yup.number().required('Digite um telefone válido'),
          user_type: Yup.string().required('Escolha um'),
          password: Yup.string().required('Senha obrigatória'),
          password_confirmation: Yup.string().required('Confirme sua senha'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        addToast({
          type: 'sucess',
          title: 'Conta criada',
          description: 'Sua conta foi criada com sucesso',
        });

        history.push('/');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          console.log(errors);

          formRef.current?.setErrors(errors);
        }
        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao se cadastrar, cheque as credenciais',
        });
      }
    },
    [addToast, history],
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
          <Form onSubmit={handleSubmit}>
            <Input
              name="name"
              type="text"
              label="Nome Completo"
              placeholder="Digite seu Nome Completo"
            />
            <Input
              name="email"
              type="email"
              label="E-mail"
              placeholder="Digite seu E-mail"
            />
            <Input
              name="phone"
              type="tel"
              label="Telefone ou Celular"
              placeholder="Digite seu Telefone ou Celular"
            />
            <SelectField
              name="user_type"
              options={[
                { value: 'vendedor', label: 'Vendedor' },
                { value: 'comprador', label: 'Comprador' },
              ]}
              label="Vendedor ou Comprador"
              placeholder="Selecione"
            />

            <Input
              name="academic_record"
              type="number"
              label="Ra do Aluno"
              placeholder="Digite seu RA"
            />
            <SelectField
              name="user_type"
              options={Courses}
              label="Selecione seu curso"
              placeholder="Selecione"
            />
            <Input
              name="password"
              type="password"
              label="Senha do Aluno"
              placeholder="Digite sua Senha"
            />
            <Input
              name="password_confirmation"
              type="password"
              label="Confirme sua senha"
              placeholder="Digite sua Senha"
            />
            <Button type="submit" style={{ width: '100%' }}>
              Cadastrar-se
            </Button>
          </Form>
        </ContainerForm>
      </Container>
    </>
  );
};

export default RegisterUser;
