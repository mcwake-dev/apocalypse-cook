import { useAtom } from "jotai";

import classes from "../styles/InventoryDisplay.module.css";
import { playerAtom } from "../atoms/player";

function InventoryDisplay() {
    const [player] = useAtom(playerAtom);

    return (
        <div className={classes.inventoryContainer}>
            <div className={classes.inventory}>
                {player.inventory.map((item, index) =>
                    <div key={index} className={classes.item}>
                        {item.itemType}
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default InventoryDisplay