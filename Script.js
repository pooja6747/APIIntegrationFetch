fetch('https://fakestoreapi.com/users')
            .then((res)=>{
                
              return res.json(); //converted to object
            })
            .then(
                (objectData)=>{
                    console.log(objectData[0].email);
                    let data="";

                    objectData.map((values)=>{
                        data += `
                        
                        <div class="card">
                
            
                        <div class="card-body">
                        <h2 class="card-Username">${values.id}</h4>
                          <h4 class="card-Username">${values.username}</h4>
                          <h4 class="card-title">${values.name.firstname} ${values.name.lastname}</h4>
                          <p class="card-text">${values.email}</p>
                          <p class="card-text">${values.address.city}</p>
                          <p class="card-text">${values.address.street}</p>
                         <p>${values.phone}</p>
                        </div>
                        </div>
                        `
                    });

                    document.getElementById("card").innerHTML = data;
                }
            )