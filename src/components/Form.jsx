import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const dados = localStorage.getItem("cadastro");
  const [form, setForm] = useState(dados ? JSON.parse(dados) : []);

  // Atualização
  useEffect(() => {
    localStorage.setItem("cadastro", JSON.stringify(form));
  }, [form]);

  const salvarFormulario = (formdata) => {
    setForm([...form, formdata]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(salvarFormulario)}>
        <select name="" id="">
          <option value="">Ano</option>
          <option value="2024" {...register("ano")}>
            2024
          </option>
        </select>
        <select name="" id="" {...register("mês")}>
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
        <input type="text" placeholder="Dia" {...register("dia")} />
        <select name="" id="" {...register("tipo")}>
          <option value="">Tipo</option>
          <option value="1">Alimentação</option>
          <option value="2">Educação</option>
          <option value="3">Lazer</option>
          <option value="4">Saúde</option>
          <option value="5">Transporte</option>
        </select>
        <input type="text" placeholder="Descrição" {...register("descrição")} />
        <input type="text" placeholder="Valor" {...register("valor")} />
        <button>Adicionar</button>
      </form>
    </div>
  );
};

export default Form;
