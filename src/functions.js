const name = document.getElementById('name')
const phoneNumber = document.getElementById('phone')
const btnAddContact = document.getElementById('btn-add-contact')
const removeBtns = document.getElementsByClassName('remove')

//se muestra de lado del navegador (cliente)
btnAddContact.addEventListener('click', () => {
    window.location.href=`add/${name.value}/${phoneNumber.value}`
})

for (btn of removeBtns) {
    btn.addEventListener('click', () => {
        const id = Number(btn.id)
        window.location.href = `/delete/${id}`
    })
}

