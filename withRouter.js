import { Component } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
// export function withRouter(Children) {
//     return (props) => {
//         const match = { params: useParams() };
//         return <Children {...props} />
//     };
    

export const withRouter=(Component)=>{
    const Wrapper=(props)=>{
    const navigate=useNavigate();
    const match = { params: useParams() };

    return(
        <Component 
        navigate={navigate}
        {...props} match={match} 
        />
    );


};
return Wrapper;


};