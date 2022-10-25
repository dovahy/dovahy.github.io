const counterElement = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
    fetch('https://api.countapi.xyz/update/dovahy.github.io/portfolio/?amount=1')
    .then(res => res.json())
    .then(res => {counterElement.innerHTML = res.value;});
}