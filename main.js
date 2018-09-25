import app from './app.ui'
let options = {
  app: app
}
function uiTit(_fcb){
  if(_fcb.tipType == "confirm" && _fcb.show == true){
    ui.showConfirm({
      content: _fcb.title,
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      duration:_fcb.duration,
      success (result) { return }
    })          
  }else if( _fcb.tipType == 'toast' && _fcb.show == true ){
    ui.showToast({ 
      title: _fcb.title,
      icon:_fcb.icon,
      duration:_fcb.duration
    })
  }
}
ui.extend({
  toDeveloping(){
    return ui.navigateTo({
      url:`/pages/develop`
    })
  },
  http(obj){//obj={url:'',params:'',contentType:'',cb:{tipType:'',show:'',title:'',icon:'',duration:1000}}
    obj.cb.duration = obj.cb.duration || 1000;
    obj.cb.icon = obj.cb.icon || '';
    obj.cb.title = obj.cb.title || '';
    obj.cb.show = obj.cb.show || false;
    obj.cb.tipType = obj.cb.tipType || 'toast';
    obj.method = obj.method || 'POST';
    obj.url = obj.url || '';
    obj.params = obj.params || '';
    obj.contentType = obj.contentType || 'application/json'
    obj.token = ui.getApp().globalData.userMsg.token;
    ui.getStorage({
      key: 'userMsg',
      success: function (res) {
        obj.token = res.data.accessToken;
      }
    })
    ui.request({
      url: `${obj.url}`, 
      data: obj.params,
      method:`${obj.method}`,
      header: {'content-type': obj.contentType,"token":obj.token},
      success (res) {
        setTimeout(()=>{
          obj.scb(res);
          if( res.data.status == 500 ){
            if(obj.cb.show){
              ui.showToast({
                title: res.data.message,
                icon:'none',
                duration:1000
              })
            }
          }else{
            if(obj.cb.show){
              uiTit( obj.cb );
            }
          }
        },obj.cb.duration)
      },
      fail(res){
        uiTit( obj.cb );
          ui.showToast({
            title: "请先登录",
            icon:'none',
            duration:1500
          })
      }
    })
  },
  formValidate(obj){
    let _obj = [];
    function rtValue(item,ii){
      _obj.push({
        "tip" : item.tip,
        "isRight" : false,
        "name" : item.name,
        "fieldName":item.fieldName,
        "index" : ii
      })
    }
    function unRtValue(item,ii){
      _obj.push({
        "tip" : item.tip,
        "isRight" : true,
        "name" : item.name,
        "fieldName":item.fieldName,
        "index" : ii
      })
    }
    obj.forEach((val,i,arr)=>{
      if( val.require == true && val.value == ''){
        val.tip = val.name + "不能为空";
        return rtValue(val,i);
      }else if( val.regExp != '' && !new RegExp(val.regExp).test( val.value ) ){
        return rtValue(val,i)
      }else{
        return unRtValue(val,i);
      }
    })
    return _obj;
  }
})
ui.start(options)