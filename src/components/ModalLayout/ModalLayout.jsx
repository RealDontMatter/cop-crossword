import styles from "./ModalLayout.module.css"
import { createPortal } from "react-dom";

export function ModalLayout({isOpen, children}){
    if(!isOpen) return null;

    let element = (
        <div className={styles.modal}>
            {children}
        </div>
    );
    let dom = document.querySelector("#portal");
    return createPortal(element, dom)
} 