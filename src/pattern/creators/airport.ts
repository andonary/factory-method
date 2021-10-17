import {Factory} from "./parent/factory";
import {UnitName} from "../../utils/enums/unitName";
import {Unit} from "../products/parent/unit";
import {AirUnit} from "../products/airUnit";

export class Airport extends Factory {
    factoryMethod(name: UnitName): Unit {
        return new AirUnit(name);
    }
}
