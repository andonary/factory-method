import {UnitName} from "../../utils/enums/unitName";
import {Unit} from "../products/unit";

export abstract class Factory {
    abstract makeUnit(name: UnitName): Promise<Unit>

    isInvalidUnit(name: UnitName) {
        return !Object.values(UnitName).includes((name as UnitName));
    }
}
