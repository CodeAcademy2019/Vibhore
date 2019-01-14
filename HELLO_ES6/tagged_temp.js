console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);


function html  (x, ...parts) {
    
    var rp ={"'": '&apos;', '"': '&quot;', '<': "&lt;", ">": "&gt;", "&": "&amp"};
    var s1 = x.map( (x,rp) => { return rp[x]||x});
    return x[0]+s1[0]+x[1]+s1[1]+x[2];
    
    


};



/*


    | &apos;
    " | &quot;
    < | &lt;
    > | &gt;
    & | &amp;


*/