<template>
  <form action="">
    <div class="form-control">
      <label for="firstname">Firstname</label>
      <input type="text" id="firstname">
    </div>
    <div class="form-control">
      <label for="lastname">Lastname</label>
      <input type="text" id="lastname">
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea type="description" row="5"></textarea>
    </div>
    <div class="form-control">
      <h3>Areas of Expertise</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend">
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input type="checkbox" id="backend" value="backend">
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input type="checkbox" id="android" value="android">
        <label for="android">Android Development</label>
      </div>
      <div>
        <input type="checkbox" id="ios" value="ios">
        <label for="ios">iOS Development</label>
      </div>
    </div>
    <base-button>등록</base-button>
  </form>
</template>

script