import React, {useCallback} from 'react';
import {Form} from '@unform/web';
import * as Yup from 'yup';

import api from '../../services/api'

import {ContainerRoot, Title, Formbox, Button} from './styles';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Select from '../../components/Select';
import TextArea from '../../components/TextArea';
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
    <div style={{width:'100vw'}}>
      <Banner backIcon={true}/>
      <ContainerRoot>
        <Form onSubmit={handleSubmit} >
          <Formbox >
            <Title>Adicionar Produto</Title>
             
            <Input label="Título" name="title"type='text'/>

            <div style={{display:'flex'}}>
              <Input label="Preço" name="price" type="number" style={{width:'200px'}}/>
              <Select 
                label="Categoria" 
                name="type" 
                options={[
                  { value: '0', label: 'Produto' },
                  { value: '1', label: 'Serviço' },
                ]}
                />
            </div> 
            
            <Input label="Imagens" name="images" type="file" multiple/>

            <TextArea label="Descrição" name="description"/>
            
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
