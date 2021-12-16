import { useState,useEffect } from 'react'

import Axios from 'axios'

import { Link } from 'react-router-dom'

import styles from './HomeList.module.css'
import CardList from '../layout/CardList'

function HomeList(){
    const [movieList, setMovieList] = useState([])

    useEffect(()=>{
        Axios.get("http://localhost:5000/read").then((response)=>{
            setMovieList(response.data)
        })
    },[])
    
    return(
        <div className={styles.conteiner}>
            <h1 className={styles.titulo}>Lista de Filmes</h1>
            <Link className={styles.link} to="/createcard">+ Adicionar Círtica</Link>

            {movieList.map((val, key) => {
                return(
                    <CardList key={key} chave={val._id} movieName={val.movieName} movieReview={val.movieReview}/>     
                )   
            })}            
        </div>
    )
}

export default HomeList