
// function for blog btn
const blogBtn = document.getElementById("blog-btn")
blogBtn.addEventListener('click', function () {
    window.location.href = 'blog.html'
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


// common functionality
// noakhali
document.getElementById('donate-btn-noakhali').addEventListener('click', function () {
    calculation('input-amount-noakhlai', 'donation-amount', 'current-balance', 'noakhali-text')


})
// feni
document.getElementById('donate-btn-feni').addEventListener('click', function () {
    calculation('input-amount-feni', 'donation-amount-feni', 'current-balance', 'feni-text')


})
// movement
document.getElementById('donate-btn-movement').addEventListener('click', function () {
    calculation('input-amount-movement', 'donation-amount-movement', 'current-balance', 'movement-text')


})
