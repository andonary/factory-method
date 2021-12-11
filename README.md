# Factory Method Example

This is an example in TypeScript of using the design pattern called "factory method"

## Advance Wars Units

In order to create an unit in the game Advance Wars, you need to capture and use a special building. These buildings (named here Factory) are divided in three categories :
- Factory (renamed here GroundFactory)
- Port
- Air Port

Units are divided in three categories : 
- Ground units : 
    - Infantry
    - Mech
    - Recon     
    - APC       
    - Anti-Air  
    - Tank      
    - Md Tank   
    - Neotank   
    - Artillery 
    - Rocket    
    - Missile 
- Sea units :
  - Lander    
  - Cruiser   
  - Submarine 
  - Battleship
- Air units :
  - T Copter  
  - B Copter  
  - Fighter   
  - Bomber 

## Architecture

Folder `src/utils` doesn't need to be considered if you are interested about the pattern.

Folder `src/pattern` represent the pattern itself.

It's hold some business logic, which should be moved to a more convenient folder. 
But this is not the focus of this repository.

`tests` shows the workflow of ths creation of this project using TDD (Test Driven Development).

## TODO

This list of TODO can be done but will be not by me in this repository. Feel free to fork this project and train yourself :

### Enhancements in business logic:

- groundFactory cannot make sea or air units
- airport cannot make ground or sea units
- port cannot make ground or air units
- groundFactory can only make ground unit based on the list above
- airport can only make air unit based on the list above
- port can only make sea unit based on the list above

### Enhancements in pattern:

- an unit can :
  - attack
  - move
  - rest
  - capture

methods above can be a simple `console.log("attacks with machine gun")`

- Hachi (a character in the Advance Wars univers) can make ground unit in an building `City`

