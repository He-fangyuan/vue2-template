<template>
    <div class="EditableTable">
    <!-- 顶部搜索和添加用户 -->
        <div class="topMenu">
            <!-- 搜索栏 -->
            <el-input placeholder="请输入内容" v-model="searchData" class="searchInput">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
            <AddUserDialog/>
        </div>
        <!-- 用户数据 -->
         <el-table
            :data="editList"
            stripe
            border
            highlight-current-row
            header-cell-class-name="table-header-class"
            style="width: 100%">
                <el-table-column
                type="index"
                label="序号"
                width="80">
                </el-table-column>
                <el-table-column
                width="100"
                prop="name"
                label="姓名">
                </el-table-column>
                <el-table-column
                prop="email"
                label="邮箱">
                </el-table-column>
                <el-table-column
                prop="mobile"
                label="电话">
                </el-table-column>
                <el-table-column
                prop="role"
                label="角色">
                </el-table-column>
                <el-table-column
                width="80px"
                label="状态">
                    <template slot-scope="scope">
                        <el-switch
                            v-model="scope.row.status"
                            active-color="#13ce66">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column
                width="170"
                label="操作">
                    <div slot-scope="scope" class="buttons">
                        <EditDialog :editForm='scope.row'/>
                        <DeleteUser :deleteUserId='scope.row.id' />
                        <AssigningRoles :AssigningRolesForm='scope.row'/>
                    </div>
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
import { editTable } from '@/api/apis/table'
import AddUserDialog from './components/AddUserDialog'
import EditDialog from './components/EditDialog'
import DeleteUser from './components/DeleteUser'
import AssigningRoles from './components/AssigningRoles'

export default {
    name: 'EditableTable',
    components:{AddUserDialog,EditDialog,DeleteUser,AssigningRoles},
    data() {
        return {
            searchData: '',
            editList: [],
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
        this.getEditListData()
    },
    methods: {
        async getEditListData() {
            const {data:res} = await editTable(this.queryInfo)
            // console.log(res.data);
            if (res.meta.status !== 200) {
                return this.$message.error('数据获取失败！')
            }
            this.editList = res.data.lists
            this.$message.success('数据获取成功！')
        },
        handleSizeChange(val) {
            this.queryInfo.pagesize = val
            this.getEditListData()
        },
        handleCurrentChange(val) {
            this.queryInfo.pagenum = val
            this.getEditListData()
        }
    },
}
</script>
<style lang="less" scoped>
.EditableTable {
    padding: 20px;
    background-color: #fff;
}
.topMenu {
    display: flex;
    align-items: center;
    height: 50px;
    margin-bottom: 10px;
    .searchInput {
        width: 350px;
        margin-right: 10px;
    }
}
.buttons {
    display: flex;
    justify-content: space-between;
}
.bottomPag {
    margin: 20px;
    text-align: right;
}
</style>