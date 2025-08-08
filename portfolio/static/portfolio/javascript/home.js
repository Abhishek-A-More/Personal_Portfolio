// typed greeting
var typed = new Typed('#typed', {
  strings: ['"Hello world!"', '"Welcome to my portfolio"'],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true
});


// slide in animation for skills section 
document.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.rowhide'); // Select all elements with 'rowhide' class
  const gridSection = document.querySelector('.grd-section'); // Select the parent section
  const sectionPosition = gridSection.getBoundingClientRect(); // Get position relative to the viewport

  // Check if the section is in the viewport
  if (sectionPosition.top < window.innerHeight && sectionPosition.bottom > 0) {
    elements.forEach((element) => {
      element.classList.remove('rowhide'); // Remove the hidden state
      element.classList.add('skillrow'); // Add the animation class
    });
  } else {
    elements.forEach((element) => {
      element.classList.remove('skillrow'); // Remove the animation class
      element.classList.add('rowhide'); // Add the hidden state
    });
  }
});

// for submission button 
$(document).ready(function () {
  $("#myform").submit(function (event) {
    event.preventDefault();

    let csrfToken = $("input[name='csrfmiddlewaretoken']").val();

    let formData = {
      name: $("#id_name").val(),
      email: $("#id_email").val(),
      message: $("#id_message").val(),
      csrfmiddlewaretoken: csrfToken
    };
    

    $.ajax({
      type: "POST",
      url: showUrl, 
      data: formData,
      dataType: "json",
      success: function (response) {
        if (response.success) {
          $("#formDiv").addClass("hidden");
          $("#submittedDiv").removeClass("hidden");
        } else {
          $(".error-message").remove();  // Remove previous error messages

          for (const field in response.errors) {
            const errorMessage = response.errors[field][0];  // Get first error
            $(`#id_${field}`).after(`<span class="error-message text-danger">${errorMessage}</span>`);
          }
        }
      },
      error: function () {
        alert("An error occurred. Please try again.");
      }
    });
  });
});
