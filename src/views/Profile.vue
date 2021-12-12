<!-- 
	This is the user profile page, it uses the dashboard layout in: 
	"./layouts/Dashboard.vue" .
 -->

<template>
	<div>

		<!-- Header Background Image -->
		<div class="profile-nav-bg" style="background-image: url('images/bg-profile.jpg')"></div>
		<!-- / Header Background Image -->

		<!-- User Profile Card -->
		<a-card :bordered="false" class="card-profile-head" :bodyStyle="{padding: 0,}">
			<template #title>
				<a-row type="flex" align="middle">
					<a-col :span="24" :md="12" class="col-info">
						<a-avatar :size="74" shape="square" src="images/face-1.jpg" />
						<div class="avatar-info">
							<h4 class="font-semibold m-0">Sarah Jacob</h4>
							<p>CEO / Co-Founder</p>
						</div>
					</a-col>
				</a-row>
			</template>
		</a-card>
		<!-- User Profile Card -->

		<a-row type="flex" :gutter="24">

			<!-- Profile Information Column -->
			<a-col :span="24" :md="8" class="mb-24">

				<!-- Profile Information Card -->
				<a-card :bordered="false" class="header-solid h-full card-profile-information" :bodyStyle="{paddingTop: 0, paddingBottom: '16px' }" :headStyle="{paddingRight: 0,}">
					<template #title>
						<h6 class="font-semibold m-0">보호자 정보</h6>
					</template>
					<a-button type="link" slot="extra">
						<router-link to="/profile/edit">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path class="fill-muted" d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z" fill="#111827"/>
							<path class="fill-muted" d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z" fill="#111827"/>
						</svg></router-link>
					</a-button>
					<a-descriptions :column="1">
						<a-descriptions-item label="ID"></a-descriptions-item>
						<a-descriptions-item label="Name"></a-descriptions-item>
						<a-descriptions-item label="Birth"></a-descriptions-item>	
						<a-descriptions-item label="Email"></a-descriptions-item>
						<a-descriptions-item label="Phone"></a-descriptions-item>
					</a-descriptions>
				</a-card>
				<!-- / Profile Information Card -->

			</a-col>
			<!-- / Profile Information Column -->

		</a-row>

	</div>
</template>

<script>

	import axios from 'axios'

	export default ({
		data() {
			return {
				// Active button for the "User Profile" card's radio button group.
				profileHeaderBtns: 'overview',
				birth: null
			}
		},
		created() {
			if (!$cookies.isKey('token')) {
				alert('로그인을 해주세요.');
				location.hash='#/sign-in';
			}
		}
	})

</script>

<style scoped>
.ant-col-md-8 {
	width: 100% !important;
}
</style>