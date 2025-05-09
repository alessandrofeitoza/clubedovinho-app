import React from 'react';

export default function Carrinho() {
    const [quantidade, setQuantidade] = React.useState(0);
    

    const add = () => {
        setQuantidade(quantidade + 1);
    }

    const remove = () => {
        if (quantidade > 0) {
            setQuantidade(quantidade - 1);
        }

        // if (quantidade <= 0) {
        //     return;
        // }

        // setQuantidade(quantidade - 1);


        // quantidade > 0 && setQuantidade(quantidade - 1);
    }

    return (
        <div>
            <h2>Meu Carrinho</h2>

            Coca Cola
            <button onClick={remove}>-</button>
                {quantidade}
            <button onClick={add}>+</button>

            <br/>

            Pizza
            <button onClick={remove}>-</button>
                {quantidade}
            <button onClick={add}>+</button>
        </div>
    )
}