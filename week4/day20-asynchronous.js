// const xhr = new XMLHttpRequest();
// console.log(xhr);
// xhr.open('GET', 'https://poetrydb.org/title/Ozymandias/lines.json');
// xhr.addEventListener('load', function() {
//     console.log(xhr.response);
// });
// xhr.send();
// console.log('this is the response: ', xhr.response);

console.log('here');
fetch('https://poetrydbasdfasdf.org/title/Ozymandias/lines.json')
    .then(response => console.log(response.body))
    .catch(error => console.log('This is the error: ', error));
