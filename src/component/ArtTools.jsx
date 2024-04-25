import "bootstrap/dist/css/bootstrap.min.css";
import "./Game.css";
import { useId, useState } from 'react';


function convertToColorP(r,g,b,string) {
    const style = {
        color: 'rgb('+r*255/5+','+g*255/5+','+b*255/5+')',
        display: 'inline',
    }
    return (
            <p style={style}>{string}</p>

    )

}

function convertTextToColor(input){
    const strings = input.split('%')
    let output=[];

    strings.forEach((string)=>{
        if (string.length>3 && !isNaN(string.charAt(0))&&!isNaN(string.charAt(1))&&!isNaN(string.charAt(2))){
            output.push(convertToColorP(string.charAt(0),string.charAt(1),string.charAt(2),string.substring(3)))
        } else {
            output.push(string)
        }
    })
    return output

}



function ArtTools(props) {
    const id = useId();
    const [art, setArt] = useState('%333Type your art here!');
    const artOutput = convertTextToColor(art)
    console.log(artOutput)
    return (
        <div style={{backgroundColor: 'black',
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        overflow: 'auto',
        color: 'rgb(155,155,155)'}}>
        <div style={{display:'flex'}}>
      <textarea style={{width:'60%', height:'300px', background:'black', color:'antiquewhite'}} id={id} value={art} onInput={e => setArt(e.target.value)}/>
      <div>{art.length}</div>
      </div>
      <div/>
            
      <p>Art Preview:</p>
      {artOutput.map(para => para)}
      </div>
    );

}

export default ArtTools
