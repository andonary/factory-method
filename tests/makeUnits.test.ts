abstract class Factory {
    abstract makeUnit(name: UnitName): Promise<Unit>
}

class GroundFactory extends Factory {
    async makeUnit(name: UnitName): Promise<Unit> {
        if (!Object.values(UnitName).includes((name as UnitName))) throw new Error();
        return {
            name
        }
    }
}

interface Unit {
    name: string;
}

function isUnit(unit: Unit): unit is Unit {
    return (unit as Unit).name !== void 0;
}

enum UnitName {
    infantry='Infantry',
    mech='Mech'
}

describe('Make units', () => {
    test('it should create an Unit called Infantry', async () => {
        // Arrange
        const groundFactory = new GroundFactory();

        // Act
        const infantry: Unit = await groundFactory.makeUnit(UnitName.infantry);

        // Assert
        expect(isUnit(infantry)).toBeTruthy();
        expect(infantry.name).toEqual(UnitName.infantry);
    });

    test('it should create an Unit called Mech', async () => {
        // Arrange
        const groundFactory = new GroundFactory();

        // Act
        const mech: Unit = await groundFactory.makeUnit(UnitName.mech);

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
            await groundFactory.makeUnit("Swordman" as UnitName);
        } catch (e) {
            error = e;
        }

        // Assert
        expect(error).toBeDefined();
    });
});
