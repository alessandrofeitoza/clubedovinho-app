import "./styles.scss";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Mario() {
    return (
        <div class="page-mario">
            <Card variant="outlined">
                <img src="https://unblast.com/wp-content/uploads/2021/01/Space-Background-Images.jpg" style={{ width: "100%", borderRadius: "8px" }} />
                <CardContent className="container">
                    <div className="text-container">
                        <h1>Mário</h1>
                        <p>Diretor de Arte - UX/UI Designer</p>
                    </div>
                    <img src="https://avatars.githubusercontent.com/u/185074209?v=4" className="avatar" />
                </CardContent>
                
                <div>
                    <button href="#"> Entrar em contato </button>
                </div>
                
                
            </Card>
        </div>
    );
}
