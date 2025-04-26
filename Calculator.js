function append(value) {
    document.getElementById("input1").value+=value;
}
function clearall(value) {
    document.getElementById("input1").value=" ";
}
function clearentry(value) {
    document.getElementById("input1").value= "";
}
function calculate() {
        let res=document.getElementById("input1").value;
        let result=eval(res);
        document.getElementById("input1").value=result;
}
function oneby(){
    res1=document.getElementById("input1").value;
    result1=1/res1;
    document.getElementById("input1").value=result1;
}
function pow(){
    res2=document.getElementById("input1").value;
    result2=res2*res2;
    document.getElementById("input1").value=result2;
}
function sqrt(){
    res3=document.getElementById("input1").value;
    result3=res3**(1/2);
    document.getElementById("input1").value=result3;
}
function appendvalue(){
    res4=document.getElementById("input1").value;
    result4='-'+res4;
    document.getElementById("input1").value=result4;
}
function deletelast() {
    let input = document.getElementById("input1");
    input.value = input.value.slice(0, -1); 
}

