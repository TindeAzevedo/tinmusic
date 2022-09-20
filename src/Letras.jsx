import { useParams } from "react-router-dom"
import { temas } from './db/temas';

export default function Letras(){

    const { video } = useParams();

    const lyrics = temas.find(tema => tema?.id == video);
 
    if(!lyrics){
        return <>
            <div>no existe la letra</div>
        </>
    }
    

    return <>
        <div className="todo2">
            <div className="videoyou">
                <iframe width="560" height="315"
                 src={`https://www.youtube.com/embed/${ lyrics?.enlace }`} 
                 title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; 
                 clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div style={{
                whiteSpace: "pre-line"
            }}>{ lyrics?.letra }</div>
        </div>
    </>
}