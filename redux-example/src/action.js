
// Action Creator - A Function
export const showBirthDay =(text) =>{

    // Returns a Action
    return {
     type:'BIRTHDAY',
     text
    }

}
// Action Creator - A Function

export const showWeddingDay =(text) =>{

    // Returns a Action
    return {
        type:'WEDDINGDAY',
        text
       }
}
