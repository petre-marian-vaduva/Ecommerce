window.onload = function(){
    document.getElementById("search").addEventListener("click", showResults)
}

function showResults(){
    const search = document.querySelector("input[name='searchTerm']").value
    const output = document.getElementById("output")
    console.log("clicked")
    const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDguV0gPNBd5xTlcp7ch_7kauXpfqyWfLA&q=" + search + "&maxResults=4"
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            let response = JSON.parse(xhr.responseText)
            for (let i in response.items){
                let url = response.items[i].snippet.thumbnails.default.url
                let id = response.items[i].id.videoId
                output.innerHTML += `<p><a href="https://youtu.be/${id}">Video</a></p>`
            }
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
}
//AIzaSyDguV0gPNBd5xTlcp7ch_7kauXpfqyWfLA
