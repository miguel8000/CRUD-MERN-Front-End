import { useNavigate } from "react-router-dom"

import Axios from "axios"

import Button from "../forms/Button"
import styles from "./CardList.module.css"

function CardList({movieName, movieReview, chave}){   
        const navigate = useNavigate();    
        const editNavigate = ()=>{
            navigate(`/EditCard/:${chave}/:${movieName}`)
        }
        const deleteMovie = (id)=>{
            Axios.delete(`http://localhost:5000/delete/${id}`)
        }

        return(
            <div className={styles.contentCard}>
                <div><span>Nome do Filme: </span> {movieName}</div>
                <div className={styles.line}></div>
                <p><span>Crítica: </span>{movieReview}</p>

                <div className={styles.contentButton}>
                    <Button name="Atualizar" handleEvent={editNavigate}/>
                    <Button handleEvent={()=>{deleteMovie(chave)}} name="Deletar" />
                </div>
            </div>
        )
}
export default CardList