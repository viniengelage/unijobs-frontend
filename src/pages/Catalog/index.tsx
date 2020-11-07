import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import { Container, Content, Pages, Informations } from './styles';

import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import FakeItem from '../../services/product';
import { IItem } from '../../services/types';

import ScrollToTopOnMount from '../../utils/ScrollToTopOnMount';
// interface Product {
//   _id: string;
//   title: string;
//   description: string;
//   price: string;
//   type: string;
//   image: string[];
// }

interface RepositoryParams {
  page: string;
  category: string;
}

const Catalog: React.FC = () => {
  const [products, setProducts] = useState<IItem[]>([]);
  const [page, setNextPage] = useState('');
  const { params } = useRouteMatch<RepositoryParams>();
  const [loading, setLoading] = useState(false);

  const hasCategory = params.category;

  useEffect(() => {
    setLoading(true);
    if (hasCategory) {
      api
        .get(`/categories/${params.category}?perPage=12&page=${params.page}`)
        .then(response => {
          setProducts(response.data.docs);
        })
        .catch(e => {
          setProducts([FakeItem, FakeItem, FakeItem]);
        });
      setLoading(false);
    } else {
      api
        .get(`/items?perPage=12&page=${params.page}`).then(response => {
          setProducts(response.data.docs);
        })
        .catch(e => {
          setProducts([FakeItem, FakeItem, FakeItem]);
        });
      setLoading(false);
    }
    const nextPage = parseInt(params.page) + 1;
    setNextPage(nextPage.toString());
    setLoading(false);
  }, [hasCategory, params.category, params.page]);

  const history = useHistory();

  return (
    <>
    <ScrollToTopOnMount />
      <Loading loading={loading} />
      <Banner backIcon />
      <Container>
        {products.map(product => (
          <Content>
            <Link to={`/items/${product._id}`} key={product._id}>
              <img src={product.image[0]} alt="Produto" />
              <Informations>
                <span>{product.type}</span>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
              </Informations>
              <strong>R$ {product.price}</strong>
            </Link>
          </Content>
        ))}
      </Container>
      <Pages>
        <button type="button" onClick={history.goBack}>
          <FiChevronLeft size={40} />
        </button>
        <a href={`${page}`}>
          <FiChevronRight size={40} />
        </a>
      </Pages>
      <Footer />
    </>
  );
};

export default Catalog;
