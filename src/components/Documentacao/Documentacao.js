import React from 'react'

const HeaderDoc = () => {
  return (
    <div className="mt-5">
      <h2 className="header-doc-title">Documentação Javascript Montagem</h2>
      <p>
        Abaixo você encontrará as informações necessárias sobre todo o conteúdo
        de código front-end utilizados pela equipe da Montagem da Univesp. Em seguida você verá uma lista
        com as versões JS (ECMAScripts) utilizadas, assim como suas bibliotecas e frameworks. Além disso,
        também utilizamos outras tecnologias para integrar informações.
      </p>
      <ul>
        <li className="header-doc-item">ES5 e jQuery - 80% de todo o código escrito.
          (Utilizamos esse padrão para favorecer a compatibilidade com o
          Internet Explorer)
        </li>
        <li className="header-doc-item">ES6 e posteriores - Utilizamos algumas arrow functions e modelos novos de concatenação.
          Este último evitamos no ambiente
          do Canvas por não ter compatibilidade com o IE.
        </li>
        <li className="header-doc-item">React JS - Arquitetamos o site da Montagem e os construtores completamente em React.
          Além também de servir para renderizar
          áudios, inputs e textareas no ambiente do Canvas.
        </li>
        <li className="header-doc-item">Prism JS - Usamos essa biblioteca para estilizar tags de código HTML.
        </li>
        <li className="header-doc-item">Github - Repositório de códigos front-end da Montagem, além de utilizar o
          Github pages para manter o montagem web-app.
        </li>
        <li className="header-doc-item">SheetsAPI - Guardamos a maior parte das coisas em planilhas do google.
          Alguns itens como as senhas e datas especifícas são
          armazenadas nesse formato e são requisitadas pelo site para trazer informações em formato JSON.
        </li>
      </ul>
      <p>A seguir, detalhamos melhor como utilizamos cada uma das tecnologias descritas, exemplos de como utilizá-las e alguns breves tutoriais.</p>
    </div>
  )
}

export const Documentacao = () => {
  return (
    <div>
     <HeaderDoc/>
    </div>
  )
}