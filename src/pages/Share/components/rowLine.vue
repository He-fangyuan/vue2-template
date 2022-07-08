<template>
    <div class="shareCard">
        <div slot="header" class="clearfix topTitle">
            <span>分享组件五：横向排列</span>
        </div>
        <div class='RowItems'>
            <div class="svgContainer">
                <span class="shareToLine">分享到</span>
                <!-- 微信二维码分享 -->
                <div class="svgCard flex-row weixin"
                    @mouseover="showqrcode"
					@mouseout="hideqrcode">
                    <svg-icon icon-class="weixin"/>
                    <div class="qrcodeArea" v-show="qrcode.show">
						<p class="saoTitle">扫一扫</p>
						<div class="qrcode" id="rowLineqrCodeUrl"></div>
					</div>
                </div>
                <span class="svgCard flex-row" @click="shareToWeibo">
                    <svg-icon icon-class="weibo"/>
                </span>
                <span class="svgCard flex-row" @click="shareToQQ">
                    <svg-icon icon-class="QQ1"/>
                </span>
                <span class="svgCard flex-row" @click="shareToQQzone">
                    <svg-icon icon-class="QQkongjian"/>
                </span>
                <span class="svgCard flex-row" @click="shareToDouban">
                    <svg-icon icon-class="douban"/>
                </span>
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
					document.getElementById('rowLineqrCodeUrl'),
					this.qrcodeObj
				);
			});
        },
        shareToQQ() {
            this.$emit('shareToQQ');
        },
        shareToQQzone() {
			this.$emit('shareToQQzone');
		},
		shareToWeibo() {
			this.$emit('shareToWeibo');
		},
		shareToDouban() {
			this.$emit('shareToDouban');
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
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-top: 1px solid #f9db5d;
    .shareToLine {
        position: absolute;
        left:50%;
        top:0;
        padding: 0 10px;
        transform: translate(-50%,-50%);
        background-color: #fff;
    }
}
.weixin {
    position: relative;
}
</style>