import "bootstrap/dist/css/bootstrap.min.css";
import "./Game.css";
import { useId, useState } from 'react';


function ClothingTools(props) {
    const id = useId();
    const [name, setName] = useState('a pair of faded denim jeans');
    const [color, setColor] = useState('shady blue');
    const [unworn, setUnworn] = useState('This %c %m is utilitarian at best, made for comfort with a bootleg cut and a bit of give to the waistband. A tag sporting the initials \'ELM\' is tucked into the back of the jeans.');
    const [worn, setWorn] = useState('%n is wearing %p %c %m. The %m features a bootleg cut and a stretchy waistband, looking comfortable and practical.');
    const [wear, setWear] = useState('%n <pull> on %p %m, leg by leg.');
    const [remove, setRemove] = useState('%n <tug> off %p %m');
    const [tease, setTease] = useState('%n brushes dust off %p %m, then smiles @ mischeviously');
    const [pronoun, setPronoun] = useState('her');
    // const unwornTooltip="An unworn description is what appears when someone LOOKs at this item. This is a good place to describe how your item looks, what materials it's made out of, what sort of body type it's tailored  to fit, and what sort of pattern, gemstone, trim, zippers, buttons, or other features it may have. You can even include a branding or engravement to signify that it's your character's work.<br/> Suggested materials:<br/>Fabrics: Denim, wool, chiffon, velvet, satin, silk, cotton, linen, nylon, spandex, polyester, flannel, faux fur.<br/>Shoes: Leather, wood, canvas, rubber, plastics.<br/>Jewelry: Metal wire, gemstones, glass, costume jewelry parts.<br/>You must include a %c in your description:<br/>%c - This inserts the color of the item into the description.<br/>%m - (Optional) This inserts the name of the item into the description. ('a', 'an', 'the' or 'some'at the beginning will be removed.)<br/>Example unworn description: This %m is a long stretch of %c cotton fabric with two lengthy strips of cloth that are intended to be buttoned around the wearer's neck, a large orange button hanging from one and a slit cut into the other. It looks like it's got enough fabric to drape over any body type. A tag with an embroidered 'BC Design' is tucked on the inside."
    const her=['her', 'she', 'hers', 'her', 'herself']
    const his=['his', 'he', 'his', 'him', 'himself']
    const they=['their', 'they', 'theirs', 'them', 'themself']
    const it=['its', 'it', 'its', 'itself']
    const xe=['xem', 'xe', 'xems', 'xem', 'xemself']
    const your=['your', 'you', 'yours', 'your', 'yourself']
    function determinePronounSet(pronoun){
        let pronounSet=her
        if (pronoun==="his") {
            pronounSet=his
        } else if (pronoun==="they"){
            pronounSet=they   
        }else if (pronoun==="it"){
            pronounSet=it   
        }else if (pronoun==="xe"){
            pronounSet=xe   
        } else if (pronoun==="your"){
            pronounSet=your
        }
        return pronounSet
    }

    function replacePronouns(desc, pronoun) {
        
        let pronounSet=determinePronounSet(pronoun)
return desc.replaceAll("%p", pronounSet[0]).replaceAll("%s",pronounSet[1]).replaceAll("%t",pronounSet[2]).replaceAll("%o",pronounSet[3]).replaceAll("%r",pronounSet[4]).replaceAll("%n",'[name/you]').replace("%c", color).replaceAll("%m", name.replace(/^a |^an |^some |^the /i,""))
    }

    function secondPersonVerbs(desc) {
        return desc.replace(/<(\w*)>/g,"$1")
    }

    function thirdPersonVerbs(desc) {
        return desc.replace(/<(\w*)>/g,"$1s")
    }

    return (
        <div>
      <div className="grid-container">
        <label className="nice-label">Pronoun:</label>
        <select value={pronoun} style={{width:'fit-content'}} onInput={e=> setPronoun(e.target.value)}>
            <option value='her'>she/her</option>
            <option value='his'>he/him</option>
            <option value='they'>they/them</option>
            <option value='it'>it/its</option>
            <option value='xe'>xe/xem</option>
            <option value='rando'>rando</option>
        </select>
        <div/>

      <label className="nice-label">Item Name:</label>
      <input id={id} value={name} onInput={e => setName(e.target.value)}/>
      <div/>

      <label className="nice-label">Color:</label>
      <input value={color} onInput={e => setColor(e.target.value)}/>
        <div/>

      <label className="nice-label">Unworn:</label>
      <textarea value={unworn} onInput={e => setUnworn(e.target.value)}/>
      <div>{unworn.length}</div>
    
      <label className="nice-label">Worn:</label>
      <textarea value={worn} onInput={e => setWorn(e.target.value)}/>
      <div>{worn.length}</div>

      <label className="nice-label">Wear:</label>
      <textarea value={wear} onInput={e => setWear(e.target.value)}/>
      <div>{wear.length}</div>

      <label className="nice-label">Remove:</label>
      <textarea value={remove} onInput={e => setRemove(e.target.value)}/>
      <div>{remove.length}</div>

      <label className="nice-label">Tease:</label>
      <textarea value={tease} onInput={e => setTease(e.target.value)}/>
      <div>{tease.length}</div>

      </div>
      <p>Unworn: {replacePronouns(unworn,pronoun)}</p>
      <p>Worn: {replacePronouns(worn,pronoun)}</p>
      <p>Wear(To Wearer): {secondPersonVerbs(replacePronouns(wear,'your'))}</p>
      <p>Wear(To Others): {thirdPersonVerbs(replacePronouns(wear,pronoun))}</p>
      <p>Remove(To Wearer): {secondPersonVerbs(replacePronouns(remove,'your'))}</p>
      <p>Remove(To Others): {thirdPersonVerbs(replacePronouns(remove,pronoun))}</p>      
      <p>Tease(At Someone): {thirdPersonVerbs(replacePronouns(tease,pronoun)).replace('@', "at [person]")}</p>
      <p>Tease(In General): {thirdPersonVerbs(replacePronouns(tease,pronoun)).replace('@', "")}</p>
      </div>
    );
}

export default ClothingTools
