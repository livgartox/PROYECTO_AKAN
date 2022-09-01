const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

const fetchData = async () => {
    try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            //console.log(data)
            pintarCard(data)
        } catch (error) {
        console.log(error)
        }
} 

const pintarCard = data => {
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.title
        templateCard.querySelector('p').textContent = producto.precio
        templateCard.querySelector('img').setAttribute
        templateCard.querySelector('.btn-dark').dataset.id = producto.id

         const clone = templateCard.cloneNode(true)
         fragment.appendChild(clone)
    });
    items.appendChild(fragment)
}