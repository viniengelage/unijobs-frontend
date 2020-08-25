import React, {useCallback} from 'react';
import {Form} from '@unform/web';
//import {IoMdCube,IoMdCode,IoMdPricetag, IoMdFolder,IoMdDocument, IoMdPeople, IoMdSchool, IoIosMail} from 'react-icons/io';
import * as Yup from 'yup';

import api from '../../services/api'

import {ContainerRoot, Sidebar, FormGrid, Title, Label, Input, Formbox, A, Button, Foot} from './styles';
import Banner from '../../components/Banner';
//import Input from '../../components/Input';
//import Button from '../../components/Button';

const Profile: React.FC = () => {
  const handleCreateProfile = useCallback(async(data)=>{
    const product = {
      name: data.name,
      ra: data.ra,
      number: data.number,
      email: data.email,
      password: data.password,
      profileimage: data.profileimages,
    }

    //api.post('/profile', profile).then(()=>(alert("Perfil Salvo!")))
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
        <A>Perfil</A>
        <A>Produtos</A>
        <A>Serviços</A>
        <A>Meus Anúncios</A>
        </Sidebar>
        <Form onSubmit={handleSubmit}>
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
            <span></span><Input name="title"type='text'/>
          </Formbox>  

          <Formbox >
            <Title>Senha</Title>
            <Label>Nova Senha</Label>
            <span></span><Input name="title"type='text'/>
            <Label>Repita a senha</Label>
            <span></span><Input name="title"type='text'/>
          </Formbox>

          </FormGrid>
          <Button type="submit">Salvar</Button>
          <Button type="button" style={{background:'#F5F6F7',border:'1px solid #CCD0D5',color:'#767676'}}>Cancelar</Button>
          
        </Form>
      </ContainerRoot>
      <Foot>2020 Unijobs. Todos os direitos reservados.</Foot>
    </div>
      
    </>
  );
}

export default Profile;