
const asynList=({url,type,id})=>(dispatch,getState)=>{
    fetch(
        url
    ).then(
        res=>res.json()
    ).then(
        data=>{
            if (id){
                data.data.forEach((item) => {
                    if (id === item.id) {
                        dispatch({type: type, payload: item})
                    }
                })
            } else{
                dispatch({type:type,payload: data.data})
            }
        }
    )
}
export default asynList;