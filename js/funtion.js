// function for InputVAlue
function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue)
    return inputValueNumber
}

// function for text
function getTextById(id) {
    const innerText = document.getElementById(id).innerText
    const innerTextNumber = parseFloat(innerText)
    return innerTextNumber
}


// common function for card
function calculation(inputAmountId, donationAmountId, balanceId, historyText) {
    let inputAmount = getInputFieldValueById(inputAmountId)
    let donationAmount = getTextById(donationAmountId)
    let balance = getTextById(balanceId)
    const historyId = document.getElementById(historyText).innerText
    
    // validation
    if (inputAmount <= 0 || isNaN(inputAmount) || inputAmount == '' || inputAmount > balance) {
         alert('invalid donation amount')
         return
    } else {
        let newDonationAmount = donationAmount + inputAmount
        document.getElementById(donationAmountId).innerText = newDonationAmount.toFixed(2)
        let newBalance = balance - inputAmount
        document.getElementById('current-balance').innerText = newBalance.toFixed(2)

        // push to history section
        const historyList = document.createElement("div")
        historyList.classList.add("border-2", "border-2", "p-8", "rounded-xl")
        historyList.innerHTML +=
        `
        <p class = "text-xl font-semibold text-black">${inputAmount.toFixed(2)} Taka is Donated for ${historyId}, Bangladesh</p>
        <p>Date: ${new Date().toLocaleDateString()}   ${new Date().toTimeString(+600)}</p>
     
        `
        const historyContent = document.getElementById('history-content')
        historyContent.insertBefore(historyList, historyContent.firstChild)

        // MODAL
        my_modal_5.showModal()

        document.getElementById(inputAmountId).value = ''
    }


}

