import { useState } from "react";
import { useForm } from "react-hook-form";
import React from "react";

function App() {
  const [inputs, setInputs] = useState<JSX.Element[]>([]);
  const [number, setNumber] = useState(0);
  const { register, handleSubmit } = useForm();

  function handleAdd() {
    const newInput = <input type="text" {...register(`name.${number}`, {})} />;

    setInputs([...inputs, newInput]);
    setNumber((c) => c + 1);
  }

  function handleShow(data: any) {
    console.log(data);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "300px" }}>
      <form onSubmit={handleSubmit(handleShow)}>
        {inputs.map((element, index) => {
          return <React.Fragment key={index}>{element}</React.Fragment>;
        })}
        <button type="button" onClick={handleAdd}>
          Add More
        </button>
        <button type="submit">Sim</button>
      </form>
    </div>
  );
}

export default App;
