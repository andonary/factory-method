import {Unit} from "../../pattern/products/unit";

export function isUnit(unit: Unit): unit is Unit {
    return (unit as Unit).name !== void 0;
}
