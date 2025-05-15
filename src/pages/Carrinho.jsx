import React from 'react';

export default function Carrinho(){
    const [produtos, setProdutos] = React.useState([
        {
            nome: 'coca-cola',
            price:6.50,
            quantity:0

        },
        {
            nome:'Pizza',
            price:32,
            quantity:0
        }
    ])

    function add(index) {
        const novosProdutos = [...produtos];
        novosProdutos[index].quantity += 1;
        setProdutos(novosProdutos);
      }
    
      function remove(index) {
        const novosProdutos = [...produtos];
        if (novosProdutos[index].quantity > 0) {
          novosProdutos[index].quantity -= 1;
          setProdutos(novosProdutos);
        }
      }

    const Item = (props)=>{
        return (
            <div>
                {props.nome} | {props.price}
                <button onClick={()=>remove(props.id)}>-</button>
                {produtos[props.id].quantity}
                <button onClick={()=>add(props.id)}>+</button>
            </div>
        )
    };

    const Lista = ()=>produtos.map((cada, key) =><Item key={key} id={key}{...cada}/>)

    return(
        <div>
            <h2>
                <Lista></Lista>
            </h2>

        </div>
    )



    // carrinho antigo
    // const [quantidadeC, setQuantidadeC] = React.useState(0)
    // const [quantidadeP, setQuantidadeP] = React.useState(0)
    // const [priceCoca, setPriceCoca] = React.useState(0)
    // const [pricePizza, setPricePizza] = React.useState(0)

    // const add = ()=>{
    //     setQuantidadeC(quantidadeC + 1)
    //     setPriceCoca(priceCoca + 6.50)
      
    // }
    // const remove = ()=>{
       
    //     if(quantidadeC > 0){
    //         setQuantidadeC(quantidadeC - 1)
    //         setPriceCoca(priceCoca - 6.50)
    //     }
    // }
  

  

    // const addP = () => {
    //     setQuantidadeP(quantidadeP + 1)
    //     setPricePizza(pricePizza + 32)

    // }
    // const removeP = ()=>{
    //     if(quantidadeP > 0){
    //         setQuantidadeP(quantidadeP - 1)
    //         setPricePizza(pricePizza - 32)
    //     }
    // }
    

    // const total = quantidadeP + quantidadeC
    // const priceTotal = priceCoca + pricePizza
    
    return(
        <>
        <div>
            <p>coca cola</p>
          
            <button onClick={remove}>-</button>
            
            {quantidadeC}
            <button onClick={add}>+</button>
        </div>
        
        <div>
            <p>Pizza</p>
           
            <button onClick={removeP}>-</button>
            {quantidadeP}
            <button onClick={addP}>+</button>
        </div>
        <div>
         <p>total de produtos no carrinho: {total}</p>
        
        </div>


        {/* <div>
            <table className='table table-light table-striped'>
                <thead className='table-dark'>
                    <th>produtos</th>
                    <th>total de produtos</th>
                    <th>valor total por produto</th>
                  
                </thead>
                <tbody>
                    <tr>
                        <td>coca-cola</td>
                        <td>{quantidadeC}</td>
                        <td>{priceCoca}</td>
                        
                    </tr>
                    <tr>
                        <td>pizza</td>
                        <td>{quantidadeP}</td>
                        <td>{pricePizza}</td>
                        
                    </tr>
                </tbody>
                total: {priceTotal}
            </table>
        </div> */}
        </>
       
        
    )
}