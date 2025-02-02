<template>
    <div class="page">
      <h1>Welcome to BOT FlowCode AI</h1>
      <p>FlowCode AI is a LINE chatbot that is easy to use and offers a variety of features.</p>
      <div class="image-container">
        <img src="@/assets/Qr.png" alt="QR Code" class="qr-image" />
        <img src="@/assets/linebot.jpg" alt="LINE Logo" class="line-image" />
      </div>
    </div>
</template>

<script>
export default {
  name: 'ApplicationPage',  // ชื่อคอมโพเนนต์ต้องเป็นหลายคำตามกฎ ESLint
};
</script>

<style scoped>
.page {
  padding: 20px;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.qr-image {
  width: 200px; /* ขนาดของรูป QR เพิ่มขึ้นจาก 200px */
  height: auto;
  margin-right: 30px; /* เพิ่มระยะห่างระหว่างรูป */
}

.line-image {
  width: 230px; /* ขนาดของรูป LINE เพิ่มขึ้นจาก 150px */
  height: auto;
}
</style>
