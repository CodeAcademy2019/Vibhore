const temp_string = require('./template_strings.js');

test ("You should output a two-line message, first greeting that person, and then telling them their name in lowercase.",() => {
    expect(temp_string("Domenic")).toEqual(`Hello, Domenic!
    Your name lowercased is "domenic".`);
});

test ("You should output a two-line message, first greeting that person, and then telling them their name in lowercase.",() => {
    expect(temp_string("Vibhore")).not.toEqual(`Hello, Domenic!
    Your name lowercased is "domenic".`);
});

test ("If empty string is passed throw error message.",() => {
    expect(temp_string("")).toEqual(`Please don't pass empty strings`);
});