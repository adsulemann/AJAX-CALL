
let url= 'https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency';
let input = document.getElementById("input");
let reqdata =``;
document.getElementById("output").innerHTML = "Please write something"

input.addEventListener("input",main);

function ajaxCall(){
    reqdata =`{"requests":[{"indexName":"ikea","params":"query=${input.value}&hitsPerPage=16"}]}`;
    $.post(url,reqdata,
        function(resData, status){
        console.log(status);
        console.log(resData);

        let myData = resData.results[0].hits.map(item => {
            return `
                <div>
                    <ul>
                        <li>${item.name} </li>
                        <li> ${item.price} </li>
                        <li>${item.description} </li>
                        <img src = " ${item.image}  " style="width:200px;" /> 
                        <hr>
                    </ul>
                </div> `
        })
        document.getElementById("output").innerHTML = myData;
    })
}


// set and clear time for AJAX Call
let start = setTimeout(ajaxCall,200);
clearTimeout(start);


function main(){
    clearTimeout(start)
    if(input.value !== ''){
        start = setTimeout(ajaxCall,200);
    }else{
        document.getElementById("output").innerHTML = "Please write something"
    }
}


   





 







// // //Using Fetch Methode
// // document.querySelector(".fetch-data").addEventListener("click",function(e){
// //     e.preventDefault();
// //     let input=document.getElementById("input").value;
// //     fetch("http://api.icndb.com/jokes/random/"+input)
// //     .then(function(response) {
// //         console.log(response)
// //       return response.json();
    
// //     }).then(function(data){
// //         console.log(data);
// //         let output="";
// //         data.value.forEach(function(data) {
// //                 output+= `<li>${data.id} </li>`;
// //                 output+= `<li>${data.name} </li>`;
// //                 output+= `<li>${data.price} </li>`;
                
// //             });
// //             document.querySelector(".FetchedData").innerHTML=output;
// //     }).catch(function(error) {
// //         console.log(error)
// //     });
// // })