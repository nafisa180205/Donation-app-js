const TotalBalance = document.getElementById('total-balance')
const donationBtn = document.getElementById('donation-btn')
const historyBtn = document.getElementById('history-btn')
const donationSection = document.getElementById('donation-section')
const historySection = document.getElementById('history-section')
const homeBtn = document.getElementById('home-btn')
const blogBtn = document.getElementById('blog-btn')

console.log(TotalBalance)


function toggleSectionId(id){
    donationSection.classList.add('hidden')
    historySection.classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}

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

})



