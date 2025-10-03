/*for(let i=1; i<=10; i++){
    if (i%2===0)
        document.write("<p>", i, "</p>");
    else
        console.log(i)
}*/
/*let numero=parseInt(prompt("Ingrese un numero: "));
for(let i=1; i<=10; i++){
    document.write("<p>", i," x ", numero," = ", i*numero, "</p>");
}*/
let i=1;
let acu=0;
while(i<=100){
    acu+=i;
    console.log(acu);
    i++;
    
}
document.write("<p>", acu, "</p>");