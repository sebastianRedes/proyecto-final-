const reducer =(state, action)=>{
    switch(action.type){
        case "SET_WISHLIST":
            return{
                ...state,
                wichlistPokemon: [...state.wichlistPokemon, action.payload],

            };

    case "DELETE_WISHLIST": 
    return{
        ...state,
        wichlistPokemon: state.wichlistPokemon.filter(
            (items) =>items.data.id !== action.payload,
        ),
    };

    case "SET_SECTION": 
        return{
            ...state,
            sectionActive:action.payload
        };
        default:
            return state;
    }
};
export default reducer;
