<template>
    <div>
        <el-button type="primary" @click="ChangeVisible">添加用户</el-button>
        <!-- 添加用户对话框 -->
        <el-dialog title="添加用户" :visible.sync="addUserVisible">
            <el-form :model="addUserForm" :rules="addUserRules" ref="addUserRule" label-width="100px">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="addUserForm.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="addUserForm.password"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="addUserForm.email"></el-input>
                </el-form-item>
                 <el-form-item label="手机" prop="mobile">
                    <el-input v-model="addUserForm.mobile"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="addUserVisible = false">取 消</el-button>
                <el-button type="primary" @click="addUserVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { checkEmail, checkMobile } from '@/utils/validate'

export default {
    name: 'AddUserDialog',
    data() {
        return {
            addUserVisible: false,
            addUserForm: {
                name: '',
                password: '',
                email: '',
                mobile:''
            },
            addUserRules: {
                name: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                ],
                email: [
                    { required: true, message: '请输入邮箱', trigger: 'blur' },
                    { validator: checkEmail, trigger: 'blur' }
                    ],
                mobile: [
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                    { validator: checkMobile, trigger: 'blur' }
                    ]
            }
        }
    },
    methods: {
        ChangeVisible() {
            this.addUserVisible = true
        }
        
    },
}
</script>
<style lang="less" scoped>
    
</style>