import {Factory} from "./factory";
import {UnitName} from "../../utils/enums/unitName";
import {Unit} from "../products/unit";

export class GroundFactory extends Factory {
    async makeUnit(name: UnitName): Promise<Unit> {
        if (this.isInvalidUnit(name)) throw new Error();
        return {
            name
        }
    }
}
