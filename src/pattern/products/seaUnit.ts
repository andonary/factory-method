import {Unit} from "./parent/unit";
import {UnitName} from "../../utils/enums/unitName";
import {UnitType} from "../../utils/enums/unitType";

export class SeaUnit implements Unit {
    type: string = UnitType.sea;

    constructor(public name: UnitName) {
    }
}
