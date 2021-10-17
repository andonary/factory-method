import {Unit} from "../../pattern/products/parent/unit";
import {UnitType} from "../enums/unitType";

export function isGroundUnit(unit: Unit) {
    return unit.type === UnitType.ground;
}
