import {Unit} from "../../pattern/products/unit";
import {UnitType} from "../enums/unitType";

export function isGroundUnit(unit: Unit) {
    return unit.type === UnitType.ground;
}
