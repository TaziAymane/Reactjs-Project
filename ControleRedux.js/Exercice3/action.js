export const ajouter = (product)=>{
    return {type:'ajouter',payload:product}
}
export const supprimer = (id)=>{
    return {type:'supprimer',payload:id}
}
export const modifier = (product)=>{
    return {type:'modifier',payload:product}
}