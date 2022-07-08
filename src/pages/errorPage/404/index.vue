<template>
	<div class="error401">
		<el-card class="imgcard">
			<img
				:src="errorimg"
				alt=""
			>
			<h2>404</h2>
			<p>抱歉,您访问的页面不存在。</p>
			<el-button
				type="primary"
				size='mini'
				@click='backhome'
			>返回首页</el-button>
		</el-card>
	</div>
</template>

<script>
import error404 from '@/assets/imgs/404.png';

export default {
	data() {
		return {
			errorimg: error404,
		};
	},
	methods: {
		backhome() {
			this.$router.push('/home');
		},
	},
};
</script>

<style lang="less" scoped>
.error401 {
	width: 100%;
	height: 100%;
}
.el-breadcrumb {
	margin-bottom: 10px;
}
.imgcard {
	width: 100%;
	height: 95%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	h2,
	p {
		width: 100%;
		text-align: center;
	}
	.el-button {
		margin-top: 10px;
		margin-left: 100px;
	}
}
</style>