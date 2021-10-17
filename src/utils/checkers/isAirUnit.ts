import {Unit} from "../../pattern/products/parent/unit";
import {UnitType} from "../enums/unitType";

export function isAirUnit(unit: Unit) {
    return unit.type === UnitType.air;
}
