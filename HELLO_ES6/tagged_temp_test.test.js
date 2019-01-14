const tagg = require('./tagged_temp.js');

test ('the output should be free from html unsafe characters',() => {
    expect(tagg(["<b>"," says</b>:","\"","\""],"domenic"," <dl> is a fun tag")).toBe(`<b>domenic says</b>: &lt;dl&gt; is a fun tag"`);
});

//console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

