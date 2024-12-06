const initialState = {
    courses : [
        {id:1,nom:'Introduction à ReactJS',Description:'Cours pour apprendre les bases de ReactJS',Formateur:'Salah',Durée:'100h'},
        {id:2,nom:'Introduction à Laravel',Description:'Cours pour apprendre les bases de Laravel',Formateur:'Ferchakhi',Durée:'100H'}

    ]
}
const reducer = (state=initialState , action)=>{
    switch(action.type){
        case 'ajouter':
            return {...state,courses:[...state.courses,action.payload]}
        case "supprimer" : 
            return{...state,courses:[...state.courses.filter(function (cours) { 
                return cours.id !== action.payload
             })]}
        case 'modifier':
            const courss = state.courses.find((p)=>{
                return p.id === action.payload.id  
            })
            if(courss){
                courss.nom=action.payload.nom
                courss.prix=action.payload.prix
                courss.quantity=action.payload.quantity
            }
            return state
        default:
            return state
    }
}

export default reducer ;