import * as Types from './../Constants/ActionType';


var data = JSON.parse(localStorage.getItem('CART'));

var initialState = data!== null ?data:[];

const giohang = (state = initialState, action) => {
    var {sanpham,soluong,giohang} = action;
    var vitri = -1;
    switch (action.type) {
        case Types.ADD_TO_CART:
            vitri = timkiemsanpham(state,sanpham);
            if(vitri !== -1)
            {   
                state[vitri].soluong += 1;
            }
            else{
                state.push({sanpham,soluong});
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        case Types.DELETE_PRODUCT_IN_CART:
             vitri = timkiemsanphamgiohang(state,giohang);   
             if( vitri !== -1 )
             {
                if(state[vitri].soluong > 1 )
                {
                    state[vitri].soluong -=1; 
                }
             }
             localStorage.setItem('CART',JSON.stringify(state));
             return [...state];
        case Types.INCREASE_PRODUCT_IN_CART:
            vitri = timkiemsanphamgiohang(state,giohang);
            if(vitri !== -1 )
            {
                if(state[vitri].soluong >= 1 )
                {
                    state[vitri].soluong +=1; 
                }
            } 
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        case Types.DELETE_FOREVER_PRODUCT_IN_CART:
            vitri = timkiemsanphamgiohang(state,giohang);     
            if(vitri !== -1 )
            {
                state.splice(vitri,1);            
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
}
// phương thức tìm kiếm sản phẩm bằng id ,dựa theo state[i].sanpham.id === sanpham.id(được truyền vào)
var timkiemsanpham = (state,sanpham)=>{
    var vitri = -1;
    if( state !== null)
    {
        for(var i = 0; i < state.length; i++ )
        {
            if(state[i].sanpham.id === sanpham.id )
            {
                vitri = i;
                break;
            }
        }
    }
    return vitri;

}
//phương thức tìm kiếm sản phẩm theo id, trên giohang tổng hợp sanpham và soluong, phải tách ra

var timkiemsanphamgiohang = (state,giohang)=>{
    var vitri = -1;
    if( state.length > 0 )
    {
        for(var i = 0 ;i < state.length;i++ )
        {
            if(state[i].sanpham.id === giohang.sanpham.id )
            {
                vitri  = i;
                break;
            }   
        }
    }
    return vitri;
}



export default giohang;