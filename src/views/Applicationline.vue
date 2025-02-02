<template>
    <div class="page">
      <h1 class="title">Welcome to BOT FlowCode AI</h1>
      <p class="scan-message">Scan the QR code to start using the chatbot.</p>
      <div class="image-container">
        <img src="@/assets/LineQr.png" alt="QR Code" class="qr-image" />
        <img src="@/assets/linebot.jpg" alt="LINE Logo" class="line-image" />
      </div>
    </div>
</template>

<script>
export default {
  name: 'ApplicationPage',
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
  width: 300px; 
  height: auto;
  margin-right: 50px; 
}

.line-image {
  width: 200px; 
  height: auto;
}

.scan-message {
  font-size: 20px; 
  color: #2f89d3; 
  margin-top: 10px;
}

.title {
  font-size: 30px; 
  color: #2f89d3; 
  font-weight: 900; 
  margin-bottom: 10px; 
}
</style>
