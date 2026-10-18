// Array of objects - Destination data
const destinations = [
    { name: "Bali, Indonesia", price: 850, rating: 4.9 },
    { name: "Paris, France", price: 999, rating: 4.8 },
    { name: "Dubai, UAE", price: 1200, rating: 4.7 },
    { name: "Lagos, Nigeria", price: 450, rating: 4.6 }
];

// Function to display destinations dynamically (DOM Manipulation)
function displayDestinations(){
    const grid = document.getElementById("destGrid");
    destinations.forEach(dest => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `<h3>${dest.name}</h3><p>From $${dest.price}</p><p>★ ${dest.rating}</p>`;
        grid.appendChild(div);
    });
}

// Function with condition - Search feature
function searchTrip(){
    const input = document.getElementById("searchInput").value.toLowerCase();
    const result = document.getElementById("searchResult");
    if(input === ""){
        result.textContent = "Please enter a destination.";
        return;
    }
    const found = destinations.find(d => d.name.toLowerCase().includes(input));
    if(found){
        result.textContent = `Great! ${found.name} is available from $${found.price}`;
    } else {
        result.textContent = `Sorry, no trips to "${input}" yet. Try Bali or Paris.`;
    }
}

displayDestinations();