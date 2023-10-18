import { useRef } from "react";
import classes from "../styles/Instructions.module.css";

function Instructions() {
    const dialogRef = useRef<HTMLDialogElement>(null);

    function close() {
        dialogRef.current?.close();
    }

    return (
        <dialog ref={dialogRef} className={classes.instructions} open>
            <p>Use the Arrow keys to move the player around</p>
            <button autoFocus onClick={() => close()}>Close</button>
        </dialog>
    )
}

export default Instructions;