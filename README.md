# Next Solar App

Sistema construído usando **Next.js 13**, **MUI 5** e escrito em **TypeScript**. Nele é possível se cadastrar verificar dados de capacidade de geração de energia solar, vindos da **Google API**, e navegar por um mapa a medida que os endereços são selecionados.

As especificações completas estão [aqui](https://drive.google.com/file/d/18Z2MTSWSJLYXhA-GeRKkCr5UERzOLPi4/view?usp=sharing).

Existe um deploy desse projeto em [https://next-solar-app.vercel.app/](https://next-solar-app.vercel.app/).

O roteamento utilizado foi o novo sistema do **Next 13** usando a pasta *app*. Apesar da API fornecida disponibilizar apenas a lista de endereços, a função *generateStaticParams()* pôde ser usada, de forma que todas as páginas do sistema se servem de dados armazenados em cachê.

A segunda página do sistema (aquela que foca em um endereço) não era estritamente necessária para o funcionamento do sistema. Porém, além das vantagens óbvias, como o compartilhamento de links específicos e a possibilidade de obter páginas de forma estática, essa parecia ser a maneira mais óbvia de se evitar a exposição da Google API ao usuário, o que seria uma falha grave na segurança.

O sistema conta com dois temas: *light* e *dark* e é totalmente compatível com dispositivos mobile.

### Como Executar

Existe uma infinidade de maneira de executar o projeto dependendo da *IDE* utilizada durante o desenvolvimento. Alguns recursos foram desenvolvidos para facilitar a execução e para fins didáticos.

#### 1) Criar arquivo .env.local
A primeira coisa a fazer é criar um arquivo *.env.local* (ou *.env* para deploy) com o conteúdo:

    NEXT_PUBLIC_GOOGLE_API_KEY="Sua chave da Google API"

#### 1) Instalar os pacotes necessários

    npm  -i

ou

    yarn  install

#### 2) Compilar e executar o projeto

##### Compilar

    npm  run  build

ou

    yarn  build

##### Executar

    npm  run  start

ou

    yarn  start

*Obs: É possível executar o projeto sem compilá-lo, executando *npm run dev* (ou *yarn dev*), porém o desempenho da execução é inferior ao do projeto compilado.*

O sistema deve estar rodando em [http://localhost:3000/](http://localhost:3000/).

## Dúvidas?

Qualquer dúvida: entrar em contato através do e-mail *juniorbocelli.com* ou WhatsApp (16) 99123-9505.
