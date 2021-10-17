import {Unit} from "../../pattern/products/unit";
import {UnitType} from "../enums/unitType";

export function isAirUnit(unit: Unit) {
    return unit.type === UnitType.air;
}
