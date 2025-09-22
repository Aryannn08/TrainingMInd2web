function freqCheck(){
    let input = document.getElementById("data").value;
    let arr = input.split(",");

    const freq = {};
    for(i=0;i<arr.length;i++){
        if(freq[arr[i]]){
            freq[arr[i]]++;
        }
        else {
            freq[arr[i]] = 1;
        }
    }
    let result = document.getElementById("result");
     for(let key in freq){
        setTimeout(function(){
            result.innerHTML += `${key} - ${freq[key]} <br>`;
        },1000);
     }
}


// function checkfreq(){
//    let input=document.getElementById('data').value;
//    let arr=input.split(",");
    
//    let freq={};
//         for(i=0;i<arr.length;i++){
//             if(freq[arr[i]])
//         {
//             freq[arr[i]]++;    
//            }
//            else{
//             freq[arr[i]]=1;
//            }
          
//         }
 
// //   let result=document.getElementById('result');
// //     for(let key in freq){
// //     result.innerHTML += `${key} - ${freq[key]} <br>`;
// //     }
//
// }
 