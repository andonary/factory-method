import {Factory} from "./factory";
import {UnitName} from "../../utils/enums/unitName";
import {Unit} from "../products/unit";
import {GroundUnit} from "../products/groundUnit";

export class GroundFactory extends Factory {
    factoryMethod(name: UnitName): Promise<Unit> {
        return Promise.resolve(new GroundUnit(name));
    }
}
