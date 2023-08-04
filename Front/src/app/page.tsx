"use client";
import { Grid, Button, Divider, Typography, Box} from '@mui/material'
import styles from './page.module.css'
import { useState } from 'react'


export default function Home() {

  const [data, setData] = useState< Array<{id:number, nombre: string, ingredientes: string[]}>>([]);

  // <Array <String | number> >([])

  // const Datos= () => {
  //   fetch('http://localhost:3000/api/data')
  //   .then( r => r.json())
  //   .then( data => {
  //     const sumarDatos = data.Lista.map((n:number) => n + 1);
  //     setData([data.Saludo, sumarDatos])
  //   })
  //   .catch(error => console.error('Error fetching data', error))
  // }

  const getComida = () => {
    fetch('http://localhost:3000/api/comidas')
    .then(r => r.json())
    .then(data => setData(data.comidas))
    .catch(err => console.log('Error',err))
  }


  return (
    <main className={styles.main}>

      <div className={styles.description}>
        <p> Tarea </p>
      </div>

      <div className={styles.center}>
      <Button onClick={getComida}> Soy un Button de Mui </Button>
      </div>

     
      <Grid sx={{ mb : 10}}>

        <Box>
          <ul>
            {data.map(comida => (
              <li style={{marginBottom : '30px'}} key={comida.id}>
                <Typography variant={'h5'}> Comida : {comida.nombre}</Typography> 
                <Divider/>
                <Typography variant={'h5'}> Ingredientes : {comida.ingredientes.join(', ')}</Typography> 
              </li>
            ))}
          </ul>   
        </Box>

      </Grid>
        
      <Divider/>

      <Grid> Soy un Grid de Mui </Grid>
      <Button> Soy un Button de Mui </Button>
      <Grid> 
          
      </Grid>

    </main>
  )
}















        {/* <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a> */}