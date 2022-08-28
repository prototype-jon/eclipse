
//Unsplash API
const query = "fashion model";
const count = 3;
const apiKey = 'B5X5xSuHfEBFOGyRXIfm8ZJHHarmXgU5aK1hPer4LII';
const apiUrl =`https://api.unsplash.com/photos/random/?client_id=${apiKey}&query=${query}&count=${count}`;

async function getPhotosFromUnsplash(){
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error){
        //catch error
    }
}

//On Load
getPhotosFromUnsplash();