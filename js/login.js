/* 
    function convertToCSV(data) {
      const keys = Object.keys(data[0]);
      const csvContent = [
        keys.join(',')
      ];
      data.forEach(obj => {
        const values = keys.map(key => obj[key]);
        csvContent.push(values.join(','));
      });
      return csvContent.join('\n');
    }

    // Function to download CSV file
    function downloadCSV(csvContent) {
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'login_data.csv';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }

    // Event listener for form submission
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Create an array with form data
      const formData = [{
        username: username,
        password: password
      }];

      // Convert form data to CSV format
      const csvContent = convertToCSV(formData);

      // Download CSV file
      downloadCSV(csvContent);
    }); */
    
  $( document ).ready(function() {
    document.getElementById("loginForm").focus();
    });
  function loginUser(){
  $.ajax({
   url:"users.csv",
   dataType:"text",
   success:function(data)
   {
    var employee_data = data.split(/\r?\n|\r/);
    var mail =$('#username').val();
    var loginPass =$('#password').val();
    var myess=1;
    var pyess=1;
    for(var count = 0; count<employee_data.length-1; count++){
     var cell_data = users[count].split(",");
     for(var i=0;i<cell_data.length;i++){
       cell_data[i]=cell_data[i].replaceAll("_","");
     }
     if(mail==cell_data[1]){
      if(loginPass==cell_data[2]){
        Swal.fire({
          icon: 'success',
          title: 'Success',
          showConfirmButton: false,
          timer: 1500
        }).then(function(){
          window.location.href="index.html"+cell_data[0];
        })
        myess=0;
        pyess=0;
        count=users.length;
        }else{
          myess=0;  
        } 
      }
    }
    if(myess){
      Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Invalid mail'
            }).then(function() {
              document.getElementById("username").focus();
            })
     }else if(pyess){
        Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Incorrect password'
            }).then(function() {
              document.getElementById("password").focus();
            })
      }
  }})}
   