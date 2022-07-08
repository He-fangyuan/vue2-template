<template>
    <div class="shareCard">
        <div slot="header" class="clearfix topTitle">
            <span>分享组件二：横向排列</span>
        </div>
        <div class='RowItems'>
            <span class="shareTo">邀请好友加入 >></span>
            <div class="svgContainer">
                <!-- 微信二维码分享 -->
                <div class="svgCard flex-row weixin"
                    @mouseover="showqrcode"
					@mouseout="hideqrcode">
                    <svg-icon icon-class="weixin"/>
                    <div class="qrcodeArea" v-show="qrcode.show">
						<p class="saoTitle">扫一扫</p>
						<div class="qrcode" id="rowAddqrCodeUrl"></div>
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
            <span class="shareTo">朋友注册后，你会获得书币，书币可以用来去市集兑换物品。</span>
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
					document.getElementById('rowAddqrCodeUrl'),
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
}
.weixin {
    position: relative;
}
</style>