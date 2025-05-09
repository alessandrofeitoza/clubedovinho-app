import React from 'react';

export default function Carrinho() {
    const [produtos, setProdutos] = React.useState([
        {
            nome: "Coca Cola",
            preco: 6.50,
            quantidade: 0,
        },
        {
            nome: "Pizza Calabrisa",
            preco: 32.99,
            quantidade: 0,
        },
        {
            nome: "Doce",
            preco: 10.99,
            quantidade: 0,
        },
    ]);


    const add = (id) => {
        let cesta = [...produtos];
        
        cesta[id].quantidade++; //aumentar em 1

        setProdutos(cesta);
    }

    const remove = (id) => {
        if (produtos[id].quantidade <= 0) {
            return;
        }

        let cesta = [...produtos];
        
        cesta[id].quantidade--; //diminuir em 1

        setProdutos(cesta);

        // if (quantidade <= 0) {
        //     return;
        // }

        // setQuantidade(quantidade - 1);


        // quantidade > 0 && setQuantidade(quantidade - 1);
    }

    const Item = (props) => {
        return (
            <div>
                {props.nome} | {props.preco}
                <button onClick={() => remove(props.id)}>-</button>
                    {produtos[props.id].quantidade}
                <button onClick={() => add(props.id)}>+</button>
            </div>
        )
    };

    return (
        <div>
            <h2>Meu Carrinho</h2>

            {produtos.map((cada, key) => <Item key={key} id={key} {...cada}/>)}
        </div>
    )
}
