// Global Variables

// Create text field for job title = other
let title = document.getElementById('title');
let newField = document.createElement('input');
newField.setAttribute('type', 'text');
newField.style.display = 'none';
title.parentNode.appendChild(newField);

// Initial focus: Set name field as the initial focus on page load
window.addEventListener("load", e => {
    let userName = document.getElementById('name');
    userName.focus();

});

// Add an event listener to hide/show extra text field when other is selected as a role

title.addEventListener('click', e => {
    if (e.target.value === 'other') {
        newField.style.display = '';

    } else
        newField.style.display = 'none';
});

// Create logic so that the color dropdown and it's label aren't visible until a design is selected
let design = document.getElementById('design');
let color = document.getElementById('color');
color.previousElementSibling.style.display = 'none'; // By default don't display label for color
color.style.display = 'none'; // By default don't display color drop down

design.addEventListener("change", e=> { // Event listener to listen for change in drop down value and act accordingly
    if (design.value === 'heart js'){
        color.previousElementSibling.style.display = '';
        color.style.display = '';
    } else if (design.value === 'js puns'){
      color.previousElementSibling.style.display = '';
      color.style.display = '';
    } else {
        console.log('Theme not selected');
        color.previousElementSibling.style.display = 'none'; 
        color.style.display = 'none'; 
  
    }

   }); 

// TODO: Only certain color options should be available based on "design" selection

// TODO: If "design" choice is changed, color and menu is updated

// TODO: Don't allow selection of events happening on the same day and time if one is already selected

// TODO: When competing activity is unselected, the former state should revert

// TODO: Checked activities should dynamically total up at the bottom