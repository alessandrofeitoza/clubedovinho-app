import "./styles.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Mario() {
    return (
        <div>
           
            <Card variant="outlined" > 
            <img src="https://unblast.com/wp-content/uploads/2021/01/Space-Background-Images.jpg" style={{ width: "100%", borderRadius: "8px" }} />  
            <CardContent class="container">
                <h1>Mário</h1>
                <div style={{textAlign: 'right'}}>
                    <img src="https://avatars.githubusercontent.com/u/185074209?v=4" class="avatar"/>
                    <p>Diretor de Arte - UX/UI Designer</p>
                </div>
                
            </CardContent>
            </Card>
    
        </div>
    )
}