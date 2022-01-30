# hack-escape-game
Project realised during a hackathon on a private server on an Escape Game theme.

## Documentation

Procedure for creating a new enigma
- First step >>> create a folder in the 'modules' folder with a shortcut name of your enigma (use this shortcut name for the continuation of the procedure).
  In this folder create copy 'template.html' which is located in the '_template' folder of the 'modules' folder.
  This file is a template modal where the enigma will appear.
  Change 'template' with the shortcut name of your enigma in the 'id' of the first div :
  ```html 
  <div id="template-dialog" class="modal" role="dialog" aria-labelledby="dialog-title" aria-describedby="dialog-desc" aria-modal="true" aria-hidden="true" tabindex="-1">  ```
  ```
  For the button, change also 'template' with the shortcut name of your enigma in the 'data-dismiss' attribute
  and change 'template' with the shortcut name of your enigma in the parameters of the 'closeModal' function :
  ```html 
  <button type="button" aria-label="Fermer" title="Fermer cette fenêtre modale" data-dismiss="template-dialog" onclick="closeModal('template-dialog', 'template-enigma')">X</button>
  ```
- Second step >>> duplicate the button to call modal :
  ```html 
  <button aria-haspopup="dialog" aria-controls="template-dialog" class="template-enigma">Modal Enigma</button>
  ```
  Change 'template' in the 'aria-controls' and 'class' attributes to name of your enigma.
- Third step >>> duplicate the call to include an html file in the "index.html" page :
  ```html
  <div w3-include-html="./modules/_template/template.html" id="template-enigma" class="enigma"></div>
  ```
  Change the path to the html file of your enigma.
  Change 'template' in 'id' attributes to name of your enigma.
- Let's code your enigma in the div with the id 'myEnigma' 

## Ideas

### Theme

Monk space => cheese and beer forever.
Unlock the power of the secret recipe!

### Page

- Indices from the name of the escape game
- Multiple buttons to activate => multiple possibilities of sequences => activate different enigmas => change something 
  on the page (new/show div)
- Unlock locks picture with each resolved enigmas
- Different portraits in a gallery, like a "Who I am?", find our target?

### Modules

#### Code panel 
- Principe : TODO
- Resolving it unlock: TODO

#### Cistercian numbers
- Principe : TODO
- Resolving it unlock: TODO

#### Einstein Riddle :
- Principe : Resolve a Zebra Puzzle /Einstein Riddle

  ##### Setup 

  - monks: A - B - C (temporary names)
  - types of beer: fruity - blond - bruin
  - beer names: The Perfect - The Oldest - The One
  - 3 secret ingredients: ginger - chocolate - curry
  
  ##### Hints
  
   - The chocolate beer and the fruity one were not created by B
   - The Perfect isn't a blond beer
   - C loves curry
   - A is the first one the have brew a beer in the monastery
   - The One uses Chocolate
   
  ##### Soluce

  - A - Blond - Oldest - Choco
  - B - Bruin - Perfect - Ginger
  - C - Fruity - One - Curry
  
- Resolving it unlock: TODO

 ### Ressources
- <a href='https://www.freepik.com/vectors/star'>Star vector created by macrovector - www.freepik.com</a>