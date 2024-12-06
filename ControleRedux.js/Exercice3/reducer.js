const initialState = {
    products : [
        {id:1,nom:'Ordinateur',marque:'hp',prix:4000,quantité:10},
        {id:2,nom:'Imprimante',marque:'Del',prix:5000,quantité:5}

    ]
}
const reducer = (state=initialState , action)=>{
    switch(action.type){
        case 'ajouter':
            return {...state,products:[...state.products,action.payload]}
        case "supprimer" : 
            return{...state,products:[...state.products.filter(function (product) { 
                return product.id !== action.payload
             })]}
        case 'modifier':
            const product = state.products.find((p)=>{
                return p.id === action.payload.id  
            })
            if(product){
                product.nom=action.payload.nom
                product.prix=action.payload.prix
                product.quantity=action.payload.quantity
            }
            return state
        default:
            return state
    }
}

export default reducer ;