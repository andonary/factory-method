import {Unit} from "../../pattern/products/unit";
import {UnitType} from "../enums/unitType";

export function isSeaUnit(unit: Unit) {
    return unit.type === UnitType.sea;
}
