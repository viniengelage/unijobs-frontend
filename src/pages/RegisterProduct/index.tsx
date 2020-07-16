import React, {useCallback} from 'react';
import {Form} from '@unform/web';
import {IoMdCube,IoMdCode,IoMdPricetag, IoMdFolder,IoMdDocument, IoMdPeople, IoMdSchool, IoIosMail} from 'react-icons/io';
import * as Yup from 'yup';

import api from '../../services/api'

import {Container} from './styles';
import Banner from '../../components/Banner';

import Input from '../../components/Input';
import Button from '../../components/Button';

const RegisterProduct: React.FC = () => {
  const handleSubmit = useCallback(async(data: object) =>{
    try{
      const schema = Yup.object().shape({
        title: Yup.string().required(),
        description: Yup.string().required(),
        price: Yup.number().required(),
        image1: Yup.string().required(),
        image2: Yup.string().required(),
        type: Yup.string().required(),
        name: Yup.string().required(),
        course: Yup.string().required(),
        contact: Yup.string().required(),
      })

      await schema.validate(data, {
        abortEarly: false
      })

      handleCreateProduct(data);
    }catch(err){
      alert(err);
    }
  },[]);

  const handleCreateProduct = useCallback(async(data)=>{
    const product = {
      title: data.title,
      description: data.description,
      price: data.price,
      type: data.type,
      image: [data.image1, data.image2],
      name: data.name,
      course: data.course,
      contact: data.contact
    }

    api.post('/items', product).then(()=>(alert("Produto Adicionado!")))
  },[]);
  return(
    <>
      <Banner backIcon={false}/>
      <Container>
        <Form onSubmit={handleSubmit} >
          <Input name="title" icon={IoMdCube} placeholder="Titulo do produto"/>
          <Input name="description" icon={IoMdCode} placeholder="Descrição do produto"/>
          <Input name="price" type="number" icon={IoMdPricetag} placeholder="Preço"/>
          <Input name="image1" type="text" icon={IoMdFolder} placeholder="Link Imagem 1"/>
          <Input name="image2" type="text" icon={IoMdFolder} placeholder="Link Imagem 2"/>
          <Input name="type" icon={IoMdDocument} placeholder="Tipo"/>
          <div style={{marginBottom: '10px', marginTop: '-2px'}}>
            <span>Use apenas <strong>"produto"</strong> ou <strong>"servico"</strong> sem letras <strong>maisculas</strong> ou <strong>ç</strong>.</span>
          </div>
          <Input name="name" icon={IoMdPeople} placeholder="Nome do usuário"/>
          <Input name="course" icon={IoMdSchool} placeholder="Curso"/>
          <Input name="contact" icon={IoIosMail} placeholder="Contato"/>
          <Button type="submit">Cadastrar Produto</Button>
        </Form>
      </Container>
    </>
  );
}

export default RegisterProduct;
