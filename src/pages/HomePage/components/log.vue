<template>
	<div class="logContainer">
        <div class="CardsContainer">
            <div
				slot="header"
				class="clearfix topPosition"
			>
                <svg-icon icon-class="github"/>
				<span style="margin-left: 10px;">项目更新日志：</span>
			</div>
            <el-card class="box-card">
                <div class="logArea">
                    <div
                        class="item"
                        v-for='(item,index) in logsData'
                        :key='index'
                    >
                        <div class="timeArea">
                            <span class="title font14">日期：</span>
                            <span
                                class="title time font14"
                                style="color:#87de75"
                            >{{item.createTime}}</span>
                        </div>
                        <div class="logContent">
                            <p class="title font14">更新内容：</p>
                            <ul class="logUI">
                                <li
                                    v-for='(citem,cindex) in item.data'
                                    :key='cindex'
                                    class="font14 marginLeft liodd"
                                >{{citem}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </el-card>
        </div>
	</div>
</template>

<script>
import logsData from '@/assets/datas/logs.json';
export default {
	data() {
		return {
			logsData: logsData.data,
		};
	},
};
</script>

<style>
.logContainer {
	display: flex;
	justify-content: center;
	align-items: center;
    width: 30%;
    padding: 10px;
	border-radius: 10px;
	background-color: #eaebec;
}
.CardsContainer {
    height: 380px;
	border-radius: 10px;
    background-color: #fff;
}
.topPosition {
    height: 60px;
    line-height: 60px;
    padding-left: 30px;
    border-bottom: 1px solid #eaebec;
}
.box-card {
	height: 320px;
	border-radius: 10px;
	overflow: scroll;
	background-color: #fff;
}
.box-card::-webkit-scrollbar {
        /* Y轴滚动条宽度 */
        width: 4px;
        /* X轴滚动条高度 */
        height: 0px
    }
.box-card::-webkit-scrollbar-track {
        background: #eaebec;
        border-radius: 2px;
      }
.box-card::-webkit-scrollbar-track-piece {
    background-color: #eaebec;
    }
.box-card::-webkit-scrollbar-thumb {
    background: rgb(169, 16, 16);
    border-radius: 10px;
    }
.item {
	margin: 3px;
	padding-top: 10px;
	border-top: 1px solid #666;
}
.item:nth-child(1) {
	padding-top: 0;
	border-top: 0px solid #666;
}
.font14 {
	font-size: 14px;
}
.marginLeft {
	margin-left: 10px;
	margin-bottom: 2px;
}
.logUI {
	margin-left: 20px;
}
.liodd {
	list-style: disc;
}
</style>