import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault';
import FormField from '../../../FormField';
import Button from '../../../Button';

function CadastroCategoria() {
  const objetoCategoria = {
    nome: '',
    descricao: '',
    cor: '#83a587',
  };

  const [categorias, setCategorias] = useState([]);
  const [valor, setValor] = useState(objetoCategoria);

  function setValue(chave, val) {
    setValor({
      ...valor,
      [chave]: val,
    });
  }

  useEffect(() =>{
    console.log('asadasadasdasdas');

    const URL_TOP = 'http://127.0.0.1:8080/categorias';

    fetch(URL_TOP).then( async(response) =>{
        const resposta = await response.json();
        console.log(resposta);
        setCategorias([
          ...resposta,
        ])
    }

    )

  },[]);

  function handleChange(event) {
    // const { getAttribute,value } = event.target;
    // setValue(getAttribute('name'),value)

    setValue(event.target.getAttribute('name'), event.target.value);
  }

  return (
    <PageDefault>
      <h1>
        {' '}
        Cadastro de Categoria:
        {valor.nome}
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();

        setCategorias([
          ...categorias,
          valor,
        ]);

        setValor(objetoCategoria);
      }}
      >

        <FormField
          value={valor.nome}
          onChange={handleChange}
          label="Nome da Categoria"
          type="text"
          name="nome"
        />

        <FormField
          value={valor.descricao}
          onChange={handleChange}
          label="Descrição"
          type="textarea"
          name="descricao"
        />

        <FormField
          value={valor.cor}
          onChange={handleChange}
          label="Cor"
          type="color"
          name="cor"
        />

        <Button>
          Cadastrar
        </Button>
        {categorias.length === 0 &&(<div>
          Loading...
        </div>)}
      </form>

      <ul>
        {
                    categorias.map((categoria) => (
                      <li key={`{categoria.titulo}`}>{categoria.titulo}</li>
                    ))
                }
      </ul>

      <Link to="/">
        Ir para a home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
