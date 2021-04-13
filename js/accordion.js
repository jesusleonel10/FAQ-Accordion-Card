document.addEventListener('click', function (event) {

  //Get the item that was clicked
    const content = document.querySelector(event.target.hash); //Select the item__body by the link
        if (!content) return;

  //Prevent default link behavior
    event.preventDefault();

    if (content.classList.contains('active')) {
        content.classList.remove('active');
        event.target.classList.remove('bold');
        event.target.nextElementSibling.classList.remove('rotate'); //Element that is just after the link
        return;
      }

  // Get all open accordion content, loop through it, and close it
    const accordions = document.querySelectorAll('.items__body.active');
      for (var i = 0; i < accordions.length; i++) {
        accordions[i].classList.remove('active');
      }

  //Get all the content of the title in bold, scroll it and close it
    const titleBold = document.querySelectorAll('.items__title.bold');
      for (var i = 0; i < titleBold.length; i++) {
        titleBold[i].classList.remove('bold');
        
      }

  //Get all the content of the rotated image, scroll it and close it
    const arrow = document.querySelectorAll('.items__img.rotate');
      for (var i = 0; i < arrow.length; i++) {
        arrow[i].classList.remove('rotate');
        
      }

  //Toggle our content
    content.classList.toggle('active');
    event.target.classList.toggle('bold');
    event.target.nextElementSibling.classList.toggle('rotate'); //Element that is just after the link
});