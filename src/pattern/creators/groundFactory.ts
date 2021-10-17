import {Factory} from "./parent/factory";
import {UnitName} from "../../utils/enums/unitName";
import {Unit} from "../products/parent/unit";
import {GroundUnit} from "../products/groundUnit";

export class GroundFactory extends Factory {
    factoryMethod(name: UnitName): Unit {
        return new GroundUnit(name);
    }
}
