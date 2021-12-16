import { useState } from "react"
import { useNavigate } from "react-router-dom"

import styles from "./CreateCard.module.css"

import Input from "../forms/Input"
import Button from "../forms/Button"

import Axios from "axios"

function CreateCard(){

    const [movieName, setMovieName] = useState("")
    const [movieReviews, setMovieReviews] = useState("")
    const navigate = useNavigate()

    function addList(){
        Axios.post("http://localhost:5000/insert", {
            movieName:movieName, 
            movieReviews:movieReviews,
        })
    }

    const cancel = ()=>{
        navigate("/")
    }

    return(
        <div className={styles.content}>
            <div className={styles.titulo}><span className={styles.simbol}>+</span>Adicionar Crítica</div>
            <Input name="Nome do Filme" placeholder="Filme" handleEvent={(event)=>{
                setMovieName(event.target.value)
            }}/>
            <Input name="Crítica do Filme" placeholder="Crítica" handleEvent={(event)=>{
                setMovieReviews(event.target.value)
            }}/>
            <Button name="Adicionar Crítica" handleEvent={addList}/>
            <Button name="Cancelar" handleEvent={cancel}/>
        </div>
    )
}
export default CreateCard