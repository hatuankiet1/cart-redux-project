import React, {Component} from 'react';

class CartResult extends Component {
    tongtien=(giohang)=>{
        var a = 0;
        if(giohang.length > 0)
        {
            for(var b = 0; b < giohang.length ; b++ )
            {
                a += giohang[b].sanpham.price*giohang[b].soluong;
            }
        }
        return a;
    }
    render() {
        var {giohang} = this.props;
        return (
            <tr>
                <td colSpan={3}/>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{this.tongtien(giohang)}$</strong>
                    </h4>
                </td>
                <td colSpan={3}>
                    <button type="button"
                            className="btn btn-primary waves-effect waves-light">Complete
                        purchase
                        <i className="fa fa-angle-right right"/>
                    </button>
                </td>
            </tr>
        )
    };
}

export default CartResult;