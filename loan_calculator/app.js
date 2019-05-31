// Listen on Submit button

const submitBtn = document.querySelector('#loan-form');

submitBtn.addEventListener('submit', function(e){
// Hide Results
    document.getElementById('results').style.display = 'none';
//Show loader
    document.getElementById('loading').style.display = 'block';
    setTimeout(calculateResults, 2000)

    e.preventDefault();
})


// Calculate Result
function calculateResults(){
  console.log("Calculating...");
// Ui Vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
// formula
    const principal = parseFloat(amount.value);
    const calculatedInterest =  parseFloat(interest.value) / 100 / 12;
    const calculatedPayment =  parseFloat(years.value) * 12;

    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayment);
    const monthly = (principal*x*calculatedInterest)/(x-1);
    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayment).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayment) - principal).toFixed(2);
        //Display the results
        document.getElementById('results').style.display = 'block';
        // Hide the loading image
        document.getElementById('loading').style.display = 'none';
    }else{
        showError('Please check your number');
    }
};

//Show Error Message
function showError(error) {
    //Display the results
    document.getElementById('results').style.display = 'none';
    // Hide the loading image
    document.getElementById('loading').style.display = 'none';
    // Create a div
    const errorMessage = document.createElement('div');
    // Get Element
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    // Add Class
    errorMessage.className = "alert alert-danger";
    // Create text node and append to div
    errorMessage.appendChild(document.createTextNode(error))
    // Insert error above heading
    card.insertBefore(errorMessage, heading);
    // Clear error after three seconds
    setTimeout(clearError, 2000);
}

function clearError(){
    document.querySelector('.alert').remove();
}