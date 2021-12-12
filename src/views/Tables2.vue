<!-- 
	This is the tables page, it uses the dashboard layout in: 
	"./layouts/Dashboard.vue" .
 -->

<template>
	<div>

		<!-- Map -->
			<a-row :gutter="24" type="flex">

				<!-- Projects Table Column -->
				<a-col :span="24" class="mb-24">
					<a-card :bordered="false" class="header-solid h-full" :bodyStyle="{padding: 0,}">
						<template #title>
							<a-row type="flex" align="middle">
								<a-col :span="24" :md="12">
									<h5 class="font-semibold m-0">실시간 위치</h5>
								</a-col>
								<a-col :span="24" :md="12" style="display: flex; align-items: center; justify-content: flex-end">
									<a-button type="primary" size="small">
										<span id="length_text">이동 추정 거리: </span>
									</a-button>&nbsp;
									<a-button type="primary" size="small">
										<a onclick="javascript:document.body.querySelector('#maps').contentWindow.location.reload();">새로고침</a>
									</a-button>
								</a-col>
							</a-row>
						</template>
						<iframe id="maps" :src="'http://allpgs.iptime.org:4000/api/v1/load_maps?id=' + $route.params.id" frameborder="0"></iframe>
					</a-card>
				</a-col>
			</a-row>

	</div>
</template>

<style>
	iframe {
		width: 100%;
		height: 50vh;
	}
	.ant-card-head-title span {
		margin-left: 0px !important;
	}
</style>