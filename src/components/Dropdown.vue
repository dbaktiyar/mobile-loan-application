<template>
    <div>
        <slot></slot>
        <ul class="dropdown" v-show="open">
            <li @click="selected(option)" v-for="option of options" :key="option.title">{{option[propName]}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            options: Array,
            propName: String,
            open: Boolean
        },
        name: 'Dropdown',
        data() {
            return {
                isOpen: false
            };
        },
        methods: {
            selected(e) {
                this.$emit('on-option-click', e)
            }
        }
    }
</script>

<style scoped>
    .dropdown {
        text-align: left;
        position: absolute;
        right: 10px;
        list-style-type: none;
        padding: 10px 0;
        margin: 5px 0;
        background-color: #fff;
        border: 1px solid #ebeef5;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        max-height: 400px;
        overflow: auto;
        z-index: 1000;
    }

    .dropdown li {
        list-style: none;
        line-height: 36px;
        padding: 0 20px;
        margin: 0;
        font-size: 14px;
        color: #606266;
        cursor: pointer;
        outline: none;
    }

    .dropdown li:hover,
    .dropdown li:focus {
        background-color: #ecf5ff;
        color: #66b1ff;
    }
</style>