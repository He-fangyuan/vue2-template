<template>
    <div class="shareCard">
        <div slot="header" class="clearfix topTitle">
            <span>分享组件三：仿简书底部分享</span>
        </div>
        <div class='RowItems'>
            <div class="svgContainer">
                <!-- 微信二维码分享 -->
                <div class="svgCard flex-row weixin"
                    @mouseover="showqrcode"
					@mouseout="hideqrcode">
                    <svg-icon icon-class="weixin"/>
                    <div class="qrcodeArea" v-show="qrcode.show">
						<p class="saoTitle">扫一扫</p>
						<div class="qrcode" id="jianShuqrCodeUrl"></div>
					</div>
                </div>
                <span class="svgCard flex-row" @click="shareToWeibo">
                    <svg-icon icon-class="weibo"/>
                </span>
                <span class="svgCard flex-row" @click="shareToQQ">
                    <svg-icon icon-class="QQ1"/>
                </span>
                <el-popover
                    placement="top"
                    trigger="click">
                    <div class="LinksContainer">
                        <a class="linkItem">
                            <svg-icon icon-class="QQkongjian"/>
                            <span>分享到QQ空间</span>
                        </a>
                         <a class="linkItem">
                            <svg-icon icon-class="douban"/>
                            <span>分享到豆瓣</span>
                        </a>
                        <a class="linkItem">
                            <svg-icon icon-class="twitter"/>
                            <span>分享到Witter</span>
                        </a>
                        <a class="linkItem">
                            <svg-icon icon-class="facebook"/>
                            <span>分享到Facebook</span>
                        </a>
                        <a class="linkItem">
                            <svg-icon icon-class="google"/>
                            <span>分享到Google</span>
                        </a>
                    </div>
                    <el-button slot="reference" round>更多分享</el-button>
                </el-popover>
            </div>
        </div>
    </div>
</template>
<script>
import QRCode from 'qrcodejs2';
import { shareUrl } from '@/utils/env';

export default {
    name: 'RowArray',
    data() {
        return {
            qrcode: {
				show: false,
            },
            qrcodeObj: {
				text: shareUrl, // 要分享的网页路径
				width: 80,
				height: 80,
				colorDark: '#000000',
				colorLight: '#ffffff',
				correctLevel: QRCode.CorrectLevel.H,
			},
        }
    },
    mounted() {
		this.creatQrCode();
    },
    methods: {
        showqrcode() {
			this.qrcode.show = true;
		},
		hideqrcode() {
			this.qrcode.show = false;
		},
		creatQrCode() {
			this.$nextTick(() => {
				new QRCode(
					document.getElementById('jianShuqrCodeUrl'),
					this.qrcodeObj
				);
			});
        },
        shareToQQ() {
            this.$emit('shareToQQ');
        },
		shareToWeibo() {
			this.$emit('shareToWeibo');
		},
    },
}
</script>
<style lang="less" scoped>
.RowItems {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 160px;
    padding: 10px;
    .shareTo {
        font-size: 14px;
    }
}
.svgContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
}
.weixin {
    position: relative;
}
.LinksContainer {
    display: flex;
    flex-direction: column;
    padding: 10px;
    .linkItem {
        display: flex;
        align-items: center;
        height: 30px;
        cursor: pointer;
    }
    .svg-icon {
        margin-right: 5px;
        font-size: 18px;
    }
}
</style>