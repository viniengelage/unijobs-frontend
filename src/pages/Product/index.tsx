import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { IItem } from '../../services/types';
import {
  Content,
  Item,
  Images,
  InfoContact,
  Description,
  Buttons,
  Price,
} from './styles';

import Banner from '../../components/Banner/Logout';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';

import FakeItem from '../../services/product';
import api from '../../services/api';



interface RepositoryParams {
  id: string;
}

const Product: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState<IItem>();
  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    setLoading(true);
    api.get(`/items/${params.id}`).then(response => {
      setPost(response.data);
    }).catch(e => {
      setPost(FakeItem);
    })
    setLoading(false);
  }, [params.id]);

  //Remove tudo exceto números
  const contactLink = post?.contact.replace(/[^\d]+/g, '');

  return (
    <>
      <Loading loading={loading} />
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
              <a
                href={`http://wa.me/55${contactLink}`}
                target="_blank"
                rel="noopener noreferrer" >

                <FaWhatsapp size={25} style={{ marginRight: 12 }} />
                {post?.contact}
              </a>
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
