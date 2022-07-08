<template>
    <div class="ShareContainer">
       <RowArray 
        @shareToQQ="shareToQQ" 
        @shareToQQzone="shareToQQzone"
		@shareToWeibo="shareToWeibo"
		@shareToDouban="shareToDouban"/> 
       <RowAdd
        @shareToQQ="shareToQQ" 
        @shareToQQzone="shareToQQzone"
		@shareToWeibo="shareToWeibo"
		@shareToDouban="shareToDouban"/> 
       <JianShu 
        @shareToQQ="shareToQQ" 
		@shareToWeibo="shareToWeibo"/> 
       <JianShuSide/> 
        <RowLine
        @shareToQQ="shareToQQ" 
        @shareToQQzone="shareToQQzone"
		@shareToWeibo="shareToWeibo"
		@shareToDouban="shareToDouban"/> 
       <JueJin
        @shareToQQ="shareToQQ" 
		@shareToWeibo="shareToWeibo"/> 
       <XinLang
        @shareToQQ="shareToQQ" 
		@shareToWeibo="shareToWeibo"/> 
       <TuDou
        @shareToQQ="shareToQQ" 
        @shareToQQzone="shareToQQzone"
		@shareToWeibo="shareToWeibo"
		@shareToDouban="shareToDouban"/> 
    </div>
</template>
<script>
import RowArray from './components/rowArray'
import RowAdd from './components/rowAdd'
import JianShu from './components/jianShu';
import JianShuSide from './components/jianSide';
import RowLine from './components/rowLine';
import JueJin from './components/jueJin';
import XinLang from './components/xinLang';
import TuDou from './components/tuDou';
import * as mutils from '@/utils/mUtils';
import {shareConfig} from '@/utils/share';

export default {
    name: 'Share',
    components: {
        RowArray,
        RowAdd,
        JianShu,
        JianShuSide,
        RowLine,
        JueJin,
        XinLang,
        TuDou
    },
    methods: {
		hideWxCodeModal() {
			this.wxModal.show = false;
		},
		// 分享到微信，显示微信二维码弹框；
		shareToWeixin() {
			this.wxModal.show = true;
		},
		shareToQQ() {
			shareConfig('qq');
		},
		shareToQQzone() {
			shareConfig('qqZone');
		},
		shareToWeibo() {
			shareConfig('weibo');
		},
		shareToDouban() {
			shareConfig('douban');
		},
	},
    
}
</script>
<style lang="less" scoped>
.ShareContainer {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 20px;
}
</style>