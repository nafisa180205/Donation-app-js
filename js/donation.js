document.getElementById('feni-donation-btn').addEventListener('click' , function(e){
    e.preventDefault()

    const donationAmount = getInputFieldValueById('feni-donation-input')
    const balance =  getTextFieldValueById('total-balance')
    const totalDonation =  getTextFieldValueById('total-donation-feni')
    console.log(totalDonation)
    

    if(isNaN(donationAmount) || donationAmount < 0 || donationAmount > balance){
        return alert('Input Valid Amount')  
    }

    else{
        const finalDonationAmount = totalDonation + donationAmount
        const finalBalance = balance - donationAmount
        document.getElementById('total-donation-feni').innerText = finalDonationAmount
        document.getElementById('total-balance').innerText = finalBalance

        // document.getElementById('my_modal_1').showModal();
        
        const feni = document.getElementById('feni').innerText
        const date = new Date();
        const historySection = document.getElementById('history-section')

        const Div = document.createElement('div')
        Div.classList.add('p-5')
        Div.classList.add('border')
        Div.classList.add('border-slate-300')
        Div.classList.add('w-full')
        Div.classList.add('rounded-xl')

        Div.innerHTML = `
        <h3 class="text-xl font-semibold">${donationAmount} Taka is Donated for famine-2024 at ${feni}</h3>
        <p class="bg-slate-100">Date : 
        <span> ${date} </span>
        </p>`

      document.getElementById('history-section').appendChild(Div)

        document.getElementById('my_modal_1').showModal()

        document.getElementById('feni-donation-input').value = ''
         

        
    }


})


document.getElementById('quota-donation-btn').addEventListener('click' , function(event){
    event.preventDefault()

    const donationAmount = getInputFieldValueById('quota-donation-input')
    const balance =  getTextFieldValueById('total-balance')
    const totalDonation =  getTextFieldValueById('total-donation-quota')
    console.log(totalDonation)
    

    if(isNaN(donationAmount) || donationAmount < 0 || donationAmount > balance){
        return alert('Input Valid Amount')  
    }

    else{
        const finalDonationAmount = totalDonation + donationAmount
        const finalBalance = balance - donationAmount
        document.getElementById('total-donation-quota').innerText = finalDonationAmount
        document.getElementById('total-balance').innerText = finalBalance

         document.getElementById('my_modal_1').showModal();
        
        const quota = document.getElementById('quota').innerText
        const date = new Date();
        const historySection = document.getElementById('history-section')

        const Div = document.createElement('div')
        Div.classList.add('p-5')
        Div.classList.add('border')
        Div.classList.add('border-slate-300')
        Div.classList.add('w-full')
        Div.classList.add('rounded-xl')

        Div.innerHTML = `
        <h3 class="text-xl font-semibold">${donationAmount} Taka is Donated for famine-2024 at ${quota}</h3>
        <p class="bg-slate-100">Date : 
        <span> ${date} </span>
        </p>`

      document.getElementById('history-section').appendChild(Div)

         document.getElementById('my_modal_1').showModal()

        document.getElementById('quota-donation-input').value = ''
        
        
    }


})