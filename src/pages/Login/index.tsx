
import React, {useCallback} from 'react';
import {Form} from '@unform/web';
import { IoIosLock, IoIosPerson, IoIosLogIn } from 'react-icons/io';
import * as Yup from 'yup';

import api from '../../services/api'

import {Container} from './styles';
import Banner from '../../components/Banner';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Login: React.FC = () => {

  const handleSubmit = useCallback(async(data: object) =>{
    try{
      const schema = Yup.object().shape({
        ra: Yup.string().required(),
        password: Yup.string().required(),
      })
    }catch(err){
      alert(err);
    }
  },[]);
  return(
    <>
      <Banner backIcon={false}/>
      <Container>
        <Form onSubmit={handleSubmit} >
          <Input name="ra" icon={IoIosPerson} placeholder="RA do Aluno: "/>
          <Input name="password" icon={IoIosLock} placeholder="Senha do Aluno" type="password" />
          <Button type="submit"><IoIosLogIn size={25} />Entrar</Button>
        </Form>
      </Container>
    </>
  );
}

export default Login;
