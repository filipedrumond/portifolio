<template>
    <div id="app" class="">
        <main>
            <router-view />
        </main>
        <footerBar />
    </div>
</template>

<script>
import footerBar from './vue/components/footerBar.vue';

export default {
    name: 'App',
    data() {
        return {};
    },
    created: function() {},
    components: { footerBar }
};
</script>

<style lang="scss"></style>