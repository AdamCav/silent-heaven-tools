import React from 'react'
import { useDispatch, useStore } from "react-redux";
import { addProject, removeProject } from "../modules/projectsSlice";



const AlterElement = (parameters) =>{
    const store = useStore()
    console.log(store)    
    const dispatch = useDispatch()
    let test = null
    const elementType = parameters.element_type;
    const removeElement = parameters.remove;
    const targetId = parameters.element_id;
    switch(elementType) {
        case "decision":
            break;
        case "event":
            break;
        case "project":            
            removeElement?test=removeProject:test=addProject
            break;
        case "research":
            break;
        default:
            console.log('you fucked up')
    }
    dispatch(test(targetId))
}

export default AlterElement