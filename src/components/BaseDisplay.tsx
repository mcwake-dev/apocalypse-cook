import { useEffect } from "react";
import { useAtom } from "jotai";

import { playerAtom } from "../atoms/player";
import { baseAtom } from "../atoms/base";
import { worldAtom } from "../atoms/world";
import { restoreForageable } from "../procedural-generation/world";

export default function BaseDisplay() {
    const [player, setPlayer] = useAtom(playerAtom);
    const [, setWorld] = useAtom(worldAtom);
    const [base] = useAtom(baseAtom);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (
                e.key === "r" &&
                player.x === base.x &&
                player.y === base.y
            ) {
                setPlayer((prev) => {
                    return {
                        ...prev,
                        energy: 10,
                    };
                });
                setWorld((prev) => {
                    const newWorld = restoreForageable(prev);

                    return newWorld;
                })
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    });

    if (base.x === player.x && base.y === player.y) {
        return (
            <>
                You have arrived <b>Home</b>
                <p>Press <b>r</b> to rest</p>
            </>
        );
    }

    return null;
}