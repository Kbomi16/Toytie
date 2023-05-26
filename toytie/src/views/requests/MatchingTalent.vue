<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="address">오픈채팅방 주소를 입력하세요.</label>
      <input type="address" id="address" v-model.trim="address">
    </div>
    <div>
      <label for="message">Message</label>
      <textarea id="message" rows="5" v-model.trim="message"></textarea>
    </div>
    <p class="errors" v-if="!formIsValid">유효한 주소를 입력하세요.</p>
    <div class="actions">
      <base-button>쪽지 보내기</base-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      address: '',
      message: '',
      formIsValid: true
    }
  },
  methods: {
    submitForm() {
      this.formIsValid = true
      if (this.address === '' || this.message === '') {
        this.formIsValid = false
        return
      }
      this.$store
    }
  }
}
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>