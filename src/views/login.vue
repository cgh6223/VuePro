<template>
  <div class="login_page">
    <transition name="el-fade-in-linear">
      <section class="form_contianer">
        <div class="titleArea rflex">
          <img class="logo" :src="logo" />
          <span class="title">
            <i>项目信息管理系统</i>
          </span>
        </div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm" class="loginForm">
          <el-form-item prop="username" class="login-item">            
            <span class="loginTips">
            
             <i class="el-icon-edit"></i>
            </span>
            <el-input
              @keyup.enter.native="submitForm('loginForm')"
              class="area"
              type="text"
              placeholder="用户名"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password" class="login-item">
            <span class="loginTips">
              
            </span>
            <el-input
              @keyup.enter.native="submitForm('loginForm')"
              class="area"
              type="password"
              placeholder="密码"
              v-model="loginForm.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">SIGN IN</el-button>
          </el-form-item>          
          
        </el-form>
      </section>
    </transition>
  </div>
</template>
<script>
import logoImg from "@/assets/img/logo.png";
import {  
    GetToken,
    SetToken } from "../utils/auth";

import Mock from "mockjs";

let List=[];
const count=10;
for (let i = 0; i < count; i++) {
       List.push(Mock.mock({
      id: Mock.Random.guid(),
      sortnum: i + 1,
      username: Mock.Random.ctitle(2,14),
      address: Mock.mock('@county(true)'),
      createTime: Mock.Random.datetime(),
      updateTime: Mock.Random.now(),
      ip:Mock.mock('@ip'),
      region:Mock.mock('@region'),
      areaId:/\d{7}/,
      email: Mock.Random.email(),
      city:Mock.Random.city(),
      shows: Mock.Random.boolean    
    }))
  }
export default {
  data() {
    const myuser={username:'cgh',pwd:'ssss'};
    return {
      logo: logoImg,
      myusers:List,
      loginForm: {
        username: "admin",
        password: "123456"
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 8, message: "长度在 2 到 8 个字符", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  mounted() {},
  methods: {
   
    showMessage(type, message) {
      this.$message({
        type: type,
        message: message
      });
    },
    submitForm(loginForm) {
      let t = this;
      this.$refs[loginForm].validate(valid => {
        if (valid) {  
          if(t.loginForm.username=="admin"&&t.loginForm.password=="123456"){
SetToken("Token","admin");
 this.$router.push({path:"/"});
          }       
        
          // login(this.loginForm).then(res => { 
          // let userlist = res.data.userList;
          //   setCookies("Token", userlist.token);
          //   this.$router.push({path:"/home"});
          //   console.log(this.$store.getters.routers);
          // });
          // let userinfo = this.loginForm;
          // login(userinfo).then(res => {
          // 	let userList = res.data.userList;
          // 	setCookies("Token",userList.token)
          // 	this.$router.push({ path: '/' })
          // 	this.$store.dispatch('initLeftMenu'); //设置左边菜单始终为展开状态
          // })
        }
      });
    }
  }
};
</script>

<style lang="less">
.login_page {
  position: absolute;
  width: 99%;
  height: 99%;
  background: url(../assets/img/bg9.jpg) no-repeat center center;
  background-size: 100% 100%;
}
.form_contianer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  width: 370px;
  border-radius: 5px;
  padding: 25px;
  text-align: center;
  .titleArea {
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 22px;
    width: 100%;
    padding-bottom: 20px;
    .logo {
      width: 40px;
      margin-right: 10px;
    }
    .title {
      i {
        color: #ff6c60;
      }
    }
  }

  .loginForm {
    .submit_btn {
      width: 100%;
      padding: 13px 0;
      font-size: 16px;
    }
    .loginTips {
      position: absolute;
      left: 10px;
      z-index: 20;
      /* color: #FF7C1A; */
      font-size: 18px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}

.manage_tip {
  margin-bottom: 20px;
  .title {
    font-family: cursive;
    font-weight: bold;
    font-size: 26px;
    color: #fff;
  }
  .logo {
    width: 60px;
    height: 60px;
  }
}

.tiparea {
  text-align: left;
  font-size: 12px;
  color: #4cbb15;
  padding: 10px 0;
  .tip {
    margin-left: 54px;
  }
}

.form-fade-enter-active,
.form-fade-leave-active {
  transition: all 1s;
}
.form-fade-enter,
.form-fade-leave-active {
  transform: translate3d(0, -50px, 0);
  opacity: 0;
}
.loginForm {
  .el-button--primary {
    background-color: #ff7c1a;
    border: 1px solid #ff7c1a;
  }
}
.sanFangArea {
  border-top: 1px solid #dcdfe6;
  padding: 10px 0;
  display: none;
  .title {
    font-size: 14px;
    color: #8b9196;
    margin-bottom: 10px;
  }
  ul {
    li {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      
    }
  }
}
</style>