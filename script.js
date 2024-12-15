function calculateAge() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value) - 1; // Month is zero-based
    const year = parseInt(document.getElementById("year").value);
  
    if (!day || !month || !year || isNaN(day) || isNaN(month) || isNaN(year)) {
      document.getElementById("result").textContent = "Please enter valid date values.";
      return;
    }
  
    const today = new Date();
    const birthDate = new Date(year, month, day);
  
    if (birthDate > today) {
      document.getElementById("result").textContent = "Date of birth cannot be in the future!";
      return;
    }
  
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
  
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    document.getElementById("result").textContent = `Your age is ${age} years.`;
  }
  