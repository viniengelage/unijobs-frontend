import React, {useCallback} from 'react';
import {Form} from '@unform/web';
import * as Yup from 'yup';
import CurrencyInput from 'react-currency-input';

import api from '../../services/api';

import {ContainerRoot, Title, Formbox, Buttons} from './styles';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Select from '../../components/Select';
import TextArea from '../../components/TextArea';
import Sidebar from '../../components/Sidebar';

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
        <Sidebar />
        <Form onSubmit={handleSubmit} >
          <Title>Adicionar Produto</Title>
          <Formbox >
            <Input label="Título" help="O título deverá conter no máximo 60 caracteres" name="title"type='text'/>

            <div id="PrecoCat" >
                <Select 
                  style={{maxWidth:'250px'}}
                  label="Preço" 
                  name="type" 
                  options={[
                    { value: 'Fixo', label: 'Preço Fixo' },
                    { value: 'Variavel', label: 'A partir de' },
                  ]}
                />
                <CurrencyInput id="Preco" prefix="R$" decimalSeparator="," thousandSeparator="." />
              <Select 
                label="Categoria" 
                name="type" 
                options={[
                  { value: '0', label: 'Produto' },
                  { value: '1', label: 'Serviço' },
                ]}
              />
            </div> 
            
            <Input label="Imagens" help="Insira uma imagem" name="images" type="file" multiple/>

            <TextArea label="Descrição" name="description"/>
            
            <Buttons>
              <button type="submit">Salvar</button>
              <button type="button">Cancelar</button>
            </Buttons>
          </Formbox>
        </Form>
      </ContainerRoot>
      <Footer />
    </div>
      
    </>
  );
}

export default RegisterProduct;
