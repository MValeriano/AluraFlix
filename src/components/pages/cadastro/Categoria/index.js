import React, { useState } from 'react';
import PageDefault from '../../../PageDefault';
import {Link} from 'react-router-dom';
import FormField from '../../../FormField';


function CadastroCategoria(){

    const objetoCategoria = {
        nome: '',
        descricao: '',
        cor: '#83a587',
    };

    const [ categorias, setCategorias ] = useState([]);
    const [ valor, setValor] = useState(objetoCategoria);

    function setValue(chave,val){
        setValor({
            ...valor,
            [chave] : val
        })
    }

    function handleChange(event) 
    {
       // const { getAttribute,value } = event.target;
        //setValue(getAttribute('name'),value)

        setValue(event.target.getAttribute('name'),event.target.value)
    }

    return(
        <PageDefault>
            <h1> Cadastro de Categoria: {valor.nome} </h1>

            <form onSubmit={function handleSubmit(event){
                event.preventDefault()
                
                setCategorias([
                    ...categorias,
                    valor
                ])

                setValor(objetoCategoria)
            }}>

            <FormField 
                value={valor.nome}
                handleChange={handleChange}
                descricao="Nome da Categoria :"
                tipo="text"
                nome="nome"
            />

            <FormField 
                value={valor.descricao} 
                handleChange={handleChange}
                descricao="Descrição:"
                tipo="text"
                nome="descricao"
            />

            <FormField 
                value={valor.cor}
                handleChange={handleChange}
                descricao="Cor :"
                tipo="color"
                nome="cor"
            />


            <button>
                Cadastrar
            </button>

            </form>

            <ul>
                {
                    categorias.map((categoria,index) => 
                    {
                        return (
                            <li key={`${index}${categoria.cor}`}>{categoria.cor}</li>
                        )
                    })
                }
            </ul>

            <Link to="/">
                Ir para a home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;