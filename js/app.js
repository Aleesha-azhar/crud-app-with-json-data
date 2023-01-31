var data = [];
        function getData(){
         var getData = new XMLHttpRequest();
         
         getData.onload = function(){
            if(getData.status == 200){
                
                data = JSON.parse(getData.response);
                displayData(data);
            }
            else{
                console.log("some error occured");
            }
         };
          getData.open("GET", "https://filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true", "True");
          getData.send();

        }        
        getData();


function displayData(data){
 document.getElementById("myTable").innerHTML = " ";
    for (i=0; i<data.length; i++){
        var tr = document.createElement("tr");
        console.log(data[i]);
        for(a in data [i]) {
            var td = document.createElement("td");
            td.innerHTML = data[i][a];
            tr.appendChild(td);
        }
        var etd = document.createElement("td");
        var ebutton = document.createElement("button");
        ebutton.setAttribute("onclick", "editUser(" + i + ")");
        ebutton.innerHTML = "Edit";
        etd.appendChild(ebutton);
        tr.appendChild(etd);


        var dtd = document.createElement("td");
        var dBtn = document.createElement("button");
        dBtn.setAttribute("onclick", "deleteUser(" + i + ")");
        dBtn.innerHTML = "Delete";
        dtd.appendChild(dBtn);
        tr.appendChild(dtd);
        
        document.getElementById("myTable").appendChild(tr);
    
    }
    }

    function createUser(){
        var newObject = {
            fname: document.getElementById("fname").value,
            lname: document.getElementById("lname").value
    
        };
        data.push(newObject);
        displayData(data);
        clearForm(newObject);
    }


    function deleteUser(i){
        data.splice(i, 1);
        displayData(data);
       
       }


       function editUser(i){
        index = i;
         for(a in data[i]){
            document.getElementById(a).value = data[i][a];
         }
       }
       function updateUser(){
        var newObj = data[index];
        for(a in newObj){
            newObj[a] = document.getElementById(a).value;
    
        }
        data[index] = newObj;
        displayData(data);
        clearForm(newObj);
       }
    
    function clearForm(obj){
        for (a in obj){
            document.getElementById(a).value = " ";
    
        }
    
    }