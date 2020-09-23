<template>
	<div class="parent">
		<h1>前端名狮</h1>
		<child>
		<div class="time">时间：2020年9月16日</div>
		</child>
	</div>
</template>

<script>
import Child from "./Child.vue";
export default {
  components: {
    Child,
  },
};
</script>

<style lang="less" scoped>
.parent {
	color: red;
	h1 {
		font-size: 30px;
	}
	.time {
		color: green;
	}
	/deep/ .author {
		color: orange;
	}
	// /deep/ .child {
	// 	font-size: 16px;
	// 	.author {
	// 	font-size: 30px;
	// 	}
	// }
	// .time {
	// 	color: green;
	// }
}
</style>