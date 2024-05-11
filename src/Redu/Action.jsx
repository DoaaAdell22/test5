
const Token = "";

function  tokener(token) {
    return {
        type: "SET" ,
        payload:token
    };
}
export function  removeToken() {
    return {
        type: "REMOVE" ,
        payload: ""
    };
}

export default tokener