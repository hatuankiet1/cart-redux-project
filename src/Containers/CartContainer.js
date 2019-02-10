import React, { Component } from 'react';
import CartResult from './../Components/CartResult';
import CartItem from './../Components/CartItem';
import { MSG_CART_EMPTY } from './../Constants/Message';
import {connect} from 'react-redux';
import {actionTruSanPham,actionTangSanPham,actionXoaSanPham,actionThayDoiMessage} from './../Actions/index';

class CartContainer extends Component {

  

  render() {
    
    var { giohang } = this.props;
    
    return (
      <section className="section">
        <div className="table-responsive">
          <table className="table product-table">
            <thead>
              <tr>
                <th />
                <th>Sản Phẩm</th>
                <th>Giá</th>
                <th>Số Lượng</th>
                <th>Tổng Cộng</th>
                <th />
              </tr>
            </thead>
            <tbody>

              { this.giohang(giohang) }
              <CartResult giohang={giohang}  />
              
            </tbody>
          </table>
        </div>
      </section>
    )
  };
  
  giohang=(giohang)=>{
    var {giamsoluongsanpham,tangsoluongsanpham,xoasanpham,messageXoa} = this.props;
    var message =<p style={{color:'red'}}>{MSG_CART_EMPTY}</p>  ;
    if(giohang.length > 0 )
    {
        message = giohang.map((giohang,stt )=>{
          return <CartItem key={stt}  giohang={giohang} giamsoluongsanpham={giamsoluongsanpham} tangsoluongsanpham={tangsoluongsanpham} xoasanpham={xoasanpham} messageXoa={messageXoa} />
        });
    }
    return message;
  }
  

}

const mapStateToProps = state =>{
  return {
    giohang:state.giohang,
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    giamsoluongsanpham: (giohang)=>{
        dispatch(actionTruSanPham(giohang))
    },
    tangsoluongsanpham : (giohang)=>{
        dispatch(actionTangSanPham(giohang));
    },
    xoasanpham: (giohang)=>{
      dispatch( actionXoaSanPham(giohang) );
    },
    messageXoa : (xoasanpham)=>{
      dispatch( actionThayDoiMessage(xoasanpham));
    }   
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);