const donationBtn = document.getElementById('donation-btn')
const historyBtn = document.getElementById('history-btn')
const donationSection = document.getElementById('donation-section')
const historySection = document.getElementById('history-section')
const homeBtn = document.getElementById('home-btn')
const blogBtn = document.getElementById('blog-btn')



function toggleSectionId(id){
    donationSection.classList.add('hidden')
    historySection.classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
    
}


function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value
    const inputNumber = parseInt(inputValue)
    return inputNumber
}

function getTextFieldValueById(id){

    const textValue = document.getElementById(id).innerText
    const textNumber = parseInt(textValue)

    return textNumber

}

// const addMoney = getInputFieldValueById('input-add-money')
//     const inputPin = getInputFieldValueById('input-pin-number')
//     console.log('add money : ', addMoney)
//     console.log('input pin : ', inputPin)


document.getElementById('noakhali-donation-btn').addEventListener('click' , function(event){
    // event.preventDefault()

    const donationAmount = getInputFieldValueById('noakhali-donation-input')
    const balance =  getTextFieldValueById('total-balance')
    const totalDonation =  getTextFieldValueById('total-donation-noakhali')
    console.log(totalDonation)
    

    if(isNaN(donationAmount) || donationAmount <= 0 || donationAmount > balance){
        return alert('Input Valid Amount')  
    }

    else{
        const finalDonationAmount = totalDonation + donationAmount
        const finalBalance = balance - donationAmount
        document.getElementById('total-donation-noakhali').innerText = finalDonationAmount
        document.getElementById('total-balance').innerText = finalBalance

        // document.getElementById('my_modal_1').showModal();
        
        const noakhali = document.getElementById('noakhali').innerText
        const date = new Date();
        const historySection = document.getElementById('history-section')

        const Div = document.createElement('div')
        Div.classList.add('p-5')
        Div.classList.add('border')
        Div.classList.add('border-slate-300')
        Div.classList.add('w-full')
        Div.classList.add('rounded-xl')

        Div.innerHTML = `
        <h3 class="text-xl font-semibold">${donationAmount} Taka is Donated for famine-2024 at ${noakhali}</h3>
        <p class="bg-slate-100">Date : 
        <span> ${date} </span>
        </p>`

      document.getElementById('history-section').appendChild(Div)

        document.getElementById('my_modal_1').showModal()

        document.getElementById('noakhali-donation-input').value = ''
         
        
    }


})

document.getElementById('modal-btn').addEventListener('click',function(){
    document.getElementById('my_modal_1').close()
})

donationBtn.addEventListener('click',function(event){
    event.preventDefault()
    toggleSectionId('donation-section')
    donationBtn.classList.add('bg-[#B4F461]')
    donationBtn.classList.remove('border-slate-400')
    historyBtn.classList.remove('bg-[#B4F461]')
    historyBtn.classList.add('border-slate-400')


})

historyBtn.addEventListener('click',function(event){
    event.preventDefault()
    toggleSectionId('history-section')
    historyBtn.classList.add('bg-[#B4F461]')
    historyBtn.classList.remove('border-slate-400')
    donationBtn.classList.remove('bg-[#B4F461]')
    donationBtn.classList.add('border-slate-400')
    donationSection.classList.add('hidden')
    historySection.classList.remove('hidden')
    historySection.classList.add('flex')

})







