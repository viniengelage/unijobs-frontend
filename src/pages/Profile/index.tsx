import React, {useCallback} from 'react';
import {Link} from 'react-router-dom';
import {Form} from '@unform/web';
import {IoMdCall,IoMdLock, IoMdPeople, IoIosMail} from 'react-icons/io';
import * as Yup from 'yup';

import {ContainerRoot, FormGrid, Formbox, Buttons} from './styles';
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
        <Form onSubmit={handleSubmit} style={{width:'100%'}}>
          <FormGrid>
          <Formbox >
            <legend>Imagem de perfil</legend>
            <Input label="Carregar Imagem" name="images" type="file"/>
          </Formbox>  
          
          <Formbox >
            <legend>Sobre Mim</legend>
            <Input label="Nome Completo" name="title"type='text' icon={IoMdPeople}/>
            <Input label="R.A" icon={IoMdPeople} name="title"type='text'/>
          </Formbox>   

          <Formbox >
            <legend>Detalhes de Contato</legend>
            <Input label="Telefone Principal" icon={IoMdCall} name="title"type='text'/>
            <Input label="Email" icon={IoIosMail} name="title"type='email'/>
          </Formbox>  

          <Formbox >
            <legend>Senha</legend>
            <Input label="Nova Senha" icon={IoMdLock} name="title"type='password'/>
            <Input label="Repita a senha" icon={IoMdLock} name="title"type='password'/>
          </Formbox>

          </FormGrid>
          <Buttons>
            <button type="submit">Salvar</button>
            <button type="button">Cancelar</button>
          </Buttons>
          
        </Form>
        <Footer />
      </ContainerRoot>
    </div>
      
    </>
  );
}

export default Profile;