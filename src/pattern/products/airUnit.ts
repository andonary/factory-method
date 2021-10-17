import {Unit} from "./unit";
import {UnitType} from "../../utils/enums/unitType";
import {UnitName} from "../../utils/enums/unitName";

export class AirUnit implements Unit {
    type: string = UnitType.air

    constructor(public name: UnitName) {
    }
}
