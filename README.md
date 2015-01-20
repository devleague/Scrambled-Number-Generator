Scrambled Number Generator
==========


- Plan your execution on white board before forking and cloning.
- Fork and clone this project.
- write unit tests for the generator
  - should contain 1000 numbers
  - generating the numbers twice should have a different order of numbers each time
- commit your work
- create a number generator that generates `n` many numbers
- scramble the numbers
- make your tests pass

the function specification:

````
function name: generate

arguments:
  amount - the amount of numbers to generate, counting from 0

returns:
  an array containing _`amount`_ many numbers in random order

````

File structure:
  - Scrambled-Number-Generator
    - generator.js
    - spec/generator-spec.js

where `generator.js` is the implementation  
and `spec/generator-spec.js` is the test script

(you'll need jasmine-node)

````
npm install jasmine-node -g
````

run automated tests by running

````
jasmine-node --autotest .
````