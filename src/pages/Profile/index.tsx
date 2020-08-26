import React, {useCallback} from 'react';
import {Link} from 'react-router-dom';
import {Form} from '@unform/web';
//import {IoMdCube,IoMdCode,IoMdPricetag, IoMdFolder,IoMdDocument, IoMdPeople, IoMdSchool, IoIosMail} from 'react-icons/io';
import * as Yup from 'yup';

import {ContainerRoot, Sidebar, FormGrid, Title, Label, Input, Formbox, Buttons, Foot} from './styles';
import Banner from '../../components/Banner';
//import Input from '../../components/Input';
//import Button from '../../components/Button';

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
        <Sidebar> 
        <Link to="/">Perfil</Link>
        <Link to="/">Produtos</Link>
        <Link to="/">Serviços</Link>
        <Link to="/">Meus Anúncios</Link>
        </Sidebar>
        <Form onSubmit={handleSubmit} style={{width:'100%'}}>
          <FormGrid>
          <Formbox >
            <Title>Imagem de perfil</Title>
            <Input name="images" type="file"/>
          </Formbox>  
          
          <Formbox >
            <Title>Sobre Mim</Title>
            <Label>Nome Completo</Label>
            <span></span><Input name="title"type='text'/>
            <Label>R.A</Label>
            <span></span><Input name="title"type='text'/>
          </Formbox>   

          <Formbox >
            <Title>Detalhes de Contato</Title>
            <Label>Telefone Principal</Label>
            <span></span><Input name="title"type='text'/>
            <Label>Email</Label>
            <span></span><Input name="title"type='email'/>
          </Formbox>  

          <Formbox >
            <Title>Senha</Title>
            <Label>Nova Senha</Label>
            <span></span><Input name="title"type='password'/>
            <Label>Repita a senha</Label>
            <span></span><Input name="title"type='password'/>
          </Formbox>

          </FormGrid>
          <Buttons>
            <button type="submit">Salvar</button>
            <button type="button">Cancelar</button>
          </Buttons>
          
        </Form>
        <Foot>2020 Unijobs. Todos os direitos reservados.</Foot>
      </ContainerRoot>
    </div>
      
    </>
  );
}

export default Profile;