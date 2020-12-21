let tagsArray = []; 
const urlParams = new URLSearchParams(window.location.search); 
const pickedTag = urlParams.get('tag'); 
let searchInput = document.getElementById('search-input'); 

async function filter(tag) { 
    setActiveTag(tag); 
    var event = new Event("input", { bubbles: true, cancelable: true, }); 
    searchInput.dispatchEvent(event); 
}; 

function sleep(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms)); 
} 

function setActiveTag(tag) { 
    if(tagsArray.includes(tag)){ 
        const indexofTag = tagsArray.indexOf(tag); 
        document.getElementById(tag+'-tag-item').classList.remove('picked'); 
        tagsArray.splice(indexofTag, 1); 
    } else { 
        document.getElementById(tag+'-tag-item').classList.add('picked'); 
        tagsArray.push(tag); } 
}; 

const initTags = () => { 
    var items = document.getElementsByClassName('tag-item'); 
    tagsArray = []; 
}; 

function checkIfTagsMatch(arr1, arr2) { 
    return arr1.every(item => arr2.includes(item)) ; 
} 

var sjs = new SimpleJekyllSearch({ searchInput: searchInput, resultsContainer: document.getElementById('search-results'), json: '/assets/search.json', searchResultTemplate: '<li class="result"><a href="https://krzysztofbury.pl{url}">{title}</a></li>', limit: 50, tagsArray: tagsArray, noResultsText: 'Brak wyników ...', fuzzy: false }); initTags(); 