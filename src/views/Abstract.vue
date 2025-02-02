<template>
    <div class="abstract-page">
      <h1>ABSTRACT</h1>
      <div class="star-line">
        <span class="star">★</span>
        <span class="line">-------------</span>
        <span class="star">★</span>
      </div>
      <div class="abstract-content">
        การพัฒนาแวทบอทเพื่อให้ความรู้เกี่ยวกับผังงานและรหัสเทียม เป็นแนวทางที่
        สามารถช่วยลดขั้นตอนในการจัดเก็บข้อมูลที่เกี่ยวข้อง อาทิ ข้อมูลเนื้อหาผังงาน
        ข้อมูลเนื้อหารหัสเทียม ข้อมูลแบบทดสอบ ข้อมูลคะแนนสอบ และข้อมูลค่าถาม
        ทั้งนี้ แวทบอทไลน์ถือเป็นแอปพลิเคชันที่ได้รับความนิยมในปัจจุบัน ซึ่งสามารถใช้
        เป็นช่องทางสําหรับการสอบถามข้อมูลเกี่ยวกับผังงานและรหัสเทียมได้อย่างสะดวก
        สบาย โดยเป็นอีกทางเลือกหนึ่งที่สามารถอํานวยความสะดวกให้แก่ผู้ใช้งานได้เป็น
        อย่างดี แวทบอทดังกล่าวได้รับการพัฒนาขึ้นโดยใช้โปรแกรม Visual Studio Code
        โดยใช้ Vue ร่วมกับภาษา JavaScript เพื่อออกแบบหน้าจอการใช้งานที่มีความทัน
        สมัย สวยงาม และใช้งานง่าย ตอบโจทย์ความต้องการของผู้ใช้งานได้อย่างมี
        ประสิทธิภาพ
        <br>
        การใช้งานแวทบอทเพื่อให้ความรู้เกี่ยวกับผังงานและรหัสเทียม จะช่วยให้ผู้ใช้งาน
        สามารถเข้าถึงข้อมูลและเนื้อหาที่เกี่ยวข้องได้อย่างมีประสิทธิภาพ โดยแวทบอทมี
        การนําเสนอเนื้อหาในแต่ละหมวดหมู่ที่ผู้ใช้งานสามารถเลือกเรียนรู้ได้ตามความ
        ต้องการ เช่น เบื้อหาผังงาน เบื้อหารหัสเทียม ค่าถามที่พบบ่อย และแบบทดสอบ
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AbstractPage',
  };
  </script>
  
  <style scoped>
  .abstract-page {
    padding: 35px;
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
    font-size: 24px;
    color: #ffffff;
  }
  
  .line {
    font-size: 24px;
    color: #ffffff;
    margin: 0 10px;
  }
  
  .abstract-content {
    font-size: 18px;
    color: #ffffff;
    text-align: justify; 
    line-height: 1.3;
    margin-top: 20px;
    margin-bottom: 15px;
    white-space: pre-wrap; 
  }
  </style>