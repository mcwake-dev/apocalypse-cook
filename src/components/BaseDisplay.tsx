import { useRef } from "react";
import { useAtom } from "jotai";

import classes from "../styles/BaseDisplay.module.css";
import { playerAtom } from "../atoms/player";
import { baseAtom } from "../atoms/base";

export default function BaseDisplay() {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [player] = useAtom(playerAtom);
    const [base] = useAtom(baseAtom);

    if (base.x === player.x && base.y === player.y) {
        return (
            <dialog ref={dialogRef} className={classes.base} open>
                You have arrived <b>Home</b>
            </dialog>
        );
    }

    return null;
}