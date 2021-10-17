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
    test('it should create an Unit called Infantry', async () => {
        // Arrange
        const groundFactory = new GroundFactory();

        // Act
        const infantry: Unit = await groundFactory.makesUnit(UnitName.infantry);

        // Assert
        expect(isUnit(infantry)).toBeTruthy();
        expect(infantry.name).toEqual(UnitName.infantry);
    });

    test('it should create an Unit called Mech', async () => {
        // Arrange
        const groundFactory = new GroundFactory();

        // Act
        const mech: Unit = await groundFactory.makesUnit(UnitName.mech);

        // Assert
        expect(isUnit(mech)).toBeTruthy();
        expect(mech.name).toEqual(UnitName.mech);
    });

    test('it should not create an unknown unit', async () => {
        // Arrange
        const groundFactory = new GroundFactory();
        let error;

        // Act
        try {
            await groundFactory.makesUnit("Swordman" as UnitName);
        } catch (e) {
            error = e;
        }

        // Assert
        expect(error).toBeDefined();
    });

    test('it should make a ground type unit', async () => {
        // Arrange
        const groundFactory = new GroundFactory();

        // Act
        const recon: Unit = await groundFactory.makesUnit(UnitName.recon);

        // Assert
        expect(isGroundUnit(recon)).toEqual(true);
        expect(isSeaUnit(recon)).toEqual(false);
        expect(isAirUnit(recon)).toEqual(false);
    });

    test('it should make a sea type unit', async () => {
        // Arrange
        const port = new Port();

        // Act
        const lander: Unit = await port.makesUnit(UnitName.lander);

        // Assert
        expect(isGroundUnit(lander)).toEqual(false);
        expect(isSeaUnit(lander)).toEqual(true);
        expect(isAirUnit(lander)).toEqual(false);
    });

    test('it should make an air type unit', async () => {
        // Arrange
        const airPort = new Airport();

        // Act
        const tCopter = await airPort.makesUnit(UnitName.tCopter);

        // Assert
        expect(isGroundUnit(tCopter)).toEqual(false);
        expect(isSeaUnit(tCopter)).toEqual(false);
        expect(isAirUnit(tCopter)).toEqual(true);
    });
});
