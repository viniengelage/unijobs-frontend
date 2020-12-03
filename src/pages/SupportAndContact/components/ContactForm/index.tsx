import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import getValidationErrors from '../../../../utils/getValidationsErrors';
import InputMask from '../../../../components/InputMask';
import TextArea from '../../../../components/TextArea';
import Button from '../../../../components/Button';
import Loading from '../../../../components/Loading';

import { useToast } from '../../../../hooks/toast';

import { Input } from './styles';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const phoneRegExp = new RegExp(
  /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/,
);

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const scrollToTop = (): void => {
    window.scrollTo(0, 0);
  };

  const formatPhone = (phone: string): string => {
    phone = phone.replace(/D/g, ''); // Remove tudo o que não é dígito
    phone = phone.replace(/^(d{2})(d)/g, '($1) $2'); // Coloca parênteses em volta dos dois primeiros dígitos
    phone = phone.replace(/(d)(d{4})$/, '$1-$2'); // Coloca hífen entre o quarto e o quinto dígitos
    return phone;
  };

  const handleSubmit = useCallback(
    async (data: ContactFormData) => {
      setLoading(true);
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          phone: Yup.string(),
          message: Yup.string().required(
            'Mensagem obrigatória. Descreva sua dúvida ou problema.',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        setLoading(false);
        scrollToTop();
        addToast({
          type: 'sucess',
          title: 'Mensagem enviada com sucesso!',
          description:
            'Entraremos em contato assim que possível para te ajudar.',
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        }
        setLoading(false);
        scrollToTop();
        addToast({
          type: 'error',
          title: 'Erro ao enviar mensagem',
          description:
            'Ocorreu um erro durante o envio da sua mensagem. Cheque os campos e tente novamente mais tarde.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <>
      <Loading loading={loading} />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="name"
          type="text"
          label="Nome completo"
          placeholder="Digite seu Nome completo"
        />
        <Input
          name="email"
          type="email"
          label="E-mail"
          placeholder="Digite seu E-mail"
        />
        <InputMask
          mask="(99) 99999999?"
          formatChars={{ 9: '[0-9]', '?': '[0-9]' }}
          maskChar={null}
          name="phone"
          type="tel"
          label="Telefone"
          placeholder="Digite seu Telefone"
        />
        <TextArea
          name="message"
          label="Mensagem"
          placeholder="Explique em que podemos te ajudar"
        />
        <Button type="submit" style={{ width: '100%' }}>
          Enviar
        </Button>
      </Form>
    </>
  );
};

export default ContactForm;
