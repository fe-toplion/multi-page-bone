<template>
    <div class="child">
        <div class="author">作者：诀九</div>
        <div class="introduce">介绍：定期推送前端技术相关文章，面试题详解</div>
        <slot />
    </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.child {
    font-size: 20px;
    .author {
        font-weight: 600;
        color: red;
    }
    .introduce {
        color: blue;
    }
}
</style>