import { temas } from './db/temas';

function Folklore() {
  return (
    <div className='todo'>
      <h1><i>FOLKLORE</i></h1>
      {temas.filter(tema => tema.genero == "folklore").map((valor, index) =>
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

export default Folklore
