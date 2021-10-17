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

The pattern is represented in folder `src/pattern`. 

Folder `src/pattern` doesn't need to be considered if you are interested about the pattern. 
It's hold some business logic, which should be moved to a more convenient folder. 
But this is not the focus of this repository.

`tests` shows the workflow of ths creation of this project using TDD (Test Driven Development).
