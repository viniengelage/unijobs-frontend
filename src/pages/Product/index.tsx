import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { useRouteMatch } from 'react-router-dom';
import api from '../../services/api';
import {
  Content,
  Item,
  Images,
  InfoContact,
  Description,
  Buttons,
  Price,
} from './styles';

import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

interface Item {
  _id: string;
  title: string;
  description: string;
  price: string;
  type: string;
  image: string[];
  name: string;
  course: string;
  contact: string;
}
interface RepositoryParams {
  id: string;
}

const Product: React.FC = () => {
  const [post, setPost] = useState<Item>();
  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`/items/${params.id}`).then(response => {
      setPost(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <Banner backIcon />
      <Content>
        <Item>
          <Images>
            <img src={post?.image[1]} alt={post?.name} />
          </Images>

          <InfoContact>
            <p>
              Por <strong>{post?.name}</strong>
            </p>
            <h1>{post?.title}</h1>

            <Price>
              <p>Preço: </p>
              <span>R$ {post?.price}</span>
            </Price>

            <Buttons>
              <div>{post?.contact}</div>
            </Buttons>
          </InfoContact>

          <Description>
            <h4>Descrição</h4>
            <p>{post?.description}</p>
          </Description>
        </Item>
      </Content>
      <Footer />
    </>
  );
};

export default Product;
