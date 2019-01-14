const temp_string = require('./template_strings.js');

test ("You should output a two-line message, first greeting that person, and then telling them their name in lowercase.",() => {
    expect(temp_string("Domenic")).toBe(`Hello, Domenic!
    Your name lowercased is "domenic".`);
});

test ("You should output a two-line message, first greeting that person, and then telling them their name in lowercase.",() => {
    expect(temp_string("Vibhore")).toBe(`Hello, Domenic!
    Your name lowercased is "domenic".`);
});
