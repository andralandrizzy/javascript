// Event Bubbling

// document.querySelector('.footer_tag').addEventListener('click', 
// function () {
//     console.log("Image footer tag was clicked");
// });

// document.querySelector('.title').addEventListener('click', 
// function () {
//     console.log("Title was clicked");
// });

// document.querySelector('.sub_title').addEventListener('click', 
// function () {
//     console.log("Sub-title was clicked");
// });

// document.querySelector('.text_content').addEventListener('click', 
// function () {
//     console.log("Text content was clicked");
// });

/*
// Event delegation.
// const contentCard = document.querySelector('.card_wrapper');

// const heading  = document.querySelector('.title');

// contentCard.addEventListener('click', Display);


document.body.addEventListener('click', Display)

function Display(e){
    // console.log(e.target);
    // if (e.target.parentElement.className === 'title' ){
    //     console.log('Title was clicked');
    // }
/// BEST WAY OF DOING DELEGATION
    if (e.target.parentElement.classList.contains('text_content')){
        console.log('Title was clicked');
        // remove card by click it.
        e.target.parentElement.parentElement.remove();
    }
};

*/
