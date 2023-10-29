window.onload = function(){
    alert('Page onload!');
    alert('Setting...');
    var code = 0;
    var CodeSection = document.getElementById('codes');
    if(String['fromCharCode']){
        alert('Setting end!');
    }else{
        alert('String.fromCharCode() can not use!');
        window.close();
    }
    alert('Starting...')
}