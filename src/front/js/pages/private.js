import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Private = () => {
    const { store, actions } = useContext(Context);


    useEffect (() => {
        const userToken = localStorage.getItem("userToken");
        if(!userToken){
            navigate("/login");
            return;
        }
        setUserToken(userToken)
        
    })

    const logout = () => localStorage.removeItem("userToken")
  

    return (
        <div>
            <h1> private is created </h1>
            <button className="button btn btn-primary col-8" onClick={logout}> log out</button>
        </div>
    );

};
