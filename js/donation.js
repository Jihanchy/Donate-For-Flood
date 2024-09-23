// to
const historyTab = document.getElementById('history-btn')
const donationTab = document.getElementById('donation-btn')

    historyTab.addEventListener('click',function(){
    historyTab.classList.add("bg-primary")
    donationTab.classList.remove("bg-primary")
    
    document.getElementById('donation-content').classList.add("hidden")
    document.getElementById("history-content").classList.remove('hidden')
})
donationTab.addEventListener('click', function(){
    historyTab.classList.remove('bg-primary')
    donationTab.classList.add('bg-primary')

    document.getElementById("history-content").classList.add('hidden')
    document.getElementById("donation-content").classList.remove('hidden')
})

// flood for noakhali functionality
document.getElementById('donate-btn-noakhali').addEventListener('click', function(){
    let inputAmountNoakhali = getInputFieldValueById('input-amount-noakhlai')
    let donationAmount = getTextById('donation-amount')
    let newDonationAmount = donationAmount + inputAmountNoakhali
    document.getElementById('donation-amount').innerText = newDonationAmount.toFixed(2)
    
    let balance = getTextById('current-balance')
    let newBalance = balance-inputAmountNoakhali
    document.getElementById('current-balance').innerText = newBalance.toFixed(2)
    
    // push to history section
})



 