import {Factory} from "./factory";
import {UnitName} from "../../utils/enums/unitName";
import {Unit} from "../products/unit";
import {SeaUnit} from "../products/seaUnit";

export class Port extends Factory {
    factoryMethod(name: UnitName): Promise<Unit> {
        return Promise.resolve(new SeaUnit(name));
    }
}
