<template>
    <div class="UserMoney">
        <el-table
        :data="UserMoneyData"
        stripe
        style="width: 100%">
            <el-table-column
            label="用户名">
                <template slot-scope="scope">
                    <i class="el-icon-user-solid"></i>
                    <span style="margin-left: 10px">{{ scope.row.username }}</span>
                </template>
            </el-table-column>
            <el-table-column
            label="价格">
            <template slot-scope="scope">
                    <span v-if="scope.row.price < 3000" style="color: #59c4e6;">{{ scope.row.price | dollar}}</span>
                    <span v-else-if="scope.row.price > 7000" style="color: #2f4554;">{{ scope.row.price | dollar}}</span>
                    <span v-else style="color: #d53a35;">{{ scope.row.price | dollar}}</span>
                </template>
            </el-table-column>
            <el-table-column
            label="日期">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
            </el-table-column>
            <el-table-column
            label="状态">
                <template slot-scope="scope">
                    <el-tag v-if="scope.row.status=='EXTENDED'" type="success">{{ scope.row.status }}</el-tag>
                    <el-tag v-else-if="scope.row.status=='TAX'">{{scope.row.status }}</el-tag>
                    <el-tag v-else type="danger">{{ scope.row.status }}</el-tag>
                </template>
            </el-table-column>
    </el-table>
    </div>
</template>
<script>
import userMoneyLists from '@/assets/data/userMoney'
export default {
    name: 'userMoneyList',
    data() {
        return {
            UserMoneyData:userMoneyLists,
        }
    },
    methods: {
        
    },
    filters: {
        dollar(money) {
            return '$ ' + money
        }
    }
}
</script>
<style lang="less" scoped>
.UserMoney {
    width: 45%;
    height: 100%;
    border-radius: 5px;
    background-color: #eaebec;
    overflow: scroll;
}  
</style>