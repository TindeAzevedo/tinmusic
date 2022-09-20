import { temas } from './db/temas';


function Poprock() {

  return (
    <div className='todo'>
      <h1><i>POP ROCK</i></h1>
      {temas.filter(tema => tema.genero == "poprock").map((valor, index) =>
        <a href={`/letra/${valor.id}`} key={index}
          className='cajavideo'>
          <article>
            <div className='video'>
              <img src={valor.imagen} />
            </div>
            <div className='titulo'>
              <p>{valor.titulo}</p>
            </div>
          </article>
        </a>)}
    </div>
  )
}

export default Poprock
