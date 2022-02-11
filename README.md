# Cora Bank Challenge

## Rodando o projeto:
```nvm use```

```npm install```

```npm start```

## Decisões técnicas

### Decisão por framework:

Optei pelo Gatsby pelo fato da estrutura da página ser estática. Não nos beneficiaríamos de um server-side rendering uma vez que os únicos dados que são dinâmicos nesta página são privados e, portanto não poderiam ser entregues do servidor.
Exclusivamente client side perderíamos a possibilidade de retornar a estrutura estática da página diretamente do servidor.
O Gatsby irá permitir desenvolver em React, gerar uma página estática em tempo de build e apenas popular os dados dinâmicos no client side.

### Gerenciamento de estado:
Não foi necessário criar um gerenciador de estado global. Não há estados que devam ser globais e tão pouco compartilhados entre todo o projeto. O gerenciamento local é o mais otimizado e simples para o cenário atual.

### Organização de pastas:
Optei por seguir a base do conceito do design atômico e visando evitar uma componentização exacerbada do sistema.

### Separação de responsabilidades:
Tive cuidado de evitar a duplicidade de comportamento entre componentes, preferindo generalizar mais o componente e permitir que tenha reuso em outro contexto. 
Toda a regra de negócio fica a cargo da página e os componentes foram desenvolvidos para serem burros, forma a apenas apresentarem o que for passado por parâmetro.
A generalização dos componentes com a injeção de suas dependências permite que outras páginas parecidas, mas não iguais, sejam facilmente desenvolvidas.
Também foi separada a camada de API, que expõe uma abstração do cliente HTTP, para que o conhecimento do cliente qualquer fique centralizado nesta abstração.

### Conceitos de desenvolvimento da UI:
- Apesar da tela proposta ser para telas largas, eu utilizei do conceito Mobile First para ganharmos um layout responsivo.
- Foi utilizado HTML semântico, com cuidado as tags que expressem a carga semântica ideal.
- Cuidado com acessibilidade. Passei o VoiceOver na página e julgo que o resultado mostrou facilidade de navegação e compreensão do contexto onde você está inserido na página.

### Tecnologias para estilo:
- Optei por usar Sass porque particularmente acho uma boa maneira de escrever CSS e tenho mais familiaridade. Acho que combinado ao padrão BEM é possível construir uma estrutura previsível e com hierarquia clara no CSS.
- Utilizado padrão BEM para nomeação de classes e definição de componentes.

## Melhorias técnicas para o futuro:
- Melhorar a versão responsiva, que não está com tamanhos ideais de font e espaçamento.
- Debounce no search para evitar calculos caros quando o volume de dado no front for grande.
- Lazy loading da tabela, paginando a requisição para a API e pedindo menos items.
- Provavelmente uma nomeação melhor de componentes.
- Maior cobertura de testes.