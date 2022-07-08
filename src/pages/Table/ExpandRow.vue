<template>
    <div>
        <el-table
            :data="goodsList"
            style="width: 100%">
            <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="商品名称">
                        <span>{{ props.row.goodsName }}</span>
                    </el-form-item>
                    <el-form-item label="所属店铺">
                        <span>{{ props.row.shopName }}</span>
                    </el-form-item>
                    <el-form-item label="商品 ID">
                        <span>{{ props.row.goodsId }}</span>
                    </el-form-item>
                    <el-form-item label="店铺 ID">
                        <span>{{ props.row.shopId }}</span>
                    </el-form-item>
                    <el-form-item label="店铺地址">
                        <span>{{ props.row.address }}</span>
                    </el-form-item>
                    <el-form-item label="商品描述">
                        <span>{{ props.row.introduce }}</span>
                    </el-form-item>
                </el-form>
            </template>
            </el-table-column>
            <el-table-column
            label="商品 ID"
            prop="goodsId">
            </el-table-column>
            <el-table-column
            label="商品名称"
            prop="goodsName">
            </el-table-column>
            <el-table-column
            label="描述"
            prop="introduce">
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
import { expandTable } from '@/api/apis/table'

export default {
    name: 'expandTable',
    data() {
        return {
            goodsList: [],
            total: 800,
            queryInfo: {
                query: '',
                // 当前的页数
                pagenum: 1,
                // 当前每页显示多少条数据
                pagesize: 20
            },
        }
    },
    mounted() {
        this.getGoodsList()
    },
    methods: {
        async getGoodsList() {
            const {data:res} = await expandTable(this.queryInfo)
            // console.log(res.data);
            if (res.meta.status !== 200) {
                return this.$message.error('数据获取失败！')
            }
            this.goodsList = res.data.arr
            // console.log(this.goodsList);
            this.$message.success('数据获取成功！')
        },
        handleSizeChange(val) {
            this.queryInfo.pagesize = val
            this.getGoodsList()
        },
        handleCurrentChange(val) {
            this.queryInfo.pagenum = val
            this.getGoodsList()
        }
    },
    
}
</script>
<style lang="less" scoped>
  .demo-table-expand {
    padding: 10px 55px;
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    display: flex;
    align-items: center;
    color: #304156;
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .bottomPag {
    margin: 20px;
    text-align: right;
}
</style>