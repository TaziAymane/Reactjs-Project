const initialState = {
    medicament:[
        {id:1,nom:'dolpirane',dosage:'10mg',form:'Comprime',prix:10},
        {id:2,nom:'dolpirane',dosage:'10mg',form:'Comprime',prix:10}
    ]
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case 'ajouter':
            return {...state,medicament:[...state.medicament,action.payload]}
        case 'supprimer':
            return {type:'supprimer',medicament:[...state.medicament.filter((m)=>{
                return m.id !== action.payload
            })]}
        case 'modifier':
            const medicaments =state.medicament.find((m)=>{
                return m.id === action.payload.id
            })
            if(medicaments){
                medicaments.nom = action.payload.nom
                medicaments.dosage = action.payload.dosage
                medicaments.form = action.payload.form
                medicaments.prix = action.payload.prix
            }
            return state
        default :
            return state
    }
}

export default reducer ;