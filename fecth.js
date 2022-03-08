// JSON
var obj = {
    data: 'data',

    toJSON (key) {
        if (key)
            return `Now I am a nested object under key '${key}'`;
        else
            return this;
    }
};

JSON.stringify(obj);
// '{"data":"data"}'

JSON.stringify({ obj }); // Shorthand property names (ES2015).
// '{"obj":"Now I am a nested object under key 'obj'"}'

JSON.stringify([ obj ]);
// '["Now I am a nested object under key '0'"]'

// Fecth declaration



// Key and Values
const object = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.keys(object));


  const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.keys(object1));
