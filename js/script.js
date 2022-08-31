//Question 1

const url = "https://breakingbadapi.com/api/characters/6";

const resultsContainer = document.querySelector(".details");

// we need an async function as we are using await
async function getData() {
    try {
        const response = await fetch(url)
        const data = await response.json()
        // the endpoint is an array with one result, so we need to access the first item in the array
        //console.log(data) to find values
        const details = data[0]
        displayData(details)
        
    } catch (error) {
        console.log(error)
        resultsContainer.innerHTML = error;
    }
};

getData();

function displayData(details) {
    resultsContainer.innerHTML = `<div class="name">${details.name}</div>
                                    <div class="image" style="background-image: url('${details.img}')"</div>
                                    <p class="status">${details.status}</p>`
};
