import React, {Component} from 'react';
import * as message from './../Constants/Message';


class Product extends Component {
    render() {
        
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img
                            src={this.props.sanpham.image}
                            className="img-fluid" alt="anh" style={{width:'322px',height:'322px' }} />
                        <a href="#top">
                            <div className="mask waves-light waves-effect waves-light"/>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a href="#top">{this.props.sanpham.tieude}</a>
                            </strong>
                        </h4>
                        <ul className="rating">

                            {this.sosao(this.props.sanpham.rating)}

                        </ul>
                        <p className="card-text">
                            {this.props.sanpham.description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{this.props.sanpham.price }$ Dollar</span>
                            <span className="right">
                        <a onClick={ ()=>{this.themvaogiohang(this.props.sanpham )  }  } className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top"
                         data-original-title="Add to Cart">
                        <i className="fa fa-shopping-cart"/>
                      </a>
                    </span>
                        </div>
                    </div>
                </div>
            </div>
        )  
    };
    themvaogiohang=(sanpham)=>{
        this.props.themvaogiohang(sanpham);
        this.props.muathanhcong(message.MSG_ADD_TO_CART_SUCCESS);
    }
    sosao=(sosao)=>{
        let a = [];
        if(sosao != null)
        {
            for(var i = 1;i <= sosao; i++ )
            {
                a.push(<li key={i} ><i className="fa fa-star"/></li>);
            }
            for(var j = 1;j <= (5-sosao);j++)
            {
                a.push(<li key={j+10} ><i className="fa fa-star-o"/></li>);
            }
        }   
        return a;        
    } 
}

export default Product;