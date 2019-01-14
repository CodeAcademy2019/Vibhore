console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);


function html  (y, ...parts) {
    
    //var rp = {"'": '&apos;', '"': '&quot;', '<': "&lt;", ">": "&gt;", "&": "&amp"};
    
    //return p1;
    var s1 = parts.map( (x) => { 
       return x.split(" ").map((y) => { 
        return y.replace(/&/g, "&amp;")
       .replace(/</g, "&lt;")
       .replace(/>/g, "&gt;")
       .replace(/'/g, "&apos;")
       .replace(/"/g, "&quot;");});
    });
    //return s1;
    var j1 = s1[0].join(" ");
    var j2 = s1[1].join(" ");
    //return j2;
    
    return y[0]+j1+y[1]+j2+y[2];
    

};
// console.log(html`<b>${} says</b>: "${process.argv[3]}"`);


//"domenic" and the comment is "<dl> is a fun tag",


/*


    | &apos;
    " | &quot;
    < | &lt;
    > | &gt;
    & | &amp;


*/