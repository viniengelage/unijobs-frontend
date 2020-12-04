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

import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';

import api from '../../services/api';
import ScrollToTopOnMount from '../../utils/ScrollToTopOnMount';

interface RepositoryParams {
  id: string;
}

const Product: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState<IItem>();
  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    setLoading(true);
    api
      .get(`/item/${params.id}`)
      .then(response => {
        console.log(response.data[0]);
        setPost(response.data[0]);
      })
      .catch(e => {
        console.log(e);
      });
    setLoading(false);
  }, [params.id]);

  // Remove tudo exceto números
  const contactLink = post?.user.phone.replace(/[^\d]+/g, '');

  return (
    <>
      <ScrollToTopOnMount />
      <Loading loading={loading} />
      <Banner backIcon />
      <Content>
        <Item>
          <Images>
            <img
              src={`http://200.208.73.149:3333/api/files/${post?.image_id}`}
              alt={post?.title}
            />
          </Images>

          <InfoContact>
            <p>
              Por <strong>{post?.user.name}</strong>
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
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={25} style={{ marginRight: 12 }} />
                {post?.user.phone}
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
