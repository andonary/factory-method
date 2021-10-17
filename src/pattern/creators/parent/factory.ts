import {UnitName} from "../../../utils/enums/unitName";
import {Unit} from "../../products/parent/unit";

export abstract class Factory {
    async makeUnit(name: UnitName): Promise<Unit> {
        if (this.isInvalidUnit(name)) throw new Error();
        return this.factoryMethod(name);
    }

    isInvalidUnit(name: UnitName) {
        return !Object.values(UnitName).includes((name as UnitName));
    }

    abstract factoryMethod(name: UnitName): Promise<Unit>
}
