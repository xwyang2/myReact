import * as types from '../types';
const asynUser=({url,username,password})=>(dispatch, getState)=>{
    return fetch(
        url
    ).then(
        res=>res.json()
    ).then(
        data=>{
            let checked=false;
            data.forEach((item)=>{
                if (item.username === username && item.password === password) {
                    item.islogged=true;
                    checked=true;
                    dispatch({type: types.CHECK_USER, payload: item});

                }
            });
            return checked;
        }
    )
}
export default asynUser;