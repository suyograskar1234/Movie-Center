let api = " http://www.omdbapi.com/?i=tt3896198&apikey=d8b974c&t=";


function fetchMovie() {


    let movietitle = document.getElementById("movieTitle").value;
    let url = api + movietitle;
    fetch(url)
        .then(data => {

            return data.json();
        }).then(data => {
           // console.log(data);
            document.getElementById("title").innerText = data.Title;
            document.getElementById("actors").innerText = data.Actors;
            document.getElementById("directors").innerText = data.Director;
            document.getElementById("decs").innerText = data.Plot;
            document.getElementById("ratings").innerText = data.imdbRating;
            
       const imgageContainer=document.getElementById("poster");
       imgageContainer .innerHTML="";
       if(data.Poster !== "N/A"){
        const imageElement = document.createElement('img');
        imageElement.src = data.Poster;
        imageElement.alt = 'Movie Poster';
        imageElement.width = 300; // Set the desired width
        imgageContainer.appendChild(imageElement);

       }
       else {
        // Handle the case where no poster is available
        imageContainer.innerText = 'No poster available';
       }

        })
        .catch(error=>{

            console.log("Error fetching movie data:", error)
        });

}