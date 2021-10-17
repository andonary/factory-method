import {Unit} from "./unit";
import {UnitName} from "../../utils/enums/unitName";
import {UnitType} from "../../utils/enums/unitType";

export class GroundUnit implements Unit {
    type: string = UnitType.ground

    constructor(public name: UnitName) {
    }
}
