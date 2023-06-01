<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{invalid: !projectName.isValid}">
      <label for="projectname">프로젝트 이름/주제</label>
      <input
        type="text"
        id="projectname"
        v-model.trim="projectName.val"
        @blur="clearValidity('projectName')"
      />
      <p v-if="!fullName.isValid">이름을 입력해주세요.</p>
    </div>
    <div class="form-control" :class="{invalid: !fullName.isValid}">
      <label for="fullname">이름</label>
      <input
        type="text"
        id="fullname"
        v-model.trim="fullName.val"
        @blur="clearValidity('fullName')"
      />
      <p v-if="!fullName.isValid">이름을 입력해주세요.</p>
    </div>
    <div class="form-control" :class="{invalid: !description.isValid}">
      <label for="description">프로젝트를 소개 해주세요. </label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="description.val"
        @blur="clearValidity('description')"
      ></textarea>
      <p v-if="!description.isValid">소개를 입력해주세요.</p>
    </div>
    
    <div class="form-control" :class="{invalid: !areas.isValid}">

      <h3>개발 분야 및 언어를 선택해주세요.</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="android"
          value="android"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="android">Android Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="ios"
          value="ios"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="ios">iOS Development</label>
      </div>
      <p v-if="!description.isValid">개발 분야 및 언어를 선택해주세요.</p>
    </div>
    <p v-if="!formIsValid">양식을 다시 쓰고 제출하세요.</p>
    <base-button>등록</base-button>
  </form>
</template>

<script>
  export default {
  emits: ['save-data'],
  data() {
    return {
      projectName: {
        val: '',
        isValid: true
      },
      fullName: {
        val: '',
        isValid: true
      },
      description: {
        val: '',
        isValid: true
      },
      areas: {
        val: [],
        isValid: true,
      },
      formIsValid: true,
    }
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.projectName.val === '') {
        this.projectName.isValid = false;
        this.formIsValid = false;
      }
      if (this.fullName.val === '') {
        this.fullName.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (this.areas.val.length === 0) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        first: this.projectName.val,
        last: this.fullName.val,
        desc: this.description.val,
        areas: this.areas.val,
      };
      this.$emit('save-data', formData);
    }
  }
}

</script>

<style scoped>
* {
  font-family: 'AppleSDGothicNeoR', sans-serif;
}
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #AD8B73;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #AD8B73 solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>

