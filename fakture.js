[
    {
        name: 'Ime kompanije',
        pib: '12345678',
        dateIssued: '2019-11-18',
        value: 1000,
        currency: 'RSD',
        timeStamp: '10:29:21',
        dateStapm: '2019-11-18'
    },
    {
        name: 'Ime kompanije',
        pib: '178945612',
        dateIssued: '2019-11-18',
        value: 1500,
        currency: 'RSD',
        timeStamp: '10:29:21',
        dateStapm: '2019-11-18'
    }
]

let fakture = []

let count = 0

const companyInput = document.querySelector('#txt-company-name')
const pibInput = document.querySelector('#txt-company-pib')
const dateInput = document.querySelector('#txt-time')
const rsdInput = document.querySelector('#txt-value')
const btnSub = document.querySelector('#btn-add')

const labTimeStamp = document.querySelector('.insert-timestamp')

const btnDel = document.querySelector('.item-trashCan')



const addElementToDom = (id) => {
    const divContainer = document.createElement('div')
    divContainer.className = 'item-container'

    const infoItem = document.createElement('div')
    infoItem.className = 'item-info'

    const labelDiv = document.createElement('div')

    const labComp = document.createElement('.label')
    labComp.className = 'company-name'
    labComp.textContent = companyInput.value + ''

const labPib = document.querySelector('label')
labPib.className = 'company-pib'
labPib.textContent = pibInput.value + ''

const labTime = document.createElement('.time-created')
labTime.className = 'time-created'
labTime.textContent = dateInput.value + ''

const labPrice = document.createElement('label')
labPrice.className = 'price-value'
labPrice.textContent = rsdInput.value + ''

labelDiv.append(labComp,labPib,labTime,labPrice)


divContainer.appendChild(labelDiv)

const divActions = document.createElement('div')
        divActions.className = 'item-actions'

            const btnRemove = document.createElement('button')
            btnRemove.className = 'item-trashCan'
            btnRemove.textContent = 'DELETE'
        divActions.appendChild(btnRemove)

        btnRemove.addEventListener('click',(e) => {
            e.target.parentElement.parentElement.remove()
            fakture.splice(fakture.findIndex(el => el.id === id), 1)
            // console.log(fakture)
        })
    divContainer.appendChild(divActions)
    
    itemList.appendChild(divContainer)
    
    companyInput.value = ''
    dateInput.value = ''
    pibInput.value = ''
    rsdInput.value = ''
}

const isValid = () => {
    companyInput.value.trim() !== '' &&
    pibInput.value.length == 8 &&
    !Number.isNaN(Number (pibInput.value.trim()))
}

btnSub.addEventListener('click', () => {
    if(!isValid()){
       
       alert('Polja ne smeju biti prazna')

        return 
    }
    fakture.push({
        name: companyInput.value,
        pib: pibInput.value,
        dateIssued: dateInput.value,
        value: rsdInput.value,
        currency:"RSD",
        timeStamp: `${(new Date()).getHours()}:${(new Date()).getMinutes()}:${(new Date()).getSeconds()}`,
        dateStamp: dateInput.value,
        id: count
    })
    console.log(fakture[fakture.length - 1])
    addElementToDOM(count)

    count++
})