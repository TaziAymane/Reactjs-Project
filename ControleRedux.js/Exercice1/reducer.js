const initialState = {
    docteur : [
        {id:1,nom:'ahmed',spécialité:'Cardiologue',Tele:'060000',email:'ahmed@gmail.com'},
        {id:2,nom:'samir',spécialité:'Dermatologue',Tele:'09999',email:'samir@gmail.com'}

    ]
}
const reducer = (state=initialState , action)=>{
    switch(action.type){
        case 'ajouter':
            return {...state,docteur:[...state.docteur,action.payload]}
        case "supprimer" : 
            return{...state,docteur:[...state.docteur.filter(function (docteurs) { 
                return docteurs.id !== action.payload
             })]}
        case 'modifier':
            const docteurs = state.docteur.find((p)=>{
                return p.id === action.payload.id  
            })
            if(docteurs){
                docteurs.nom=action.payload.nom
                docteurs.prix=action.payload.prix
                docteurs.quantity=action.payload.quantity
            }
            return state
        default:
            return state
    }
}

export default reducer ;