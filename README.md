
# Next Solar App

  

Sistema construído usando **Next.js 13**, **MUI 5** e escrito em **TypeScript**. Nele é possível se cadastrar verificar dados de capacidade de geração de energia solar, vindos da **Google API**, e navegar por um mapa a medida que os endereços são selecionados.

As especificações completas estão [aqui](https://drive.google.com/file/d/18Z2MTSWSJLYXhA-GeRKkCr5UERzOLPi4/view?usp=sharing).

Existe um deploy desse projeto em [https://next-solar-app.vercel.app/](https://next-solar-app.vercel.app/).

O roteamento utilizado foi o novo sistema do **Next 13** usando a pasta *app*. Apesar da API fornecida disponibilizar apenas a lista de endereços, a função *generateStaticParams()* pôde ser usada, de forma que todas as páginas do sistema se servem de dados armazenados em cachê.

![Deploy result](https://lh3.googleusercontent.com/pw/ADCreHcqg7IRNB_0E8hADLZK1TmbV0-WeTZiCbBfhD1faHKrsc3XLVXN8IP3OnKxucPQLNNdmmJ0IRjb4Ziy8Yf9za00QICRKduLgliMyU3fAoLlqtH3cw=w2400?source=screenshot.guru%22%3E%20%3Cimg%20src=%22https://lh3.googleusercontent.com/pw/ADCreHcqg7IRNB_0E8hADLZK1TmbV0-WeTZiCbBfhD1faHKrsc3XLVXN8IP3OnKxucPQLNNdmmJ0IRjb4Ziy8Yf9za00QICRKduLgliMyU3fAoLlqtH3cw=w600-h315-p-k)  

A segunda página do sistema (aquela que foca em um endereço) não era estritamente necessária para o funcionamento do sistema. Porém, além das vantagens óbvias, **como o compartilhamento de links específicos** e a **possibilidade de obter páginas de forma estática**, essa parecia ser a maneira mais óbvia de se **evitar a exposição da Google API ao usuário**, o que seria uma grave falha na segurança.

### Navegação

Atualmente é possível navegar pelos endereços de 3 formas:

 - Entrando diretamente em um link de um endereço específico.
 - Navegar pelo mara clicando sobre os ícones das marçações;
 - Navegar pela lista de cards com os endereços, clicando sobre um card para selecionar o endereço.

***Obs:** Para a versão mobile, inicialmente foi pensada a possibilidade de navegar pelos endereços, sem precisar clicar sobre o card exibido.* No entanto, essa alternativa gera problemas, como:

 - Uma mudança no paradigma de navegação apenas pela troca de dispositivo;
 - Seria necessário navegar obrigatoriamente por muitos endereços indesejados, até que o usuário chegasse a informação que realmente queria exibir.

O sistema conta com dois temas: *light* e *dark* e é totalmente compatível com dispositivos mobile.
 ![Two themes demo](https://lh3.googleusercontent.com/pw/ADCreHdr3XT50PdcjyOmrWC7P9P16U_aKmZlUsC1bgOCTWNWSyQLEwSNJahXbLzRlBecRgzVsCiqK8n3vOnj1hvsLb1HSEu8DEIYbZRdRTups6jNNnSskA=w2400)

### Como Executar

Existem duas maneiras de executar o projeto: o modo de desenvolvimento e o podo compilado, pronto para produção. Por questões de desempenho, a segunda opção é a recomentada.

#### 1) Criar arquivo .env.local

A primeira coisa a fazer é criar um arquivo *.env.local* (ou *.env* para deploy) com o conteúdo:

    NEXT_PUBLIC_GOOGLE_API_KEY="Sua chave da Google API"

#### 1) Instalar os pacotes necessários

    npm -i

ou

  

     yarn install

#### 2) Compilar e executar o projeto

  

##### Compilar
  
    npm run build

ou
  
    yarn build

  

##### Executar

    npm run start

ou

    yarn start

  

*Obs: É possível executar o projeto sem compilá-lo, executando *npm run dev* (ou *yarn dev*), porém o desempenho da execução é inferior ao do projeto compilado.*

O sistema deve estar rodando em [http://localhost:3000/](http://localhost:3000/).

  

## Dúvidas?

  

Qualquer dúvida: entrar em contato através do e-mail *juniorbocelli.com* ou WhatsApp (16) 99123-9505.