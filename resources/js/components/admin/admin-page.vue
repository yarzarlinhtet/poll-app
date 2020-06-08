<template>
    <div>
        <h1>Hello Admin</h1>
        <hr/>
        <router-view></router-view>
    </div>
</template>
<script>
import { me, login } from '../../api/service/AuthService';
export default {
    name: 'admin-page',
    mounted(){
        me().then(res=>{
            console.log(JSON.stringify(res));
        })
        .catch(err => {
            console.log(JSON.stringify(err));
        })
        // login({ "email" : "mcormier@example.net", "password" : "password", "device_name" : "test"}).then(res => {
        //     console.log(res);
        //     this.$store.commit("loginSuccess", res.data);
        // })
        // .catch(err => {
        //     console.log(JSON.stringify(err))
        // });
    }
}

</script>