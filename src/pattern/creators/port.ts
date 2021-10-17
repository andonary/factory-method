import {Factory} from "./parent/factory";
import {UnitName} from "../../utils/enums/unitName";
import {Unit} from "../products/parent/unit";
import {SeaUnit} from "../products/seaUnit";

export class Port extends Factory {
    factoryMethod(name: UnitName): Unit {
        return new SeaUnit(name);
    }
}
