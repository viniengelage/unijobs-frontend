import React, {useCallback} from 'react';
import {Form} from '@unform/web';
//import {IoMdCube,IoMdCode,IoMdPricetag, IoMdFolder,IoMdDocument, IoMdPeople, IoMdSchool, IoIosMail} from 'react-icons/io';
import * as Yup from 'yup';

import api from '../../services/api'

import {ContainerRoot, Title, Label, Input, Formbox, Button, Select, TextArea} from './styles';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
//import Input from '../../components/Input';
//import Button from '../../components/Button';

const RegisterProduct: React.FC = () => {
  const handleCreateProduct = useCallback(async(data)=>{
    const product = {
      title: data.title,
      description: data.description,
      price: data.price,
      type: data.type,
      image: data.images,
    }

    api.post('/items', product).then(()=>(alert("Produto Adicionado!")))
  },[]);

  const handleSubmit = useCallback(async(data: object) =>{
    try{
      const schema = Yup.object().shape({
        title: Yup.string().required(),
        description: Yup.string().required(),
        price: Yup.number().required(),
        images: Yup.string().required(),
        type: Yup.string().required(),
      })

      await schema.validate(data, {
        abortEarly: false
      })

      handleCreateProduct(data);
    }catch(err){
      alert(err);
    }
    
  },[handleCreateProduct]);
  return(
    <>
    <div style={{width:'100vw', height:'100vh'}}>
      <Banner backIcon={true}/>
      <ContainerRoot>
        <Form onSubmit={handleSubmit} >
          <Formbox >
            <Title>Adicionar Produto</Title>
            
            <Label>Titulo</Label>
            <Input name="title"type='text'/>

            <div className="infos" style={{display:'flex'}}>
              <div>
                <Label>Preço</Label>
                <Input name="price" type="number" style={{width:'200px'}}/>
              </div>
              <div>
                <Label>Categoria:</Label>
                  <Select>
                    <option value="0">Produto</option>
                    <option value="1">Serviço</option>
                  </Select>
              </div>
            </div> 
            
            <Label>Imagens</Label>
            <Input name="images" type="file" multiple/>

            <Label>Descrição</Label>
            <TextArea name="description" />
            
            <Button type="submit">Salvar</Button>
            <Button type="button" style={{background:'#F5F6F7',border:'1px solid #CCD0D5',color:'#767676'}}>Cancelar</Button>
          </Formbox>
        </Form>
      </ContainerRoot>
      <Footer />
    </div>
      
    </>
  );
}

export default RegisterProduct;
