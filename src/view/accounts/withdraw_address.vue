<template>
    <div class="box">
        <indexHeader></indexHeader>
        <div class="account" style="padding-top: 48px">
            <div class="topcontent ft20 ">
                <span class="white"><span class="baseColor">{{$t('account.assets')}}></span> {{$t('account.upaddress')}}</span>
            </div>
            <div class="content">
               <div class="con_box">
                  
                   <div class="contentBK fColor1  pdlr20 pdtb20 ft12">
                       <div class="flex alcenter">
             		   <span class="w10 mr20">{{$t('market.currency')}}</span>
             		   <span class="flex1 mr20">{{$t('account.whaddress')}}</span>
            		   <span class="flex1">{{$t('set.remarks')}}</span>
                       </div>
                       <div class="mt10">
                            <div class="flex alcenter">
                                <select name="" id="" class="w10 mr20 " v-model="addId" @change='setCoin'>
                                    <option value="$t('market.currency')">{{$t('market.currency')}}</option>
                                    <option :value="item.id" v-for="(item,index) in coins" :key="index" >{{item.name}}</option>
                                </select>
          		        <input type="text" class="flex1 mr20" :placeholder="$t('wAddress.enterAddress')" v-model="address">
              			 <input type="text" class="flex1" :placeholder="$t('wAddress.enterMark')" v-model="notes">
                            </div>
                            <div class="add">
                                <div class="baseBtn" @click="addAddress">{{$t('set.add')}}</div>
                            </div> 
                       </div>
                   </div>
               </div>
               <div class="con_box mt15">
                   <div class="account_title ttBk white flex">
           		 <div class="ml20">{{$t('wAddress.addressList')}}</div>
                   </div>
                   <div class="contentBK fColor1  pdlr20 pdtb20 ft12">
                       <div class="flex alcenter">
          		   <span class="flex1">{{$t('market.currency')}}</span>
             		   <span class="flex1 tc">{{$t('account.whaddress')}}</span>
		           <span class="flex1 tc">{{$t('set.remarks')}}</span>
		           <span class="flex1 tr">{{$t('do')}}</span>
                       </div>
                       <div class="mt10" v-for="(item,index) in list" :key="index">
                            <div class="flex alcenter">
                                <span class="flex1">
                                    {{nowCoin}}
                                </span>
                                <span class="flex1">{{item.address}}</span>
                                <span class="flex1">{{item.notes}}</span>
                                <span class="flex1" @click="delAddress(item.id,index)">{{$t('wAddress.del')}}</span>
                            </div>
                       </div>
                        <div class="none color1 tc" v-if="!list.length" style="padding: 20px 0">
                            {{$t('tpc.nodata')}}
                        </div>
                       
                   </div>
               </div>
            </div>
        </div>
    </div>
</template>
<script>
import indexHeader from "@/view/indexHeader";
export default {
  name: "finanrec",
  data() {
    return {
      token: "",
      lang: "",
      coins:[],
      nowCoin:'',
      list:[],
      address:'',
      notes:'',
      addId:this.$t('market.currency')
    };
  },
  components: {
    indexHeader
  },
  created() {
    this.getCoins();
  },
  methods: {
    getCoins() {
      this.token = localStorage.getItem("token") || "";

      this.$http({
        url: "/api/wallet/currencylist",
        headers: { Authorization: this.token }
      }).then(res => {
        if(res.data.type == 'ok'&&res.data.message.length != 0){
            this.coins = res.data.message;
        }
      });
    },
    setCoin(e){
        if(this.addId != this.$t('market.currency')){
            let index = e.target.selectedIndex;
            let opt = e.target.querySelectorAll('option')[index];
            this.nowCoin = opt.text;
            this.getList()
        }
    },
    getList() {
        this.token = localStorage.getItem("token") || "";
        

        this.$http({
            url: "/api/wallet/get_address",
            method:'post',
            data:{currency:this.addId},
            headers: { Authorization: this.token }
        }).then(res => {
            if(res.data.type == 'ok'){
                this.list = res.data.message;
            } else {
                this.list = []
            }
        });
        
        
    },
    delAddress(id,index){
        this.$http({
        url: "/api/wallet/deladdress",
        method:'post',
        data:{address_id:id},
        headers: { Authorization: this.token }
      }).then(res => {
        if(res.data.type == 'ok'){
            this.list.splice(index,1)
             layer.msg(res.data.message);
        }
      });
    },
    addAddress(){
        if(this.addId == this.$t('market.currency')) {
	        layer.msg(this.$t('caiwu.selCu'));
		return;
        }
        if(this.address == ''){
            layer.msg(this.$t('wAddress.enterAddress'));return;
        } 
        else {
            this.$http({
                url:'/api/wallet/addaddress',
                method:'post',
                headers:{ 'Authorization': this.token },
                data:{currency_id:this.addId,address:this.address,notes:this.notes}
            }).then(res => {
               
                if(res.data.type == 'ok'){
                    layer.msg(res.data.message);
                    this.address = '';
                    this.notes = '';
                    this.getList()
                }
            })
        }
    }
  }
};
</script>

<style lang="scss" scoped>
.box .account {
  width: 1200px;
  margin: 0 auto 82px;
  margin-top: 30px;
}
.topcontent {
  padding: 22px 30px;
  margin-bottom: 20px;
  background-color: #1a2330;
  border-radius: 5px;
}
.account_title {
  padding: 15px 20px;
}
select {
  background-color: transparent;
  padding: 10px;
  color: #c7cce6;
  font-size: 18px;
  border-radius: 3px;
  border: 1px solid #4e5b85;
}
select.ft14 {
  font-size: 14px;
}
select > option {
  padding: 10px 0;
  background-color: transparent;
}
input {
  padding: 10px;
  border: 1px solid #4e5b85;
  font-size: 18px;
  color: #c7cce6;
  border-radius: 3px;
  background-color: transparent;
  outline: none;
}
.add {
  text-align: right;
  margin-top: 20px;
}
.add .baseBtn {
  width: 200px;
}
</style>





// WEBPACK FOOTER //
// src/view/accounts/withdraw_address.vue