import React, {useCallback} from 'react';
import {Form} from '@unform/web';
import {IoMdCall,IoMdLock, IoMdPeople, IoIosMail} from 'react-icons/io';
import * as Yup from 'yup';

import {ContainerRoot, FormGrid, Formbox, Buttons, Foot, InputBox} from './styles';
import Banner from '../../components/Banner';
import Input from '../../components/Input';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';

const Profile: React.FC = () => {
  const handleCreateProfile = useCallback(async(data)=>{
    // const profile = {
    //   name: data.name,
    //   ra: data.ra,
    //   number: data.number,
    //   email: data.email,
    //   password: data.password,
    //   profileimage: data.profileimages,
    // }
  },[]);

  const handleSubmit = useCallback(async(data: object) =>{
    try{
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        ra: Yup.number().required(),
        number: Yup.number().required(),
        email: Yup.string().required(),
        password: Yup.string().required(),
      })

      await schema.validate(data, {
        abortEarly: false
      })

      handleCreateProfile(data);
    }catch(err){
      alert(err);
    }
    
  },[handleCreateProfile]);
  return(
    <>
    <div style={{width:'100vw', height:'100vh'}}>
      <Banner backIcon={true}/>
      <ContainerRoot>
        <Sidebar />
        <Form onSubmit={handleSubmit} >
          <FormGrid>
            <Formbox >
              <legend>Imagem de perfil</legend>
              <InputBox>
                <Input label="Carregar Imagem" name="images" type="file"/>
              </InputBox>
            </Formbox>  
            
            <Formbox >
              <legend>Sobre Mim</legend>
              <InputBox>
                <Input label="Nome Completo" name="title"type='text' icon={IoMdPeople}/>
                <Input label="R.A" help="Digite seu Registro Academico da UniAmérica" icon={IoMdPeople} name="title"type='text'/>
              </InputBox>
            </Formbox>   

            <Formbox >
              <legend>Detalhes de Contato</legend>
              <InputBox>
                <Input label="Telefone Principal" icon={IoMdCall} name="title"type='text'/>
                <Input label="Email" icon={IoIosMail} name="title"type='email'/>
              </InputBox>
            </Formbox>  

            <Formbox >
              <legend>Senha</legend>
              <InputBox>
                <Input label="Nova Senha" icon={IoMdLock} name="title"type='password'/>
                <Input label="Repita a senha" icon={IoMdLock} name="title"type='password'/>
              </InputBox>
            </Formbox>

            <Buttons>
              <button type="submit">Salvar</button>
              <button type="button">Cancelar</button>
            </Buttons>
          </FormGrid>
        </Form>
        <Foot><Footer /></Foot>
      </ContainerRoot>
    </div>
      
    </>
  );
}

export default Profile;