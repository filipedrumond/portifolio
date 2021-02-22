<template>
    <div class="c-footerBar">
        <div class="footer-link link-config">
            <router-link to="/config">
                <i class="fa fa-cogs" aria-hidden="true"></i>
            </router-link>
        </div>
        <div class="footer-link link-meus-animais">
            <router-link to="/meus-animais">
                <i class="fa fa-paw" aria-hidden="true"></i>
            </router-link>
        </div>
        <div class="footer-link link-profile">
            <router-link to="/profile">
                <i class="fa fa-user-circle-o" aria-hidden="true"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'footerBar',
    data() {
        return {};
    },
    created: function () {},
    methods: {},
};
</script>
