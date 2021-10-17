import {Factory} from "./factory";
import {UnitName} from "../../utils/enums/unitName";
import {Unit} from "../products/unit";
import {AirUnit} from "../products/airUnit";

export class Airport extends Factory {
    factoryMethod(name: UnitName): Promise<Unit> {
        return Promise.resolve(new AirUnit(name));
    }
}
