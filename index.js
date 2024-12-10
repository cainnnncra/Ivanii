function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      phone: document.getElementById("phone").value,
      company: document.getElementById("company").value
    };

    const serviceID = "service_r4rmyy2";
    const templateID = "template_w5ug3dg";

      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("company").value = "";
          console.log(res);
          alert("Your message sent successfully!!")

      })
      .catch(err=>console.log(err));

  }