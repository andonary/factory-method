import {UnitName} from "../../../utils/enums/unitName";
import {Unit} from "../../products/parent/unit";

export abstract class Factory {
    makesUnit(name: UnitName): Unit {
        if (this.isInvalidUnit(name)) throw new Error();
        return this.factoryMethod(name);
    }

    isInvalidUnit(name: UnitName) {
        return !Object.values(UnitName).includes((name as UnitName));
    }

    abstract factoryMethod(name: UnitName): Unit
}
