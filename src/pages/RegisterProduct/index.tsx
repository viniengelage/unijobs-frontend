import React, { ChangeEvent, useCallback, useState, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import CurrencyInput from 'react-currency-input';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import ScrollToTopOnMount from '../../utils/ScrollToTopOnMount';

import {
  ContainerRoot,
  Formarea,
  PrecoArea,
  Title,
  Formbox,
  Buttons,
} from './styles';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Sidebar from '../../components/Sidebar';
import Button from '../../components/Button';
import Loading from '../../components/Loading';

interface ItemProps {
  title: string;
  description: string;
  item_type: string;
  item_category: string;
  price: number;
  thumbnail_id: number;
  thumbnail_url: string;
  image_id: number;
  image_url: string;
}

const RegisterProduct: React.FC = () => {
  const { addToast } = useToast();
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);
  const [currency, setCurrency] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [img1, setImg1] = useState<File>({} as File);
  const [img2, setImg2] = useState<File>({} as File);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleCreateProduct = useCallback(
    async (data: ItemProps) => {
      console.log(data);

      const imagem1 = new FormData();
      imagem1.append('file', img1);
      const apiImg1 = await api.post('/files', imagem1);

      const imagem2 = new FormData();
      imagem2.append('file', img2);
      const apiImg2 = await api.post('/files', imagem2);

      const item = {
        title: data.title,
        description: data.description,
        item_type: data.item_type,
        item_category: data.item_category,
        price: data.price,
        thumbnail_id: apiImg1.data.id,
        thumbnail_url: apiImg1.data.url,
        image_id: apiImg2.data.id,
        image_url: apiImg2.data.url,
      };

      if (!item) {
        setLoading(true);
      }

      await api.post('/items', item);
      setLoading(false);
      history.push('/');
      addToast({
        title: 'Produto criado',
        description: 'Seu produto foi criado com sucesso!',
        type: 'sucess',
      });
    },
    [addToast, history, img1, img2],
  );

  const handleImage1 = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImg1(event.target.files[0]);
    }
  }, []);

  const handleImage2 = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImg2(event.target.files[0]);
    }
  }, []);

  const handleCurrencyMoney = useCallback(async (money: string) => {
    const moneyFormated = Number(money.replace(/[^0-9.-]+/g, ''));

    return moneyFormated;
  }, []);

  const handleSubmit = useCallback(
    async (data: ItemProps) => {
      setLoading(true);
      data.price = await handleCurrencyMoney(currency);
      try {
        const schema = Yup.object().shape({
          title: Yup.string().required(),
          description: Yup.string().required(),
          price: Yup.number().required(),
          item_type: Yup.string().required(),
          item_category: Yup.string().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        handleCreateProduct(data);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    },
    [handleCreateProduct, handleCurrencyMoney, currency],
  );

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(true);
  }, []);

  return (
    <>
      <ScrollToTopOnMount />
      <Loading loading={loading} />
      <div style={{ width: '100vw' }}>
        <Banner backIcon />
        <ContainerRoot>
          <Sidebar />
          <Formarea>
            <Title>Adicionar Produto</Title>
            <Formbox>
              <Form onSubmit={handleSubmit} ref={formRef}>
                <Input name="title" placeholder="Titulo" type="text" />
                <Input name="description" placeholder="Descrição" type="text" />
                {/* <Input name="price" type="number" placeholder="Preço" /> */}
                <PrecoArea isFilled={isFilled} isFocused={isFocused}>
                  <span>Preço</span>
                  <CurrencyInput
                    name="price"
                    prefix="R$"
                    value={currency}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onChangeEvent={(event: ChangeEvent<HTMLInputElement>) =>
                      setCurrency(event.target.value)
                    }
                  />
                </PrecoArea>
                <Select
                  name="item_type"
                  options={[
                    { value: 'service', label: 'Serviço' },
                    { value: 'product', label: 'Produto' },
                  ]}
                />
                <Select
                  name="item_category"
                  options={[
                    { value: 'gastronomia', label: 'Gastronomia' },
                    { value: 'aula-particular', label: 'Aula Particular' },
                  ]}
                />
                <Input name="thumbnail" type="file" onChange={handleImage1} />
                <Input name="image" type="file" onChange={handleImage2} />
                <Buttons>
                  <Button type="submit">Salvar</Button>
                  <Button type="button">Cancelar</Button>
                </Buttons>
              </Form>
            </Formbox>
          </Formarea>
        </ContainerRoot>
        <Footer />
      </div>
    </>
  );
};

export default RegisterProduct;
