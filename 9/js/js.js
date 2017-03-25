    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }
    // Regular
    console.log('Hello');
    // Interpolated
    console.log('Hellos %s me :c', 'its 💩');
    // Styled
    console.log('%c I am super awesome', 'font-Size:25px; background:DodgerBlue; text-shadow: 10px 10px 0 PaleGreen');
    // warning!
    console.warn('Warning, live without warning.');
    // Error :|
    console.error('To born :c');
    // Info
    console.info('Every year, the Curiosity Rover sings a lonely birthday song.');
    // Testing
    const p= document.querySelector('p');
    console.assert(1+1==3, 'Hell yhea!');
    // clearing
   // console.clear();
    // Viewing DOM Elements
    console.log(p);
    console.dir(p);
    // Grouping together
    dogs.forEach(dog=>{
      console.groupCollapsed(`${dog.name}`);
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`)
      console.log(`${dog.name} is ${dog.age*7} dog years old`);
      console.groupEnd(`${dog.name}`);
    });
    // counting
    console.count('Adam');
    console.count('West');
    console.count('West');
    console.count('Adam');
    console.count('West');
    console.count('Adam');
    console.count('West');
    console.count('West');
    console.count('Adam');
    console.count('Adam');
    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
    .then(data=> data.json())
    .then(data=> {
      console.timeEnd('fetching data');
      console.log(data);
    });

    // table
    console.table(dogs);