const api="https://jsonplaceholder.typicode.com/users";

function getStudents() {
    fetch(api)
    .then((response)=>{
        if (!response.ok) {
                throw new Error("Failed to fetch students");
        }
        return response.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error.message);
    })
}

function getStudentById(id) {
    fetch(`${api}/${id}`)
    .then((response)=>{
        if (!response.ok) {
                throw new Error("Failed to fetch student");
        }
        return response.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })
}

function addStudent(student) {
    const newStudent = {
        name: "Kumari Khushi",
        email: "khushi@gmail.com",
        phone: "1234567890",
        city: "Patna"
    }
    fetch(api, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newStudent)
    })
    .then((response)=>{
        if (!response.ok) {
                throw new Error("Failed to add student");
        }
        return response.json();
    })
    .then((data)=>{
        console.log("Student added successfully:", data);
    })
    .catch((error)=>{
        console.log(error);
    })
}

function updateStudent(id){
    const updatedStudent={
        name: "Harsh Kumar",
        email: "harsh@gmail.com",
        phone: "1234567898",
        city: "Vadodara"
    }
    fetch(`${api}/${id}`, {
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(updatedStudent);
    })
    .then((response)=>{
        if(!response.ok){
            console.log("Failed to update student");
        }
    })
    .then((data)=>{
        console.log("Student updated successfully:", data);
    })
    .catch((error)=>{
        console.log(error);
    })
}

function updateStudentCity(id){
    const updatedCity={
        city:"Gaya"
    };
    fetch(`${api}/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(updatedCity)
    })
    .then((response)=>{
        if(!response.ok){
            console.log("Failed to update student city");
        }
    })
    .then((data)=>{
        console.log("Student city updated successfully:", data);
    })
    .catch((error)=>{
        console.log(error);
    })
}

function deleteStudent(id){
    fetch(`${api}/${id}`,{
        method:"DELETE"
    })
    .then((response)=>{
        if(!response.ok){
            console.log("Failed to delete student");
        }
    })
    .then(()=>{
        console.log("Student deleted successfully");
    })
    .catch((error)=>{
        console.log(error);
    })
}

function searchStudentByName(name){
    fetch(`${api}?name=${name}`)
    .then((response)=>{
        if(!response.ok){
            throw new Error("Failed to search student");
        }
        return response.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error.message);
    })
}
