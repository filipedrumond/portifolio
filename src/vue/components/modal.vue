<template>
    <div class="c-modal">
        <div class="content">
            <div class="close" @click="close">&times;</div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'modal',
    props: ['closeCallback'],
    data() {
        return {
        };
    },
    created: function () {},
    methods: {
        close: function() {            
            if(this.closeCallback) this.closeCallback();
            $('.c-modal').removeClass('modal-open');
        },
    },
};
</script>
