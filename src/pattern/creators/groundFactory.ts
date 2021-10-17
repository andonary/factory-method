import {Factory} from "./factory";
import {UnitName} from "../../utils/enums/unitName";
import {Unit} from "../products/unit";

export class GroundFactory extends Factory {
    factoryMethod(name: UnitName): Promise<Unit> {
        return Promise.resolve({ name });
    }
}
