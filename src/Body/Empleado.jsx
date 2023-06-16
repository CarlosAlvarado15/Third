import React, { Component } from "react";
export default function Empleado(props) {
  return (
    
      <div className="Empleado">
        <div id="div-imagen">
                <img src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=344&q=80" alt="Mujer" />
            </div>
        <h1> Nombre:{props.nombre} </h1>
        <h2> Cargo:{props.cargo}</h2>
      </div>
    
  );
}
