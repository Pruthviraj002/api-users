 let users=[]
 function getCategory(data) {
    const CategorySet = new Set(data.map(el=>el.id))
    const category = Array.from(CategorySet)
    const selectElement = document.querySelector("#select")
    category.forEach(el=>{
        selectElement.innerHTML +=
        `<option value="${el}">${el}</option>`
    })  
 }

function handleChange(e) {
    console.log(e.target.value);
    const filterData=users.filter(el=>el.id== e.target.value)
    document.querySelector("tbody").innerHTML =""
    getData(filterData)
 }
 

function getData(data) {
    let data1=""
    data.forEach(el=>{
        data1 +=
        // <div class="col-md-4">
        //     <div class="card">
        //         <img src="${el.thumbnail}" class="card-img-top" alt="...">
        //         <p>${el.firstName}</p>
        //         <p>${el.lastName}</p>
        //         <p>${el.email}</p>
        //     </div>
        // </div>
        `<tr>
        <td>${el.id}</td>
        <td>${el.firstName}</td>
        <td>${el.lastName}</td>
        <td>${el.age}</td>
        <td>${el.gender}</td>
        <td>${el.email}</td>
        <td>${el.phone}</td>
        <td>${el.username}</td>
        <td>${el.password}</td>
        <td>${el.birthDate}</td>
        <td> <img src="${el.image}" style:width="20%"</td>
        <td>${el.bloodGroup}</td>
        <td>${el.height}</td>
        <td>${el.weight}</td>
        <td>${el.address.address}</td>
        <td>${el.address.city}</td>
        
        
        </tr>`
    })
    document.querySelector("tbody").innerHTML =data1

}


fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((data) => {
        users = data.users
        getCategory(users)
        getData(users)
    }) 