import { useState } from "react";



export const Semaforo = () => {
    let [rojo, setRojo] = useState("rojo");
    let [naranja, setNaranja] = useState("naranja");
    let [verde, setVerde] = useState("verde");

    let rojobrillo=()=>{
        if (rojo=="rojo"){ setRojo("rojo brillo")} ;
        setNaranja("naranja")
        setVerde("verde")
        };
    
    let naranjabrillo = () => {
      if (naranja == "naranja") {
        setNaranja("naranja brillo");
      } 
      setRojo ("rojo");
      setVerde ("verde");
    };
        
    let verdebrillo = () => {
      if (verde == "verde") {
        setVerde("verde brillo");
      } 
      setRojo ( "rojo");
      setNaranja ("naranja");
    };



    return (
        <div className="contenedor">
            <div className="superior"></div>
            <div className="contenedorcirculos">
                <div className={rojo} onClick={rojobrillo}></div>
                <div className={naranja} onClick={naranjabrillo}></div>
                <div className={verde} onClick={verdebrillo}></div>
            </div>
        </div>
    );


}