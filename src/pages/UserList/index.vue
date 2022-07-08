<template>
    <div class="userListCard">
        <!-- 用户数据统计表信息 -->
        <el-table
            :data="userListData"
            stripe
            border
            highlight-current-row
            header-cell-class-name="table-header-class"
            style="width: 100%">
                <el-table-column
                type="index"
                label="序号"
                width="50">
                </el-table-column>
                <el-table-column
                prop="username"
                width="80px"
                label="用户姓名">
                </el-table-column>
                <el-table-column
                prop="email"
                width="200"
                label="邮箱地址">
                </el-table-column>
                <el-table-column
                prop="adress"
                label="注册地址">
                </el-table-column>
                <el-table-column
                prop="rigion"
                width="80px"
                label="地区">
                </el-table-column>
                <el-table-column
                prop="net"
                width="80px"
                label="网络">
                </el-table-column>
                <el-table-column
                prop="ip"
                label="IP地址">
                </el-table-column>
                <el-table-column
                prop="create_time"
                label="注册时间">
                </el-table-column>
                <el-table-column
                prop="login_time"
                label="登录时间">
                </el-table-column>
        </el-table>
         <div class="bottomPag">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="queryInfo.pagenum"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="queryInfo.pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
import { getUserList } from '@/api/apis/userMenu'

export default {
    name:'userList',
    data() {
        return {
            userListData: [],//用书数据列表
            queryInfo: {
                query: '',
                // 当前的页数
                pagenum: 1,
                // 当前每页显示多少条数据
                pagesize: 10
            },
            total: 800, //数据总条数
        }
    },
    mounted() {
        this.getUserListData()
    },
    methods: {
        async getUserListData() {
            const {data:res} = await getUserList(this.queryInfo)
            // console.log(res.data);
            if (res.meta.status !== 200) {
                return this.$message.error('数据获取失败！')
            }
            this.userListData = res.data.users
            this.$message.success('数据获取成功！')
        },
        handleSizeChange(val) {
            this.queryInfo.pagesize = val
            this.getUserListData()
        },
        handleCurrentChange(val) {
            this.queryInfo.pagenum = val
            this.getUserListData()
        }
    },
}
</script>
<style lang="less" scoped>
.userListCard {
    width: 100%;
    border-radius: 15px;
    padding: 10px;
    background-color: #f0f2f5;
    border: 1px solid #fff;
}
.table-header-class {
    color: #666;
}
.bottomPag {
    margin: 20px;
    text-align: right;
}
</style>