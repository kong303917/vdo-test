<template>
    <div id="tab">
        <mu-drawer class="drawer" :open="open" :docked="docked" @close="toggle()">
            <div class="drawer-pic" style="background:#474a4f; padding:70px 0; text-align:center; color:#fff;">
                <div class="title" style="font-size:32px;">微豆 vdo-test</div>
                <div class="description" style="font-size:16px;color:#e0e0e0;">一个移动端豆瓣Web应用</div>
            </div>
            <mu-list value="movie" @itemClick="docked ? '' : toggle()" @change="page">
                <mu-list-item value="movie" title="电影">
                    <mu-icon slot="left" value="movie" />
                </mu-list-item>
                <mu-list-item value="book" title="图书 - 敬请期待">
                    <mu-icon slot="left" value="book" />
                </mu-list-item>
                <mu-list-item value="music" title="音乐 - 敬请期待">
                    <mu-icon slot="left" value="music_note" />
                </mu-list-item>
                <mu-divider shallowInsert />
                <mu-list-item value="about" title="关于">
                    <mu-icon slot="left" value="info" />
                </mu-list-item>
            </mu-list>
        </mu-drawer>
        <mu-pager :zDepth="2">
            <mu-appbar title="电影">
                <mu-icon-button icon="menu" slot="left" @click="toggle(true)" />
                <mu-icon-button icon="search" slot="right" @click="gotoSearch()" />
            </mu-appbar>
            <mu-tabs :value="activeTab" @change="handleTabChange">
                <mu-tab value="in_theaters" @active="handleActive" title="正在热映" />
                <mu-tab value="coming_soon" @active="handleActive" title="即将上映" />
            </mu-tabs>
        </mu-pager>
        <div v-if="activeTab === 'in_theaters'">
            <Card tab-name="in_theaters" />
        </div>
        <div v-if="activeTab === 'coming_soon'">
            <Card tab-name="coming_soon" />
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import Card from './Card';
import * as type from './../../store/movies/type';

export default {
    data() {
        return {
            dialog: false,
            open: false,
            docked: true,
            value: 'movie',
        };
    },
    components: {
        Card,
    },
    computed: mapState({
        activeTab: state => state.movie.tab,
    }),
    methods: {
        page(val) {
            if (val === 'about') {
                this.$router.push({ name: 'About' });
            }
        },
        openDia() {
            this.dialog = true;
        },
        closeDia() {
            this.dialog = false;
        },
        toggle(flag) {
            console.log('flag', flag, this);
            this.open = !this.open;
            this.docked = !flag;
        },
        handleTabChange(val) {
            this.$store.dispatch(type.CHANGE_MOVIES_TAB, val);
        },
        handleActive(val) {
            console.log(`---------tab active-------------${val}`);
        },
        gotoSearch() {
            this.$router.push({ name: 'MovieSearch' });
        },
    },
};
</script>
<style lang="css">
#tab {
    width: 100%;
    height: 100%;
}
.drawer {
    color: #212121;
    background: #f5f5f5;
}
</style>