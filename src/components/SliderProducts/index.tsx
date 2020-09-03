import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { ProductItem,
         ProductImage,
         ProductContent,
         ProductHeader,
         ProductCategory,
         ProductTitle,
         ProductDescription,
         ProductFooter,
         ProductLink,
         ProductPrice
        } from './styles';
// import api from '../../services/api';


interface Product {
  _id: string;
  title: string;
  description: string;
  price: string;
  type: string;
  image: string[];
}

const Slider: React.FC = () => {
  // const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   api.get('/items/?perPage=8&page=1').then(response => {
  //     setProducts(response.data.docs);
  //   });
  // }, []);

  return (
    <Carousel
      infinite
      slidesPerPage={2}
      arrowLeft={<FiChevronLeft size={60} color="#0E346A" />}
      arrowRight={<FiChevronRight size={60} color="#0E346A" />}
      addArrowClickHandler
      breakpoints={{
        900: {
          slidesPerPage: 1,
          arrows: false,
        }
      }}
    >
      {/* {products.map(product => ( */}
        <ProductItem>
          <ProductImage src="https://www.montarumnegocio.com/wp-content/uploads/2019/01/doces-para-vender-na-rua.jpg.webp" alt=" TÍTULO DE MÁXIMO 60 CARACTERES" />
          <ProductContent>
            <ProductHeader>
              <ProductCategory>Produto</ProductCategory>
              <ProductTitle>INSIRA UM TÍTULO DE MÁXIMO 60 CARACTERES</ProductTitle>
            </ProductHeader>
            <ProductDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quaerat distinctio ullam nostrum corrupti reiciendis ducimus esse expedita veritatis, qui similique ipsum consequuntur at nam incidunt molestiae labore dolores nihil?
            </ProductDescription>
            <ProductFooter>
            <ProductLink to="#/">+ informações</ProductLink>
            <ProductPrice>R$ 40,00</ProductPrice>
            </ProductFooter>
          </ProductContent>
        </ProductItem>
      {/* ))} */}
    </Carousel>
  );
};

export default Slider;
