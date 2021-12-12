<template>

	<!-- Authors Table Card -->
	<a-card :bordered="false" class="header-solid h-full" :bodyStyle="{padding: 0,}">
		<template #title>
			<a-row type="flex" align="middle">
				<a-col :span="24" :md="12">
					<h5 class="font-semibold m-0">보호 대상자 목록</h5>
				</a-col>
				<a-col :span="24" :md="12" style="display: flex; align-items: center; justify-content: flex-end">
					<!-- <a-radio-group v-model="authorsHeaderBtns" size="small">
						<a-radio-button value="all">ALL</a-radio-button>
						<a-radio-button value="online">ONLINE</a-radio-button>
					</a-radio-group> -->
					<a-button type="primary" size="small">
						<router-link to="/manage/new">보호 대상자 추가</router-link>
					</a-button>
				</a-col>
			</a-row>
		</template>
		<a-table :columns="columns" :data-source="data" :pagination="false">

			<template slot="author" slot-scope="author">
				<div class="table-avatar-info">
					<div class="avatar-info">
						<router-link :to="'/manage/'+author.id" tag="h6" style="cursor: pointer;">{{ author.name }}</router-link>
						<router-link :to="'/manage/'+author.id" tag="p" style="cursor: pointer;">{{ author.id }}</router-link>
					</div>
				</div>
			</template>

		</a-table>
	</a-card>
	<!-- / Authors Table Card -->

</template>

<script>

	export default ({
		props: {
			data: {
				type: Array,
				default: () => [],
			},
			columns: {
				type: Array,
				default: () => [],
			},
		},
		data() {
			return {
				// Active button for the "Authors" table's card header radio button group.
				authorsHeaderBtns: 'all',
			}
		},
	})
</script>

<style>
	.ant-card-head-title span {
		margin-left: 0px !important;
	}
</style>

