<template>
  <div id="login">
    <div class="login_box">
      
      <el-form model="ruleForm2" status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm">      
        <el-form-item label="用户名">
          <el-input placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" auto-complete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">提交</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Login extends Vue {
  
}
</script>

<style scoped>
.login_box {
  width: 600px;
  height: 300px;
  padding: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 1px 1px 5px #333;
}
</style>

