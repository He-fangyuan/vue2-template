<template>
    <div>
        <el-button type="primary" icon="el-icon-edit" class="buttonStyle" @click="editVisible = true"></el-button>
        <!-- 添加用户对话框 -->
        <el-dialog title="编辑用户" :visible.sync="editVisible">
            <el-form :model="editForm" :rules="editRules" ref="editUserRule" label-width="100px">
                <el-form-item label="用户名">
                    <el-input v-model="editForm.name" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="editForm.email"></el-input>
                </el-form-item>
                <el-form-item label="手机" prop="mobile">
                    <el-input v-model="editForm.mobile"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="editVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { checkEmail, checkMobile } from '@/utils/validate'

export default {
    name: 'EditDialog',
    props:['editForm'],
    data() {
        return {
            editVisible: false,
            // editForm: {
            //     name: '',
            //     email: '',
            //     mobile:'',
            // },
            editRules: {
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
}
</script>
<style lang="less" scoped>
    
</style>