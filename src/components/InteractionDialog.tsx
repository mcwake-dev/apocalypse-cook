import { useRef } from "react";

import classes from "../styles/InteractionDialog.module.css";
import BaseDisplay from "./BaseDisplay";
import ForagingDisplay from "./ForagingDisplay";
import SettlementDisplay from "./SettlementDisplay";

function InteractionDialog() {
    const dialogRef = useRef<HTMLDialogElement>(null);

    return (
        <div className={classes.interactionDialogContainer}>
            <dialog ref={dialogRef} className={classes.interactionDialog} open>
                <BaseDisplay />
                <ForagingDisplay />
                <SettlementDisplay />
            </dialog>
        </div>
    )
}

export default InteractionDialog;