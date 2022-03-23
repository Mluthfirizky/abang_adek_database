<template>
  <div class="login">
    <div v-loading="loading" class="container">
      <div class="left">
        <div>
        <h1>
          Abang <br />
          Adek <br />
          Motor
        </h1>

        <h3>Dashboard</h3>
        </div>
      </div>
      <div class="right">
        <h1>Log in</h1>
        <el-form
          :model="loginInput" :rules="rules" ref="ruleForm"
          label-position="top"
          label-width="100px"
          style="width: 100%"
        >
          <el-form-item prop="name" label="Username">
            <el-input v-model="loginInput.name"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="Password">
            <el-input show-password v-model="loginInput.password"></el-input>
          </el-form-item>
          <div class="button-group">
          <el-form-item>
            <el-button type="primary" @click="login('ruleForm')"
              >Login</el-button
            >
            <el-button @click="resetForm('ruleForm')">Reset</el-button>
          </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
export default {
  data() {
    return {
      loading: false,
      labelPosition: "right",
      loginInput: {
        name: "",
        password: "",
      },
      rules: {
          name: [
            { type: 'email', required: true, message: 'Please input correct Email', trigger: 'blur' },
          ],
          password: [
            { required: true, message: 'Please input Password', trigger: 'blur' }
          ],
        }
    };
  },
  methods: {
     resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      login(formName){
        this.$refs[formName].validate(async (valid) => {
            console.log([formName])
          if (valid) {
            this.loading = true
            try {
              const val = await firebase.auth().signInWithEmailAndPassword(this.loginInput.name, this.loginInput.password)
              console.log(val)
              this.$message({
                message: 'Login success',
                type: 'success'
              })
              this.loading = false
              this.$router.replace('/')

            } catch (error) {
              this.loading = false
              this.$message({
                type: 'warning',
                message: 'Wrong email or password'})
            }
          } else {
           this.$message({
                type: 'warning',
                message: 'form cannot be empty!'})
          }
        });
            
      }
  }
};
</script>

<style>
.login {
  display: flex;
  align-items: center;
  padding: 100px 210px;
  height: 100vh;
  background-color: #333333;
}
.login .button-group{
  margin-top: 50px;
}
.container .left{
  background-image: url('../assets/bg.png');
  background-size: cover;
  background-repeat: no-repeat;
}
.left div{
  padding: 50px 40px 38px 45px;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
}

.container .left h1{
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 60px;
  line-height: 80px;
  color: #FFFFFF;
} 
.container .right{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 4;
  padding: 50px 40px 38px 45px;
}
.right h1{
  font-family: 'Poppins';
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 50px;
}
.left h3{
font-family: 'Poppins';
font-weight: 300;
font-size: 35px;
color: #FFFFFF;
}
.container{
  background: white;
  box-shadow: 0px 15px 30px 8px rgba(0, 0, 0, 0.25);
  display: flex;
  width: 100%;
  overflow: hidden;
  height: 100%;
}
.container div{
  flex: 3.5;
}
</style>
