document.getElementById("reservation_form").addEventListener("submit", function (event) {
    event.preventDefault();
    var arrivalDate = document.getElementById("arrival_date").value;
    var nights = document.getElementById("nights").value;
    var email = document.getElementById("email").value;
    if (!arrivalDate || !nights || !email) {
      alert("All fields are required.");
      return;
    }
    if (isNaN(parseInt(nights))) {
      alert("Number of nights must be numeric.");
      return;
    }
    if (!emailPattern.test(email)) {
      alert("Invalid email address.");
      return;
    }
    document.getElementById("arrival_date").value = arrivalDate.trim();
    document.getElementById("nights").value = nights.trim();
    document.getElementById("email").value = email.trim();
    document.getElementById("reservation_form").submit();
  });
