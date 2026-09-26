let bin=document.getElementById("bin")
let dec=document.getElementById("dec")
let hex=document.getElementById("hex")
let oct=document.getElementById("oct")
let binError=document.getElementById("binError")
let decError=document.getElementById("decError")
let hexError=document.getElementById("hexError")
let octError=document.getElementById("octError")
function fromBin() {
    let x=parseInt(bin.value,2)
    if(bin.value==""|| /^[01]+$/.test(bin.value)){
        binError.innerText=""
        if(!isNaN(x)){
            dec.value=x;
            hex.value=x.toString(16).toUpperCase()
            oct.value=x.toString(8)
        }
    }else{
        binError.innerText="Invalid"
    }
}
function fromDec() {
    let x=parseInt(dec.value,10)
    if(dec.value==""||/^[0-9]+$/.test(dec.value)){
        decError.innerText=""
        if(!isNaN(x)){
            bin.value=x.toString(2)
            hex.value=x.toString(16).toUpperCase()
            oct.value=x.toString(8)
        }
    }else{
        decError.innerText="Invalid"
    }
}
function fromHex(){
    let x=parseInt(hex.value,16)
    if(hex.value==""||/^[0-9a-fA-F]+$/.test(hex.value)){
        hexError.innerText=""
        if(!isNaN(x)){
            bin.value=x.toString(2)
            dec.value=x
            oct.value=x.toString(8)
        }
    }else{
        hexError.innerText="Invalid"
    }
}
function fromOct(){
    let x=parseInt(oct.value,8)
    if(oct.value==""||/^[0-7]+$/.test(oct.value)){
        octError.innerText=""
        if(!isNaN(x)){
            bin.value=x.toString(2)
            dec.value=x
            hex.value=x.toString(16).toUpperCase()
        }
    }else{
        octError.innerText="Invalid"
    }
}
function copyText(input){
    if(input.value!=""){
        navigator.clipboard.writeText(input.value)
    }
}
function clearAll(){
    bin.value=""
    dec.value=""
    hex.value=""
    oct.value=""
    binError.innerText=""
    decError.innerText=""
    hexError.innerText=""
    octError.innerText=""
}