## MDDN 242 Project 1: Time-based Media  

### README

## Clock Name: Star Map Clock
## Name: Evelyn Lee

_____________________________________________________________________________________________________
#### Design Intention:

I've always had an obsession with celestial themes and fantastical depictions of astrology, this and also my already existing fascination for clocks didn't make it hard to come up with a concept right away. All I had to worry about was execution.
For this clock design, I took inspiration from constellation star maps and magic glyphs from fictional media of the fantasy genre. The magic glyphs I usually see in shows and games always seems to rotate its rings in varying directions which makes it mesmerizing to look at, so I wanted to incorporate that idea into a traditional analogue clock form. Another big inspiration comes from an actual mediaeval clock, [the Prague Astronomical Clock](https://www.prague.eu/en/object/places/3129/astronomical-clock) located in the Czech Republic.

_____________________________________________________________________________________________________
#### How to read clock:

Minutes: The centerpiece depicting a large crescent moon and star with one of the points slightly elongated indicating the current minute.

Hours: A smaller moon + star symbol placed on the current hour alongside the minute hand.

Seconds: Rotating points on the left and right side however, there's no way to indicate how many seconds there currently are in each minute.

Alarm: Unfortunately when clicking 'Alarm Set' in debug the clock stops when the timer is active but, it will all play out just fine afterwards when it reaches 0.

_____________________________________________________________________________________________________
#### Brainstorming Ideas: 

- Rotating array of points in a ring formation (resembling the sun which will be the starting point) 

- Inside that ring is another rotating smaller circle with a crescent moon 

- Both rotating in second intervals in opposite directions 

- Throughout the day the sun ring will shrink and by the end of the day the moon ring would have enlarged in place of the sun ring 

- Side rings will rotate in minutes 

- Time indication can be in Roman numerals possibly in a vertical scale and at each level indicates the current hour when one of the rings reaches it (though this could be a problem since there are two rings and it’d be tedious to discern which one is associated with the hours). I could solve this by having the sun ring as the main hour indicator with only the enlarging and shrinking motion and no rotation, its array of points will be offset as its own rotating ring.

- star symbols will act as clock hands (one placed outside of the outer ring and one on the inside) 

- tiny stars replace sun points during moon phase 

_____________________________________________________________________________________________________
#### Progress:  

Week 1: 

- Recreated the visuals of a Maeda clock as an exercise
- Laid out main positions of each element as well as drawing assets to import into the code. 

- Kept the designs of each asset slightly simpler compared to its initial sketch as over time I'll be adding more elements that could overwhelm the clock design if the assets were more ornate. 

 

Week 2: 

- At first the rotating asset was exported as a PNG of a whole ring of points but I later decided to export just the singular point for each variation so I could form the ring as an array which is easier to edit their orientation without any deformation in image quality. 

- To fill up the extra space I added some secondary rings in the center coded with quads and ellipses instead of being drawn like the other assets. 

- This was also when I started implementing the clock parameters into the code to make the elements rotate according to their designated time. Additionally, I followed some class examples by using a parameter mapped on seconds paired with fractioned milliseconds, this is so the rotations linked to this will have a smoother movement. I will be applying this to the decorative rings of the clock, so its slow speed won’t affect the focus of the main time indicators. 

 

Week 3: 

- Thought the background felt a little flat with just single coloured lines and shapes so I added a ‘for-loop’ to create a few gradients that resemble a glowing emission. It adds a bit more colour and life to the overall clock. 

- I went back to one of my starting ideas attempted an if-statement for a night-mode by having the ring of large stars visibly surrounding the moon centerpiece to resemble a sun during the day (between 6AM to 8PM), then during the night have said ring contract behind the moon (the moon also enlarges a bit) leaving only the smaller stars visible on the outer rim. 

 

Week 4: 

- Implemented the alarm if-statement, once it goes off it changes the following: 
1. Changes background colour from a dark blue to a slightly muted pastel pink 

2. Reverses the rotation of the secondary decorative rings at a speed that’s a little faster 

3. Added a lerpColor to the gradients on the side transitioning from a light blue to purple continuously 

- General cleanup and attempting bug fixes.

_____________________________________________________________________________________________________