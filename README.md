# lab-11-pokemon-catcher

# Make 3 Radio Button Group
- Log value on click
- Save value to array in local storage

# Create function to assign pokemon values to radio buttons
- Assign id value to radio button
- Use pokemon picture as img src
- Capture id on click

# Randomly choose pokemon from data set
- Pull pokemon from array using index values & Math.random()
- Array.pop() to remove from local storage (prevent repeat)
- Repeat random choice using Array.length to adjust Math.random() dynamically each run

# Save Seen & Capture data to Pokedex
- Local Storage should have an array that tracks seen/captured stats for encounters
- Pokedex should have a constant assigned to it

# Exit code after chosen encounter amount
- Use local storage to show current session and lifetime sessions
- Use same structure and different constants


# Create Local Storage array from static data
- retrieve and change to JSON

# Randomly choose from local storage array
- retrieve and parse
- use pop() to keep out of next encounter
- use ENCOUNTER_POPULATION constant to determine number per encounter
- return ENCOUNTERED array to WILD-POKEMON array
- stringify and set local storage

# Take info from selected pokemon & save into Pokedex array
- name, _id, image
- add to Pokedex (session & all-time)
- add to ENCOUNTERED array for holding
- add images to page for current encounter

# Add to Pokedex
- check if object present, increment if yes, create if no
{
    _id: initialize/leave
    name: initialize/leave
    image: initialize/leave
    *encountered: increment
    captured: initialize/leave
}

# Encountered array
- contains current encountered pokemon

# Render images and add click handlers

# Increment caught
- increment caught
- check turns
- repeat
- send to results page when turns run out

