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
ui.extend({//obj={url:'',params:'',contentType:'',cb:{tipType:'',show:'',title:'',icon:'',duration:1000}}
  http(obj){
    obj.cb.duration = obj.cb.duration || 1000;
    obj.cb.icon = obj.cb.icon || '';
    obj.cb.title = obj.cb.title || '';
    obj.cb.show = obj.cb.show || false;
    obj.cb.tipType = obj.cb.tipType || 'toast';
    obj.method = obj.method || 'POST';
    obj.url = obj.url || '';
    obj.contentType = obj.contentType || 'application/json'
    ui.request({
      url: `${obj.url}`, //仅为示例，并非真实的接口地址
      data: `${obj.params}`,
      method:`${obj.method}`,
      header: {'content-type': obj.contentType ,"token":ui.getApp().globalData.token},
      success (res) {
        uiTit( obj.cb );
        setTimeout(()=>{
          obj.scb(res);
        },obj.cb.duration)
      },
      fail(res){
        uiTit( obj.cb );
        ui.showToast({ 
          title: "请求失败",
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
    obj.filter((val,i,arr)=>{
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