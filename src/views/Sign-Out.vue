<!-- 
	This is the sign up page, it uses the dashboard layout in: 
	"./layouts/Default.vue" .
 -->

<script>

	export default ({
		created() {
			if ($cookies.isKey('token')) {
				$cookies.remove('token')
				alert('로그아웃 되었습니다.');
				location.hash='#/sign-in';
			} else {
				alert('이미 로그아웃 되어 있습니다.');
				location.hash='#/sign-in';
			}
		}
	})

</script>