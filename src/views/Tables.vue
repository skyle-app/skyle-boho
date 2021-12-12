<!-- 
	This is the tables page, it uses the dashboard layout in: 
	"./layouts/Dashboard.vue" .
 -->

<template>
	<div>

		<!-- Authors Table -->
		<a-row :gutter="24" type="flex">

			<!-- Authors Table Column -->
			<a-col :span="24" class="mb-24">

				<!-- Authors Table Card -->
				<CardAuthorTable
					:data="table1Data"
					:columns="table1Columns"
				></CardAuthorTable>
				<!-- / Authors Table Card -->

			</a-col>
			<!-- / Authors Table Column -->

		</a-row>
		<!-- / Authors Table -->

	</div>
</template>

<script>

	import axios from 'axios'

	// "Authors" table component.
	import CardAuthorTable from '../components/Cards/CardAuthorTable' ;

	// "Projects" table component.
	import CardProjectTable2 from '../components/Cards/CardProjectTable2' ;
	
	// "Authors" table list of columns and their properties.
	const table1Columns = [
		{
			title: 'NAME/ID',
			dataIndex: 'author',
			scopedSlots: { customRender: 'author' },
		}
	];

	// "Authors" table list of rows and their properties.
	var table1Data = [];

	export default ({
		components: {
			CardAuthorTable, 
			CardProjectTable2,
		},
		methods: {
			checkSession() {
				let form = new FormData()
				form.append('token', $cookies.get('token'))

				axios.post('http://192.168.0.13:4000/api/v1/check_session', form)
				.then(function(response) {
					console.log(response);
					console.log(response.data);

					if (response.data.error != undefined) {
						// alert(response.data.error)
						return false;
					} else {
						return true;
					}
				})
				.catch(function(error) {
					return false;
				});
			}
		},
		created() {

			if ( this.checkSession() == false || !$cookies.isKey('token') ) {
				alert('세션이 만료되었습니다. 다시 로그인 해주세요.');
				location.hash='#/sign-out';
			} else {
				let form = new FormData()
				form.append('token', $cookies.get('token'))

				axios.post('https://api.skyle.kr/api/v1/get_child', form)
				.then(function(response) {
					console.log(response);
					console.log(response.data);

					if (response.data.status != 200) {
						alert(response.data.error)
					} else {
						// alert(response.data.message);
						for (var i = 0; i < response.data.rows.length; i++) {
							table1Data.push({
								key: i+1,
								author: {
									name: response.data.rows[i].name,
									id: response.data.rows[i].id,
								},
							})
						}
						table1Data = [];
					}
				})
				.catch(function(error) {
					alert('서버에 오류가 발생해 일시적으로 조회에 실패했습니다. 나중에 다시 시도해 주십시오.')
					console.error("통신 오류: ", error);
				});
			}
		},
		data() {
			return {
				// Associating "Authors" table data with its corresponding property.
				table1Data: table1Data,

				// Associating "Authors" table columns with its corresponding property.
				table1Columns: table1Columns,
			}
		},
		
	})

</script>

<style lang="scss">
</style>