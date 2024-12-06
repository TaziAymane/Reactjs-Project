const initialState = {
    panier : [
        
    ]
}

const reducer = (state=initialState , action)=>{
    switch (action.type){
        case 'ajouter':
            return{...state,panier:[...state.panier,action.payload]}
            case "supprimer" : 
            return{...state,panier:[...state.panier.filter(function (p) { 
                return p.id !== action.payload
             })]}
        default:
            return state
    }
}

export default reducer ;