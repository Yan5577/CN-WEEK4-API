let randAnimal = {}

const fetchData = async (displayFunc) => {
    try {
        let response = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand');
        let data = await response.json();
        document.getElementById("p1").innerHTML = JSON.stringify(data);
        document.getElementById("p2").innerHTML = data.diet;

        randAnimal = data;
    } catch(err){
        console.log(err)
    }
}

fetchData();