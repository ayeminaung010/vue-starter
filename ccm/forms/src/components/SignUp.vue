<template>
  <form @submit.prevent="submit">
    <h3>Sign Up Form</h3>
    <label for="">Email</label>
    <input type="email" v-model="email" required />
    <div class="">
      {{ email }}
    </div>

    <label for="">phone number</label>
    <input type="number" v-model="phoneNo" required />
    <div class="">
      {{ phoneNo }}
    </div>

    <label for="">Name</label>
    <input type="text" v-model="name" required />
    <div class="">
      {{ name }}
    </div>

    <label for="">Password</label>
    <input type="password" v-model="password" required />
    <div class="">
      {{ password }}
    </div>

    <label for="">Roles</label>
    <select v-model="role">
      <option selected disabled>Select One</option>
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>
    <div class="">
      {{ role }}
    </div>

    <div class="">
      <input type="checkbox" v-model="isAgree" />
      <label for="">Accept the term and conditions</label>
    </div>
    <div class="">
      {{ isAgree }}
    </div>

    <div class="">
      <label for="">Check Names:</label>
      <div class="">
        <input type="checkbox" value="ayeminaung" v-model="names" />
        <label for="">ayeminaung</label>
      </div>

      <div class="">
        <input type="checkbox" value="kyawkyaw" v-model="names" />
        <label for="">kyawkyaw</label>
      </div>

      <div class="">
        <input type="checkbox" value="aungaung" v-model="names" />
        <label for="">aungaung</label>
      </div>
    </div>
    <div class="">
      {{ names }}
    </div>

    <div class="">
      <label for="">Gender</label>
      <div class="">
        <input type="radio" value="male" v-model="gender" />
        <label for="">Male</label>
      </div>
      <div class="">
        <input type="radio" value="female" v-model="gender" />
        <label for="">Female</label>
      </div>
    </div>
    <div class="">
      {{ gender }}
    </div>

    <label for="">Skills</label>
    <input type="text" v-model="skill" @keyup.alt="addSkill" required />
    <div  v-for="skill in skills" :key="skill">
        <span class="skill">{{ skill }} <span class="cross" @click="deleteSkill(skill)">&#x2716;</span></span>
    </div>
    <div class="">
      <button class="createBtn">Create</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      phoneNo: "",
      name: "",
      password: "",
      gender: "", //radio
      role: "", //select box
      isAgree: false, //checkbox
      names: [], //multiple checkboxes
      skills:[],
      skill: "",//html 
    };
  },
  methods: {
    addSkill(e){
        console.log(e);
        if(e.key === ',' && this.skill ){
            this.skills.push(this.skill);
            this.skill = "";
        }
    },
    deleteSkill(skill){
        this.skills = this.skills.filter((i) => i !== skill )
    },
    submit(){
      console.log('submit')
    }
  }
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"],input[type="radio"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.skill{
    background: greenyellow;
    color: white;
    padding: 0px 10px;
    border-radius: 5px;
    margin-top: 10px;
}
.cross{
    color: red;
    cursor: pointer;
}
.createBtn{
  background: blue;
  border: none;
  padding: 10px 20px;

}
</style>