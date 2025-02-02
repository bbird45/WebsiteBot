<template>
    <div class="contact-page">
      <h1>CONTACT</h1>
      <div class="star-line">
        <span class="star">★</span>
        <span class="line">-------------</span>
        <span class="star">★</span>
      </div>
      <p class="name">นายทินภัทร แซ่พ่าน</p>
      <p class="student-id">รหัสนักศึกษา 64143134</p>
      <p class="social-media">
        <a href="https://www.facebook.com/bi12dtnp" target="_blank" class="facebook-link">
          <i class="fab fa-facebook"></i> Facebook
        </a>
      </p>
      <p class="email">Email: 
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=64143134@g.cmru.ac.th" target="_blank" class="gmail-link">64143134@g.cmru.ac.th</a>
      </p>
      <p class="major">สาขาวิทยาการคอมพิวเตอร์</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactPage',
  };
  </script>
  
  <style scoped>
  .contact-page {
    padding: 30px;
    background-color: #2f89d3;
    border-radius: 20px;
    font-family: 'Arial', sans-serif;
    max-width: 600px;
    margin: 30px auto;
    box-shadow: 0px 30px 40px rgba(0, 0, 0, 0.3), 0px 10px 20px rgba(8, 19, 174, 0.2);
    text-align: center;
    border: 3px solid #1d75b8;
    min-height: 100px;
  }
  
  h1 {
    color: #ffffff;
    font-size: 36px;
    font-weight: 900;
    margin: 0;
  }
  
  .star-line {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .star {
    font-size: 30px;
    color: #ffffff;
  }
  
  .line {
    font-size: 24px;
    color: #ffffff;
    margin: 0 10px;
  }
  
  .name {
    font-size: 26px;
    color: #ffffff;
    font-weight: bold;
  }
  
  .student-id, .social-media {
    font-size: 24px;
    color: #ffffff;
    font-weight: bold;
  }
  
  .social-media {
    margin-top: 20px;
  }
  
  .email {
    font-size: 24px;
    color: #ffffff;
    margin-top: 20px;
    font-weight: bold;
  }
  
  .gmail-link {
    color: #ffffff;
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
    padding: 10px;
    border-radius: 10px;
    background-color: #d64639;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
    transition: color 0.3s ease, background-color 0.3s ease, transform 0.3s ease;
  }
  
  .gmail-link:hover {
    color: #ffffff;
    background-color: #e14f35;
    transform: translateY(-3px);
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.3);
  }
  
  .major {
    font-size: 24px;
    color: #ffffff;
    margin-top: 20px;
    font-weight: bold;
  }
  
  .facebook-link {
    display: inline-flex;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
    transition: color 0.3s ease, transform 0.3s ease;
    padding: 10px;
    border-radius: 10px;
    background-color: #3b5998;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  }
  
  .facebook-link i {
    margin-right: 10px;
    font-size: 24px;
  }
  
  .facebook-link:hover {
    color: #ffffff;
    background-color: #365899;
    transform: translateY(-3px);
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.3);
  }
  
  p a {
    color: #ffffff;
    text-decoration: none;
    font-size: 24px;
  }
  
  p a:hover {
    color: #d1d1d1;
  }
  </style>
  