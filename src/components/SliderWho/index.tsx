import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import {
  WhoItem,
  WhoImage,
  WhoContent,
  WhoHeader,
  WhoCategory,
  WhoTitle,
  WhoDescription,
  WhoFooter,
  WhoLink,
  WhoSeeMore
} from './styles';
// import api from '../../services/api';


interface Product {
  _id: string;
  nome: string;
  bio: string;
  image: string[];
}

const SliderWho: React.FC = () => {
  return (
    <Carousel
      infinite
      slidesPerPage={2}
      arrowLeft={<FiChevronLeft size={60} color="#0E346A" />}
      arrowRight={<FiChevronRight size={60} color="#0E346A" />}
      addArrowClickHandler
    >
      {/* {products.map(product => ( */}
      <WhoItem>
        <WhoImage src="https://avatars2.githubusercontent.com/u/14930948?s=460&u=3014f75d7233f1feeab041878b67b3e7a62786c2&v=4" alt="Vinicius Oliveira" />
        <WhoContent>
          <WhoHeader>
            <WhoCategory>Estudante Eng. Software</WhoCategory>
            <WhoTitle>Vinicius Oliveira</WhoTitle>
          </WhoHeader>
          <WhoDescription>
            Atualmente estou cursando a faculdade de Engenharia de Software onde obtive conhecimentos em ReactJS, NodeJS, ReactNative se aprofundando nos mesmos, e também uma vivência com linguagens mais conhecidas como php, python, c.
            Em minha trajetória obtive conhecimentos na utilização do Google Adwords, Gerenciador de negócios(Facebook ADS e Instagram ADS), Keyword Planner, Adsense.
            </WhoDescription>
            <WhoSeeMore>Veja mais em</WhoSeeMore>
          <WhoFooter>
            <WhoLink href="https://github.com/viniciusol1"><FaGithub /> Github</WhoLink>
            <WhoLink href="https://www.linkedin.com/in/vinicius-oliveira-de-freitas-a3a686b7/"><FaLinkedin /> Linkedin</WhoLink>
          </WhoFooter>
        </WhoContent>
      </WhoItem>
      <WhoItem>
        <WhoImage src="https://avatars3.githubusercontent.com/u/50602159?s=460&u=7e2ffed2b475dc96021d656f746f6f1d5a47665c&v=4" alt="Vinicios Engelage" />
        <WhoContent>
          <WhoHeader>
            <WhoCategory>Estudante Eng. Software</WhoCategory>
            <WhoTitle>Vinicios Engelage</WhoTitle>
          </WhoHeader>
          <WhoDescription>
            Acadêmico de Engenharia de Software. Apaixonado por design e tecnologias que mudam o rumo das coisas.
          </WhoDescription>
          <WhoSeeMore>Veja mais em</WhoSeeMore>
          <WhoFooter>
            
            <WhoLink href="https://github.com/viniengelage"><FaGithub /> Github</WhoLink>
            <WhoLink href="https://www.linkedin.com/in/vinicios-engelage-41188417a/"><FaLinkedin /> Linkedin</WhoLink>
          </WhoFooter>
        </WhoContent>
      </WhoItem>
      <WhoItem>
        <WhoImage src="https://avatars2.githubusercontent.com/u/65509827?s=460&u=fda9f6535a68103e7f81a3435e4f451cfaa76d1f&v=4" alt="Thainá Weingartner" />
        <WhoContent>
          <WhoHeader>
            <WhoCategory>Estudante Eng. Software</WhoCategory>
            <WhoTitle>Thainá Weingartner</WhoTitle>
          </WhoHeader>
          <WhoDescription>
          Graduada em Design; Cursando Engenharia de Software; Bastante determinada!
          </WhoDescription>
          <WhoSeeMore>Veja mais em</WhoSeeMore>
          <WhoFooter>
            
            <WhoLink href="https://github.com/thainaweingartner"><FaGithub /> Github</WhoLink>
            <WhoLink href="https://www.linkedin.com/in/thainachagas/"><FaLinkedin /> Linkedin</WhoLink>
          </WhoFooter>
        </WhoContent>
      </WhoItem>
      <WhoItem>
        <WhoImage src="https://avatars3.githubusercontent.com/u/20546278?s=460&u=a1bc19dec6ce9131462798984797a4d2aeebae48&v=4" alt="Thiago Alves" />
        <WhoContent>
          <WhoHeader>
            <WhoCategory>Estudante Eng. Software</WhoCategory>
            <WhoTitle>Thiago Alves</WhoTitle>
          </WhoHeader>
          <WhoDescription>
          Frontend and Backend Software Engineer student, Uniamerica, 22 years-old. #Java #Spring Framework # ReactJS
          </WhoDescription>
          <WhoSeeMore>Veja mais em</WhoSeeMore>
          <WhoFooter>
            <WhoLink href="https://github.com/thiagoalvesfoz"><FaGithub /> Github</WhoLink>
            <WhoLink href="https://www.linkedin.com/in/thiagoalvesfoz"><FaLinkedin /> Linkedin</WhoLink>
          </WhoFooter>
        </WhoContent>
      </WhoItem>
      {/* ))} */}
    </Carousel>
  );
};

export default SliderWho;
