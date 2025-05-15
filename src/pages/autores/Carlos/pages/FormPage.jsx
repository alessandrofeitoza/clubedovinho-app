import React from "react";
import { Input } from "../components/Input";

export const FormPage = () => {
  const [name, setName] = React.useState("");

  function handleChange({ target }) {
    setName(target.value);
  }
  return (
    <form>
      <Input
        label="Nome: "
        id="name"
        onChange={handleChange}
        width="13rem"
        height="3.6rem"
      />

      <p>Nome: {name}</p>
    </form>
  );
};
