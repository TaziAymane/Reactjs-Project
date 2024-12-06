export const ajouter = (docteur)=>{
    return {type:'ajouter',payload:docteur}
}
export const supprimer = (id)=>{
    return {type:'supprimer',payload:id}
}
export const modifier = (docteur)=>{
    return {type:'modifier',payload:docteur}
}