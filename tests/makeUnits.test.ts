import {UnitName} from "../src/utils/enums/unitName";
import {Unit} from "../src/pattern/products/parent/unit";
import {GroundFactory} from "../src/pattern/creators/groundFactory";
import {isUnit} from "../src/utils/predicates/isUnit";
import {isGroundUnit} from "../src/utils/checkers/isGroundUnit";
import {isSeaUnit} from "../src/utils/checkers/isSeaUnit";
import {isAirUnit} from "../src/utils/checkers/isAirUnit";
import {Port} from "../src/pattern/creators/port";
import {Airport} from "../src/pattern/creators/airport";

describe('Makes unit', () => {
    test('it should create an Unit called Infantry', () => {
        // Arrange
        const groundFactory = new GroundFactory();
        const {infantry} = UnitName;

        // Act
        const infantryProduced: Unit = groundFactory.makesUnit(infantry);

        // Assert
        expect(isUnit(infantryProduced)).toBeTruthy();
        expect(infantryProduced.name).toEqual(infantry);
    });

    test('it should create an Unit called Mech', () => {
        // Arrange
        const groundFactory = new GroundFactory();
        const {mech} = UnitName;

        // Act
        const mechProduced: Unit = groundFactory.makesUnit(mech);

        // Assert
        expect(isUnit(mechProduced)).toBeTruthy();
        expect(mechProduced.name).toEqual(mech);
    });

    test('it should not create an unknown unit', () => {
        // Arrange
        const groundFactory = new GroundFactory();
        let error;

        // Act
        try {
            groundFactory.makesUnit("Swordman" as UnitName);
        } catch (e) {
            error = e;
        }

        // Assert
        expect(error).toBeDefined();
    });

    test('it should make a ground type unit', () => {
        // Arrange
        const groundFactory = new GroundFactory();
        const {recon} = UnitName

        // Act
        const reconProduced: Unit = groundFactory.makesUnit(recon);

        // Assert
        expect(isGroundUnit(reconProduced)).toEqual(true);
        expect(isSeaUnit(reconProduced)).toEqual(false);
        expect(isAirUnit(reconProduced)).toEqual(false);
    });

    test('it should make a sea type unit', () => {
        // Arrange
        const port = new Port();
        const {lander} = UnitName;

        // Act
        const landerProduced: Unit = port.makesUnit(lander);

        // Assert
        expect(isGroundUnit(landerProduced)).toEqual(false);
        expect(isSeaUnit(landerProduced)).toEqual(true);
        expect(isAirUnit(landerProduced)).toEqual(false);
    });

    test('it should make an air type unit', () => {
        // Arrange
        const airPort = new Airport();
        const {tCopter} = UnitName;

        // Act
        const tCopterProduced = airPort.makesUnit(tCopter);

        // Assert
        expect(isGroundUnit(tCopterProduced)).toEqual(false);
        expect(isSeaUnit(tCopterProduced)).toEqual(false);
        expect(isAirUnit(tCopterProduced)).toEqual(true);
    });
});
