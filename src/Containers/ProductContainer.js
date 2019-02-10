import React, {Component} from 'react';
import Product from './../Components/Product';
import {connect} from 'react-redux';
import {actAddToCart,actionThayDoiMessage} from './../Actions/index';


class ProductContainer extends Component {

    render() {

        return (
            <section className="section">
              <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
              <div className="row">
                {/* Product */}
                { this.sanpham(this.props.sanpham) }
              </div>
            </section>
        )
    };
    sanpham=(sanpham)=>{
        let a = null;
        var {themvaogiohang,muathanhcong} = this.props;
        a = sanpham.map((sanpham,stt)=>{
            return <Product key={stt} sanpham={sanpham} themvaogiohang={themvaogiohang} muathanhcong={muathanhcong} />
        });
        return a;
    }
}


const mapStateToProps = state =>{
    return {
        sanpham : state.sanpham,
    }
}

const mapDispatchToProps=(dispatch)=>{
    
    return {
        themvaogiohang : (sanpham)=>{
            dispatch( actAddToCart(sanpham,1) );
        },
        muathanhcong : (message)=>{
            dispatch(actionThayDoiMessage(message)  );
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductContainer);
