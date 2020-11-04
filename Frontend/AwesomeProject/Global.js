


import React, { Component } from "react";


import Axios from "axios";
//import { response } from "express";

var url = 'http://172.20.10.10:3000/login';//ip地址在变化，要注意

var obj={};
 
$.ajax({ 
		type : "post", 
		url :url, 
		data : {username}, 
		async : false, //重点
		dataType:'json',
		success : function(res){ 
			obj = res.data;
		} 
  }); 
  

var test = (function () {
  let result;
  $.ajax({
      type: 'get',
      url: 'http://apixyz/api/public/v1/home/swiperdata',
      dataType: 'json',
      async:false, 
      success: (response) => {
          result = response;
          console.log(result,1)
          
      }
  })
  console.log(result,2)
  return result;
})();
console.log(test,'test1');
