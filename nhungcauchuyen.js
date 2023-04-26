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