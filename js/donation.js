
// function for blog btn
const blogBtn = document.getElementById("blog-btn")
blogBtn.addEventListener('click', function () {
    window.location.href = '/blog.html'
})

// variable
const historyTab = document.getElementById('history-btn')
const donationTab = document.getElementById('donation-btn')
const historyContent = document.getElementById('history-content')
// toggle-btn-1
historyTab.addEventListener('click', function () {
    historyTab.classList.add("bg-primary")
    donationTab.classList.remove("bg-primary")

    document.getElementById('donation-content').classList.add('hidden')
    document.getElementById("history-content").classList.remove('hidden')
})

// toggle-btn-2
donationTab.addEventListener('click', function () {
    
    historyTab.classList.remove('bg-primary')
    donationTab.classList.add('bg-primary')

    document.getElementById("history-content").classList.add('hidden')
    document.getElementById("donation-content").classList.remove('hidden')
})



// flood for noakhali functionality
document.getElementById('donate-btn-noakhali').addEventListener('click', function () {
    let inputAmountNoakhali = getInputFieldValueById('input-amount-noakhlai')
    let balance = getTextById('current-balance')

    // validation
    if (inputAmountNoakhali <= 0 || isNaN(inputAmountNoakhali) || inputAmountNoakhali == '' || inputAmountNoakhali > balance) {
        return alert('invalid input amount')
    } else {
        let donationAmount = getTextById('donation-amount')
        let newDonationAmount = donationAmount + inputAmountNoakhali
        document.getElementById('donation-amount').innerText = newDonationAmount.toFixed(2)

        let newBalance = balance - inputAmountNoakhali
        document.getElementById('current-balance').innerText = newBalance.toFixed(2)

        // push to history section
        const historyList = document.createElement("div")
        historyList.classList.add("border-2", "border-2", "p-8", "rounded-xl")
        historyList.innerHTML += 
        `
        <p class = "text-xl font-semibold text-black">${newDonationAmount.toFixed(2)} Taka is Donated for flood relief at Noakhali, Bangladesh</p>
        <p>Date: ${new Date().toLocaleDateString()}   ${new Date().toTimeString(+600)}</p>
     
        `
        historyContent.appendChild(historyList)

        // modal
        my_modal_5.showModal()
    }


})


// flood for feni functionality
document.getElementById('donate-btn-feni').addEventListener('click', function () {
    let inputAmountFeni = getInputFieldValueById('input-amount-feni')
    let balance = getTextById('current-balance')

    // validation
    if (inputAmountFeni <= 0 || isNaN(inputAmountFeni) || inputAmountFeni == '' || inputAmountFeni > balance) {
        return alert('invalid input amount')
    } else {
        let donationAmount = getTextById('donation-amount-feni')
        let newDonationAmountFeni = donationAmount + inputAmountFeni
        document.getElementById('donation-amount-feni').innerText = newDonationAmountFeni.toFixed(2)
        let newBalance = balance - inputAmountFeni
        document.getElementById('current-balance').innerText = newBalance.toFixed(2)

        // push to history section
        const historyList = document.createElement("div")
        historyList.classList.add("border-2", "border-2", "p-8", "rounded-xl")
        historyList.innerHTML += 
        `
        <p class = "text-xl font-semibold text-black">${newDonationAmountFeni.toFixed(2)} Taka is Donated for Flood relief at Feni, Bangladesh</p>
        <p>Date: ${new Date().toLocaleDateString()}   ${new Date().toTimeString(+600)}</p>
       
        `
        historyContent.appendChild(historyList)

        // modal
        my_modal_5.showModal()
    }

})


// quota movement functionality
document.getElementById('donate-movement-btn').addEventListener('click', function () {
    let inputAmountMovement = getInputFieldValueById('input-amount-movement')
    let balance = getTextById('current-balance')
    if (inputAmountMovement <= 0 || isNaN(inputAmountMovement) || inputAmountMovement == '' || inputAmountMovement > balance) {
        return alert('invalid input amount')
    } else {
        let donationAmount = getTextById('donation-amount-movement')
        let newDonationAmountMovement = donationAmount + inputAmountMovement
        document.getElementById('donation-amount-movement').innerText = newDonationAmountMovement.toFixed(2)

        let newBalance = balance - inputAmountMovement
        document.getElementById('current-balance').innerText = newBalance.toFixed(2)

        // push to history section
        const historyList = document.createElement("div")
        historyList.classList.add("border-2", "border-2", "p-8", "rounded-xl")
        historyList.innerHTML += 
         `
        <p class = "text-xl font-semibold text-black">${newDonationAmountMovement.toFixed(2)} Taka is Donated for Injured in Quota Movement, Bangladesh</p>
        <p>Date: ${new Date().toLocaleDateString()}   ${new Date().toTimeString(+600)}</p>    
    
         `
        historyContent.appendChild(historyList)

        // modal
        my_modal_5.showModal()
    }

})



