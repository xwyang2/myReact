import * as types from './types';
const reducer=(state,{type,payload}) => {
    switch (type) {
        case types.VIEW_HEADER:
            return{
                ...state,
                bHeader:payload
            };
        case types.VIEW_NAV:
            return {
                ...state,
                bNav:payload
            };
        case types.VIEW_FOOTER:
            return {
                ...state,
                bFooter:payload
            };
        case types.UPDATE_BEAUTY:
            return {
                ...state,
                beauty_data: payload
            };
        case types.UPDATE_BUS:
            return {
                ...state,
                bus_data: payload
            };
        case types.UPDATE_ELECTRIC:
            return {
                ...state,
                electric_data: payload
            };
        case types.UPDATE_HOUSE:
            return {
                ...state,
                house_data: payload
            };
        case types.UPDATE_SPORT:
            return {
                ...state,
                sport_data: payload
            };
        case types.UPDATE_HOME:
            return {
                ...state,
                home_data: payload
            };
        case types.UPDATE_DETAIL:
            return {
                ...state,
                detail_data: payload
            };
        case types.UPDATE_SLIDER:
            return {
                ...state,
                slider_data: payload
            };
        case types.CHECK_USER:
            return {
                ...state,
                user: payload
            };
        default:
            return state;
    }
}
export default reducer;