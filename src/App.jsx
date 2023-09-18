import { Header } from './components/header';
import { Post } from './components/Post';
import { Sidebar } from './components/sidebar';

import styles from './app.module.css';
import './global.css';

const posts = [
  {
    id:1,
    author:{
      avatarUrl:"https://github.com/mathSilms.png",
      name:"Matheus Oliveira",
      role:"Analista de sistemas"
    },
    content:[
      {type:'paragraph', content:'Fala galeraa 👋'},
      {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link', content:'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-09-18 20:00:00')
  },
  {
    id:2,
    author:{
      avatarUrl:"https://github.com/mathSilms.png",
      name:"Matheus Oliveira",
      role:"Analista de sistemas"
    },
    content:[
      {type:'paragraph', content:'Fala galeraa 👋'},
      {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link', content:'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-09-18 20:00:00')
  }
]

function App() {

  return (
    <>
      <Header/>
     
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
