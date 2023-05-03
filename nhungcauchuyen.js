let products = {
    data: [
        {
            image: "/image/nhungcauchuyen:hinh-8.jpeg",
            final: "bài báo",
            title: "Giao hàng cho trẻ em Afghanistan",
            content: "UNICEF tiếp tục hợp tác với các đối tác để hỗ trợ trẻ em và gia đình các em trên toàn quốc",
            final2: "Đọc bài báo",
        },
        {
            image: "/image/nhungcauchuyen:hinh-5.jpeg",
            final: "Bài báo",
            title: "Như thể cô ấy biết sắp có động đất",
            content: "Elanur đã thoát chết trong gang tấc trong trận động đất ở Türkiye. Mẹ cô chia sẻ khả năng phục hồi của con gái đã giúp họ như thế nào trong quá trình hồi phục",
            final2: "Đọc bài báo",
        },
        {
            image: "/image/nhungcauchuyen:hinh-6.jpeg",
            final: "Bài báo",
            title: "11 trường hợp khẩn cấp cần được quan tâm và hỗ trợ nhiều hơn trong năm 2023",
            content: "Trên toàn cầu, UNICEF sẽ tiếp tục hỗ trợ trẻ em và các gia đình đang đối mặt với khủng hoảng nhân đạo",
            final2: "Đọc bài báo",
        },
        {
            image: "/image/nhungcauchuyen:hinh-7.jpeg",
            final: "Bài báo",
            title: "Cấp điện cho các bệnh viện phụ sản ở Ukraine",
            content: "Máy phát điện do UNICEF cung cấp giúp các bệnh viện ở Ukraine tiếp tục công việc quan trọng của họ",
            final2: "Đọc bài báo",
        },
    ]
}

for (let item of products.data) {
    let card = document.createElement("div")
    card.classList.add("text20")

    let text21 = document.createElement("a")
    text21.classList.add("text21")

    let text29 = document.createElement("div")
    text29.classList.add("text29")

    let image = document.createElement("img")
    image.setAttribute("src", item["image"])
    text29.appendChild(image)
    text21.appendChild(text29)
    card.appendChild(text21)

    let text22 = document.createElement("div")
    text22.classList.add("text22")

    let text23 = document.createElement("i")
    text23.classList.add("fa-regular", "fa-book-open")
    text22.appendChild(text23)
    text21.appendChild(text22)
    card.appendChild(text21) 

    let final = document.createElement("p")
    final.innerText = item["final"]
    final.classList.add("text22-1")
    text22.appendChild(final)
    text21.appendChild(text22)
    card.appendChild(text21)

    let title = document.createElement("h5")
    title.innerText = item["title"]
    title.classList.add("text25")
    text21.appendChild(title)
    card.appendChild(text21)

    let content = document.createElement("p")
    content.innerText = item["content"]
    content.classList.add("text23")
    text21.appendChild(content)
    card.appendChild(text21)

    let text24 = document.createElement("div")
    text24.classList.add("text24")

    let text25 = document.createElement("i")
    text25.classList.add("fa-solid","fa-chevron-right")
    text24.appendChild(text25)
    text21.appendChild(text24)
    card.appendChild(text21) 

    let final2 = document.createElement("p")
    final2.innerText = item["final2"]
    final2.classList.add("text26")
    text24.appendChild(final2)
    text21.appendChild(text24)
    card.appendChild(text21)

    document.getElementById("products").appendChild(card)
}

let products2 = {
    data: [
        {
            image: "/image/container-hinh4.jpeg",
            final: "Trang",
            title: "Bài thơ cho hào bình",
            content: "Những người trẻ sống trong xung đột sử dụng thơ để bày tỏ hy vọng về một tương lai hòa bình hơn",
            final2: "Truy cập trang",
        },
        {
            image: "/image/container-hinh6.jpeg",
            final: "Trang",
            title: "Cuộc khủng hoảng Yemen",
            content: "8 năm xung đột khiến hơn 11 triệu trẻ em cần hỗ trợ nhân đạo",
            final2: "Truy cập trang",
        },
        {
            image: "/image/nhungcauchuyen:hinh-9.jpeg",
            final: "Trang",
            title: "Ứng phó với COVID-19",
            content: "Tài nguyên và thông tin về ứng phó của UNICEF đối với đại dịch COVID-19",
            final2: "Truy cập trang",
        },
        {
            image: "/image/nhungcauchuyen:hinh-10.jpeg",
            final: "Trang",
            title: "Trẻ em Rohingya: Ngoài sự sống còn",
            content: "Trẻ em và thanh niên Rohingya muốn nhiều hơn là sự sống còn - họ cũng muốn có một tương lai đầy hy vọng",
            final2: "Truy cập trang",
        },
    ]
}

for (let item of products2.data) {
    let card = document.createElement("div")
    card.classList.add("text20")

    let text21 = document.createElement("a")
    text21.classList.add("text21")

    let text29 = document.createElement("div")
    text29.classList.add("text29")

    let image = document.createElement("img")
    image.setAttribute("src", item["image"])
    text29.appendChild(image)
    text21.appendChild(text29)
    card.appendChild(text21)

    let text22 = document.createElement("div")
    text22.classList.add("text22")

    let text23 = document.createElement("i")
    text23.classList.add("fa-regular", "fa-pager")
    text22.appendChild(text23)
    text21.appendChild(text22)
    card.appendChild(text21) 

    let final = document.createElement("p")
    final.innerText = item["final"]
    final.classList.add("text22-1")
    text22.appendChild(final)
    text21.appendChild(text22)
    card.appendChild(text21)

    let title = document.createElement("h5")
    title.innerText = item["title"]
    title.classList.add("text25")
    text21.appendChild(title)
    card.appendChild(text21)

    let content = document.createElement("p")
    content.innerText = item["content"]
    content.classList.add("text23")
    text21.appendChild(content)
    card.appendChild(text21)

    let text24 = document.createElement("div")
    text24.classList.add("text24")

    let text25 = document.createElement("i")
    text25.classList.add("fa-solid","fa-chevron-right")
    text24.appendChild(text25)
    text21.appendChild(text24)
    card.appendChild(text21) 

    let final2 = document.createElement("p")
    final2.innerText = item["final2"]
    final2.classList.add("text26")
    text24.appendChild(final2)
    text21.appendChild(text24)
    card.appendChild(text21)

    document.getElementById("products2").appendChild(card)
}

let products3 = {
    data: [
        {
            image: "/image/nhungcauchuyen:hinh-11.jpeg",
            final: "bài báo",
            title: "Các trường hợp sởi đang tăng đột biến trên toàn cầu",
            content: "Đây là những gì bạn cần biết về các đợt bùng phát và tác động của nó đối với trẻ em",
            final2: "Đọc bài báo",
        },
        {
            image: "/image/nhungcauchuyen:hinh-12.jpeg",
            final: "Bài báo",
            title: "4 điều bạn cần biết về nước và nạn đói",
            content: "Hàng triệu trẻ em đang phải đối mặt với những tác động chết người của hạn hán, bao gồm nạn đói cấp tính, suy dinh dưỡng và khát nước",
            final2: "Đọc bài báo",
        },
        {
            image: "/image/nhungcauchuyen:hinh-13.jpeg",
            final: "Bài báo",
            title: "Kỳ quan 'món ăn' cho trẻ em thế giới",
            content: "RUTF đã giúp điều trị cho hàng triệu trẻ em bị đe dọa bởi tình trạng gầy mòn nghiêm trọng. Nhưng nó là gì? Và tại sao phương pháp điều trị này lại tuyệt vời như vậy?",
            final2: "Đọc bài báo",
        },
        {
            image: "/image/nhungcauchuyen:hinh-14.jpeg",
            final: "Bài báo",
            title: "Khủng hoảng nước và khí hậu: 10 điều bạn nên biết",
            content: "Thế giới cần sử dụng nước thông minh. Mọi người đều có một vai trò và chúng ta không thể chờ đợi",
            final2: "Đọc bài báo",
        },
    ]
}

for (let item of products3.data) {
    let card = document.createElement("div")
    card.classList.add("text20")

    let text21 = document.createElement("a")
    text21.classList.add("text21")

    let text29 = document.createElement("div")
    text29.classList.add("text29")

    let image = document.createElement("img")
    image.setAttribute("src", item["image"])
    text29.appendChild(image)
    text21.appendChild(text29)
    card.appendChild(text21)

    let text22 = document.createElement("div")
    text22.classList.add("text22")

    let text23 = document.createElement("i")
    text23.classList.add("fa-regular", "fa-book-open")
    text22.appendChild(text23)
    text21.appendChild(text22)
    card.appendChild(text21) 

    let final = document.createElement("p")
    final.innerText = item["final"]
    final.classList.add("text22-1")
    text22.appendChild(final)
    text21.appendChild(text22)
    card.appendChild(text21)

    let title = document.createElement("h5")
    title.innerText = item["title"]
    title.classList.add("text25")
    text21.appendChild(title)
    card.appendChild(text21)

    let content = document.createElement("p")
    content.innerText = item["content"]
    content.classList.add("text23")
    text21.appendChild(content)
    card.appendChild(text21)

    let text24 = document.createElement("div")
    text24.classList.add("text24")

    let text25 = document.createElement("i")
    text25.classList.add("fa-solid","fa-chevron-right")
    text24.appendChild(text25)
    text21.appendChild(text24)
    card.appendChild(text21) 

    let final2 = document.createElement("p")
    final2.innerText = item["final2"]
    final2.classList.add("text26")
    text24.appendChild(final2)
    text21.appendChild(text24)
    card.appendChild(text21)

    document.getElementById("products3").appendChild(card)
}

let products4 = {
    data: [
        {
            final: "Liên kết",
            title: "Tình hình trẻ em thế giới",
            contect: "Cuộc sống và tương lai của hàng triệu trẻ em đang gặp nguy hiểm...",
            final2: "Truy cập trang"
        },
        {
            final: "Liên kết",
            title: "Giới thiệu về Website",
            contect: "Tìm hiểu về UNICEF, các đối tác của chúng tôi và những người tham gia cùng chúng tôi để đấu tranh cho quyền của mọi trẻ em.",
            final2: "Truy cập trang"
        },
        {
            final: "Liên kết",
            title: "Nơi chúng tôi làm việc",
            contect: "Khám phá công việc của UNICEF tại hơn 190 quốc gia và vùng lãnh thổ.",
            final2: "Truy cập trang"
        },
        {
            final: "Liên kết",
            title: "làm việc với chúng tôi",
            contect: "Có muốn tahy đổi thế giới không? Làm việc với chúng tôi.",
            final2: "Truy cập trang"
        },
    ]
}

for (let item of products4.data) {
    let card2 = document.createElement("div")
    card2.classList.add("text201")

    let text21 = document.createElement("a")
    text21.classList.add("text211")

    let text22 = document.createElement("div")
    text22.classList.add("text221")

    let text23 = document.createElement("i")
    text23.classList.add("far", "fa-external-link")
    text22.appendChild(text23)
    text21.appendChild(text22)
    card2.appendChild(text21) 

    let final = document.createElement("p")
    final.innerText = item["final"]
    final.classList.add("span-noidung1")
    text22.appendChild(final)
    text21.appendChild(text22)
    card2.appendChild(text21)

    let title = document.createElement("h5")
    title.innerText = item["title"]
    title.classList.add("text251")
    text21.appendChild(title)
    card2.appendChild(text21)

    let contect = document.createElement("p")
    contect.innerText = item["contect"]
    contect.classList.add("text231")
    text21.appendChild(contect)
    card2.appendChild(text21)

    let text24 = document.createElement("div")
    text24.classList.add("text241")

    let text25 = document.createElement("i")
    text25.classList.add("fa-solid","fa-chevron-right")
    text24.appendChild(text25)
    text21.appendChild(text24)
    card2.appendChild(text21) 

    let final2 = document.createElement("p")
    final2.innerText = item["final2"]
    final2.classList.add("text261")
    text24.appendChild(final2)
    text21.appendChild(text24)
    card2.appendChild(text21)

    document.getElementById("products4").appendChild(card2)
}

let menu = document.getElementById("hienthi")

function hienthimenu(id) {
    console.log(id)
    if (id == "tc") {
        menu.innerHTML = `
        <div class="text-100">
                <div class="text100">
                    <div class="text-101">
                        <img src="/image/nhungcauchuyen:hinh-20.jpeg" alt="">
                        <div class="text-102">
                            <div class="text-103">   
                                 <i class="fa-solid fa-video" style="color: #000000;"></i> 
                                 <p>Video</p>
                            </div>
                            <div class="text-104">
                                <div class="text-105">
                                    <h5>
                                        Tiếp cận cộng đồng khai thác vàng từ xa ở Suriname
                                    </h5>
                                    <p>
                                        Cách tích hợp xét nghiệm COVID-19 vào một chương trình y tế hiện có có thể đóng vai trò là một mô hình toàn cầu
                                    </p>
                                </div>
                                <div class="text-106">
                                    <i class="fa-regular fa-calendar-days" style="color: #000000;"></i>
                                    <p>01 5 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text100-1">
                    <div class="text-101">
                        <img src="/image/nhungcauchuyen:hinh-21.png" alt="">
                        <div class="text-102">
                            <div class="text-103">   
                                 <i class="fa-solid fa-video" style="color: #000000;"></i> 
                                 <p>Video</p>
                            </div>
                            <div class="text-104">
                                <div class="text-105">
                                    <h5>
                                        Hãy nói về sức khỏe tâm thần
                                    </h5>
                                    <p>
                                        Làm thế nào những người trẻ tuổi có thể chăm sóc sức khỏe tinh thần của họ? Những người ủng hộ thanh niên chia sẻ lời khuyên
                                    </p>
                                </div>
                                <div class="text-106">
                                    <i class="fa-regular fa-calendar-days" style="color: #000000;"></i>
                                    <p>27 4 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text100-1">
                    <div class="text-101">
                        <img src="/image/nhungcauchuyen:hinh-22.jpeg" alt="">
                        <div class="text-102">
                            <div class="text-103">   
                                 <i class="fa-solid fa-video" style="color: #000000;"></i> 
                                 <p>Video</p>
                            </div>
                            <div class="text-104">
                                <div class="text-105">
                                    <h5>
                                        Di động để tiếp cận trẻ em không liều thuốc ở Bangladesh
                                    </h5>
                                    <p>
                                        Giúp các gia đình nông dân và công nhân nhà máy tiêm phòng cho con cái họ
                                    </p>
                                </div>
                                <div class="text-106">
                                    <i class="fa-regular fa-calendar-days" style="color: #000000;"></i>
                                    <p>18 4 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text100-1">
                    <div class="text-101">
                        <img src="/image/nhungcauchuyen:hinh-23.jpeg" alt="">
                        <div class="text-102">
                            <div class="text-103">   
                                 <i class="fa-solid fa-video" style="color: #000000;"></i> 
                                 <p>Video</p>
                            </div>
                            <div class="text-104">
                                <div class="text-105">
                                    <h5>
                                        Cứu cánh cho tuổi thơ ở Syria
                                    </h5>
                                    <p>
                                        Ca hát, trò chơi và các hoạt động khác đang mang đến cho trẻ em Syria bị ảnh hưởng bởi trận động đất cơ hội khám phá lại cảm giác của một đứa trẻ
                                    </p>
                                </div>
                                <div class="text-106">
                                    <i class="fa-regular fa-calendar-days" style="color: #000000;"></i>
                                    <p>14 4 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `
    } else if (id == "bvte") {
        menu.innerHTML = `
        <div class="text-100">
                <div class="text100">
                    <div class="text-101">
                        <img src="/image/nhunghinhanh:hinh-30.jpeg" alt="">
                        <div class="text-102">
                            <div class="text-103">   
                                 <i class="fa-solid fa-video" style="color: #000000;"></i> 
                                 <p>Video</p>
                            </div>
                            <div class="text-104">
                                <div class="text-105">
                                    <h5>
                                        Suy nghĩ của tôi về sự phát triển của các hệ thống bảo vệ trẻ em
                                    </h5>
                                    <p>
                                        Giám đốc Bảo vệ Trẻ em của UNICEF nhìn lại hơn 30 năm phục vụ
                                    </p>
                                </div>
                                <div class="text-106">
                                    <i class="fa-regular fa-calendar-days" style="color: #000000;"></i>
                                    <p>16 3 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text100-1">
                    <div class="text-101">
                        <img src="/image/nhunghinhanh:hinh-31.jpeg" alt="">
                        <div class="text-102">
                            <div class="text-103">   
                                 <i class="fa-solid fa-video" style="color: #000000;"></i> 
                                 <p>Video</p>
                            </div>
                            <div class="text-104">
                                <div class="text-105">
                                    <h5>
                                        Một cái gì đó mỉm cười về
                                    </h5>
                                    <p>
                                        Nhìn lại những khoảnh khắc trong năm 2022 khiến trẻ em mỉm cười
                                    </p>
                                </div>
                                <div class="text-106">
                                    <i class="fa-regular fa-calendar-days" style="color: #000000;"></i>
                                    <p>19 12 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text100-1">
                    <div class="text-101">
                        <img src="/image/nhunghinhanh:hinh-32.jpeg" alt="">
                        <div class="text-102">
                            <div class="text-103">   
                                 <i class="fa-solid fa-video" style="color: #000000;"></i> 
                                 <p>Video</p>
                            </div>
                            <div class="text-104">
                                <div class="text-105">
                                    <h5>
                                        Chung tay vì quyền trẻ em - Ngày Trẻ em Thế giới 2022!
                                    </h5>
                                    <p>
                                        Điểm nổi bật từ khắp nơi trên thế giới khi trẻ em tiếp quản và biến thế giới thành màu xanh
                                    </p>
                                </div>
                                <div class="text-106">
                                    <i class="fa-regular fa-calendar-days" style="color: #000000;"></i>
                                    <p>21 11 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text100-1">
                    <div class="text-101">
                        <img src="/image/nhunghinhanh:hinh-33.jpeg" alt="">
                        <div class="text-102">
                            <div class="text-103">   
                                 <i class="fa-solid fa-video" style="color: #000000;"></i> 
                                 <p>Video</p>
                            </div>
                            <div class="text-104">
                                <div class="text-105">
                                    <h5>
                                        Cơ hội thứ hai: ra khỏi trại giam vị thành niên và đến trường
                                    </h5>
                                    <p>
                                       Làm thế nào các tòa án ảo có thể tạo ra một hệ thống tư pháp thân thiện với trẻ em hơn
                                    </p>
                                </div>
                                <div class="text-106">
                                    <i class="fa-regular fa-calendar-days" style="color: #000000;"></i>
                                    <p>21 7 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `
    } else if (id == "pttta") {
        menu.innerHTML = `
        <div class="text-100">
                <div class="text100">
                    <div class="text-101">
                        <img src="/image/nhunghinhanh:hinh-40.jpeg" alt="">
                        <div class="text-102">
                            <div class="text-103">   
                                 <i class="fa-solid fa-video" style="color: #000000;"></i> 
                                 <p>Video</p>
                            </div>
                            <div class="text-104">
                                <div class="text-105">
                                    <h5>
                                        Hướng tới một thế giới vui chơi và kết nối cho mọi trẻ em
                                    </h5>
                                    <p>
                                        Tại sao chơi lại quan trọng như vậy và làm thế nào để mọi đứa trẻ đều được hưởng lợi
                                    </p>
                                </div>
                                <div class="text-106">
                                    <i class="fa-regular fa-calendar-days" style="color: #000000;"></i>
                                    <p>30 6 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text100-1">
                    <div class="text-101">
                        <img src="/image/nhunghinhanh:hinh-41.jpeg" alt="">
                        <div class="text-102">
                            <div class="text-103">   
                                 <i class="fa-solid fa-video" style="color: #000000;"></i> 
                                 <p>Video</p>
                            </div>
                            <div class="text-104">
                                <div class="text-105">
                                    <h5>
                                        Sức khỏe tinh thần và hạnh phúc của người chăm sóc
                                    </h5>
                                    <p>
                                        Hỗ trợ trẻ em cũng có nghĩa là hỗ trợ người chăm sóc
                                    </p>
                                </div>
                                <div class="text-106">
                                    <i class="fa-regular fa-calendar-days" style="color: #000000;"></i>
                                    <p>11 5 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text100-1">
                    <div class="text-101">
                        <img src="/image/nhunghinhanh:hinh-42.jpeg" alt="">
                        <div class="text-102">
                            <div class="text-103">   
                                 <i class="fa-solid fa-video" style="color: #000000;"></i> 
                                 <p>Video</p>
                            </div>
                            <div class="text-104">
                                <div class="text-105">
                                    <h5>
                                        Chuyển đổi ở Tajikistan
                                    </h5>
                                    <p>
                                        UNICEF đang hợp tác với các đối tác để bảo vệ trẻ nhỏ khỏi những tác động có hại của việc đưa vào thể chế
                                    </p>
                                </div>
                                <div class="text-106">
                                    <i class="fa-regular fa-calendar-days" style="color: #000000;"></i>
                                    <p>19 4 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text100-1">
                    <div class="text-101">
                        <img src="/image/nhunghinhanh:hinh-43.jpeg" alt="">
                        <div class="text-102">
                            <div class="text-103">   
                                 <i class="fa-solid fa-video" style="color: #000000;"></i> 
                                 <p>Video</p>
                            </div>
                            <div class="text-104">
                                <div class="text-105">
                                    <h5>
                                        Vắc xin nuôi dạy con cái
                                    </h5>
                                    <p>
                                        Nhu cầu truy cập phổ cập khẩn cấp vào các chương trình nuôi dạy con cái
                                    </p>
                                </div>
                                <div class="text-106">
                                    <i class="fa-regular fa-calendar-days" style="color: #000000;"></i>
                                    <p>30 11 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `
    } else if (id == "gd") {
        menu.innerHTML = `
        <div class="text-100">
                <div class="text100">
                    <div class="text-101">
                        <img src="/image/nhunghinhanh:hinh-50.jpeg" alt="">
                        <div class="text-102">
                            <div class="text-103">   
                                 <i class="fa-solid fa-video" style="color: #000000;"></i> 
                                 <p>Video</p>
                            </div>
                            <div class="text-104">
                                <div class="text-105">
                                    <h5>
                                        Thanh niên lên tiếng đi đầu trong bảo tồn khí hậu
                                    </h5>
                                    <p>
                                        Nền tảng tương tác cung cấp không gian cho các nhà hoạt động khí hậu thanh niên
                                    </p>
                                </div>
                                <div class="text-106">
                                    <i class="fa-regular fa-calendar-days" style="color: #000000;"></i>
                                    <p>23 3 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text100-1">
                    <div class="text-101">
                        <img src="/image/nhunghinhanh:hinh-51.jpeg" alt="">
                        <div class="text-102">
                            <div class="text-103">   
                                 <i class="fa-solid fa-video" style="color: #000000;"></i> 
                                 <p>Video</p>
                            </div>
                            <div class="text-104">
                                <div class="text-105">
                                    <h5>
                                        Chuyển đổi giáo dục với tài chính công bằng
                                    </h5>
                                    <p>
                                        Tài chính giáo dục với tài chính cân bằng 
                                    </p>
                                </div>
                                <div class="text-106">
                                    <i class="fa-regular fa-calendar-days" style="color: #000000;"></i>
                                    <p>13 3 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text100-1">
                    <div class="text-101">
                        <img src="/image/nhughinhanh:hinh-52.jpeg" alt="">
                        <div class="text-102">
                            <div class="text-103">   
                                 <i class="fa-solid fa-video" style="color: #000000;"></i> 
                                 <p>Video</p>
                            </div>
                            <div class="text-104">
                                <div class="text-105">
                                    <h5>
                                        Myanmar: Cửa sổ thế giới cho trẻ khuyết tật
                                    </h5>
                                    <p>
                                        Sách truyện đa phương tiện mang đến cơ hội học tập mới
                                    </p>
                                </div>
                                <div class="text-106">
                                    <i class="fa-regular fa-calendar-days" style="color: #000000;"></i>
                                    <p>13 3 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text100-1">
                    <div class="text-101">
                        <img src="/image/nhunghinhanh:hinh-44.jpeg" alt="">
                        <div class="text-102">
                            <div class="text-103">   
                                 <i class="fa-solid fa-video" style="color: #000000;"></i> 
                                 <p>Video</p>
                            </div>
                            <div class="text-104">
                                <div class="text-105">
                                    <h5>
                                        Hãy định hình công nghệ để biến đổi
                                    </h5>
                                    <p>
                                       Phương pháp sư phạm kỹ thuật số đáp ứng giới tính: Hướng dẫn dành cho các nhà giáo dục
                                    </p>
                                </div>
                                <div class="text-106">
                                    <i class="fa-regular fa-calendar-days" style="color: #000000;"></i>
                                    <p>06 3 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `
    }
}