import React from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import {
  Container,
  Item,
  Images,
  InfoContact,
  Description,
  Buttons,
  Price,
} from './styles';

interface IItem {
  name: string;
  description: string;
  categories: ICategory[];
  investiment?: string;
  price?: number;
}

interface ICategory {
  name: string;
  type: string;
  icon: string;
}

const Product: React.FC = () => {
  return (
    <Container>
      <Item>
        <Images>
          <p>600 x 300px</p>
        </Images>

        <InfoContact>
          <p>
            Por <strong>Vinícios Engelage</strong>
          </p>
          <h1>Samsung Galaxy A10s Dual SIM 32 GB Vermelho 2 GB RAM</h1>
          <Price>
            <p>Preço: </p>
            <span>R$ 810,50</span>
          </Price>
          <Buttons>
            <button type="button">
              <FaWhatsapp />
              Enviar Mensagem
            </button>
            <button type="button">
              <FaEnvelope />
              Enviar Mensagem
            </button>
          </Buttons>
        </InfoContact>
        <Description>
          <h4>Descrição</h4>
          <p>
            - Desbloqueado. - Tela PLS de 6.2. <br />
            - Câmeras traseiras de 13Mpx/2Mpx. - Câmera frontal de 8Mpx. <br />
            - Processador MediaTek MT6762 Helio P22 Octa-Core de 2GHz com 2GB de
            RAM. <br />
            - Bateria de 4000mAh. <br />
            - Memória interna 32GB. Adequado para cartão SD de 512GB. <br />
            - Sistema operacional Android 9.0 Pie. - Com sensor de impressão
            digital. <br />
          </p>
        </Description>
      </Item>
    </Container>
  );
};

export default Product;
