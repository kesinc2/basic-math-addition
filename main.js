
function getInputValue(){
    let sayi1=document.getElementById('myInput').value;
    let sayi2=document.getElementById('myInput1').value;
    sayi1=Number(sayi1);
    sayi2=Number(sayi2);
  
    let toplama = sayi1 + sayi2 ;

    document.getElementById('sonuc').innerHTML= toplama;
}