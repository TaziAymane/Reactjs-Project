
export const ajouter =(parfum)=>{
    return {type:'ajouter',payload:parfum}
}

export const supprimer=(id)=>{
    return {type:'supprimer',payload:id}
}