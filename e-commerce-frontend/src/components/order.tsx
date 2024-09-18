import { Listitem } from "./listitem";
import { Tableheader } from "./tableheader";


export function Order() {
    return (
        <div className="flex justify-between">
            <Listitem />
            <Tableheader />
        </div>
    )
}