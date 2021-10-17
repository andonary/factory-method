import {Unit} from "../../pattern/products/parent/unit";
import {UnitType} from "../enums/unitType";

export function isSeaUnit(unit: Unit) {
    return unit.type === UnitType.sea;
}
