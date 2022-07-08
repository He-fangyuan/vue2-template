<template>
    <div>
        <div class="excelTopContainer">
            <div class="fileNameOPtion">
                <label class="radio-label" style="padding-left:0;">File name: </label>
                <el-input v-model="filename" placeholder="Please enter the file name (default excel-list)" style="width:345px;" prefix-icon="el-icon-document" />
            </div>
            <ExcelTypeOption v-model="excelType" />
            <el-button :loading="downloadLoading" type="primary" icon="el-icon-document" @click="handleDownload">
                Export Excel
            </el-button>
            <a href="https://panjiachen.github.io/vue-element-admin-site/feature/component/excel.html" target="_blank" style="margin-left:15px;">
                <el-tag type="info">Documentation</el-tag>
            </a>
        </div>
        <el-table
            ref="multipleTable"
            :data="excelData"
            border
            highlight-current-row
            header-cell-class-name="table-header-class"
            @selection-change="handleSelectionChange"
            style="width: 100%">
                <el-table-column
                    type="selection"
                    align="center"
                    width="55">
                </el-table-column>
                <el-table-column
                label="ID"
                prop="id"
                align="center"
                width="80">
                </el-table-column>
                <el-table-column
                prop="title"
                label="Title">
                </el-table-column>
                 <el-table-column
                label="Author"
                align="center"
                width="100">
                    <template slot-scope="scope">
                        <el-tag>{{ scope.row.author }}</el-tag>
                    </template>
                </el-table-column>
                 <el-table-column
                prop="readings"
                label="Readings"
                align="center"
                width="100">
                </el-table-column>
                 <el-table-column
                label="Date"
                align="center"
                width="200">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 5px">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
        </el-table>
    </div>
</template>
<script>
import { excelExport } from '@/api/apis/excel'
import AutoWidth from './components/AutoWidth'
import ExcelTypeOption from './components/ExcelTypeOption'

export default {
    name: 'ExcelExport',
    data() {
        return {
            excelData: [], //excel数据
            filename: '',
            downloadLoading: false,
            excelType: 'xlsx',
            multipleSelection: []
        }
    },
    mounted() {
        this.getExcelData()
    },
    methods: {
        async getExcelData() {
            const { data:res } = await excelExport()
            // console.log(res);
            if (res.meta.status !== 200) {
                return this.$message.error('数据获取失败！')
            }
            this.excelData = res.data.msg
            this.$message.success('数据获取成功！')
        },
        handleDownload() {
            if (this.multipleSelection.length) {
                this.downloadLoading = true
                import('@/vendor/Export2Excel').then(excel => {
                    const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date']
                    const filterVal = ['id', 'title', 'author', 'readings', 'date']
                    const list = this.multipleSelection
                    const data = this.formatJson(filterVal, list)
                    excel.export_json_to_excel({
                        header: tHeader,
                        data,
                        filename: this.filename,
                        bookType: this.excelType
                    })
                    this.$refs.multipleTable.clearSelection()
                    this.downloadLoading = false
                })
            } else {
                this.$message.warning('至少要选择一项！')
            }
            
        },
        formatJson(filterVal, jsonData) {
            return jsonData.map(v => filterVal.map(j => {
                if (j === 'timestamp') {
                  return parseTime(v[j])
                } else {
                  return v[j]
                }
            }))
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
      }
    },
    components: {
        AutoWidth,
        ExcelTypeOption
    }
}
</script>
<style lang="less" scoped>
.excelTopContainer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 20px 0;
    background-color: #fff;
    font-size: 14px;
    font-weight: 700;
} 

</style>