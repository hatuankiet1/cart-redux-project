
import * as Types from './../Constants/ActionType';

export const actAddToCart = (sanpham,soluong) =>{
   return {
        type: Types.ADD_TO_CART,
        sanpham:sanpham,
        soluong:soluong,
   }
}

export const actionTruSanPham = (giohang)=>{
   return {
      type : Types.DELETE_PRODUCT_IN_CART,
      giohang
   }
}

export const actionTangSanPham =(giohang)=>{
   return {
      type: Types.INCREASE_PRODUCT_IN_CART,
      giohang
   }
}

export const actionXoaSanPham =(giohang)=>{
   return {
      type : Types.DELETE_FOREVER_PRODUCT_IN_CART,
      giohang
   }
}

export const actionThayDoiMessage = (message)=>{
   return {
      type : Types.CHANGE_MESSAGE,
      message
   }
}
