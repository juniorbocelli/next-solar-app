# Next Solar App

Sistema construído usando **Next.js 13**, **MUI 5** e escrito em **TypeScript**. Nele é possível se cadastrar verificar dados de capacidade de geração de energia solar, vindos da **Google API**, e navegar por um mapa a medida que os endereços são selecionados.

As especificações completas estão [aqui](https://drive.google.com/file/d/18Z2MTSWSJLYXhA-GeRKkCr5UERzOLPi4/view?usp=sharing).

Existe um deploy desse projeto em [https://next-solar-app.vercel.app/](https://next-solar-app.vercel.app/).

O roteamento utilizado foi o novo sistema do **Next 13** usando a pasta *app*. Apesar da API fornecida disponibilizar apenas a lista de endereços, a função *generateStaticParams()* pôde ser usada, de forma que todas as páginas do sistema se servem de dados armazenados em cachê.

![enter image description here](https://lh3.googleusercontent.com/pw/ADCreHdnlhNOblsGLQ6DkvAqMrHqw8lsB1Uwek8nGM1V5nVouvScqZHphGCY6WIVQaeKgkw3027Kr8WCVOIAifEmR94O6ErDUxfGJcsTasvtuNLHR5oHoU_qj8XWtFs5EVI0ICsJNZ7kzYAMR8FqaDjxOLeJ-7n16e3DZpuGOtpp-Dm_mElak16SCSnz49uUxiLQTcC0rQCjtNfjh3QCu5hgzO41YNIDCqx2wAy8wRpNx_pddux5HITHsllahx8ffPuMzqnDb0fLeqae0arVA2gfJ312e2J-ZfBD6bXk7AnI6R3fqzk-G84R_0V0tjxNqXt51V9q58KsrZCoRpaYjKnIIlk5_L2aepE9y_05JgKAXwfM85Tm1AD58zFR1QCFJbMYAdVY6xgnOEIhTSCA-h4Ms-1_FXs7Sn8Vc0FMwCbNMIz1l8QMNaLsJk5uhAAgV4hGMyEBCJyHeiSoI6VxTPB8fTy-gt0olDSZUveWmB5SuOahLeC0zmvT_UTA6ehyI8yaC_CQ7AFYz7nk4Pw-Y-IkV7wIHLffkxcIOnlzDLve_ZjI86erEMYpxZ6SrQP3zhRGm5r2nIcEm1RR6xhK3LRKiJ4hHnF-uH6Wg-_LQqz8YwOGnVNQ5Zal02Ns8_GU1pTxSHVTZKSrL-u944lvW1qkvAYSzE4-Fj5wTKLD4xIq073cGs3szjOQQXnaCsmQyUbso--v-7gz6WWDYkMOhBGENDYztYIG9ogGDvD0bhiQVZPsabEfV0WXdlYRi7lUtokpUOkv6hix3WgKPP9y6LRWR9qR04Jukt82sgWJ79i1TNrvhMgbFyruov7nMvw3M5mi8nySdCpKQTnoJL4_b0Tbmp_99MGl5rG5xKFfHda-Yo37vRMYSCwbl4Z4-fZhusbGbp-9rwLduhFhYXS0N5OC=w733-h393-s-no?authuser=0)

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