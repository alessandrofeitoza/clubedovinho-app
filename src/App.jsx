import {Button} from "@mui/material";
import {
  Favorite as FavoriteIcon, 
  Block as BlockIcon,
} from "@mui/icons-material";

function ListItem(props) {
  return (
    <li>
      {props.children}
    </li>
  )
}

export default function App() {
  const teste = () => {
    alert('oi som');
  };

  let items = [
    'Cadastrar',
    'Listar',
    'Relatorios',
    'Logout',
  ];

  return (
    <>
      <ul>
        {items.map((cada)=> {
          return (<li>{cada}</li>)
        })}

        {items.map((cada) => (<li>{cada}</li>))}
      </ul>
  

      <Button onClick={teste} startIcon={<FavoriteIcon/>} color="success">Teste</Button>
      <Button endIcon={<BlockIcon/>} color="warning" variant="outlined">Outro teste</Button>
      <Button color="error" variant="contained">Mais um teste</Button>

    </>
  )
}



