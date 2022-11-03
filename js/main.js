
let show=document.getElementById("addval")

let n=5;
let s='';
for(var i=1;i<=n;i++){
    for(var j=i;j<n;j++){
        s += " ";
    }
    for(var k=1;k<=(2*i-1);k++){
        if(k == 1 || i == n || k == (2*i-1)){
            s+= "*";
        }
        else{
            s += " ";
        }
    }
    s += "\n";
}
console.log(s);