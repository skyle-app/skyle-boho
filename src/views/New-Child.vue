<!-- 
	This is the sign up page, it uses the dashboard layout in: 
	"./layouts/Default.vue" .
 -->

<template>
	<div>

		<!-- Sign Up Image And Headings -->
		<div class="sign-up-header" style="background-image: url('images/bg-signup.jpg')">
			<div class="content">
				<h1 class="mb-5">보호 대상자 추가</h1>
				<!-- <p class="text-lg">Use these awesome forms to login or create new account in your project for free.</p> -->
			</div>
		</div>
		<!-- / Sign Up Image And Headings -->
		
		<!-- Sign Up Form -->
		<a-card :bordered="false" class="card-signup header-solid h-full" :bodyStyle="{paddingTop: 0}">
			<template #title>
				<h5 class="font-semibold text-center">보호 대상자 추가</h5>
			</template>
			<!-- <div class="sign-up-gateways">
    			<a-button>
					<img src="images/logos/logos-facebook.svg" alt="">
				</a-button>
    			<a-button>
					<img src="images/logos/logo-apple.svg" alt="">
				</a-button>
    			<a-button>
					<img src="images/logos/Google__G__Logo.svg.png" alt="">
				</a-button>
			</div> -->
			<!-- <p class="text-center my-25 font-semibold text-muted">Or</p> -->
			<a-form
				id="components-form-demo-normal-login"
				:form="form"
				class="login-form"
				@submit="handleSubmit"
			>
				<a-form-item class="mb-10">
					<a-input
						v-decorator="[
						'name',
						{ rules: [{ required: true, message: 'Please input your name!' }] },
						]"
						placeholder="보호 대상자 이름"
					>
					</a-input>
				</a-form-item>
				<a-form-item class="mb-10">
					<a-input
						v-decorator="[
						'id',
						{ rules: [{ required: true, message: 'Please input your ID!' }] },
						]"
						placeholder="보호 대상자 아이디"
					>
					</a-input>
				</a-form-item>
				<a-form-item class="mb-10">
					<a-input
						v-decorator="[
						'phone',
						{ rules: [{ required: true, message: 'Please input your phone number!' }] },
						]"
						placeholder="보호 대상자 휴대전화 번호"
      					:max-length="11"
					>
					</a-input>
				</a-form-item>
				<a-form-item class="mb-10">
					<a-input
						v-decorator="[
						'birth',
						{ rules: [{ required: true, message: 'Please input your birth!' }] },
						]"
						placeholder="보호 대상자 생년월일"
					>
					</a-input>
				</a-form-item>
				<a-form-item class="mb-10">
					<a-checkbox
						v-decorator="[
						'remember',
						{
							valuePropName: 'checked',
							initialValue: true,
						},
						]"
					>
						<a href="https://skyle.kr/policy/terms" class="font-bold text-dark">이용약관</a>과 <a href="https://skyle.kr/policy/privacy" class="font-bold text-dark">개인정보 처리방침</a>에 동의합니다.
					</a-checkbox>
				</a-form-item>
				<a-form-item>
					<a-button type="primary" block html-type="submit" class="login-form-button">
						보호 대상자 추가
					</a-button>
				</a-form-item>
			</a-form>
		</a-card>
		<!-- / Sign Up Form -->

	</div>
</template>

<script>

	import axios from 'axios'

	export default ({
		data() {
			return {
			}
		},
		beforeCreate() {
			// Creates the form and adds to it component's "form" property.
			this.form = this.$form.createForm(this, { name: 'normal_login' });
		},
		created() {
			if (!$cookies.isKey('token')) {
				alert('로그인을 해주세요.');
				location.hash='#/sign-in';
			}
		},
		methods: {
			// Handles input validation after submission.
			handleSubmit(e) {
				e.preventDefault();
				this.form.validateFields((err, values) => {
					if ( !err ) {
						//console.log('Received values of form: ', values) ;
						let form = new FormData()
						form.append('name', values.name)
						form.append('id', values.id)
						form.append('phone',values.phone)
						form.append('birth',values.birth)
						form.append('token',$cookies.get('token'))

						axios.post('https://api.skyle.kr/api/v1/add_user', form)
						.then(function(response) {
							console.log(response);
							console.log(response.data);

							if (response.data.status != 200) {
								alert(response.data.message)
								console.error("보호 대상자 추가 오류: ", response.data.error);
							} else {
								alert(response.data.message);
								location.hash='#/manage';
							}
						})
						.catch(function(error) {
							console.error("통신 오류: ", error);
						});
					}
				});
			},
		},
	})

</script>

<style lang="scss">
</style>