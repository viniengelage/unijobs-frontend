import React from 'react';
import { Link } from 'react-router-dom';
import { IconBaseProps } from 'react-icons';

import { Container, Content } from './styles';

type CategoriesProps = {
  icon: React.ComponentType<IconBaseProps>;
  title: string;
  link: string;
};

const CategoriesCard: React.FC<CategoriesProps> = ({ icon: Icon, title, link }) => (
  <Container>
    <Content>
      <Link to={link}>
        <Icon size={72} />
        <span>{title}</span>
      </Link>
    </Content>
  </Container>
);

export default CategoriesCard;
