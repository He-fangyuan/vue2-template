<template>
    <div class="DragTableCard">
        <el-table
            :data="tableList"
            stripe
            border
            row-key="id"
            ref="dragTable"
            highlight-current-row
            header-cell-class-name="table-header-class"
            style="width: 100%">
                <el-table-column
                type="index"
                align="center"
                label="Id"
                width="80">
                </el-table-column>
                <el-table-column
                align="center"
                prop="date"
                label="Date">
                </el-table-column>
                <el-table-column
                prop="title"
                label="Title">
                </el-table-column>
                <el-table-column
                align="center"
                prop="author"
                width="120"
                label="Author">
                </el-table-column>
                <el-table-column
                width="120"
                label="Importance">
                    <template slot-scope="scope">
                        <svg-icon v-for="item in scope.row.importance" icon-class="xingxing" style="font-size: 18px; margin-right: 5px;"/>
                    </template>
                </el-table-column>
                <el-table-column
                align="center"
                prop="readings"
                width="100"
                label="Readings">
                </el-table-column>
                <el-table-column
                prop="status"
                align="center"
                width="100"
                label="Status">
                    <template slot-scope="scope">
                        <el-tag v-if="scope.row.status === 'published'" type="success">{{scope.row.status}}</el-tag>
                        <el-tag v-else type="info">{{scope.row.status}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                align="center"
                width="80"
                label="Drag">
                    <template>
                        <svg-icon icon-class="drag" style="font-size: 18px;"/>
                    </template>
                </el-table-column>
        </el-table>
    </div>
</template>
<script>
import Sortable from 'sortablejs'
import { dragTable } from '@/api/apis/table'
export default {
  components: {
    Sortable
  },
  data() {
    return {
        tableList: [],
        isChoose:false,
    }
  },
 mounted() {
    this.getTableListData()
    
  },
    methods: {
        async getTableListData() {
            const {data:res} = await dragTable()
            // console.log(res.data,res.meta.status);
            if (res.meta.status !== 200) {
                return this.$message.error('数据获取失败！')
            }
            this.tableList = res.data
            this.$message.success('数据获取成功！')
            this.$nextTick(() => {
                this.setSort()
            })
        },
      setSort() {
		// 表格中需要实现行拖动，所以选中tr的父级元素
		const el = this.$refs.dragTable.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0] // table
		this.sortable = Sortable.create(el,{
			ghostClass:'sortable-ghost',
			setData:function(dataTransfer){
				dataTransfer.setData('Text', '')
            },
            onChoose: evt => {
                console.log(evt);
             },
            onEnd: evt => {
                 const oldIndex = evt.oldIndex
                 const newIndex = evt.newIndex
                // console.log(newIndex, oldIndex) //:data="data" 所有数据
                 //先删除
                const targetRow= this.tableList.splice(oldIndex,1)[0]
                //再添加
                this.tableList.splice(newIndex,0,targetRow)
			}
		})
	},
  }
}
</script>
<style lang="less" scoped>
.DragTableCard {
    width: 100%;
    border-radius: 15px;
    padding: 10px;
    background-color: #f0f2f5;
    border: 1px solid #fff;
}
.table-header-class {
    color: #666;
}
</style>