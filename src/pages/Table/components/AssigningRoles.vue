<template>
    <div>
        <el-button type="warning" icon="el-icon-s-tools" class="buttonStyle" @click="AssigningRolesVisible = true"></el-button>
        <!-- 添加用户对话框 -->
        <el-dialog title="分配角色" :visible.sync="AssigningRolesVisible">
            <p>当前的用户：{{AssigningRolesForm.name}}</p>
            <p>当前的角色：{{AssigningRolesForm.role}}</p>
            <p>分配新角色：
                <el-select v-model="selectedRoleId" placeholder="请选择">
                    <el-option v-for="item in rolesList" :key="item.id" :label="item.roleName" :value="item.id">
                    </el-option>
                </el-select>
            </p>
            <div slot="footer" class="dialog-footer">
                <el-button @click="AssigningRolesVisible = false">取 消</el-button>
                <el-button type="primary" @click="AssigningRolesVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>

export default {
    name: 'AssigningRoles',
    props:['AssigningRolesForm'],
    data() {
        return {
            AssigningRolesVisible: false,
            selectedRoleId: '',
            rolesList: [
                { roleName: '管理员', id: 1 },
                { roleName: '游客', id: 2 },
                { roleName: '测试角色', id: 3 },
                { roleName: '普通用户', id: 4 },
            ],
        }
    },
}
</script>
<style lang="less" scoped>
    
</style>