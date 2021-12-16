import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import Axios from "axios"

import styles from "./EditdCard.module.css"

import Input from "../forms/Input"
import Button from "../forms/Button"

function EditCard(){

    const [newMovieReview, setNewMovieReview] = useState("");

    const { _id, movieName } = useParams();
    const navigate = useNavigate();
    const movieId = _id.substring(1);
    const movieNameStr = movieName.substring(1)

    const cancel = ()=>{
        navigate("/");
    };

    const updateReview = (_id)=>{
        Axios.put("http://localhost:5000/update", {
            id: _id, 
            newMovieReview: newMovieReview
        });
        alert("Atualizado com sucesso")
    }

    return(
        <div className={styles.content}>
            <div className={styles.titulo}><span className={styles.simbol}></span>Atualizar Críticas</div>
            <div className={styles.contentNomeFilme}>
                <span>{ movieNameStr }</span>
            </div>
            <Input name="Nova Crítica" placeholder="Crítica" handleEvent={(event)=>{
                setNewMovieReview(event.target.value);
            }}/>
            <div className={styles.contentButton}>
                <Button name="Atualizar" handleEvent={()=>{
                    updateReview(movieId)
                }}/>
                <Button name="Voltar" handleEvent={cancel}/>
            </div>
        </div>
    );
}
export default EditCard;