import React from "react";
import { Button } from 'react-bootstrap';
import "../../App.css";

export default function Modal({ children, open, onClose}){
  if (!open) return null

  return(<>
      <div className="video-base">
        <Button onClick={onClose}>Fechar</Button>
        {children}
      </div>
  </>)
}
