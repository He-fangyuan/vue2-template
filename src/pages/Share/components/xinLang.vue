<template>
    <div class="shareCard">
        <div slot="header" class="clearfix topTitle">
            <span>分享组件七：仿新浪分享</span>
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
						<div class="qrcode" id="XinLangqrCodeUrl"></div>
					</div>
                </div>
                <span class="svgCard flex-row" @click="shareToWeibo">
                    <svg-icon icon-class="weibo"/>
                </span>
                <el-popover
                    placement="top"
                    trigger="hover">
                    <div class="LinksContainer">
                        <a class="linkItem">
                            <svg-icon icon-class="QQ1"/>
                            <span>腾讯QQ</span>
                        </a>
                        <a class="linkItem">
                            <svg-icon icon-class="QQkongjian"/>
                            <span>QQ空间</span>
                        </a>
                    </div>
                    <span class="svgCard flex-row" slot="reference">
                        <svg-icon icon-class="share2"/>
                    </span>
                    
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
					document.getElementById('XinLangqrCodeUrl'),
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
    align-items: center;
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
    width: 50%;
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