import React, {Component} from 'react';
import styled from 'styled-components';
import Description from '../components/description';
import Footer from '../components/footer';
import Header from '../components/header';
import Menu from '../components/menu';
import Content from '../components/content';
import * as Components from '@digituz/react-components';

const TituloContato = styled.h2`
  font-size: 18px;
  margin-top: 0;
`;

const ContatoContainer = styled(Content)`
  input,textarea {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 3px;
    font-size: 16px;
    line-height: 30px;
    color: #666;
    background-color: #f7f7f7;
    padding-left: 10px;
    padding-right: 10px;
  }
  
  textarea {
    height: 130px;
    resize: vertical;
  }
  
  button {
    font-size: 16px;
    line-height: 30px;
    padding: 0 20px;
    border-radius: 3px;
    border: 1px solid #61a760;
    background-color: #5fbd5c;
    color: white;
    cursor: pointer;
    
    :disabled {
      cursor: not-allowed;
      border: 1px solid #a6a2a7;
      background-color: #bdbabb;
    }
  }
`;

class Contato extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailSent: false,
      name: '',
      phone: '',
      email: '',
      mensagem: '',
    };

    this.sendEmail = this.sendEmail.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updatePhone = this.updatePhone.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateMensagem = this.updateMensagem.bind(this);
  }

  sendEmail() {
    const {name, phone, email, mensagem} = this.state;

    if (name.trim().length === 0) {
      return Components.NotificationManager.warning('Por favor, informe o seu nome.', 'Ooops');
    }

    const emailOrPhone = phone.trim().length > 0 || email.trim().length > 0;
    if (!emailOrPhone) {
      return Components.NotificationManager.warning('Por favor, informe um email ou telefone para contato.', 'Ooops');
    }

    if (mensagem.trim().length <= 10) {
      return Components.NotificationManager.warning('Por favor, digite a sua mensagem (min. 10 caracteres).', 'Ooops');
    }

    this.setState({
      emailSent: true,
    });
    Components.NotificationManager.success('Email enviado com sucesso', 'Obrigado');
  };

  updateName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  updatePhone(event) {
    this.setState({
      phone: event.target.value,
    });
  }

  updateEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  updateMensagem(event) {
    this.setState({
      mensagem: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Description>
          <h1>Krebs Engenharia</h1>
          <p>Seja bem-vindo ao site da Krebs Engenharia.</p>
        </Description>
        <ContatoContainer>
          <TituloContato>Formulário de Contato</TituloContato>
          <p>
            Para entrar em contato com a Krebs Engenharia, você pode enviar um email através
            do formulário abaixo ou então ligar para (51) 3334-9142 (de segunda à sexta das 08:30 às 18h).
          </p>
          <label htmlFor="name">Nome:</label>
          <input disabled={this.state.emailSent} id="name" type="text" onChange={this.updateName} value={this.state.name} />
          <label htmlFor="phone">Telefone:</label>
          <input disabled={this.state.emailSent} id="phone" type="text" onChange={this.updatePhone} value={this.state.phone} />
          <label htmlFor="email">Email:</label>
          <input disabled={this.state.emailSent} id="email" type="text" onChange={this.updateEmail} value={this.state.email} />
          <label htmlFor="mensagem">Email:</label>
          <textarea disabled={this.state.emailSent} name="mensagem" id="mensagem" onChange={this.updateMensagem} value={this.state.mensagem} />
          <button disabled={this.state.emailSent} onClick={this.sendEmail}>Enviar</button>
        </ContatoContainer>
        <Footer />
        <Components.NotificationContainer />
      </div>
    );
  }
}

export default Contato;
