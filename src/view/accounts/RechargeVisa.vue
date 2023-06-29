<template>
  <div>
    <el-form ref="form" :model="form" label-width="160px" label-style="color:#fff;">
      <el-form-item :label="$t('market.currency')">
        <span class="fColor1">USDT</span>
      </el-form-item>
      <el-form-item :label="$t('account.way')">
        <el-radio-group v-model="payType" size="small">
          <el-radio label="creditCard" border>{{ $t('account.visa') }} -A</el-radio>
          <el-radio label="creditCard-B" border>{{ $t('account.visa') }} -B</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item :label="$t('account.amount')">
        <el-input v-model="form.num" :placeholder="$t('account.amount')"></el-input>
      </el-form-item>
      <el-form-item class="hide" :label="$t('account.cgaddress')">
        <el-input v-model="form.from" :placeholder="$t('account.cgaddress')"></el-input>
      </el-form-item>
      <el-form-item class="hide" :label="$t('withdrawList.hash')">
        <el-input v-model="form.hash" :placeholder="$t('withdrawList.hash')"></el-input>
      </el-form-item>
      <!-- <el-form-item class="" :label="$t('account.picture')">
        <el-upload ref="uploader" class="upload-demo" :action="uploadUrl" :headers="uploadHeaders"
          :http-request="uploadFile" :multiple="false" :limit="1" list-type="picture" :file-list="form.pic"
          :on-remove="removeFile">
          <el-button size="mini" type="success">{{ $t('account.choose') }}</el-button>
          <div slot="tip" class="el-upload__tip"></div>
        </el-upload>
      </el-form-item> -->
      <el-form-item>
        <el-button :disabled="disable" type="primary" size="medium" @click="submitChargeInfo(item.value)">
          {{ $t('account.submitRecharge') }}
        </el-button>
      </el-form-item>
    </el-form>

    <p class="ft12 fColor2 mb15">{{ $t('account.notice') }}</p>
    <ul class="tips_ul ft12 fColor2" style="list-style:disc inside">
      <li class="tips_li" style="list-style:disc inside">
        {{ $t('account.a1') }}{{ item.label || '' }}{{ $t('account.a2') }}
      </li>
      <li v-if="item.label === 'eth'" class="tips_li" style="list-style:disc inside">
        {{ $t('account.a4') }}
      </li>
      <li v-else-if="item.label === 'btc'" class="tips_li" style="list-style:disc inside">
        {{ $t('account.a9') }}
      </li>
      <li v-else-if="item.label === 'usdt'" class="tips_li" style="list-style:disc inside">
        {{ $t('account.a4') }}
      </li>
      <li v-else-if="item.label === 'omni'" class="tips_li" style="list-style:disc inside">
        USDT{{ $t('account.a3') }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'RechargeVisa',
  data() {
    return {
      currency: 3,
      usdt_wallet: {},
      token: '',
      flags: false,
      excharge_address: '',
      accounts: [
        {
          label: 'btc',
          value: 1
        },
        {
          label: 'eth',
          value: 2
        },
        {
          label: 'usdt',
          value: 3
        },
      ],
      form: {
        from: '',
        num: '',
        pic: [],
        hash: '',

      },
      uploadUrl: '',
      uploadHeaders: {},
      payType: 'creditCard'
    }
  },
  computed: {
    item() {
      return this.accounts.find(account => account.value === this.currency)
    },
    disable() {
      return !this.form.num
    }
  },
  created() {
    console.log(111);
    this.token = localStorage.getItem('token') || '';
  },
  methods: {
    removeFile(file, fileList) {
      this.form.pic = fileList
    },
    submitChargeInfo(currency) {
      let data = {};
      data.currency = "3";
      // data.acc = this.form.from;
      // data.hash = this.form.hash;
      data.amount = Number(this.form.num);
      data.payType = this.payType;

      // if (!data.acc || !data.hash || !data.amount || !data.currency || this.form.pic.length < 1) {
      //   layer.msg('参数错误');
      //   return;
      // }

      if (!data.amount) {
        layer.msg('please input number');
        return;
      }
      if(data.amount < 100 || data.amount > 12000){
        layer.msg(this.$t('number') + '[100-12000]');
        return;
      }

      // data.acc = data.acc ? data.acc : 'default';
      data.pic = this.form.pic.length > 0 ? this.form.pic[0].url : '111';

      let that = this;
      const loading = this.$loading();
      this.$http({
        url: '/api/wallet/online_req',
        method: 'post',
        data: data,
        headers: { Authorization: this.token }
      }).then(res => {
        loading.close();
        if (res.data.type == 'ok') {
          that.form.num = '';
          that.payType = 'creditCard';
          // that.form.hash = '';
          that.form.pic = [];
          window.open(res.data.message)
        } else {
          layer.msg(res.data.message)
        }
      }).finally(()=>{
        loading.close()
      });
    },
    uploadFile(f) {

      let that = this;
      let formData = new FormData();
      formData.append('file', f.file);
      console.log('f', f)
      this.$http.post('/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then(res => {
        let msg = res.data;
        if (msg.type == 'ok') {
          that.form.pic = [{ name: f.file.name, url: msg.message.toLocaleLowerCase() }];
        } else {
          layer.msg(msg.message)
        }
      });
    },
  }
}
</script>

<style lang="scss" scoped>
.hide_div {
  //border: 1px solid #1e2c42;
  padding: 20px;
}

::v-deep .el-tabs__item {
  color: #c7cce6 !important;
}

.operation,
.copy,
.ewm {
  color: #00a4d8;
}

.copy {
  margin: 0 30px;
}

.copy:hover {
  cursor: pointer;
}
.el-radio.is-bordered{
  border: 1px solid rgba(220,223,230, .3);
}
::v-deep .el-radio__inner{
    background-color: rgba($color: #fff, $alpha: 0.3);
    border: 1px solid rgba(220,223,230, .3);
}
</style>
