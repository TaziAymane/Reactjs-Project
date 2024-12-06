export const ajouter = (cours)=>{
    return {type:'ajouter',payload:cours}
}
export const supprimer = (id)=>{
    return {type:'supprimer',payload:id}
}
export const modifier = (cours)=>{
    return {type:'modifier',payload:cours}
}