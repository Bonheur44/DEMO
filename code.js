const persons = [
    {name: 'daniel', age:37},
    {name: 'dany', age:37},
    {name: 'bob', age:37},
    {name: 'mia', age:37},
    {name: 'DANNE', age:37}
]

const searchInput = document.getElementById('searchInput')

searchInput.addEventListener('keyup', function() {
    const input = searchInput.value
    
    const result = persons.filter(item => item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()))

    let suggestions = ''

    if (input != '') {
        result.forEach(resultItem => {
            suggestions += `
                <div class="suggestions">${resultItem.name}</div>
            `
        })
    }

    document.getElementById('suggestions').innerHTML = suggestions

})