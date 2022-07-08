<template >
    <div>
        <!-- 表格 -->
      <tree-table
        class="treeTable"
        :data="treeList"
        :columns="columns"
        :selection-type="false"
        :expand-type="false"
        show-index
        index-text="#"
        border
        :show-row-hover="false"
      >
        <!-- 是否有效 -->
        <template slot="isok" slot-scope="scope">
          <i
            class="el-icon-success"
            v-if="scope.row.cat_deleted === false"
            style="color: lightgreen"
          ></i>
          <i class="el-icon-error" v-else style="color: red"></i>
        </template>
        <!-- 排序 -->
        <template slot="order" slot-scope="scope">
          <el-tag size="mini" v-if="scope.row.cat_level === 0">一级</el-tag>
          <el-tag
            type="success"
            size="mini"
            v-else-if="scope.row.cat_level === 1"
            >二级</el-tag
          >
          <el-tag type="warning" size="mini" v-else>三级</el-tag>
        </template>
        <!-- 操作 -->
        <template slot="opt">
          <el-button type="primary" icon="el-icon-edit" size="mini"
            >编辑</el-button
          >
          <el-button type="danger" icon="el-icon-delete" size="mini"
            >删除</el-button
          >
        </template>
      </tree-table>
    </div>
</template>
<script>
import { treeTable } from '@/api/apis/table'

export default {
    name: 'TreeDataTable',
    data() {
        return {
            treeList: [],
            // 为table指定列的定义
            columns: [
                {
                label: '分类名称',
                prop: 'cat_name',
                },
                {
                label: '是否有效',
                // 表示，将当前列定义为模板列
                type: 'template',
                // 表示当前这一列使用模板名称
                template: 'isok',
                },
                {
                label: '排序',
                // 表示，将当前列定义为模板列
                type: 'template',
                // 表示当前这一列使用模板名称
                template: 'order',
                },
                {
                label: '操作',
                // 表示，将当前列定义为模板列
                type: 'template',
                // 表示当前这一列使用模板名称
                template: 'opt',
                },
            ],
        }
    },
    mounted() {
        this.getTreeData()
    },
    methods: {
        async getTreeData() {
            const { data: res } = await treeTable()
            // console.log(res.data);
            if (res.meta.status !== 200) {
                return this.$message.error('数据获取失败！')
            }
            this.treeList = res.data
            // console.log(this.treeList);
            this.$message.success('数据获取成功！')
        },
    }
}
</script>
<style lang="less" scoped>
    
</style>