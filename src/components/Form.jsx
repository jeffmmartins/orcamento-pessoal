import React from 'react'

const Form = () => {
  return (
    <div>
      <form action="">
        <select name="" id="">
            <option value="">Ano</option>
            <option value="2024">2024</option>
        </select>
        <select name="" id="">
            <option value="">Mês</option>
            <option value="1">Janeiro</option>
            <option value="2">Fevereiro</option>
            <option value="3">Março</option>
            <option value="4">Abril</option>
            <option value="5">Maio</option>
            <option value="6">Junho</option>
            <option value="7">Julho</option>
            <option value="8">Agosto</option>
            <option value="9">Setembro</option>
            <option value="10">Outubro</option>
            <option value="11">Novembro</option>
            <option value="12">Dezembro</option>
        </select>
        <input type="text" placeholder='Dia'/>
        <select name="" id="">
            <option value="">Tipo</option>
            <option value="1">Alimentação</option>
            <option value="2">Educação</option>
            <option value="3">Lazer</option>
            <option value="4">Saúde</option>
            <option value="5">Transporte</option>
        </select>
        <input type="text"  placeholder='Descrição'/>
        <input type="text"  placeholder='Valor'/>
      </form>
      <button>Adicionar</button>
    </div>
  )
}

export default Form
