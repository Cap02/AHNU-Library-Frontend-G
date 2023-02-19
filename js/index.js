import axios from 'axios'

let button = document.querySelector('button');
button.addEventListener('click', () => {
    abc();
})

function abc() {
    const res = axios({
        method: 'GET',
        url: 'http://www.liulongbin.top:3006/api/getbooks'
    })
    console.log(res);
}