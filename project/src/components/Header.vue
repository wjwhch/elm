<template>
<div>
    <Header fixed title="这里是标题">
      <router-link to="/" slot="left">
        <Button icon="back">返回</Button>
      </router-link>
      <Button icon="more" slot="right"></Button>
    </Header>
      
</div>
</template>

<script>
import {Header} from 'mint-ui'
import {Button} from 'mint-ui'

export default {
    components:{
        Header,
        Button,
    }
}
</script>

