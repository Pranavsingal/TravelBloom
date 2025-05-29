let destinations = [];

fetch('travel_recommendation_api.json')
  .then(response => response.json())
  .then(data => destinations = data)
  .catch(error => console.error("Error loading destination data:", error));

function searchDestination() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const resultBox = document.getElementById('result-box');
  const result = destinations.find(dest => dest.name.toLowerCase().includes(input) || dest.keyword.toLowerCase().includes(input));

  if (result) {
    resultBox.style.display = "block";
    resultBox.innerHTML = `<strong>${result.name}</strong><br>${result.description}`;
  } else {
    resultBox.style.display = "block";
    resultBox.innerHTML = "No matching destination found.";
  }
}

function clearSearch() {
  document.getElementById('searchInput').value = '';
  const resultBox = document.getElementById('result-box');
  resultBox.style.display = 'none';
  resultBox.innerHTML = '';
}
