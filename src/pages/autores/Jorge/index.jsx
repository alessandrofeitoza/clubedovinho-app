import { Button } from "@mui/material";
import { ArrowRight } from "@mui/icons-material";
import styles from "./styles.module.scss";
import foto from "./img/jorge.jpg";

export default function Jorge() {
   return (
      <section className={styles["page-Jorge"]}>
         <div className={styles.profilePictureSection}>
            <img src={foto} alt="Profile" className={styles.profilePicture} />
            <div className={styles.pictureActions}>
               <Button
                  variant="outlined"
                  size="small"
                  className={styles.actionButton}
               >
                  Mudar Foto
               </Button>
               <Button
                  variant="outlined"
                  size="small"
                  className={styles.actionButton}
               >
                  Excluir Foto
               </Button>
            </div>
         </div>

         <div className={styles.profileInfo}>
            <div className={styles.infoSection}>
               <label className={styles.infoLabel}>Nome</label>
               <p className={styles.infoValue}>
                  Jorge Eduardo Andrade Siqueira
               </p>
            </div>

            <div className={styles.infoSection}>
               <label className={styles.infoLabel}>Email</label>
               <p className={styles.infoValue}>jeas@outlook.com</p>
            </div>

            <div className={styles.infoSection}>
               <label className={styles.infoLabel}>Telefone</label>
               <p className={styles.statusValue}>
                  <span className={styles.statusDot}></span>
                  (85) 9-8818.5327
               </p>
            </div>

            <div className={styles.infoSection}>
               <label className={styles.infoLabel}>Sobre mim</label>
               <p className={styles.aboutText}>
                  Engenheiro Mecânico de formação. Analista de Sistemas na
                  Teleceará (1978-1985) e no Banco do Nordeste (1986-2019).
                  Atualmente estudando desenvolvimento FullStack na Digital
                  School 💺
               </p>
            </div>

            <Button
               variant="contained"
               endIcon={<ArrowRight />}
               className={styles.profileButton}
            >
               Ver Perfil
            </Button>
         </div>
      </section>
   );
}
