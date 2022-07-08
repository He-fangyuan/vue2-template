<template>
    <div class="investmentContainer">
        <!-- 左侧卡片 -->
        <div class="leftCard">
            <div class="cardContainer">
                <div class="leftMenu">
                    <div class="cardTitle">年度总盈亏</div>
                    <div class="count">
                        <span class="cardCount">68</span>
                        <span class="cardUnit">(千万元)</span>
                    </div>
                </div>
                <div class="rightMenu">
                    <svg-icon icon-class="zhifu"/>
                </div>
            </div>
            <div class="cardContainer" style="background-color:#84d9d2;">
                <div class="leftMenu">
                    <div class="cardTitle">年度收益率</div>
                    <div class="count">
                        <span class="cardCount">120</span>
                        <span class="cardUnit">(%)</span>
                    </div>
                </div>
                <div class="rightMenu">
                    <svg-icon icon-class="Money-Bag"/>
                </div>
            </div>
        </div>
        <!-- 右侧卡片 -->
        <div class="rightCard">
            <div class="cardContainer" style="background-color:#87de75;">
                <div class="leftMenu">
                    <div class="cardTitle" style="height: 30px;line-height: 30px;">潜在投资人</div>
                    <div class="count" style="height: 30px;">
                        <span class="cardCount">686</span>
                        <span class="cardUnit">(人)</span>
                    </div>
                    <div class="cardTip" style="height: 40px;">Decreased by 10%</div>
                </div>
                <div class="rightMenu">
                    <svg-icon icon-class="huiyuankuaijiezhifu01"/>
                </div>
            </div>
            <div class="cardContainer" style="background-color:#a5e7f0;">
                <div class="leftMenu">
                    <div class="cardTitle" style="height: 30px;line-height: 30px;">意向投资人</div>
                    <div class="count" style="height: 30px;">
                        <span class="cardCount">1276</span>
                        <span class="cardUnit">(人)</span>
                    </div>
                    <div class="cardTip" style="height: 40px;">Decreased by 50%</div>
                </div>
                <div class="rightMenu">
                    <svg-icon icon-class="duozhongzhifu"/>
                </div>
            </div>
            <div class="cardContainer" style="background-color:#93b7e3;">
                <div class="leftMenu">
                    <div class="cardTitle" style="height: 30px;line-height: 30px;">待审投资人</div>
                    <div class="count" style="height: 30px;">
                        <span class="cardCount">82367</span>
                        <span class="cardUnit">(人)</span>
                    </div>
                    <div class="cardTip" style="height: 40px;">Decreased by 30%</div>
                </div>
                <div class="rightMenu">
                    <svg-icon icon-class="saomafukuan-"/>
                </div>
            </div>
            <div class="cardContainer" style="background-color:#edafda">
                <div class="leftMenu">
                    <div class="cardTitle" style="height: 30px;line-height: 30px;">审核中投资人</div>
                    <div class="count" style="height: 30px;">
                        <span class="cardCount">827372</span>
                        <span class="cardUnit">(人)</span>
                    </div>
                    <div class="cardTip" style="height: 40px;">Decreased by 80%</div>
                </div>
                <div class="rightMenu">
                    <svg-icon icon-class="money"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.investmentContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
}
.leftCard ,.rightCard {
    display: flex;
    align-items: center;
    width: 33%;
    height: 120px;
    padding: 10px 0;
    border-radius: 10px;
    background-color: #fff;
}
.rightCard {
    width: 66.6%;
}
.cardContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 47%;
    height: 100px;
    margin: 0 2%;
    border-radius: 10px;
    padding: 5px;
    background-color: #ffa3a1;
}
.rightCard .cardContainer {
    width: 25%;
    margin: 0 1%;
    overflow: hidden;
}
.leftMenu {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 70%;
}
.cardTitle {
    height: 50px;
    line-height: 50px;
    color: #fff;
    font-size: 16px;
}
.count {
    color: #fff;
    height: 50px;
}
.cardCount {
    font-size: 24px;
    font-weight: 700;
    
}
.cardUnit {
    margin-left: 5px;
    font-size: 16px;
}
.rightMenu {
    width: 20%;
    font-size: 28px;
}
.cardTip {
    font-size: 16px;
    color: #fff;
}
</style>