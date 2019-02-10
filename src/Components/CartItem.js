import React, {Component} from 'react';
import * as message from './../Constants/Message';


class CartItem extends Component {
    render() {
        var {giohang} = this.props;
        return (
            <tr>
                <th scope="row">
                    <img
                        src={giohang.sanpham.image}
                        className="img-fluid z-depth-0" alt="anh" style={{width:'266px',height:'166px' }} />
                </th>
                <td>
                    <h5>
                        <strong>{giohang.sanpham.tieude}</strong>
                    </h5>
                </td>
                <td style={{ color:'aqua',backgroundColor:'darkcyan' }}>{giohang.sanpham.price }$</td>
                <td className="center-on-small-only">
                    <span className="qty">{giohang.soluong } </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label onClick={ ()=>this.giamsoluong(giohang) }  className="btn btn-sm btn-primary
                                            btn-rounded waves-effect waves-light">
                            <a  href="#top">—</a>
                        </label>
                        <label onClick= { ()=>this.tangsoluong(giohang)  } className="btn btn-sm btn-primary
                                            btn-rounded waves-effect waves-light">
                            <a href="#top">+</a>
                        </label>
                    </div>
                </td>
                <td>{ ()=>{ this.tinhtonggiohang(giohang) } } </td>
                <td>
                    <button 
                            onClick={ ()=>this.xoasanpham(giohang)  }
                            type="button"
                            className="btn btn-sm btn-primary waves-effect waves-light"
                            data-toggle="tooltip" data-placement="top"
                            data-original-title="Remove item">
                        X
                    </button>
                </td>
            </tr>
        )
    };
    xoasanpham=(giohang)=>{
        this.props.xoasanpham(giohang);
        this.props.messageXoa(message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }
    giamsoluong=(giohang)=>{
        this.props.giamsoluongsanpham(giohang);
    }
    tangsoluong=(giohang)=>{
        this.props.tangsoluongsanpham(giohang);
    }
    tinhtonggiohang=(giohang)=>{
        return giohang.sanpham.price * giohang.soluong;
    }
}

export default CartItem;