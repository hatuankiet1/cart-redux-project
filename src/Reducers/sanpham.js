
var initialState = [
    {
        id:1,
        tieude:'Iphone 7 Plus',
        image:"https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
        description:'IPhone X là một điện thoại thông minh được Apple Inc. thiết kế, phát triển và đưa ra thị trường. Nó được Giám đốc điều hành Tim Cook công bố vào ngày 12 tháng 9 năm 2017, cùng với iPhone 8 và iPhone 8 Plus tại Nhà hát Steve Jobs của Apple Park và phát hành vào ngày 3 tháng 11 năm 2017.[2][3][4][5] Sản phẩm được đặt tên là iPhone X để kỷ niệm 10 năm iPhone, với X là chữ số La Mã cho số 10',
        price:400,
        inventory:10,
        rating:4
    },
    {
        id:2,
        tieude:'Samsung Galaxy S7',
        image:'https://znews-photo.zadn.vn/w1024/Uploaded/fsmyy/2018_11_27/_MG_45842.jpg',
        description:'Trong mô hình của Apple, phiên bản X được định vị như một mô hình cao cấp, nhằm giới thiệu công nghệ tiên tiến. Các rò rỉ, bao gồm cả từ những nhà sản xuất, với HomePod firmware và phiên bản cuối cùng của iOS 11, cho thấy nhiều khía cạnh của sản phẩm này trước khi nó ra mắt',
        price:489,
        inventory:15,
        rating:3
    },
    {
        id:3,
        tieude:'Satamo 4k',
        image:'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/05/00-phone.jpg?itok=oj5pZt_q&fc=50,50',
        description:'Chúng tôi đã dành nhiều thời gian hoàn thiện phần uốn cong của Galaxy S7 và S7 edge. Sử dụng quy trình độc quyền được gọi là Tạo Hình bằng Nhiệt 3D, chúng tôi đã nung chảy kính 3D để uốn cong với độ chính xác cao, đảm bảo khớp tuyệt đối với phần hợp kim uốn cong, tạo nên thân máy nguyên khối liền mạch và chắc chắn.',
        price:180,
        inventory:5,
        rating:3
    },
    {
        id:4,
        tieude:'Nokia XMAS',
        image:'https://bachlongmobile.com/media/clnews/1530174875755835877.jpg',
        description:'Mới đây, vào cuối tháng 2/2018 hãng Samsung đã chính thức cho ra mắt bộ đôi Samsung Galaxy S9 và Samsung Galaxy S9 Plus tại sự kiện Unpacked 2018 diễn ra tại thành phố Barcelona ( Tây Ban Nha ). Với vẻ ngoài thiết kế của bộ đôi sản phẩm này khá tương đồng với bộ đôi sản phẩm vừa ra mắt trước đây của hãng đó là S8 và S8+ nhưng bù lại hãng Samsung đã tập trung vào cải tiến và làm mới bên trong cho bộ đôi siêu phẩm của hãng.',
        price:390,
        inventory:5,
        rating:3
    },
    {
        id:5,
        tieude:'Oppo F1S',
        image:'https://cnet2.cbsistatic.com/img/-ap7G50oMCeM5mvweaibl-yI2ro=/2018/02/27/81bf29bd-12ef-43cf-bf3f-90708de31a33/asus-zenfone-5z-5.jpg',
        description:'Mới đây, vào cuối tháng 2/2018 hãng Samsung đã chính thức cho ra mắt bộ đôi Samsung Galaxy S9 và Samsung Galaxy S9 Plus tại sự kiện Unpacked 2018 diễn ra tại thành phố Barcelona ( Tây Ban Nha ). Với vẻ ngoài thiết kế của bộ đôi sản phẩm này khá tương đồng với bộ đôi sản phẩm vừa ra mắt trước đây của hãng đó là S8 và S8+ nhưng bù lại hãng Samsung đã tập trung vào cải tiến và làm mới bên trong cho bộ đôi siêu phẩm của hãng.',
        price:240,
        inventory:5,
        rating:4
    },
    {
        id:6,
        tieude:'XiaoMi Note 4X',
        image:'https://didonghan.vn/pic/Product/Note-4_636410853784067806.png',
        description:'Mới đây, vào cuối tháng 2/2018 hãng Samsung đã chính thức cho ra mắt bộ đôi Samsung Galaxy S9 và Samsung Galaxy S9 Plus tại sự kiện Unpacked 2018 diễn ra tại thành phố Barcelona ( Tây Ban Nha ). Với vẻ ngoài thiết kế của bộ đôi sản phẩm này khá tương đồng với bộ đôi sản phẩm vừa ra mắt trước đây của hãng đó là S8 và S8+ nhưng bù lại hãng Samsung đã tập trung vào cải tiến và làm mới bên trong cho bộ đôi siêu phẩm của hãng.',
        price:150,
        inventory:5,
        rating:5
    },
];

const sanpham = (state = initialState, action) =>{
    switch(action.type){
        default:
            return [...state];
    }
}

export default sanpham;