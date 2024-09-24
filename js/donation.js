document.getElementById('noakhali-donation-btn').addEventListener('click' , function(e){
    e.preventDefault()

    const donationAmount = getInputFieldValueById('noakhali-donation-input')
    const balance =  getTextFieldValueById('total-balance')
    const totalDonation =  getTextFieldValueById('total-donation-noakhali')
    console.log(totalDonation)
    

    if(isNaN(donationAmount) || donationAmount < 0 || donationAmount > balance){
        return alert('input valid number')  
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

        return document.getElementById('my_modal_1').showModal()
        
    }


})