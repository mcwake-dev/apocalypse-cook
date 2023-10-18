import { useRef } from "react";

function Instructions() {
    const dialogRef = useRef<HTMLDialogElement>(null);

    function close() {
        dialogRef.current?.close();
    }

    return (
        <dialog ref={dialogRef} className="instructions" open>
            <p>Use the Arrow keys to move the player around</p>
            <button autoFocus onClick={() => close()}>Close</button>
        </dialog>
    )
}

export default Instructions;