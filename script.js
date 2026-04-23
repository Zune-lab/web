// ==========================================
// 1. DATA BÁCH KHOA TOÀN THƯ (38 QUIZ - MASTERKEY ẨN)
// MASTERKEY: EMCAMONBANHVIDACHIULAMBANVOI1DUANHUEM.
// ==========================================
const quizData = {
    "Man o' War": { q: "Sinh vật này thực chất là gì?", a: ["Một loài sứa có nọc độc", "Không phải sứa, mà là một quần thể sinh vật hoạt động như một cá thể", "Một loài cá thân mềm"], correct: 1, fragment: "E" },
    "Ocean Sunfish": { q: "Đâu là mô tả đúng về Ocean Sunfish?", a: ["Loài cá bơi nhanh nhất", "Loài cá xương nặng nhất thế giới, trông như một cái đầu cá khổng lồ trôi nổi", "Loài cá nhỏ nhất đại dương"], correct: 1, fragment: "M" },
    "Giant Isopod": { q: "Trông giống con bọ vừng (pillbug), nhưng ở dưới biển sâu nó lớn cỡ nào?", a: ["Kích thước của một con mèo", "To bằng con cá voi", "Nhỏ như hạt cát"], correct: 0, fragment: "C" },
    "Snipe Eel": { q: "Mỏ của loài cá này cong ra ngoài để làm gì?", a: ["Đào hang", "Vướng vào râu của những con tôm đi ngang qua", "Tấn công cá mập"], correct: 1, fragment: "A" },
    "Barreleye Fish": { q: "Đặc điểm kỳ dị trên đầu của loài cá này là gì?", a: ["Một chiếc sừng phát sáng", "Mái vòm trong suốt chứa chất lỏng với đôi mắt hình ống màu xanh lá bên trong", "Hàm răng sắc nhọn mọc trên đỉnh đầu"], correct: 1, fragment: "M" },
    "Goblin Shark": { q: "Loài 'hóa thạch sống' này săn mồi bằng cách nào?", a: ["Bắn bộ hàm nhô cao của nó lao về phía trước để vồ mồi", "Tạo ra dòng điện", "Ru ngủ con mồi bằng ánh sáng"], correct: 0, fragment: "O" },
    "Frilled Shark": { q: "Loài cá mập giống lươn thời tiền sử này có bao nhiêu chiếc răng?", a: ["Không có răng", "50 chiếc răng nanh lớn", "300 chiếc răng hình đinh ba xếp thành 25 hàng"], correct: 2, fragment: "N" },
    "Anglerfish": { q: "Nó thu hút những con mồi bất cẩn bằng cách nào?", a: ["Sử dụng một phần thịt phát quang sinh học kéo dài từ đầu", "Phát ra sóng âm thanh", "Giả vờ chết"], correct: 0, fragment: "B" },
    "Viperfish": { q: "Đặc điểm đáng sợ của loài cá này là gì?", a: ["Cơ thể tàng hình", "Được trang bị những chiếc nanh lớn đến mức không vừa trong miệng", "Phun ra axit"], correct: 1, fragment: "A" },
    "Gulper Eel": { q: "Cấu tạo cơ thể của lươn Gulper chủ yếu bao gồm gì?", a: ["Nhiều xúc tu", "Một cái miệng khổng lồ khớp lỏng lẻo và một cái đuôi dài như roi", "Lớp vảy cứng như thép"], correct: 1, fragment: "N" },
    "Black Swallower": { q: "Khả năng đặc biệt của dạ dày loài cá này là gì?", a: ["Có thể căng ra để nuốt chửng toàn bộ con cá lớn hơn kích thước của nó hơn hai lần", "Chứa đầy khí độc", "Có thể tự tiêu hủy"], correct: 0, fragment: "H" },
    "Ghost Shark": { q: "Còn được gọi là Chimaera, nó tìm mồi trong bóng tối bằng cách nào?", a: ["Phát ra tiếng kêu", "Sử dụng bộ phận cảm nhận điện (electroreceptors) trên mũi", "Thị giác siêu phàm"], correct: 1, fragment: "V" },
    "Vampire Squid": { q: "Khi bị đe dọa, mực ma cà rồng phản ứng thế nào?", a: ["Phun mực đen", "Lẩn trốn vào cát", "Tự lộn từ trong ra ngoài, để lộ những hàng gai thịt"], correct: 2, fragment: "I" },
    "Deep-Sea Lizardfish": { q: "Kẻ săn mồi phục kích đáng sợ này có đặc điểm gì nổi bật ở miệng?", a: ["Chứa đầy những chiếc răng cưa sắc nhọn lởm chởm", "Không có răng", "Răng chứa chất kịch độc"], correct: 0, fragment: "D" },
    "Tripod Fish": { q: "Nó chờ dòng chảy mang thức ăn đến bằng cách nào?", a: ["Đứng trên đáy biển bằng ba chiếc vây giống như cà kheo", "Treo mình lộn ngược từ vách đá", "Nằm giả chết"], correct: 0, fragment: "A" },
    "Faceless Cusk": { q: "Đặc điểm kỳ dị của loài cá hình củ hành này là gì?", a: ["Nó dường như không có khuôn mặt", "Nó có khuôn mặt giống người", "Nó có hai khuôn mặt"], correct: 0, fragment: "C" },
    "Mariana Snailfish": { q: "Áp suất mà nó có thể chịu đựng được ví như điều gì?", a: ["1.600 con voi đứng trên một chiếc ô tô", "10 chiếc máy bay phản lực", "Một tòa nhà chọc trời"], correct: 0, fragment: "H" },
    "Supergiant Amphipod": { q: "Loài giáp xác khổng lồ này kiếm ăn như thế nào trong các rãnh sâu?", a: ["Lọc vi khuẩn", "Ăn các mảnh vụn chìm xuống (sunken debris)", "Săn các loài cá lớn"], correct: 1, fragment: "I" },
    "Benthic Sea Cucumber": { q: "Những bầy đàn mờ ảo này làm gì dưới đáy của các rãnh đại dương sâu nhất?", a: ["Từ từ hút bụi (vacuum) đáy biển", "Chiến đấu giành lãnh thổ", "Ngủ đông"], correct: 0, fragment: "U" },
    "Dragonfish": { q: "Loài quái ngư này dùng thủ đoạn gì để săn mồi trong bóng tối?", a: ["Phát ra sóng siêu âm", "Phát ra ánh sáng sinh học màu đỏ mà hầu hết con mồi không nhìn thấy được", "Tiết ra chất độc gây mê"], correct: 1, fragment: "L" },
    "Fangtooth": { q: "Kỷ lục đáng sợ của loài cá này là gì?", a: ["Có những chiếc răng lớn nhất so với kích thước cơ thể trong thế giới loài cá", "Bơi nhanh nhất vực thẳm", "Cơ thể cứng như thép"], correct: 0, fragment: "A" },
    "Cookiecutter Shark": { q: "Tại sao loài cá mập nhỏ bé này lại có cái tên 'Cookiecutter' (Khuôn cắt bánh quy)?", a: ["Vì nó thích ăn bánh", "Vì nó cắn những miếng thịt hình tròn hoàn hảo từ cơ thể các loài động vật lớn hơn", "Vì hình dáng của nó tròn vo"], correct: 1, fragment: "M" },
    "Firefly Squid": { q: "Mực đom đóm (Firefly Squid) nổi tiếng nhất với hiện tượng gì?", a: ["Phun ra một loại mực độc màu xanh dạ quang", "Phát ra ánh sáng sinh học màu xanh lam rực rỡ khắp cơ thể", "Tạo ra dòng điện để tự vệ"], correct: 1, fragment: "B" },
    "Stoplight Loosejaw": { q: "Cấu trúc hàm của loài cá này có gì đặc biệt?", a: ["Không có đáy (không có màng thịt nối hàm dưới), giúp nó vồ mồi cực nhanh mà không bị cản nước", "Có hai hàm lồng vào nhau", "Hàm chứa nọc độc"], correct: 0, fragment: "A" },
    "Glass Squid": { q: "Để sinh tồn, loài mực này đã tiến hóa cơ thể như thế nào?", a: ["Cơ thể bọc vỏ cứng", "Gần như hoàn toàn trong suốt, chỉ lộ ra đôi mắt và tuyến tiêu hóa", "Đổi màu theo nhiệt độ"], correct: 1, fragment: "N" },
    "Yeti Crab": { q: "Cua Yeti (Cua người tuyết) dùng đôi càng đầy lông lá của mình để làm gì?", a: ["Giữ ấm cơ thể", "Nuôi (farm) vi khuẩn trên lông để làm thức ăn", "Tấn công kẻ thù"], correct: 1, fragment: "V" },
    "Sea Pig": { q: "Heo biển (Sea Pig) thực chất là loài động vật nào?", a: ["Một loài cá đột biến", "Một loài sứa", "Một loài hải sâm (đỉa biển) dưới đáy vực"], correct: 2, fragment: "O" },
    "Zombie Worm": { q: "Loài giun kỳ dị này sinh tồn bằng món ăn gì?", a: ["San hô chết", "Tiêu thụ xương cá voi chìm xuống đáy biển bằng cách tiết ra axit", "Ký sinh trên các loài cá lớn"], correct: 1, fragment: "I" },
    "Comb Jelly": { q: "Sự phát sáng lấp lánh bảy sắc cầu vồng của Sứa Lược đến từ đâu?", a: ["Sự khúc xạ ánh sáng qua các hàng tiêm mao (cilia) liên tục chuyển động", "Bóng đèn sinh học trong bụng", "Sự phản chiếu ánh mặt trời"], correct: 0, fragment: "1" },
    "Bloodybelly Comb Jelly": { q: "Tại sao loài sứa này lại tiến hóa để có cái bụng màu đỏ rực như máu?", a: ["Để thu hút bạn tình", "Trong biển sâu, màu đỏ không thể nhìn thấy được, giúp chúng tàng hình hoàn toàn", "Để xua đuổi cá mập"], correct: 1, fragment: "D" },
    "Atolla Jellyfish": { q: "Khi bị tấn công, loài sứa này kích hoạt 'Báo động sinh học' để làm gì?", a: ["Làm mù mắt kẻ thù", "Chiếu sáng rực rỡ để thu hút một kẻ săn mồi lớn hơn đến ăn thịt kẻ đang tấn công nó", "Gọi đồng loại đến cứu"], correct: 1, fragment: "U" },
    "Deep Sea Spider": { q: "Nhện biển sâu hấp thụ oxy và tiêu hóa thức ăn bằng cách nào?", a: ["Bằng miệng và phổi", "Hấp thụ trực tiếp qua đôi chân dài lêu nghêu của chúng", "Không cần oxy"], correct: 1, fragment: "A" },
    "Hadal Snailfish Variant": { q: "Để không bị áp suất khổng lồ nghiền nát, cơ thể chúng thay đổi thế nào?", a: ["Cấu tạo lỏng lẻo như thạch, xương thiếu canxi và mở nắp hộp sọ", "Phủ vảy bọc thép", "Làm đông đá cơ thể"], correct: 0, fragment: "N" },
    "Trench Jelly": { q: "Loài sứa này lơ lửng ở vực thẳm mà không có xúc tu độc, vậy chúng bắt mồi bằng gì?", a: ["Tốc độ nhanh", "Phát sáng", "Các nếp gấp cơ thể dính để bẫy sinh vật phù du"], correct: 2, fragment: "H" },
    "Extremophile Bacteria": { q: "Ở đáy vực sâu nhất, vi khuẩn tồn tại nhờ gì?", a: ["Ánh sáng mặt trời", "Hấp thụ hóa chất độc hại từ các lỗ thông hơi thủy nhiệt", "Ăn rác thải"], correct: 1, fragment: "U" },
    "Challenger Deep Microbes": { q: "Ở đáy tuyệt đối của đại dương, sự sống nuôi dưỡng bằng gì thay vì ánh sáng mặt trời?", a: ["Các phản ứng hóa học", "Nhiệt lượng từ magma", "Hấp thụ nước biển"], correct: 0, fragment: "E" },
    "Helmet Jellyfish": { q: "Loài sứa này có hình dáng giống vật thể nào?", a: ["Một quả bóng bay", "Một chiếc mũ bảo hiểm phi hành gia phát sáng", "Một cái ô"], correct: 1, fragment: "M" },
    "Blue Dragon (Glaucus atlanticus)": { q: "Vũ khí phòng vệ đáng sợ của loài sên biển nhỏ bé này là gì?", a: ["Phun mực đen", "Lẩn trốn vào cát", "Ăn thịt Sứa Chiến Hạm và tích trữ nọc độc của chúng để tự vệ"], correct: 2, fragment: "." }
};

const extendedDetails = {
    "Man o' War": "Những xúc tu chứa nọc độc của chúng có thể vươn dài tới 50 mét dưới mặt nước.",
    'Flying Fish': "Vây ngực của chúng tiến hóa giống hệt đôi cánh, cho phép chúng lướt đi trong không khí.",
    'Sardine School': "Sự di chuyển đồng điệu của chúng là một trong những cảnh tượng ngoạn mục nhất tự nhiên.",
    'Mahi-Mahi': "Chúng bơi cực nhanh, có thể đạt tốc độ lên tới 50 hải lý/giờ để bắt cá chuồn.",
    'Ocean Sunfish': "Cá Mola Mola có thể nặng tới hơn 2 tấn dù chúng chỉ ăn sứa và các sinh vật phù du.",
    'Oarfish': "Ở Nhật Bản, chúng được gọi là 'Sứ giả từ cung điện của Long Vương'.",
    'Giant Isopod': "Là một loài giáp xác ăn xác thối, chúng có thể nhịn ăn tới 5 năm liên tục.",
    'Snipe Eel': "Chúng lơ lửng trong nước với cái hàm mở rộng, chờ đợi những con tôm xui xẻo mắc vào.",
    'Barreleye Fish': "Đôi mắt hình ống của chúng có thể xoay hướng lên trên xuyên qua hộp sọ trong suốt để nhìn con mồi.",
    'Coelacanth': "Vây của chúng di chuyển theo quỹ đạo xen kẽ, giống hệt cách một loài động vật bốn chân đi bộ.",
    'Goblin Shark': "Khi tấn công, hàm của chúng tách rời hoàn toàn và phóng về phía trước.",
    'Frilled Shark': "Một hóa thạch sống nuốt chửng con mồi nguyên con giống hệt như một con rắn.",
    'Anglerfish': "Phần 'lồng đèn' chứa hàng triệu vi khuẩn phát sáng cộng sinh. Con đực khi giao phối sẽ dung hợp hoàn toàn vào cơ thể con cái.",
    'Viperfish': "Răng nanh của chúng dài tới mức đâm ngược về phía mắt của chính mình.",
    'Gulper Eel': "Dạ dày của chúng có thể giãn nở khổng lồ để đối với sự khan hiếm thức ăn ở biển sâu.",
    'Black Swallower': "Loài này thường xuyên ăn những con cá quá to đến nỗi dạ dày bị vỡ trước khi kịp tiêu hóa.",
    'Giant Squid': "Một con quái vật huyền thoại với đôi mắt to bằng chiếc đĩa để nhìn xuyên màn đêm tuyệt đối.",
    'Ghost Shark': "Chúng có gai độc ở phía trước vây lưng để tự vệ trước những kẻ săn mồi lớn hơn.",
    'Vampire Squid': "Chúng không phun mực vì ở độ sâu này mực vô tác dụng. Thay đó, chúng phóng ra dịch nhầy phát sáng.",
    'Deep-Sea Lizardfish': "Chúng là loài lưỡng tính đồng thời, nghĩa là có cả cơ quan sinh dục đực và cái.",
    'Dumbo Octopus': "Chúng hoàn toàn không có túi mực vì sống quá sâu nên việc phun mực không mang lại lợi ích gì.",
    'Tripod Fish': "Chúng bơm chất lỏng vào ba vây dưới bụng để làm cho chúng cứng lại như chiếc kiềng ba chân.",
    'Faceless Cusk': "Được phát hiện lần đầu vào năm 1873, người ta từng nghĩ nó là một câu chuyện thần thoại.",
    'Abyssal Grenadier': "Một trong những loài cá phong phú nhất ở biển sâu, chúng dùng cảm biến hóa học để tìm thức ăn.",
    'Mariana Snailfish': "Ở độ sâu 8,000 mét, chúng là kẻ săn mồi đầu bảng. Nếu đưa lên mặt nước, cơ thể chúng sẽ tan chảy.",
    'Supergiant Amphipod': "Hội chứng 'khổng lồ hóa biển sâu' đã làm loài sinh vật nhỏ bé này to lớn dị thường.",
    'Benthic Sea Cucumber': "Chúng chiếm tới hơn 90% sinh khối ở những rãnh đại dương sâu nhất trên Trái Đất.",
    'Challenger Deep Microbes': "Sự sống ở đây lấy năng lượng từ các khe nứt thủy nhiệt, nơi nhiệt độ và hóa chất hòa quyện.",
    'Dragonfish': "Cơ thể chúng có một lớp áo giáp vảy siêu nhỏ giúp hấp thụ ánh sáng, khiến chúng tàng hình hoàn toàn.",
    'Fangtooth': "Nhờ cặp răng nanh khổng lồ, chúng có thể cắn xuyên qua cả lớp vỏ cứng của động vật giáp xác.",
    'Cookiecutter Shark': "Dù nhỏ bé, chúng dám tấn công cả cá voi trắng, tàu ngầm hạt nhân và dây cáp viễn thông.",
    'Firefly Squid': "Mỗi độ xuân về, hàng triệu con mực đom đóm tụ tập tại vịnh Toyama (Nhật Bản), thắp sáng cả một vùng biển đêm đẹp như dải ngân hà.",
    'Stoplight Loosejaw': "Ánh sáng sinh học màu đỏ của chúng đóng vai trò như một kính nhìn xuyên đêm (Night-vision) tuyệt đối.",
    'Glass Squid': "Khi sợ hãi, chúng có thể cuộn mình thành một quả bóng tròn và xịt mực vào bên trong cơ thể để ngụy trang.",
    'Yeti Crab': "Chúng phải liên tục vẫy đôi càng quanh các khe nứt nhiệt để cung cấp oxy và khoáng chất cho vườn vi khuẩn trên lông.",
    'Sea Pig': "Bầy đàn hàng ngàn con Heo Biển luôn di chuyển theo cùng một hướng dựa theo dòng chảy của đại dương.",
    'Zombie Worm': "Chúng không có dạ dày hay miệng, thay vào đó rễ của chúng tiết axit để hòa tan và hút chất béo từ xương.",
    'Comb Jelly': "Màu sắc cầu vồng của chúng không phải là phát sáng sinh học, mà là do ánh sáng khúc xạ qua các lông mao.",
    'Bloodybelly Comb Jelly': "Màu đỏ rực rỡ giúp chúng giấu đi những con mồi phát sáng mà chúng vừa nuốt vào bụng.",
    'Atolla Jellyfish': "Báo động phát sáng của chúng có thể nhìn thấy từ khoảng cách hơn 90 mét trong bóng tối tuyệt đối.",
    'Deep Sea Spider': "Chúng dùng chiếc vòi dài của mình như một cái ống hút để chọc thủng vỏ và hút dịch từ hải quỳ.",
    'Hadal Snailfish Variant': "Hộp sọ của chúng không đóng kín hoàn toàn để cân bằng áp suất bên trong và bên ngoài cơ thể.",
    'Trench Jelly': "Chúng gần như không có cấu trúc tế bào, lơ lửng nhờ các nếp gấp mô cực kỳ mỏng manh.",
    'Extremophile Bacteria': "Chúng sử dụng lưu huỳnh và metan từ lòng đất để quang hợp hóa học (Chemosynthesis).",
    'Hatchetfish': "Bụng của chúng liên tục phát ra thứ ánh sáng có cùng bước sóng với ánh sáng mờ ảo xuyên từ trên mặt nước xuống.",
    'Lanternfish': "Chúng chiếm tới 65% sinh khối cá biển sâu và đóng vai trò là nguồn thức ăn sống còn của đại dương.",
    'Sea Angel': "Khi săn mồi, đầu của chúng chẻ đôi ra để phóng ra những xúc tu bám chặt lấy con mồi.",
    'Helmet Jellyfish': "Loài sứa này liên tục phát ra những xung ánh sáng huỳnh quang chạy dọc cơ thể, trông như một chiếc đĩa bay đang hoạt động.",
    'Blue Dragon (Glaucus atlanticus)': "Dù chỉ dài 3cm, Rồng Xanh là nỗi khiếp sợ của các loài sứa độc. Nó nuốt nọc độc của con mồi và biến thành vũ khí của chính mình.",
    'Butterflyfish': "Chúng thường sống theo cặp nương tựa vào nhau suốt đời và sử dụng họa tiết trên thân để ngụy trang giữa các rạn san hô.",
    'Parrotfish': "Phân của chúng thực chất là cát trắng mịn. Một con cá mó có thể tạo ra hàng trăm kg cát mỗi năm cho bãi biển!",
    'Surgeonfish': "Hai bên cuống đuôi của chúng có những chiếc gai sắc như dao mổ, dùng để tự vệ khi bị đe dọa.",
    'Barracuda': "Cá nhồng có tập tính bị thu hút bởi những vật thể lấp lánh giống như vảy cá, nên thợ lặn thường tránh đeo trang sức bóng loáng.",
    'Sea Turtle': "Rùa biển có thể nín thở dưới nước nhiều giờ liền khi ngủ, nhưng vẫn phải ngoi lên mặt nước để hít thở dưỡng khí.",
    'Stingray': "Mắt của chúng nằm trên đỉnh đầu, nhưng miệng và khe mang lại nằm ở dưới bụng để tiện cho việc kiếm ăn dưới đáy cát.",
    'Moray Eel': "Chúng sở hữu 'hàm họng' (pharyngeal jaw) - một bộ hàm thứ hai nằm sâu trong cổ họng có thể phóng ra để kéo con mồi vào dạ dày.",
    'Atlantic Cod': "Cá tuyết là một trong những loài cá có giá trị kinh tế nhất lịch sử, từng là nguyên nhân gây ra cuộc 'Chiến tranh Cá Tuyết' (Cod Wars).",
    'Flounder': "Khi mới nở, chúng trông như cá bình thường. Nhưng khi lớn lên, một con mắt sẽ di chuyển xuyên qua hộp sọ sang phía bên kia để thích nghi với việc nằm bẹp dưới đáy.", 
    'Clownfish': "Tất cả cá hề khi sinh ra đều là con đực. Nếu con cái đầu đàn chết đi, con đực to lớn nhất trong đàn sẽ chuyển giới thành con cái để duy trì nòi giống."
};

const viNames = {
    "Man o' War": "Sứa Chiến Hạm", "Flying Fish": "Cá Chuồn", "Sardine School": "Đàn Cá Mòi",
    "Mahi-Mahi": "Cá Nục Heo", "Ocean Sunfish": "Cá Mặt Trăng", "Oarfish": "Cá Mái Chèo",
    "Giant Isopod": "Bọ Biển Khổng Lồ", "Snipe Eel": "Lươn Mỏ Chim", "Barreleye Fish": "Cá Mắt Trống",
    "Coelacanth": "Cá Vây Tay", "Goblin Shark": "Cá Mập Yêu Tinh", "Frilled Shark": "Cá Mập Mang Xếp",
    "Anglerfish": "Cá Cần Câu", "Viperfish": "Cá Răng Độc", "Gulper Eel": "Lươn Nuốt Chửng",
    "Black Swallower": "Cá Chình Đen", "Giant Squid": "Mực Khổng Lồ", "Ghost Shark": "Cá Mập Ma",
    "Vampire Squid": "Mực Ma Cà Rồng", "Deep-Sea Lizardfish": "Cá Thằn Lằn Biển Sâu", "Dumbo Octopus": "Bạch Tuộc Dumbo",
    "Tripod Fish": "Cá Ba Chân", "Faceless Cusk": "Cá Không Mặt", "Abyssal Grenadier": "Cá Đuôi Chuột",
    "Mariana Snailfish": "Cá Ốc Mariana", "Supergiant Amphipod": "Giáp Xác Khổng Lồ", "Benthic Sea Cucumber": "Hải Sâm Đáy",
    "Challenger Deep Microbes": "Vi Khuẩn Đáy Vực", "Dragonfish": "Cá Rồng Biển Sâu", "Fangtooth": "Cá Răng Nanh",
    "Cookiecutter Shark": "Cá Mập Cắt Bánh", "Firefly Squid": "Mực Đom Đóm", "Stoplight Loosejaw": "Cá Hàm Rộng Đèn Đỏ",
    "Glass Squid": "Mực Thủy Tinh", "Yeti Crab": "Cua Người Tuyết", "Sea Pig": "Heo Biển",
    "Zombie Worm": "Giun Xác Sống", "Comb Jelly": "Sứa Lược", "Bloodybelly Comb Jelly": "Sứa Lược Bụng Máu",
    "Atolla Jellyfish": "Sứa Atolla", "Deep Sea Spider": "Nhện Biển Sâu", "Hadal Snailfish Variant": "Cá Ốc Rãnh Sâu",
    "Trench Jelly": "Sứa Rãnh Thẳm", "Extremophile Bacteria": "Vi Khuẩn Sinh Cực", "Lanternfish": "Cá Đèn Lồng",
    "Sea Angel": "Thiên Thần Biển", "Hatchetfish": "Cá Rìu", 
    "Helmet Jellyfish": "Sứa Mũ Bảo Hiểm", "Blue Dragon (Glaucus atlanticus)": "Sên Biển Rồng Xanh", "Butterflyfish": "Cá Bướm", "Parrotfish": "Cá Mó (Cá Vẹt)", "Surgeonfish": "Cá Đuôi Gai",
    "Barracuda": "Cá Nhồng", "Sea Turtle": "Rùa Biển", "Stingray": "Cá Đuối Gai Độc",
    "Moray Eel": "Lươn Moray", "Atlantic Cod": "Cá Tuyết Đại Tây Dương", "Flounder": "Cá Bơn", "Clownfish": "Cá Hề"
};

const viShortDescs = {
    "Man o' War": "Không phải sứa, mà là quần thể sinh vật hoạt động như một cá thể.",
    "Flying Fish": "Có thể phóng ra khỏi mặt nước và lướt đi những quãng đường dài để trốn kẻ thù.",
    "Sardine School": "Bơi thành những quả cầu bạc khổng lồ đồng bộ để gây bối rối cho kẻ săn mồi.",
    "Mahi-Mahi": "Kẻ săn mồi rực rỡ trên mặt nước, nổi tiếng với chiếc đầu tù và màu sắc nhấp nháy.",
    "Ocean Sunfish": "Loài cá xương nặng nhất thế giới. Trông giống như cái đầu cá khổng lồ trôi nổi.",
    "Oarfish": "Nguồn gốc của truyền thuyết rắn biển, bơi theo chiều dọc như dải ruy băng bạc.",
    "Giant Isopod": "Trông giống con bọ vừng, nhưng lớn bằng một con mèo ở biển sâu.",
    "Snipe Eel": "Có cái mỏ cong ra ngoài để vướng vào râu của những con tôm đi ngang qua.",
    "Barreleye Fish": "Có mái vòm trong suốt chứa chất lỏng trên đầu với đôi mắt hình ống bên trong.",
    "Coelacanth": "Một 'hóa thạch sống' cổ đại từng bị cho là đã tuyệt chủng cùng khủng long.",
    "Goblin Shark": "Hóa thạch sống với bộ hàm có thể phóng mạnh về phía trước để vồ mồi.",
    "Frilled Shark": "Cá mập tiền sử giống lươn với 300 chiếc răng hình đinh ba xếp thành 25 hàng.",
    "Anglerfish": "Sử dụng một phần thịt phát quang sinh học kéo dài từ đầu để nhử mồi.",
    "Viperfish": "Được trang bị những chiếc nanh quá lớn đến mức không thể ngậm vừa miệng.",
    "Gulper Eel": "Cấu tạo cơ thể gần như chỉ gồm cái miệng khổng lồ và đuôi dài như roi.",
    "Black Swallower": "Có thể kéo căng dạ dày để nuốt chửng những con cá lớn gấp đôi nó.",
    "Giant Squid": "Con quái vật biển sâu huyền thoại với đôi mắt to bằng chiếc đĩa ăn tối.",
    "Ghost Shark": "Còn gọi là Chimaera, sử dụng cảm biến điện trên mũi để tìm mồi.",
    "Vampire Squid": "Tự lộn từ trong ra ngoài khi bị đe dọa, để lộ những hàng gai thịt.",
    "Deep-Sea Lizardfish": "Kẻ săn mồi phục kích đáng sợ với cái miệng chứa đầy răng cưa sắc nhọn.",
    "Dumbo Octopus": "Lơ lửng ngay trên đáy biển bằng cách vỗ đôi vây nhô ra giống như đôi tai.",
    "Tripod Fish": "Đứng trên đáy biển bằng ba chiếc vây như cà kheo, chờ dòng chảy mang thức ăn đến.",
    "Faceless Cusk": "Loài cá hình củ hành kỳ dị dường như không có khuôn mặt.",
    "Abyssal Grenadier": "Còn gọi là cá đuôi chuột, ăn xác thối từ bất cứ thứ gì rơi từ trên xuống.",
    "Mariana Snailfish": "Chịu được áp suất tương đương 1.600 con voi đứng trên một chiếc ô tô.",
    "Supergiant Amphipod": "Loài giáp xác khổng lồ nhạt màu ăn các mảnh vụn chìm trong các rãnh sâu.",
    "Benthic Sea Cucumber": "Những bầy đàn mờ ảo từ từ hút bụi dưới đáy của các rãnh đại dương sâu nhất.",
    "Hatchetfish": "Cơ thể siêu mỏng, lấp lánh như gương giúp phản chiếu ánh sáng để tàng hình.",
    "Dragonfish": "Phát ra ánh sáng sinh học màu đỏ mà hầu hết các con mồi không thể nhìn thấy.",
    "Fangtooth": "Có những chiếc răng lớn nhất so với tỷ lệ cơ thể trong thế giới loài cá.",
    "Lanternfish": "Bao phủ bởi các cơ quan phát sáng dùng để giao tiếp và ngụy trang.",
    "Cookiecutter Shark": "Cắn những miếng thịt hình tròn hoàn hảo từ cá lớn hơn bằng đôi môi hút.",
    "Firefly Squid": "Thắp sáng đại dương bằng ánh sáng sinh học màu xanh lam rực rỡ.",
    "Stoplight Loosejaw": "Có hàm khớp lỏng và phát ra ánh sáng sinh học màu đỏ để đi săn.",
    "Glass Squid": "Gần như hoàn toàn trong suốt ngoại trừ đôi mắt của nó.",
    "Yeti Crab": "Có những chiếc càng đầy lông lá dùng để nuôi vi khuẩn làm thức ăn.",
    "Sea Pig": "Loài hải sâm biển sâu kỳ dị đi bộ trên những chiếc chân ống.",
    "Zombie Worm": "Tiêu thụ xương cá voi bằng cách sử dụng các rễ tiết ra axit.",
    "Sea Angel": "Loài nhuyễn thể có cánh nhỏ bé trông giống như đang bay dưới nước.",
    "Comb Jelly": "Sử dụng các hàng tiêm mao để khúc xạ ánh sáng cầu vồng khi di chuyển.",
    "Bloodybelly Comb Jelly": "Màu đỏ đậm giúp nó tàng hình trong đại dương tối tăm.",
    "Atolla Jellyfish": "Tạo ra báo động phát sáng để thu hút kẻ săn mồi đến ăn thịt kẻ đang tấn công nó.",
    "Deep Sea Spider": "Có đôi chân cực kỳ dài và hấp thụ chất dinh dưỡng xuyên qua cơ thể.",
    "Amphipod Swarm": "Ăn ngấu nghiến các xác chết chìm xuống vực thẳm.",
    "Hadal Snailfish Variant": "Người họ hàng còn chịu áp suất giỏi hơn cả cá ốc Mariana.",
    "Trench Jelly": "Loài sứa giống như bóng ma trôi dạt trong bóng tối tuyệt đối.",
    "Extremophile Bacteria": "Phát triển mạnh mẽ dưới áp suất nghiền nát và nhiệt độ sát điểm đóng băng.",
    "Challenger Deep Microbes": "Sự sống ở đây dựa vào các phản ứng hóa học từ lòng đất.",
    "Helmet Jellyfish": "Loài sứa hình vòm phát sáng nhịp nhàng như một chiếc mũ bảo hiểm phi hành gia.",
    "Blue Dragon (Glaucus atlanticus)": "Sên biển trôi nổi trông giống rồng xanh phát sáng và đánh cắp nọc độc từ con mồi.",
    "Butterflyfish": "Loài cá rạn san hô rực rỡ với đốm hình mắt để đánh lừa kẻ thù.",
    "Parrotfish": "Dùng miệng giống mỏ vẹt để cạo tảo khỏi san hô, tạo ra cát.",
    "Surgeonfish": "Được đặt tên theo những chiếc gai đuôi sắc nhọn dùng để tự vệ.",
    "Barracuda": "Kẻ săn mồi tốc độ với bộ răng gớm ghiếc.",
    "Sea Turtle": "Bò sát biển cổ đại có thể di cư qua toàn bộ đại dương.",
    "Stingray": "Lướt đi uyển chuyển bằng vây giống như đôi cánh và có đuôi mang nọc độc.",
    "Moray Eel": "Ẩn nấp trong các kẽ đá và có bộ hàm thứ hai để tóm con mồi.",
    "Atlantic Cod": "Loài cá thương mại phổ biến với thân hình thuôn dài.",
    "Flounder": "Cá thân bẹt với cả hai mắt nằm cùng một bên để thích nghi với lối sống dưới đáy.", 
    "Clownfish": "Sống cộng sinh và hoàn toàn miễn dịch với nọc độc của hải quỳ."
};
const funFacts = {
    "Man o' War": "Dù trôi nổi lềnh phềnh trên biển nhưng chúng hoàn toàn mù đường và không biết bơi, cuộc đời 'đưa đẩy' hoàn toàn nhờ vào gió và dòng hải lưu! 🌬️",
    "Flying Fish": "Chúng có thể lướt trên không trung xa tới 400 mét, xa hơn cả chiều dài của 3 sân bóng đá ghép lại! ⚽",
    "Sardine School": "Khi bị đe dọa, hàng ngàn con cá mòi tạo thành một quả cầu bạc khổng lồ di chuyển đồng điệu, khiến cá mập cũng phải 'hoa mắt chóng mặt'! 🌪️",
    "Mahi-Mahi": "Tên của chúng trong tiếng Hawaii có nghĩa là 'Rất mạnh mẽ', phản ánh tốc độ bơi kinh hoàng đuổi theo cá chuồn của chúng! ⚡",
    "Ocean Sunfish": "Dù to xác nặng tới 2 tấn nhưng não của chúng chỉ nhỏ bằng... một quả hạch! 🧠",
    "Oarfish": "Đây là loài cá có xương dài nhất thế giới, có thể dài tới 11 mét. Rất nhiều người thời xưa đã lầm tưởng chúng là rồng biển! 📏",
    "Giant Isopod": "Chúng là những 'thánh nhịn', có thể nhịn đói suốt 5 năm trời nếu không tìm thấy thức ăn dưới đáy biển! 🍽️",
    "Snipe Eel": "Xương sống của loài lươn này có tới 750 đốt sống, nhiều hơn bất kỳ loài động vật nào khác trên Trái Đất! 🦴",
    "Barreleye Fish": "Hai cái lỗ nhỏ phía trước đầu nhìn giống mắt, nhưng thực ra đó là... lỗ mũi của chúng! Mắt thật nằm bên trong vòm kính cơ! 👃",
    "Coelacanth": "Não của loài cá cổ đại này chỉ chiếm 1.5% thể tích hộp sọ, 98.5% còn lại toàn là chất béo! 🧠",
    "Goblin Shark": "Mũi của chúng chứa các cơ quan siêu đặc biệt có thể cảm nhận được nhịp tim của con mồi đang lẩn trốn dưới lớp cát! 💓",
    "Frilled Shark": "Thời gian mang thai của loài cá mập này có thể lên tới 3 năm rưỡi, lâu nhất trong toàn thế giới động vật! ⏳",
    "Anglerfish": "Con đực nhỏ bé đến mức để sinh tồn, chúng phải cắn chặt vào con cái, sau đó hợp nhất cơ thể và mạch máu vào con cái mãi mãi! 💑",
    "Viperfish": "Răng của chúng dài đến mức nếu đóng miệng lại mạnh quá, chúng có thể tự đâm thủng não của chính mình! 😬",
    "Gulper Eel": "Dù có cái miệng khổng lồ vĩ đại, nhưng mắt của chúng lại siêu nhỏ vì ở vực thẳm đen kịt thì... có mở mắt to cũng chẳng thấy gì! 👁️",
    "Black Swallower": "Đôi khi chúng tham ăn nuốt con mồi quá to, đến mức con mồi thối rữa sinh ra khí làm chúng bị trương phình và nổi lềnh phềnh lên mặt nước! 🎈",
    "Giant Squid": "Mắt của con mực khổng lồ to bằng quả bóng rổ, là đôi mắt to nhất thế giới động vật, giúp chúng nhìn xuyên bóng tối! 🏀",
    "Ghost Shark": "Sự thật gây sốc: Cơ quan sinh dục của con đực mọc ở... trên trán của chúng! 🤯",
    "Vampire Squid": "Tên là ma cà rồng nhưng chúng hiền khô, không đi hút máu mà chỉ nhặt nhạnh rác và xác chết ('tuyết biển') rơi từ trên xuống để ăn! ❄️",
    "Deep-Sea Lizardfish": "Chúng có cả cơ quan sinh dục đực và cái trên cùng một cơ thể, nên cứ gặp đồng loại là 'triển' được luôn không cần chọn giới tính! 💖",
    "Dumbo Octopus": "Đây là loài bạch tuộc hiếm hoi không có túi mực, vì ở đáy vực đen thui thì xịt mực ngụy trang cũng chẳng để làm gì! 🐙",
    "Tripod Fish": "Khi đứng bằng 3 vây dưới đáy biển, chúng chỉ việc há miệng quay mặt ngược chiều dòng chảy để thức ăn tự bay vào mồm! 🥢",
    "Faceless Cusk": "Thực ra chúng có mắt, nhưng mắt lại bị giấu tịt sâu dưới các lớp da nên nhìn lướt qua trông như Vô Diện! 🙈",
    "Abyssal Grenadier": "Chúng tạo ra âm thanh ầm ĩ bằng cách đánh vào bong bóng bơi của mình để thu hút bạn tình trong bóng tối! 🥁",
    "Mariana Snailfish": "Để không bị áp suất khủng khiếp nghiền nát, xương của chúng thiếu canxi và dẻo quẹo như sụn! 🦴",
    "Supergiant Amphipod": "Để chống lại áp suất vực thẳm, chúng trát một lớp áo giáp bằng nhôm chiết xuất từ bùn dưới đáy rãnh Mariana! 🛡️",
    "Benthic Sea Cucumber": "Món 'phân' mà chúng thải ra sau khi ăn bùn thực chất lại là nguồn dinh dưỡng cực kỳ quý giá cho các sinh vật đáy! 💩",
    "Challenger Deep Microbes": "Chúng ăn các hóa chất độc hại như hydro sulfua - thứ có mùi y hệt như quả trứng thối! 🥚",
    "Dragonfish": "Răng của chúng hoàn toàn trong suốt, khiến con mồi không hề nhìn thấy vũ khí tử thần cho đến khi bị cắn chặt! 🗡️",
    "Fangtooth": "Để ngậm được cái miệng chứa những chiếc nanh khổng lồ, hộp sọ của chúng có sẵn những cái hốc đặc biệt để giấu răng vào! 🦷",
    "Cookiecutter Shark": "Chúng bạo gan đến mức dám 'cắn trộm' cả dây cáp viễn thông đáy biển và lớp bọc cao su của tàu ngầm hạt nhân! ☢️",
    "Firefly Squid": "Vào mùa xuân, hàng triệu con mực này dạt vào vịnh Toyama (Nhật Bản) tạo ra một bãi biển phát sáng màu xanh lam đẹp như dải ngân hà! 🏖️",
    "Stoplight Loosejaw": "Chúng là một trong số ít những sinh vật biển có thể nhìn thấy màu đỏ, giúp chúng soi đèn đỏ đi săn mà con mồi mù tịt không thấy gì! 🚦",
    "Glass Squid": "Mắt của chúng có một tuyến phát sáng nằm bên dưới để xóa đi cái bóng của chính đôi mắt, giúp chúng tàng hình 100%! 🫥",
    "Yeti Crab": "Chúng vẫy đôi càng lông lá liên tục quanh các khe nứt núi lửa để 'quạt' oxy, giúp vườn vi khuẩn trên tay mình lớn nhanh để... ăn thịt! 🌬️",
    "Sea Pig": "Chúng hô hấp bằng cách hút nước vào từ... lỗ hậu môn của mình! 💨",
    "Zombie Worm": "Con cái to bằng ngón tay, nhưng cơ thể nó chứa hàng chục con đực bé tí xíu sống ăn bám bên trong! 🧟",
    "Comb Jelly": "Trông mỏng manh lấp lánh nhưng chúng là những thợ săn tàn nhẫn, thường xuyên ăn thịt cả đồng loại sứa lược của mình! ⚔️",
    "Bloodybelly Comb Jelly": "Cái bụng đỏ rực giúp chúng che giấu ánh sáng từ những con mồi phát quang vừa bị nuốt vào, tránh làm 'bia đỡ đạn' cho kẻ săn mồi khác! 🩸",
    "Atolla Jellyfish": "Vòng ánh sáng nhấp nháy liên tục của chúng chạy thành vòng tròn y hệt tiếng còi báo động của xe cảnh sát! 🚓",
    "Deep Sea Spider": "Nhện biển có tim đập siêu yếu, nhịp đập yếu đến mức ruột của chúng phải co bóp phụ để 'bơm' máu đi khắp cơ thể! ❤️",
    "Hadal Snailfish Variant": "Cơ thể của chúng lỏng lẻo như một miếng thạch, nếu mang lên mặt nước chúng sẽ 'chảy nhão' ra ngay lập tức! 🧊",
    "Trench Jelly": "Cơ thể chúng giống như những cái túi nilon nổi lềnh phềnh: không não, không tim, không xương rễ nhưng vẫn sống khỏe re! 🧠",
    "Extremophile Bacteria": "Chúng có thể sống nhăn răng ở nhiệt độ nước sôi hơn 100°C gần các lỗ thông hơi núi lửa đáy biển! 🔥",
    "Lanternfish": "Trọng lượng của toàn bộ cá đèn lồng trên thế giới gộp lại ước tính lên tới hơn 600 triệu tấn, nặng nhất đại dương! ⚖️",
    "Sea Angel": "Bơi lượn đẹp như một thiên thần nhỏ, nhưng khi săn mồi, đầu chúng nứt đôi ra, phóng xúc tu ghim chặt và ăn tươi nuốt sống đối thủ! 👼",
    "Hatchetfish": "Hình dáng cơ thể mỏng lép như lưỡi rìu giúp chúng biến mất hoàn toàn khi bị kẻ thù nhìn từ phía trước hoặc phía sau! 🪓",
    "Helmet Jellyfish": "Chiếc 'mũ bảo hiểm' phát sáng của chúng giật liên hồi cứ như một chiếc phi thuyền UFO thu nhỏ dưới đáy biển! 🛸",
    "Blue Dragon (Glaucus atlanticus)": "Chúng lật ngửa khi bơi! Bụng màu xanh hướng lên trời để tiệp màu với nước, lưng màu bạc hướng xuống để lẩn vào ánh mặt trời chiếu xuống! 🐉",
    "Butterflyfish": "Những đốm đen to tướng hình con mắt trên đuôi khiến kẻ thù hay cắn nhầm vào đuôi thay vì cắn vào đầu của chúng! 🦋",
    "Parrotfish": "Trước khi ngủ, chúng tự xịt ra một chiếc 'chăn kén' bằng dịch nhầy bao bọc toàn thân để giấu mùi khỏi những con giun sát thủ! 🛌",
    "Surgeonfish": "Hai bên đuôi của chúng có những chiếc vảy sắc như dao mổ y tế, và có thể gập mở lách cách như một con dao bấm! 🔪",
    "Barracuda": "Đôi khi chúng lao vào tấn công thợ lặn vì nhìn nhầm ánh sáng lóa từ đồng hồ hoặc dao là... vảy cá ngon lành! ⌚",
    "Sea Turtle": "Giới tính của rùa con không do ADN quyết định mà do nhiệt độ cát! Cát nóng thì ấp ra con cái, cát lạnh thì ấp ra con đực! 🐢",
    "Stingray": "Cơ thể dẹt giúp chúng vùi mình hoàn hảo dưới lớp cát, chỉ ló đúng 2 con mắt lên để rình mồi như ninja! 🏖️",
    "Moray Eel": "Chúng hay há miệng nhe nanh nhọn hoắt không phải để dọa nạt, mà là để bơm nước qua mang giúp thở dễ hơn! 😮",
    "Atlantic Cod": "Một con cá tuyết cái 'mắn đẻ' có thể đẻ tới 9 triệu quả trứng trong một lần sinh sản! 🥚",
    "Flounder": "Khi mới nở mắt chúng nằm hai bên, nhưng khi lớn lên, một con mắt sẽ 'trôi' xuyên qua hộp sọ sang phía bên kia để nằm bẹp dưới đáy! 👁️",
    "Clownfish": "Tất cả cá hề sinh ra đều là cá đực. Khi cá cái đầu đàn chết đi, con đực lớn nhất sẽ 'chuyển giới' biến thành con cái để duy trì nòi giống! 🤡"
};
const zonesData = [
    { keys: ['epipelagic', 'sunlight', 'nông', 'mặt nước'], name: "Vùng Khởi Thủy (0 - 200m)", desc: "Vùng biển ngập tràn ánh sáng. Nơi đây ấm áp (12-20°C) và tập trung tới 90% sự sống của đại dương.", min: 0, max: 200 },
    { keys: ['mesopelagic', 'twilight', 'chạng vạng'], name: "Vùng Chạng Vạng (200 - 1000m)", desc: "Ánh sáng yếu dần, nước lạnh hơn (4-12°C). Sinh vật bắt đầu tự phát sáng để sinh tồn.", min: 200, max: 1000 },
    { keys: ['bathypelagic', 'midnight', 'nửa đêm'], name: "Vùng Nửa Đêm (1000 - 4000m)", desc: "Nơi đây đen kịt. Nhiệt độ chỉ còn khoảng 4°C, áp suất cực cao. Thức ăn rất khan hiếm.", min: 1000, max: 4000 },
    { keys: ['abyss', 'vực thẳm', 'abyssopelagic'], name: "Vực Thẳm Đại Dương (4000 - 6000m)", desc: "Áp suất có thể lên tới 600 atm. Sinh vật sống dựa vào xác thối rơi từ trên xuống ('Tuyết biển').", min: 4000, max: 6000 },
    { keys: ['hadal', 'trench', 'rãnh', 'đáy', 'mariana'], name: "Rãnh Mariana (6000 - 11000m)", desc: "Nơi sâu nhất thế giới. Áp suất mạnh bằng 1000 con voi giẫm lên bạn.", min: 6000, max: 12000 }
];

const solvedCreatures = new Set();
const maxDepth = 11000; 
const startDiveVh = 150; 
const endDiveVh = 10000; 
const diveDistanceVh = endDiveVh - startDiveVh;


// ==========================================
// 2. KHỞI TẠO DOM ELEMENTS VÀ DỊCH THUẬT
// ==========================================
const depthGauge = document.getElementById('depth-gauge'); 
const depthTrack = document.getElementById('depth-track');
const depthValue = document.getElementById('depth-value');
const depthFill = document.getElementById('depth-fill'); 
const backToTopBtn = document.getElementById('back-to-top'); 
const toBottomBtn = document.getElementById('to-bottom');

const soundToggle = document.getElementById('sound-toggle');
const soundIcon = document.getElementById('sound-icon');
const bgmSurface = document.getElementById('bgm-surface');
const bgmDeep = document.getElementById('bgm-deep');
const bgmAbyss = document.getElementById('bgm-abyss');
const sfxSonar = document.getElementById('sfx-sonar');
const sfxBubble = document.getElementById('sfx-bubble');
const MASTER_VOLUME = 0.2;
if (bgmSurface) bgmSurface.volume = 0.1;
if (bgmDeep) bgmDeep.volume = 0.2;
if (bgmAbyss) bgmAbyss.volume = 0.2;

const aiWidget = document.getElementById('tour-guide');
const guideModel = document.getElementById('guide-model');
const closeChatBtn = document.getElementById('close-chat');
const chatMessages = document.getElementById('chat-messages');
const puffyInput = document.getElementById('puffy-search');
const sendBtn = document.getElementById('send-btn');

const tourHud = document.getElementById('tour-hud');
const tourText = document.getElementById('tour-text');
const tourActions = document.getElementById('tour-actions');

const modal = document.getElementById('fish-modal');
const dynamicShape = document.getElementById('dynamic-shape');
const closeBtn = document.querySelector('.close-btn');

let isMuted = true;
let isDraggingAI = false; 
let aiOffsetX, aiOffsetY;
let isDraggingGauge = false;


// ==========================================
// 3. HỆ THỐNG TỐC ĐỘ TOUR & ÂM THANH
// ==========================================
window.tourSpeedMultiplier = 1;
window.setTourSpeed = function(speed, btnElement) {
    window.tourSpeedMultiplier = speed;
    document.querySelectorAll('.speed-btn').forEach(btn => btn.classList.remove('active'));
    if(btnElement) btnElement.classList.add('active');
};

if (soundToggle) {
    soundToggle.addEventListener('click', () => {
        isMuted = !isMuted;
        if (isMuted) {
            if(soundIcon) soundIcon.innerText = "🔇";
            if(bgmSurface) bgmSurface.pause(); 
            if(bgmDeep) bgmDeep.pause(); 
            if(bgmAbyss) bgmAbyss.pause();
        } else {
            if(soundIcon) soundIcon.innerText = "🔊";
            if(bgmSurface) bgmSurface.play().catch(e=>console.log(e)); 
            if(bgmDeep) bgmDeep.play().catch(e=>console.log(e)); 
            if(bgmAbyss) bgmAbyss.play().catch(e=>console.log(e));
            if(depthValue) updateAudioVolumes(parseInt(depthValue.innerText)); 
        }
    });
}

function updateAudioVolumes(currentDepth) {
    if (isMuted || !bgmSurface || !bgmDeep || !bgmAbyss) return;
    
    let volSurface = 0, volDeep = 0, volAbyss = 0;
    
    // Logic tính toán tỷ lệ âm thanh dựa trên độ sâu
    if (currentDepth < 500) {
        volSurface = 1 - (currentDepth / 500);
        volDeep = currentDepth / 500;
    } else if (currentDepth < 3000) {
        volDeep = 1;
    } else if (currentDepth < 6000) {
        volDeep = 1 - ((currentDepth - 3000) / 3000);
        volAbyss = (currentDepth - 3000) / 3000;
    } else {
        volAbyss = 1;
    }

    // 🚀 QUAN TRỌNG: Nhân tỷ lệ với MASTER_VOLUME để âm thanh không bao giờ vượt quá mức cho phép
    bgmSurface.volume = Math.max(0, Math.min(1, volSurface * MASTER_VOLUME));
    bgmDeep.volume = Math.max(0, Math.min(1, volDeep * MASTER_VOLUME));
    bgmAbyss.volume = Math.max(0, Math.min(1, volAbyss * MASTER_VOLUME));
}


// ==========================================
// 4. HỆ THỐNG SCROLL & ĐỊNH VỊ (SCALE PHI TUYẾN TÍNH)
// ==========================================
// 🚀 THUẬT TOÁN BẺ CONG KHÔNG GIAN: Cấp nhiều diện tích web hơn cho vùng nước nông
function mapDepthToPercent(depth) {
    if (depth <= 200) return (depth / 200) * 0.20; // Từ 0-200m chiếm hẳn 20% chiều dài web
    if (depth <= 1000) return 0.20 + ((depth - 200) / 800) * 0.25; // Từ 200-1000m chiếm 25% chiều dài web
    if (depth <= 4000) return 0.45 + ((depth - 1000) / 3000) * 0.30; // Từ 1000-4000m chiếm 30%
    return 0.75 + ((depth - 4000) / 7000) * 0.25; // Vùng rãnh sâu trống trải chỉ chiếm 25% còn lại
}

function mapPercentToDepth(percent) {
    if (percent <= 0.20) return (percent / 0.20) * 200;
    if (percent <= 0.45) return 200 + ((percent - 0.20) / 0.25) * 800;
    if (percent <= 0.75) return 1000 + ((percent - 0.45) / 0.30) * 3000;
    return 4000 + ((percent - 0.75) / 0.25) * 7000;
}

function getElementDepth(el) {
    if (el.classList.contains('fish-card')) {
        const metaEl = el.querySelector('.meta');
        if (metaEl) {
            const match = metaEl.textContent.match(/depth:\s*(\d+)/i);
            return match ? parseInt(match[1]) : 0;
        }
        return 0;
    }
    return parseInt(el.getAttribute('data-depth')) || 0;
}

function alignToExactDepth() {
    const isMobile = window.innerWidth <= 1024; // 🚀 Nâng mốc nhận diện lên 1024px
    const screenRatio = window.innerWidth / window.innerHeight;
    
    // 1. ĐO CHIỀU CAO THỰC TẾ CỦA TỪNG VÙNG CHỮ ZONE
    let zoneBounds = [];
    document.querySelectorAll('.zone-marker').forEach(marker => {
        const depth = parseInt(marker.getAttribute('data-depth')) || 0;
        let centerVh = startDiveVh + mapDepthToPercent(depth) * diveDistanceVh;
        marker.style.top = `${centerVh}vh`;
        marker.style.transform = "translateY(-50%)"; 
        
        // Lấy chiều cao pixel thực tế của khối chữ chia cho màn hình để ra vh
        let heightVh = (marker.offsetHeight / window.innerHeight) * 100;
        
        zoneBounds.push({
            top: centerVh - (heightVh / 2),
            bottom: centerVh + (heightVh / 2)
        });
    });

    // 2. SẮP XẾP THẺ CÁ VÀ MỐC LỊCH SỬ
    let items = [];
    document.querySelectorAll('.fish-card, .milestone').forEach(el => {
        items.push({ el, depth: getElementDepth(el) });
    });
    items.sort((a, b) => a.depth - b.depth);

    let minGapVh = screenRatio > 1.3 ? 35 : 22;
    let isLeft = true; 
    let lastTopVh = startDiveVh; 

    // 3. THUẬT TOÁN NÉ VA CHẠM TUYỆT ĐỐI (DỰA TRÊN KÍCH THƯỚC THỰC)
    items.forEach((item, index) => {
        let exactTopVh = startDiveVh + mapDepthToPercent(item.depth) * diveDistanceVh;
        
        // Lấy chiều cao thực của thẻ cá đang xét (nếu chưa render kịp thì dự phòng 60vh)
        let cardHeightVh = (item.el.offsetHeight / window.innerHeight) * 100 || 60;
        let cardHalfVh = cardHeightVh / 2;

        // BƯỚC A: Né thẻ cá đằng trước
        if (exactTopVh < lastTopVh + minGapVh && index !== 0) {
            exactTopVh = lastTopVh + minGapVh;
        }

        // BƯỚC B: Né vùng chữ Zone
        for (let zone of zoneBounds) {
            // Tọa độ đỉnh và đáy thực tế của thẻ cá này
            let cardTop = exactTopVh - cardHalfVh;
            let cardBottom = exactTopVh + cardHalfVh;
            
            // Thêm vùng đệm an toàn quanh chữ Zone (8vh)
            let zoneSafeTop = zone.top - 8;    
            let zoneSafeBottom = zone.bottom + 8; 

            // NẾU thẻ cá bị kẹt đè vào chữ
            if (cardBottom > zoneSafeTop && cardTop < zoneSafeBottom) {
                // Đẩy tâm thẻ xuống dưới sao cho "đỉnh" của thẻ cá nằm hẳn dưới vùng an toàn
                exactTopVh = zoneSafeBottom + cardHalfVh; 
            }
        }

        lastTopVh = exactTopVh;

        // BƯỚC C: Canh lề Trái/Phải
        let assignedSide = isLeft ? 'left' : 'right';
        isLeft = !isLeft; 
        if (isMobile) assignedSide = 'center'; 

        item.el.className = item.el.className.replace(/left-align|right-align|center-align/g, '').trim();
        item.el.classList.add(`${assignedSide}-align`);
        
        item.el.style.top = `${exactTopVh}vh`;
        item.el.style.marginTop = "0";
        item.el.style.transform = `translateY(-50%)`; 
        
        item.el.onmouseenter = () => item.el.style.transform = `translateY(-50%) translateY(-10px) scale(1.02)`;
        item.el.onmouseleave = () => item.el.style.transform = `translateY(-50%)`;
    });

    // 4. CẬP NHẬT ĐÁY BIỂN
    const mainEl = document.querySelector('main');
    if(mainEl) mainEl.style.height = `${lastTopVh + 50}vh`;
}
window.addEventListener('load', alignToExactDepth);
window.addEventListener('resize', alignToExactDepth);

function buildZoneIndicators() {
    if(!depthTrack) return;
    document.querySelectorAll('.zone-indicator').forEach(el => el.remove());
    const zoneIcons = { 0: '☀️', 200: '🌘', 1000: '🌑', 4000: '🕳️', 6000: '⚓' };

    document.querySelectorAll('.zone-marker').forEach(marker => {
        const depth = parseInt(marker.getAttribute('data-depth')) || 0;
        const indicator = document.createElement('div');
        indicator.classList.add('zone-indicator');
        indicator.style.top = `${mapDepthToPercent(depth) * 100}%`;
        indicator.innerHTML = `<div class="zone-name">${marker.querySelector('h1').textContent}</div><span class="zone-icon">${zoneIcons[depth] || '🌊'}</span>`;
        
        indicator.addEventListener('click', () => {
            let targetCenterVh = startDiveVh + mapDepthToPercent(depth) * diveDistanceVh;
            let targetCenterPx = (targetCenterVh / 100) * window.innerHeight;
            let targetScrollY = targetCenterPx - window.innerHeight / 2; 
            window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
        });
        depthTrack.appendChild(indicator);
    });
    
    const bottomIndicator = document.createElement('div');
    bottomIndicator.classList.add('zone-indicator');
    bottomIndicator.style.top = `100%`;
    bottomIndicator.innerHTML = `<div class="zone-name">Challenger Deep</div><span class="zone-icon">🦠</span>`;
    
    bottomIndicator.addEventListener('click', () => {
        let targetCenterVh = startDiveVh + mapDepthToPercent(11000) * diveDistanceVh;
        let targetCenterPx = (targetCenterVh / 100) * window.innerHeight;
        let targetScrollY = targetCenterPx - window.innerHeight / 2; 
        window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
    });
    depthTrack.appendChild(bottomIndicator);
}
window.addEventListener('load', buildZoneIndicators);

if (depthGauge) {
    depthGauge.addEventListener('mousedown', (e) => { isDraggingGauge = true; updateScrollFromDrag(e); });
    document.addEventListener('mousemove', (e) => { if (isDraggingGauge) updateScrollFromDrag(e); });
    document.addEventListener('mouseup', () => { isDraggingGauge = false; });
    depthGauge.addEventListener('touchstart', (e) => { isDraggingGauge = true; updateScrollFromDrag(e.touches[0]); });
    document.addEventListener('touchmove', (e) => { if (isDraggingGauge) { e.preventDefault(); updateScrollFromDrag(e.touches[0]); } }, { passive: false });
    document.addEventListener('touchend', () => { isDraggingGauge = false; });
}

// 🚀 FIX MINIMAP: Click thì lướt mượt, kéo thì đi nhanh
function updateScrollFromDrag(e, isClick = false) {
    if (!depthTrack) return;
    const rect = depthTrack.getBoundingClientRect();
    let percent = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height)); 
    let targetCenterVh = startDiveVh + percent * diveDistanceVh;
    let targetCenterPx = (targetCenterVh / 100) * window.innerHeight;
    let targetScrollY = targetCenterPx - window.innerHeight / 2; 
    
    window.scrollTo({ 
        top: targetScrollY, 
        behavior: isClick ? 'smooth' : 'instant' // Click thì lướt, kéo thì bám dính
    });
}

// Cập nhật listener cho Minimap
if (depthGauge) {
    depthGauge.addEventListener('mousedown', (e) => { 
        isDraggingGauge = true; 
        updateScrollFromDrag(e, true); // Click vào thanh thì lướt mượt
    });
}

// 🚀 ĐIỀU HƯỚNG HIỆU ỨNG THEO CHIỀU CUỘN
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    // Nếu cuộn xuống, set class 'scroll-down', cuộn lên set 'scroll-up'
    if (st > lastScrollTop) {
        document.body.classList.add('scrolling-down');
        document.body.classList.remove('scrolling-up');
    } else {
        document.body.classList.add('scrolling-up');
        document.body.classList.remove('scrolling-down');
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, false);

if (backToTopBtn) backToTopBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
if (toBottomBtn) toBottomBtn.addEventListener('click', () => { window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); });

let targetScrollPercent = 0, currentScrollPercent = 0;
window.addEventListener('scroll', () => { targetScrollPercent = (window.scrollY) / (Math.max(1, document.body.scrollHeight - window.innerHeight)); });

function updateSmoothScroll() {
    currentScrollPercent += (targetScrollPercent - currentScrollPercent) * 0.08;
    const docHeight = Math.max(1, document.body.scrollHeight - window.innerHeight);
    const currentScrollPx = currentScrollPercent * docHeight;
    
    let centerPx = currentScrollPx + window.innerHeight / 2;
    let centerVh = (centerPx / window.innerHeight) * 100;
    
    let diveProgress = (centerVh - startDiveVh) / diveDistanceVh;
    diveProgress = Math.max(0, Math.min(1, diveProgress));

    if (backToTopBtn) { if (diveProgress > 0.01) backToTopBtn.classList.add('visible'); else backToTopBtn.classList.remove('visible'); }
    if (toBottomBtn) { if (diveProgress < 0.99) toBottomBtn.classList.add('visible'); else toBottomBtn.classList.remove('visible'); }

    // Dịch ngược từ % trên thanh Scroll ra lại số mét độ sâu
    const currentDepth = Math.round(mapPercentToDepth(diveProgress));
    if (depthValue) depthValue.innerText = currentDepth + 'm';
    if (depthFill) depthFill.style.height = `${diveProgress * 100}%`;
    // Càng xuống sâu tuyết biển càng dày và sáng
// 🚀 LOGIC MARINE SNOW: Sạch sẽ ở vùng nông, tăng vọt ở vùng sâu
    let snowIntensity = 0;
    if (currentDepth <= 1000) {
        // Từ 0-1000m: Hạt gần như vô hình (từ 0 tăng chậm lên 0.1)
        snowIntensity = (currentDepth / 1000) * 0.1; 
    } else {
        // Từ 1000m trở xuống: Tuyết bắt đầu rơi dày đặc dần (từ 0.1 tăng mạnh lên 1.8)
        snowIntensity = 0.1 + ((currentDepth - 1000) / 10000) * 1.7; 
    }
    document.documentElement.style.setProperty('--snow-intensity', snowIntensity);
    
    updateAudioVolumes(currentDepth);
    
    let bgLightness = currentDepth <= 1000 ? 45 - (currentDepth / 1000) * 43 : 2;
    document.documentElement.style.setProperty('--bg-lightness', `${bgLightness}%`);
    
// 🚀 THUẬT TOÁN NỘI SUY MÀU (SMOOTH COLOR BLENDING)
    const colorStops = [
        { d: 0, c: [0, 242, 254] },     // 0m: Xanh lơ
        { d: 200, c: [0, 255, 150] },   // 200m: Xanh ngọc sinh học
        { d: 1000, c: [255, 71, 87] },  // 1000m: Đỏ nguy hiểm
        { d: 4000, c: [255, 0, 100] },  // 4000m: Hồng vực sâu
        { d: 6000, c: [150, 0, 255] },  // 6000m: Tím rãnh sâu
        { d: 11000, c: [150, 0, 255] }  // 11000m: Tím (Đáy)
    ];

    let r = 0, g = 242, b = 254;
    for (let i = 0; i < colorStops.length - 1; i++) {
        if (currentDepth >= colorStops[i].d && currentDepth <= colorStops[i+1].d) {
            let range = colorStops[i+1].d - colorStops[i].d;
            let progress = range === 0 ? 0 : (currentDepth - colorStops[i].d) / range;
            r = Math.round(colorStops[i].c[0] + (colorStops[i+1].c[0] - colorStops[i].c[0]) * progress);
            g = Math.round(colorStops[i].c[1] + (colorStops[i+1].c[1] - colorStops[i].c[1]) * progress);
            b = Math.round(colorStops[i].c[2] + (colorStops[i+1].c[2] - colorStops[i].c[2]) * progress);
            break;
        }
    }
    if (currentDepth > 11000) { r = 150; g = 0; b = 255; }
    
    // Áp dụng màu đã được pha trộn siêu mượt
    document.documentElement.style.setProperty('--guide-color', `rgba(${r}, ${g}, ${b}, 0.8)`);

    let newAvatar = '🐡';
    if (currentDepth >= 9000) newAvatar = '💀';  
    else if (currentDepth >= 6000) newAvatar = '👁️';     
    else if (currentDepth >= 4000) newAvatar = '👽';  
    else if (currentDepth >= 1000) newAvatar = '🦈';  
    else if (currentDepth >= 200) newAvatar = '🦑';   

    if (guideModel && guideModel.innerText !== newAvatar) {
        guideModel.style.transform = 'scale(0) rotate(180deg)'; 
        setTimeout(() => {
            guideModel.innerText = newAvatar;
            guideModel.style.transform = 'scale(1) rotate(0deg)'; 
        }, 150);
    }
    
    const tAvatar = document.getElementById('tour-avatar');
    if (tAvatar && tAvatar.innerText !== newAvatar) {
        tAvatar.innerText = newAvatar;
    }
    requestAnimationFrame(updateSmoothScroll);
}
updateSmoothScroll();

// ==========================================
// 5. GIAO DIỆN CÁ & MODAL (QUIZ)
// ==========================================
// 🚀 TÍNH NĂNG IN/OUT LIÊN TỤC: Thẻ sẽ ẩn đi khi trượt qua và hiện lại khi cuộn tới
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => { 
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); 
        } else {
            entry.target.classList.remove('active'); 
        }
    });
}, { threshold: 0.15, rootMargin: "-50px 0px -50px 0px" });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// 🚀 MARINE SNOW (TUYẾT BIỂN TĂNG DẦN THEO ĐỘ SÂU)
const particlesContainer = document.getElementById('particles-container');
if (particlesContainer) {
    particlesContainer.innerHTML = ''; 
    const particleCount = window.innerWidth <= 768 ? 30 : 80; 
    for (let i = 0; i < particleCount; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');
        const size = Math.random() * 3 + 1;
        p.style.width = p.style.height = `${size}px`; 
        p.style.left = `${Math.random() * 100}vw`;
        p.style.animationDuration = `${Math.random() * 15 + 10}s`; 
        p.style.animationDelay = `${Math.random() * -30}s`; 
        p.style.setProperty('--base-opacity', Math.random() * 0.6 + 0.2);
        particlesContainer.appendChild(p);
    }
}

// 🚀 QUÉT TẤT CẢ THẺ CÁ ĐỂ LOAD ẢNH VÀ GẮN SỰ KIỆN CLICK (GỘP CHUNG 1 VÒNG LẶP DUY NHẤT)
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fish-card').forEach((card) => {
        const iconContainer = card.querySelector('.fish-3d');
        if (!iconContainer) return;
        const title = card.querySelector('h2').textContent.trim();
        
        const img = document.createElement('img');
        img.className = 'fish-img';
        img.alt = title;

        // THUẬT TOÁN DÒ TÌM TÊN ẢNH CHO GITHUB (BẢN VÁ NHÁY ĐƠN + MỞ RỘNG ĐUÔI FILE)
        let words = title.split(/\s+/);
        let firstCapRestLower = words.map((w, i) => i === 0 ? w : w.toLowerCase()).join('-');
        let noQuote = title.replace(/'/g, ''); 

        const baseNames = [
            title.replace(/\s+/g, '-'),               
            title.toLowerCase().replace(/\s+/g, '-'), 
            firstCapRestLower,                        
            title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, ''), 
            noQuote.replace(/\s+/g, '-'),             
            noQuote.toLowerCase().replace(/\s+/g, '-') 
        ];

        let attempts = [];
        [...new Set(baseNames)].forEach(base => {
            attempts.push(`${base}.jpg`);
            attempts.push(`${base}.JPG`); // Bao lô luôn file .JPG viết hoa
            attempts.push(`${base}.png`); // Bao lô luôn file .png
        });

        let currentAttempt = 0;

        const tryLoadImage = () => {
            if (currentAttempt < attempts.length) {
                img.src = `./images/${attempts[currentAttempt]}`;
                currentAttempt++;
            } else {
                img.src = 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=600&auto=format&fit=crop';
            }
        };

        img.onerror = () => { tryLoadImage(); };
        tryLoadImage(); // Bắt đầu load

        iconContainer.innerHTML = ''; 
        iconContainer.appendChild(img);

        // KHI NGƯỜI DÙNG CLICK VÀO THẺ CÁ -> MỞ MODAL
        card.addEventListener('click', () => {
            if (typeof TourManager !== 'undefined' && TourManager.isActive) return; 
            
            const metaText = card.querySelector('.meta').textContent.trim();
            const originalName = card.getAttribute('data-en-name') || card.querySelector('h2').textContent.trim();
            const depth = getElementDepth(card);
            const weirdnessMatch = metaText.match(/Weirdness:\s*([\d.]+)/i);
            const weirdness = weirdnessMatch ? parseFloat(weirdnessMatch[1]) : 0;
            
            let fishGlowColor = 'rgba(0, 242, 254, 0.8)'; 
            if (depth >= 6000) fishGlowColor = 'rgba(150, 0, 255, 0.9)'; 
            else if (depth >= 4000) fishGlowColor = 'rgba(255, 0, 100, 0.9)'; 
            else if (depth >= 1000) fishGlowColor = 'rgba(255, 71, 87, 0.9)'; 
            else if (depth >= 200) fishGlowColor = 'rgba(0, 255, 150, 0.8)';  

            if (document.getElementById('dynamic-shape')) { 
                document.getElementById('dynamic-shape').style.setProperty('--modal-glow', fishGlowColor); 
            }

            let iconHtml = '🐟';
            const fishImg = card.querySelector('.fish-img');
            if (fishImg && fishImg.src && !fishImg.src.includes('unsplash.com')) {
                const isBlackBorder = ["Mahi-Mahi", "Anglerfish", "Viperfish", "Black Swallower", "Dragonfish"].includes(originalName);
                let imgRatio = (fishImg.naturalHeight > 0) ? (fishImg.naturalWidth / fishImg.naturalHeight) : 1;
                const isWide = imgRatio > 1.35; 

                let bgLayer = '';
                let mainImageStyle = '';
                
                if (isBlackBorder) {
                    let fitStyle = isWide ? 'cover' : 'contain';
                    mainImageStyle = `object-fit: ${fitStyle}; object-position: center; mix-blend-mode: screen; -webkit-mask-image: linear-gradient(to bottom, black 75%, transparent 100%); mask-image: linear-gradient(to bottom, black 75%, transparent 100%);`;
                } else if (isWide) {
                    mainImageStyle = "object-fit: cover; object-position: center; border-radius: 12px; -webkit-mask-image: linear-gradient(to bottom, black 85%, transparent 100%); mask-image: linear-gradient(to bottom, black 85%, transparent 100%);";
                } else {
                    bgLayer = `<img src="${fishImg.src}" style="position: absolute; top: -10%; left: -10%; width: 120%; height: 120%; object-fit: cover; filter: blur(25px) brightness(0.3) saturate(1.2); z-index: 0; pointer-events: none;">`;
                    mainImageStyle = "object-fit: contain; object-position: center; border-radius: 12px; -webkit-mask-image: linear-gradient(to bottom, black 85%, transparent 100%); mask-image: linear-gradient(to bottom, black 85%, transparent 100%); filter: drop-shadow(0 8px 15px rgba(0,0,0,0.8));";
                }

                iconHtml = `
                <div style="position: relative; width: 100%; aspect-ratio: 16/9; max-height: 28vh; border-radius: 12px; overflow: hidden; border: 1px solid ${fishGlowColor}; box-shadow: 0 10px 25px rgba(0,0,0,0.6), 0 0 20px ${fishGlowColor}; margin-bottom: clamp(15px, 3vh, 25px); background: #000;">
                    ${bgLayer}
                    <img src="${fishImg.src}" style="position: relative; z-index: 1; width: 100%; height: 100%; ${mainImageStyle}">
                </div>`;
            } else if (fishImg) {
                iconHtml = `<img src="${fishImg.src}" style="width: 100%; height: auto; border-radius: 12px; margin-bottom: 15px;">`;
            }

            document.getElementById('modal-visual').innerHTML = iconHtml;
            const engDesc = card.querySelector('p').textContent.trim();
            document.getElementById('modal-title').textContent = originalName; 
            document.getElementById('modal-meta').textContent = metaText;

            if (weirdness > 7) {
                const data = quizData[originalName] || { q: "Thông tin về sinh vật này là gì?", a: ["A", "B", "C"], correct: 0, fragment: "N/A" };
                document.getElementById('normal-info').style.display = 'none';
                document.getElementById('quiz-container').style.display = 'block';
                document.getElementById('quiz-result').style.display = 'none';
                document.getElementById('quiz-question').textContent = data.q;

                const optionsDiv = document.getElementById('quiz-options');
                optionsDiv.innerHTML = ''; 

                data.a.forEach((opt, index) => {
                    const btn = document.createElement('button');
                    btn.className = 'option-btn';
                    btn.textContent = `${String.fromCharCode(97 + index).toUpperCase()}. ${opt}`;
                    
                    btn.onclick = () => {
                        if (index === data.correct) {
                            solvedCreatures.add(originalName);
                            document.getElementById('quiz-container').style.display = 'none';
                            document.getElementById('quiz-result').style.display = 'block';
                            document.getElementById('quiz-desc').textContent = engDesc; 
                            document.getElementById('link-fragment').textContent = data.fragment;
                        } else {
                            btn.classList.add('wrong');
                            setTimeout(() => btn.classList.remove('wrong'), 500);
                        }
                    };
                    optionsDiv.appendChild(btn);
                });
            } else {
                document.getElementById('normal-info').style.display = 'block';
                document.getElementById('quiz-container').style.display = 'none';
                document.getElementById('quiz-result').style.display = 'none';
                document.getElementById('normal-desc').textContent = engDesc; 
            }

            const modal = document.getElementById('fish-modal');
            if (modal) {
                modal.classList.add('show');
                document.body.classList.add('no-scroll');
            }
        });
    });
});

if(closeBtn && modal) closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.classList.remove('no-scroll');
});

window.addEventListener('click', (e) => { 
    if (e.target === modal && modal) {
        modal.classList.remove('show');
        document.body.classList.remove('no-scroll');
    }
});

// ==========================================
// 6. PUFFY AI CHAT WIDGET
// ==========================================
const PufferAI = {
    say: function(text, isUser = false) {
        if (!chatMessages) return;
        const msgDiv = document.createElement('div');
        msgDiv.className = `msg ${isUser ? 'user' : 'ai'}`;
        msgDiv.innerHTML = text; 
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
};

let didDragAI = false; 

function checkPuffyBounds(forceFit = false) {
    if (!aiWidget || !guideModel) return;
    
    let currentLeft = aiWidget.getBoundingClientRect().left;
    let currentTop = aiWidget.getBoundingClientRect().top;
    
    if (currentLeft > window.innerWidth / 2) {
        aiWidget.classList.add('flip-x');
    } else {
        aiWidget.classList.remove('flip-x');
    }

    if (forceFit || aiWidget.classList.contains('show-chat')) {
        const chatWidth = 400;  
        const chatHeight = 460; 

        if (aiWidget.classList.contains('flip-x')) {
            if (currentLeft < chatWidth) currentLeft = chatWidth;
            if (currentLeft > window.innerWidth - 80) currentLeft = window.innerWidth - 80;
        } else {
            if (currentLeft < 20) currentLeft = 20;
            if (currentLeft > window.innerWidth - chatWidth) currentLeft = window.innerWidth - chatWidth;
        }

        if (currentTop < 20) currentTop = 20;
        if (currentTop > window.innerHeight - chatHeight) currentTop = window.innerHeight - chatHeight;

        aiWidget.style.left = `${currentLeft}px`;
        aiWidget.style.top = `${currentTop}px`;
    }
}

if (guideModel && aiWidget) {
    guideModel.addEventListener('click', () => { 
        if (didDragAI) return; 
        
        if (aiWidget.classList.contains('show-chat')) {
            aiWidget.classList.remove('show-chat');
        } else {
            aiWidget.classList.add('show-chat');
            checkPuffyBounds(true); 
            if (puffyInput) puffyInput.focus();
        }
    });

    if(closeChatBtn) {
        closeChatBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            aiWidget.classList.remove('show-chat');
        });
    }

    aiWidget.addEventListener('mousedown', (e) => {
        if (e.target.closest('#chat-panel')) return; 
        isDraggingAI = true; 
        didDragAI = false; 
        
        let startLeft = guideModel.getBoundingClientRect().left;
        let startTop = guideModel.getBoundingClientRect().top;
        
        aiOffsetX = e.clientX - startLeft; 
        aiOffsetY = e.clientY - startTop;
        aiWidget.style.transition = 'none';
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!isDraggingAI) return;
        didDragAI = true; 
        
        let newX = e.clientX - aiOffsetX;
        let newY = e.clientY - aiOffsetY;

        newX = Math.max(10, Math.min(newX, window.innerWidth - 60));
        newY = Math.max(10, Math.min(newY, window.innerHeight - 60));

        aiWidget.style.left = `${newX}px`;
        aiWidget.style.top = `${newY}px`;
        
        checkPuffyBounds(false); 
    });
    
    document.addEventListener('mouseup', () => { 
        if (isDraggingAI) {
            isDraggingAI = false; 
            aiWidget.style.transition = 'all 2s cubic-bezier(0.45, 0.05, 0.55, 0.95)';
            checkPuffyBounds(true); 
            setTimeout(() => { didDragAI = false; }, 100);
        }
    });
}

function puffyFreeRoam() {
    if (!aiWidget) return;
    if (typeof TourManager !== 'undefined' && TourManager.isActive) return;
    if (aiWidget.classList.contains('show-chat') || isDraggingAI) return; 
    
    const padding = 100;
    const randomX = Math.random() * (window.innerWidth - padding * 2) + padding;
    const randomY = Math.random() * (window.innerHeight / 2 - padding) + padding; 
    
    aiWidget.style.left = `${randomX}px`;
    aiWidget.style.top = `${randomY}px`;
    
    setTimeout(() => checkPuffyBounds(false), 2100); 
}
setInterval(puffyFreeRoam, 6000);


// ==========================================
// 7. HỆ THỐNG DẪN TOUR
// ==========================================
function tourSay(text, askQuestion = false) {
    if(tourText) tourText.innerHTML = text;
    if (askQuestion) {
        if(tourActions) tourActions.classList.add('show');
    } else {
        if(tourActions) tourActions.classList.remove('show');
    }
}

window.submitTourAnswer = function(reply) {
    if (TourManager) TourManager.handleReply(reply);
};

const TourManager = {
    isActive: false,
    state: 'IDLE', 
    zones: [],
    currentZoneIdx: 0,

    init: function() {
        this.zones = [];
        const markers = Array.from(document.querySelectorAll('.zone-marker'));
        markers.sort((a,b) => (parseInt(a.getAttribute('data-depth')) || 0) - (parseInt(b.getAttribute('data-depth')) || 0));
        const allCards = Array.from(document.querySelectorAll('.fish-card, .milestone'));

        markers.forEach((marker, index) => {
            const depthStart = parseInt(marker.getAttribute('data-depth')) || 0;
            const depthEnd = index < markers.length - 1 ? (parseInt(markers[index+1].getAttribute('data-depth')) || 0) : 12000;

            const items = allCards.filter(card => {
                let d = getElementDepth(card);
                return d >= depthStart && d < depthEnd;
            });
            
            items.sort((a,b) => getElementDepth(a) - getElementDepth(b));

            let vName = marker.querySelector('h1').textContent;
            let vDesc = marker.querySelector('.zone-desc').textContent;
            if (typeof zonesData !== 'undefined') {
                let zData = zonesData.find(z => z.min === depthStart || z.keys.some(k => vName.toLowerCase().includes(k)));
                if (zData) { vName = zData.name; vDesc = zData.desc; }
            }

            this.zones.push({ marker: marker, name: vName, desc: vDesc, items: items });
        });
    },

    start: async function(startIdx = 0) {
        this.isActive = true;
        this.currentZoneIdx = startIdx;
        this.init();
        
        if(window.setTourSpeed) window.setTourSpeed(1, document.querySelector('.speed-btn'));

        if (aiWidget) aiWidget.classList.remove('show-chat');
        if (tourHud) tourHud.classList.add('active');
        if (tourActions) tourActions.classList.remove('show');
        
        if (depthGauge) depthGauge.style.pointerEvents = 'none';
        const navCluster = document.querySelector('.nav-cluster');
        if (navCluster) navCluster.style.pointerEvents = 'none';
        
        tourSay("Bắt đầu hành trình! Hãy bám sát tôi nhé! 🐠");
        await this.sleep(2500);
        this.introduceZone();
    },

    stop: function() {
        if (!this.isActive) return;
        this.isActive = false;
        this.state = 'IDLE';
        if (tourHud) tourHud.classList.remove('active');
        if (tourActions) tourActions.classList.remove('show');
        
        if (depthGauge) depthGauge.style.pointerEvents = 'auto';
        const navCluster = document.querySelector('.nav-cluster');
        if (navCluster) navCluster.style.pointerEvents = 'auto';
        
        if (aiWidget) aiWidget.classList.add('show-chat');
        if (typeof PufferAI !== 'undefined') PufferAI.say("Đã dừng tour. Bạn có thể tự do khám phá hoặc hỏi tôi bất cứ lúc nào! 🐡");
    },

    introduceZone: async function() {
        if (!this.isActive) return;
        if (this.currentZoneIdx >= this.zones.length) {
            tourSay("Chuyến tham quan đã kết thúc! Bạn đã chạm đến đáy đại dương! 🐡");
            await this.sleep(3000);
            this.stop();
            return;
        }

        const zone = this.zones[this.currentZoneIdx];
        this.moveTo(zone.marker, true);
        this.state = 'ASKING';
        
        tourSay(`📍 KHU VỰC: <b>${zone.name}</b><br><br>${zone.desc}<br><br>👉 Bạn có muốn xem chi tiết sinh vật ở vùng này không?`, true);
    },

    handleReply: async function(reply) {
        if (this.state !== 'ASKING') return false;

        const safeReply = String(reply).toLowerCase().trim(); 

        if (['có', 'co', 'yes', 'y', 'ok'].includes(safeReply)) {
            this.state = 'TOURING_ITEMS';
            tourSay("Tuyệt vời! Đi theo tôi nào... 🚀");
            await this.sleep(2000);
            this.tourItems();
        } else if (['không', 'khong', 'no', 'n', 'ko', 'next'].includes(safeReply)) {
            this.state = 'IDLE'; 
            tourSay("Ok, lặn thẳng xuống vùng tiếp theo nhé! 🌊");
            await this.sleep(2000);
            this.currentZoneIdx++;
            this.introduceZone();
        }
        return true; 
    },

    tourItems: async function() {
        const zone = this.zones[this.currentZoneIdx];
        for (let i = 0; i < zone.items.length; i++) {
            if (!this.isActive || this.state !== 'TOURING_ITEMS') return;

            const item = zone.items[i];
            const isFish = item.classList.contains('fish-card');
            
            const originalName = isFish ? (item.getAttribute('data-en-name') || item.querySelector('h2').textContent.trim()) : item.querySelector('h3').textContent.trim();
            const finalName = isFish ? (viNames[originalName] || originalName) : originalName;
            
            let finalInfo = "";
            if (isFish) {
                finalInfo = (typeof extendedDetails !== 'undefined' && extendedDetails[originalName]) ? extendedDetails[originalName] : (viShortDescs[originalName] || "Sinh vật biển sâu đầy bí ẩn.");
            } else {
                finalInfo = item.querySelector('.milestone-info p').textContent;
            }

            this.moveTo(item, false);
            tourSay(`📍 <b>${finalName}</b><br><br>${finalInfo}`);
            
            if (typeof isMuted !== 'undefined' && !isMuted && typeof sfxBubble !== 'undefined' && sfxBubble) { 
                sfxBubble.currentTime = 0; sfxBubble.play().catch(e=>console.log(e)); 
            }

            const originalShadow = item.style.boxShadow;
            item.style.boxShadow = "0 0 50px var(--guide-color), inset 0 0 20px var(--guide-color)";

            for(let t=0; t<60; t++) {
                if (!this.isActive || this.state !== 'TOURING_ITEMS') break;
                await this.sleep(100);
            }
            item.style.boxShadow = originalShadow;
        }

        if (this.isActive && this.state === 'TOURING_ITEMS') {
            this.currentZoneIdx++;
            this.introduceZone();
        }
    },

    moveTo: function(el, isZoneMarker) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const isRightAlign = el.classList.contains('right-align');
        const targetX = isZoneMarker ? "15vw" : (isRightAlign ? "10vw" : "65vw"); 
        if (aiWidget) {
            aiWidget.style.left = targetX;
            aiWidget.style.top = "30vh"; 
        }
    },

    sleep: function(ms) { return new Promise(resolve => setTimeout(resolve, ms / (window.tourSpeedMultiplier || 1))); }
};


// ==========================================
// 8. LOGIC CHAT BÁCH KHOA TOÀN THƯ
// ==========================================
function submitChat() {
    if (!puffyInput) return;
    const query = puffyInput.value.trim();
    if (!query) return;
    
    PufferAI.say(query, true);
    puffyInput.value = '';
    handlePuffySearch(query.toLowerCase());
}

if (puffyInput && sendBtn) {
    puffyInput.addEventListener('keypress', async (e) => {
        if (e.key === 'Enter') submitChat();
    });
    sendBtn.addEventListener('click', submitChat);
}

window.collectedSecretChars = window.collectedSecretChars || [];
if (window.collectedSecretChars instanceof Set) window.collectedSecretChars = Array.from(window.collectedSecretChars); 

const MASTER_KEY = "EMCAMONBANHVIDACHIULAMBANVOI1DUANHUEM.";

function getFakeAIReply(query) {
    const safeQuery = query.toLowerCase();

    if (safeQuery.match(/^(hi|hello|chào|xin chào|hey|alo)/)) {
        const greetings = [
            "Puffy đây! 🐡 Bạn muốn tìm hiểu về loài cá nào dưới biển sâu?",
            "Ọc ọc... Xin chào! Cần Puffy dẫn đường hay kể chuyện đại dương không? 🌊",
            "Hello bạn! Dám lặn xuống vùng tối cùng Puffy không? 😈"
        ];
        return greetings[Math.floor(Math.random() * greetings.length)];
    }

    for (let enName in viNames) {
        let vnName = viNames[enName].toLowerCase();
        let enNameLower = enName.toLowerCase();

        if (safeQuery.includes(vnName) || safeQuery.includes(enNameLower)) {
            let desc = (typeof extendedDetails !== 'undefined' && extendedDetails[enName]) 
                        ? extendedDetails[enName] 
                        : (viShortDescs[enName] || "Loài này bí ẩn quá, Puffy chưa cập nhật kịp!");
            
            let factText = funFacts[enName] ? `<br><br>💡 <b>Fun fact:</b> <i>${funFacts[enName]}</i>` : "";
            
            const fishReplies = [
                `À, <b>${viNames[enName]}</b>! ${desc} ${factText} 🐡`,
                `Radar dò thấy <b>${viNames[enName]}</b>: ${desc} ${factText} 🌊`,
                `Bạn hỏi đúng người rồi! Nói về <b>${viNames[enName]}</b> á? ${desc} ${factText} ✨`
            ];
            return fishReplies[Math.floor(Math.random() * fishReplies.length)];
        }
    }

    if (safeQuery.includes('bạn là ai') || safeQuery.includes('puffy là ai') || safeQuery.includes('làm gì')) {
        return "Mình là Puffy, hướng dẫn viên cá nóc máy móc của bạn. Dữ liệu của mình bao trọn đại dương này luôn! 🐡🤖";
    }

    const fallbacks = [
        "Hmm... Áp suất cao quá làm mạch điện mình chập chờn. Bạn hỏi tên một loài cá cụ thể được không? 🤔",
        "Biển sâu còn nhiều bí mật lắm... Radar của Puffy chưa dò ra câu này. Thử hỏi cá khác xem! 🐟",
        "Ọc ọc... Puffy chưa rành vụ này. Bạn có muốn đi tour tham quan không? (Gõ 'tour') 🌊"
    ];
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}

function handlePuffySearch(query) {
    const safeQuery = query.trim().toLowerCase(); 
    const upperQuery = query.trim().toUpperCase();

    if (upperQuery.replace(/\s+/g, '') === "TEAMBUILDING") {
        PufferAI.say("1/2 của câu đố đã xong nhớ giải cả 1/2 còn lại nhé! 🧩");
        setTimeout(() => {
            PufferAI.say("Kích hoạt cổng dịch chuyển thời gian! Đang đưa bạn trở về chuyến Teambuilding... 🚌✨");
            setTimeout(() => { window.location.href = "days/pass.html"; }, 3500);
        }, 4500);
        return; 
    }

    if (upperQuery.length === MASTER_KEY.length) {
        if (upperQuery === MASTER_KEY) {
            PufferAI.say("💎 MẬT MÃ CHÍNH XÁC!<br><br>📁 <b>HỆ THỐNG ĐÃ MỞ KHÓA TÀI LIỆU MẬT</b><br>🔑 Pass của bạn là:<br><span style='font-family: monospace; font-size: 1.2rem; color: #00ffc8; letter-spacing: 2px; display: inline-block; margin-top: 10px; border: 1px dashed #00ffc8; padding: 8px 15px; background: rgba(0, 255, 200, 0.1); border-radius: 8px;'>30/10/2024</span><br><br><i>(Hãy dùng mã này để giải 1 câu đố nhé! 🎁)<br><br>Notice: Giải xong thì ghi lời giải vào ô dưới đây </i>");
        } else {
            PufferAI.say(`❌ Chuỗi mã ${MASTER_KEY.length} ký tự không chính xác. Hãy kiểm tra lại thứ tự chữ cái!`);
        }
        return;
    }

    if (upperQuery.length === 1) {
        const requiredCount = MASTER_KEY.split('').filter(c => c === upperQuery).length;
        if (requiredCount > 0) {
            const currentCount = window.collectedSecretChars.filter(c => c === upperQuery).length;
            if (currentCount < requiredCount) {
                window.collectedSecretChars.push(upperQuery);
                if (window.collectedSecretChars.length === MASTER_KEY.length) {
                    PufferAI.say("🔥 KÉT SẮT ĐÃ GOM ĐỦ 38 MẢNH GHÉP!<br><br>📁 <b>HỆ THỐNG ĐÃ MỞ KHÓA TÀI LIỆU MẬT</b><br>🔑 Pass giải nén file ZIP của bạn là:<br><span style='font-family: monospace; font-size: 1.2rem; color: #00ffc8; letter-spacing: 2px; display: inline-block; margin-top: 10px; border: 1px dashed #00ffc8; padding: 8px 15px; background: rgba(0, 255, 200, 0.1); border-radius: 8px;'>30/10/2024</span><br><br><i>(Hãy dùng mã này để giải 1 câu đố nhé! 🎁)<br><br>Notice: Giải xong thì ghi lời giải vào ô dưới đây </i>");
                } else {
                    PufferAI.say(`✅ Đã thu thập chữ <b>${upperQuery}</b>! (Chữ này cần tìm ${requiredCount} lần, bạn đã nhặt được ${currentCount + 1}/${requiredCount}). <br>Tiến độ tổng: <b>${window.collectedSecretChars.length}/${MASTER_KEY.length}</b>.`);
                }
            } else {
                PufferAI.say(`Ký tự <b>${upperQuery}</b> bạn đã thu thập ĐỦ số lượng cần thiết (${requiredCount}/${requiredCount}) rồi! Hãy đi tìm các chữ cái khác nha! 🐡`);
            }
            return;
        }
    }

    if (TourManager.isActive) {
        PufferAI.say("Tôi đang dẫn Tour rồi! Nhấn nút 'Dừng Tour' ở dưới nếu bạn muốn tự hỏi nhé.");
        return;
    }

    if (safeQuery.includes('tour') || safeQuery.includes('dẫn đi')) {
        let startIdx = 0;
        const zoneKeywords = [
            { keys: ['epipelagic', 'sunlight', 'nông', 'mặt nước'], idx: 0 },
            { keys: ['mesopelagic', 'twilight', 'chạng vạng'], idx: 1 },
            { keys: ['bathypelagic', 'midnight', 'nửa đêm'], idx: 2 },
            { keys: ['abyss', 'vực thẳm', 'abyssopelagic'], idx: 3 },
            { keys: ['hadal', 'trench', 'rãnh', 'đáy', 'mariana'], idx: 4 }
        ];
        let found = zoneKeywords.find(z => z.keys.some(k => safeQuery.includes(k)));
        if (found) startIdx = found.idx; 
        else {
            let currentDepth = depthValue ? parseInt(depthValue.innerText) : 0;
            if (currentDepth >= 6000) startIdx = 4;
            else if (currentDepth >= 4000) startIdx = 3;
            else if (currentDepth >= 1000) startIdx = 2;
            else if (currentDepth >= 200) startIdx = 1;
            else startIdx = 0;
        }
        TourManager.start(startIdx);
        return;
    }

    const allFishCards = Array.from(document.querySelectorAll('.fish-card'));
    const allWeirdCards = [];
    allFishCards.forEach(card => {
        const meta = card.querySelector('.meta').textContent;
        const weirdnessMatch = meta.match(/Weirdness:\s*([\d.]+)/i);
        if (weirdnessMatch && parseFloat(weirdnessMatch[1]) > 7) allWeirdCards.push(card);
    });

    const unsolved = allWeirdCards.filter(card => {
        const oName = card.getAttribute('data-en-name') || card.querySelector('h2').textContent.trim();
        return !solvedCreatures.has(oName);
    });

    if (window.waitingForUnsolvedNav) {
        if (['có', 'co', 'yes', 'y', 'ok', 'đi'].includes(safeQuery)) {
            window.waitingForUnsolvedNav = false;
            if (unsolved.length > 0) {
                const originalName = unsolved[0].getAttribute('data-en-name') || unsolved[0].querySelector('h2').textContent.trim();
                const viName = viNames[originalName] || originalName;
                PufferAI.say(`Lên đường thôi! Đang dẫn tới <b>${viName}</b>... 🚀`);
                unsolved[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
                if (aiWidget) {
                    aiWidget.style.left = unsolved[0].classList.contains('right-align') ? "10vw" : "65vw";
                    aiWidget.style.top = "40vh";
                }
            } else {
                PufferAI.say("Tuyệt vời! Bạn đã giải mã hết rồi! 🏆");
            }
            return; 
        } else if (['không', 'khong', 'no', 'n', 'ko', 'thôi'].includes(safeQuery)) {
            window.waitingForUnsolvedNav = false;
            PufferAI.say("Okela! Bạn cứ từ từ tận hưởng chuyến đi nhé. Có gì cần cứ gọi Puffy! 🐡");
            return; 
        } else {
            window.waitingForUnsolvedNav = false;
        }
    }

    if (safeQuery.includes('chưa giải') || safeQuery.includes('còn mảnh') || (safeQuery.includes('chưa') && safeQuery.includes('mảnh'))) {
        if (unsolved.length > 0) {
            window.waitingForUnsolvedNav = true; 
            PufferAI.say(`Hệ thống báo cáo: Bạn còn <b>${unsolved.length}</b> sinh vật mang mảnh ghép chưa giải mã! 🧩<br><br>👉 Bạn có muốn tôi dẫn đường đến sinh vật gần nhất không? (Gõ: <b>Có</b> hoặc <b>Không</b>)`);
        } else {
            PufferAI.say("Đỉnh quá! Bạn đã thu thập đủ 38 mảnh ghép rồi! 🏆 Hãy ráp chúng lại và nhập Mật mã đi nào!");
        }
        return;
    } 

    if (safeQuery.includes('lịch sử') || safeQuery.includes('mốc') || safeQuery.includes('tàu')) {
        const milestones = document.querySelectorAll('.milestone');
        if (milestones.length > 0) {
            const target = milestones[Math.floor(Math.random() * milestones.length)];
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            askGemini(`Hãy đóng vai cá nóc Puffy và giới thiệu ngắn gọn, thú vị về di tích: ${target.querySelector('h3').textContent}`);
        }
        return;
    }

    let foundZone = zonesData.find(z => z.keys.some(k => safeQuery.includes(k)));
    const isAskingCount = safeQuery.includes('bao nhiêu') || safeQuery.includes('tổng số') || safeQuery.includes('mấy') || safeQuery.includes('tổng cộng');

    if (foundZone && isAskingCount) {
        const fishInZone = allFishCards.filter(card => {
            const d = getElementDepth(card);
            return d >= foundZone.min && d < foundZone.max;
        });
        PufferAI.say(`Khu vực <b>${foundZone.name}</b> hiện đang có <b>${fishInZone.length}</b> loài sinh vật được ghi nhận trong cơ sở dữ liệu! 🐡`);
        return;
    }

    if (isAskingCount && (safeQuery.includes('loài') || safeQuery.includes('cá') || safeQuery.includes('tổng'))) {
        PufferAI.say(`Hệ thống đang lưu trữ tổng cộng <b>${allFishCards.length}</b> loài sinh vật biển sâu khác nhau! Bạn có muốn khám phá vùng nào không? 🌊`);
        return;
    }

    let targetFishCard = null;
    allFishCards.forEach(card => {
        const originalName = card.getAttribute('data-en-name') || card.querySelector('h2').textContent.trim();
        const normalizedOriginal = originalName.toLowerCase().replace(/['\- ]/g, '');
        const normalizedQuery = safeQuery.replace(/['\- ]/g, '');
        const viNameMatch = (viNames && viNames[originalName] || "").toLowerCase().replace(/['\- ]/g, '');

        if (normalizedQuery.includes(normalizedOriginal) || (viNameMatch !== "" && normalizedQuery.includes(viNameMatch))) {
            targetFishCard = card;
        }
    });

    if (targetFishCard) {
        targetFishCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        if (aiWidget) {
            aiWidget.style.left = targetFishCard.classList.contains('right-align') ? "10vw" : "65vw";
            aiWidget.style.top = "40vh";
        }
    } 
    else if (foundZone) {
        const targetVh = startDiveVh + mapDepthToPercent(foundZone.min) * diveDistanceVh;
        const targetPx = (targetVh / 100) * window.innerHeight;
        window.scrollTo({ top: targetPx - window.innerHeight / 2, behavior: 'smooth' });
    }

    PufferAI.say("Đang lục tìm trí nhớ... 🫧");
    setTimeout(() => {
        const reply = getFakeAIReply(query);
        PufferAI.say(reply);
    }, 600); 
}

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('loaded');
        document.body.style.overflow = 'auto';
    }, 500);
});
