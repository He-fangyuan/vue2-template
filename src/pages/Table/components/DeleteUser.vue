<template>
    <div>
        <el-button type="danger" icon="el-icon-delete" class="buttonStyle" @click="DeleteUserOpen(deleteUserId)"></el-button>
    </div>
</template>
<script>
import { checkEmail, checkMobile } from '@/utils/validate'

export default {
    name: 'DeleteUser',
    props:['deleteUserId'],
    data() {
        return {
        }
    },
    methods: {
        DeleteUserOpen(id) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
            this.$message({
                type: 'success',
                message: '删除成功!'
            });
            }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消删除'
            });          
            });
        }
    },
}
</script>
<style lang="less" scoped>
    
</style>