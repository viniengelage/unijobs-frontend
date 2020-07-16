import React,{useEffect, useState} from 'react';
import {Link, useRouteMatch, useHistory, useLocation} from 'react-router-dom';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'

import api from '../../services/api';

import {Container, Content, Pages} from './styles';

import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import { number } from 'prop-types';

interface Product {
  _id: string;
  title: string;
  description: string;
  price: string;
  type: string;
  image: string[];
}

interface RepositoryParams {
  page: string;
  category: string;
}


const Catalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setNextPage] = useState('');
  const { params } = useRouteMatch<RepositoryParams>();

  const hasCategory = params.category;

  useEffect(()=>{
    if(hasCategory){
        api.get(`/categories/${params.category}?perPage=12&page=${params.page}`).then(response => {
          setProducts(response.data.docs);
        })
    }else{
      api.get(`/items?perPage=12&page=${params.page}`).then(response => {
        setProducts(response.data.docs);
      })
    }
    const nextPage = parseInt(params.page) + 1;
    setNextPage(nextPage.toString());

  },[])

  const history = useHistory();

  return(
    <>
    <Banner backIcon/>
    <Container>
      {products.map(product => (
        <Content>
          <Link to={`/items/${product._id}`} key={product._id}>
            <img src={product.image[0]} alt="Produto" />
            <h1>{product.title}</h1>
            <strong>R$ {product.price}</strong>
            <span>{product.type}</span>
          </Link>
        </Content>
      ))}
    </Container>
    <Pages>
        <button type="button" onClick={history.goBack}><FiChevronLeft size={40}/></button>
        <a href={`${page}`}><FiChevronRight size={40}/></a>
    </Pages>
    <Footer/>
    </>
  );
}

export default Catalog;
