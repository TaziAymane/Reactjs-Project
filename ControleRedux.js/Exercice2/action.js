export const ajouter = (medicament)=>{
    return {type:'ajouter',payload:medicament}
}

export const supprimer = (id)=>{
    return {type:'supprimer',payload:id}
}

export const modifier = (medicament)=>{
    return {type:'modifier',payload:medicament}
}