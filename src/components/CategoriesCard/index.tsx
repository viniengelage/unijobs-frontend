import React from 'react';
import { Link } from 'react-router-dom';
import { IconBaseProps } from 'react-icons';

import { Container, Content } from './styles';

type CategoriesProps = {
  icon: React.ComponentType<IconBaseProps>;
  title: string;
};

const CategoriesCard: React.FC<CategoriesProps> = ({ icon: Icon, title }) => (
  <Container>
    <Content>
      <Link to="/categoria">
        <Icon size={72} />
        <span>{title}</span>
      </Link>
    </Content>
  </Container>
);

export default CategoriesCard;
