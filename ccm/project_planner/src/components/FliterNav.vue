<template>
    <nav class="filter-nav">
        <button @click="FliterNav('all')" :class="{active:current === 'all'}" >ALL</button>
        <button @click="FliterNav('complete')" :class="{active:current === 'complete'}">COMPLETE</button>
        <button @click="FliterNav('ongoing')" :class="{active:current === 'ongoing'}">ONGOING</button>
    </nav>
</template> 

<script>
export default {
    props: ["current"],
    methods: {
        FliterNav(value){
            this.$emit("fliter",value)
        }
    }
}
</script>

<style>
     .filter-nav button {
        background: none;
        border: none;
        color: #bbb;
        outline: none;
        font-size: 12px;
        text-transform: uppercase;
        margin-right: 10px;
        letter-spacing: 1px;
        font-weight: bold;
        cursor: pointer;
    }
    button.active {
        color: #333;
    }
</style>