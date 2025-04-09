import React, { useState, useEffect } from 'react';
import './WhatsApp.css';

// Função para validar CPF
const isValidCPF = (cpf) => {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let sum = 0;
  let remainder;

  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(9, 10))) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(10, 11))) return false;

  return true;
};

// Função para validar e-mail
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

function WhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cpf: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    let animationInterval;

    // Função para alternar a animação
    const toggleAnimation = () => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 5000);
    };

    // Inicia o ciclo de animação após 5 segundos
    const startAnimation = setTimeout(() => {
      toggleAnimation();
      animationInterval = setInterval(toggleAnimation, 10000);
    }, 5000);

    return () => {
      clearTimeout(startAnimation);
      clearInterval(animationInterval);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setIsAnimating(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = () => {
    const { name, email, cpf, message } = formData;
    const newErrors = {};

    // Validações dos campos obrigatórios
    if (!name.trim()) newErrors.name = 'Por favor, preencha seu nome.';
    if (!email.trim()) {
      newErrors.email = 'Por favor, preencha seu e-mail.';
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Por favor, insira um e-mail válido.';
    }
    if (!cpf.trim()) {
      newErrors.cpf = 'Por favor, preencha seu CPF.';
    } else if (!isValidCPF(cpf)) {
      newErrors.cpf = 'Por favor, insira um CPF válido.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Verifica se o campo de mensagem está vazio
    const finalMessage = message.trim()
      ? message
      : `Olá!  Meu nome é *${name}*. Estou entrando em contato através do site. Meu e-mail é *${email}* e meu CPF é *${cpf}*, queria mais informações sobre algum empreendimento que oferta!`;

    const whatsappMessage = `Olá!  Meu nome é *${name}*. Estou entrando em contato através do site. Meu e-mail é *${email}* e meu CPF é *${cpf}*. Aqui está minha mensagem: 

"${finalMessage}"

Por favor, me retorne assim que possível. Obrigado! `;

    const whatsappURL = `https://wa.me/559291039081?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="whatsapp-container">
      <button
        className={`whatsapp-button ${isAnimating ? 'animate' : ''}`}
        onClick={handleClick}
      >
        <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="WhatsApp" />
      </button>
      {isOpen && (
        <div className="whatsapp-form">
          <h3>Conversar no WhatsApp</h3>
          <p>Preencha os campos abaixo para iniciar a conversa.</p>
          {errors.name && <span className="error-message">{errors.name}</span>}
          <input
            type="text"
            name="name"
            placeholder="Qual seu nome completo?"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
          <input
            type="email"
            name="email"
            placeholder="Digite o seu melhor e-mail"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.cpf && <span className="error-message">{errors.cpf}</span>}
          <input
            type="text"
            name="cpf"
            placeholder="Qual o seu CPF?"
            value={formData.cpf}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Digite sua mensagem..."
            value={formData.message}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Avançar</button>
        </div>
      )}
    </div>
  );
}

export default WhatsApp;