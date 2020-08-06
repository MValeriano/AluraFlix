import React from "react";

function FormField({value,handleChange,descricao,tipo,nome}){
    return(
        <div>
        <label>
            {descricao}
        <input 
            type={tipo} 
            value={value}   
            name={nome}
            onChange={ handleChange }            
        />
        </label>
    </div>
    )
}

export default FormField;