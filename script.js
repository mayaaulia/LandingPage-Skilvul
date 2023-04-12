const handleGetFormData = () => ({
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    city: document.getElementById("city").value,
    zipCode: document.getElementById("zip-code").value,
    status: document.getElementById("status").checked,
  });
  
  function isNumber(str) {
     return !isNaN(str);
  }
  
  function checkboxIsChecked (){
      const status = document.getElementById("status").checked;
      if(status==true){
          return true
      }
      return false
  }
  
  function validateFormData (object){
    if ( object.name !== "" && object.email !== "" && object.city !== "" 
    && isNumber(object.zipCode ) == true && checkboxIsChecked (object.status) == true){
        return true
    }
    return false
  }
  
  // const buttonSubmit = document.getElementById("submit-form");
  const submit = () => {
      if (!validateFormData(handleGetFormData())) {
          return document.getElementById('warning').innerText = 'Periksa form anda sekali lagi'
      } {
          return document.getElementById('warning').innerText = ''
      }
  }
  document.getElementById('submit-form').addEventListener('click', (event) => {
      event.preventDefault();
      submit()
  })
  
  
  
  
  
  