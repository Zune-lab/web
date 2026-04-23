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
    'Gulper Eel': "Dạ dày của chúng có thể giãn nở khổng lồ để đối phó với sự khan hiếm thức ăn ở biển sâu.",
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
let isDraggingGauge = false; /* THÊM DÒNG NÀY VÀO ĐÂY */

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fish-card').forEach(card => {
        const titleEl = card.querySelector('h2');
        if (!titleEl) return;
        
        // Chỉ lưu lại tên tiếng Anh gốc để Puffy dùng làm data tìm kiếm
        const originalName = titleEl.textContent.trim();
        card.setAttribute('data-en-name', originalName); 
        
        // ❌ ĐÃ XÓA 2 DÒNG DỊCH TÊN VÀ MÔ TẢ RA TIẾNG VIỆT Ở ĐÂY
    });
});


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
    const isMobile = window.innerWidth <= 768;
    
    document.querySelectorAll('.zone-marker').forEach(marker => {
        const depth = parseInt(marker.getAttribute('data-depth')) || 0;
        let topVh = startDiveVh + mapDepthToPercent(depth) * diveDistanceVh;
        marker.style.top = `${topVh}vh`;
        marker.style.transform = "translateY(-50%)"; 
    });

let items = [];
    document.querySelectorAll('.fish-card, .milestone').forEach(el => {
        items.push({ el, depth: getElementDepth(el) });
    });
    items.sort((a, b) => a.depth - b.depth);

    // 🚀 THUẬT TOÁN SO LE CHUẨN XÁC (ZIG-ZAG)
    let isLeft = true; // Bắt đầu bằng bên trái
    let lastTopVh = startDiveVh; 
    const minGapVh = 28; // Giãn cách dọc tối thiểu giữa 2 thẻ (giúp mượt mắt)

    items.forEach((item, index) => {
        let exactTopVh = startDiveVh + mapDepthToPercent(item.depth) * diveDistanceVh;
        
        // Nếu thẻ này đứng quá sát thẻ trước, đẩy nó xuống 1 khoảng minGapVh
        if (exactTopVh < lastTopVh + minGapVh && index !== 0) {
            exactTopVh = lastTopVh + minGapVh;
        }
        lastTopVh = exactTopVh;

        let assignedSide = isLeft ? 'left' : 'right';
        isLeft = !isLeft; // Đảo chiều cho thẻ tiếp theo (Trái -> Phải -> Trái)

        if (isMobile) {
            assignedSide = 'center'; 
        }

        item.el.className = item.el.className.replace(/left-align|right-align|center-align/g, '').trim();
        item.el.classList.add(`${assignedSide}-align`);
        
        item.el.style.top = `${exactTopVh}vh`;
        item.el.style.marginTop = "0";
        item.el.style.transform = `translateY(-50%)`; 
        
        item.el.onmouseenter = () => item.el.style.transform = `translateY(-50%) translateY(-10px) scale(1.02)`;
        item.el.onmouseleave = () => item.el.style.transform = `translateY(-50%)`;
    });

    const mainEl = document.querySelector('main');
    if(mainEl) mainEl.style.height = `${endDiveVh + 50}vh`;
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
    particlesContainer.innerHTML = ''; // Xóa hạt cũ
    const particleCount = window.innerWidth <= 768 ? 30 : 80; // Tăng số lượng hạt
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

document.querySelectorAll('.fish-card').forEach((card) => {
    const iconContainer = card.querySelector('.fish-3d');
    if (!iconContainer) return;
const title = card.querySelector('h2').textContent.trim();
    const baseFileName = title.replace(/'/g, '').replace(/\s+/g, '-');
    
    const img = document.createElement('img');
    img.className = 'fish-img';
    img.alt = title;

    // 🚀 BỘ TỪ ĐIỂN TÊN ẢNH (Bao phủ mọi trường hợp Hoa/Thường do Windows tạo ra)
    const possibleUrls = [
        `images/${baseFileName}.jpg`,                                // 1. Y xì đúc (VD: Man-o-War.jpg)
        `images/${baseFileName.toLowerCase()}.jpg`,                  // 2. Thường hết (VD: man-o-war.jpg)
        `images/${baseFileName.charAt(0).toUpperCase() + baseFileName.slice(1).toLowerCase()}.jpg`, // 3. Hoa chữ cái đầu (VD: Man-o-war.jpg, Goblin-shark.jpg)
        `images/${baseFileName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('-')}.jpg` // 4. Hoa chữ đầu mỗi từ (VD: Flying-Fish.jpg)
    ];
    
    let currentTry = 0;
    
    // ⚠️ QUAN TRỌNG: Phải cài đặt bẫy lỗi (onerror) TRƯỚC KHI gán link ảnh
    img.onerror = function() { 
        currentTry++;
        if (currentTry < possibleUrls.length) {
            this.src = possibleUrls[currentTry]; // Sai thì tự động thử link tiếp theo
        } else {
            // Thử hết 4 cách vẫn sai thì mới xài ảnh san hô
            this.src = 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=600&auto=format&fit=crop'; 
        }
    };

    // Bắt đầu nạp ảnh từ lựa chọn đầu tiên
    img.src = possibleUrls[0];

    iconContainer.innerHTML = ''; 
    iconContainer.appendChild(img);

    card.addEventListener('click', () => {
        if (typeof TourManager !== 'undefined' && TourManager.isActive) {
            // (Tùy chọn) Bạn có thể cho Puffy cằn nhằn xíu cho vui 😂
            // PufferAI.say("Đang đi tour mà! Đừng bấm lung tung nghen! 🐡");
            return; 
        }
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

        if (dynamicShape) { dynamicShape.style.setProperty('--modal-glow', fishGlowColor); }

let iconHtml = '🐟';
        const fishImg = card.querySelector('.fish-img');
        if (fishImg) {
            // 1. Danh sách cá có nền ĐEN THUI
            const blackBorderFishes = ["Mahi-Mahi", "Anglerfish", "Viperfish", "Black Swallower", "Dragonfish"]; 
            // 2. Danh sách cá có ảnh DỌC (cần lót nền mờ để khỏi bị viền đen 2 bên)
            const verticalFishes = ["Oarfish", "Man o' War"]; 
            
            const isBlackBorder = blackBorderFishes.includes(originalName);
            const isVertical = verticalFishes.includes(originalName);

            let bgLayer = '';
            let mainImageStyle = '';
            
            if (isBlackBorder) {
                // STYLE 1: XÓA NỀN ĐEN
                mainImageStyle = "object-fit: cover; object-position: center; mix-blend-mode: screen; -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%); mask-image: linear-gradient(to bottom, black 70%, transparent 100%);";
            } else if (isVertical) {
                // STYLE 2: ẢNH DỌC LÓT NỀN MỜ
                bgLayer = `<img src="${fishImg.src}" style="position: absolute; top: -10%; left: -10%; width: 120%; height: 120%; object-fit: cover; filter: blur(15px) brightness(0.5) saturate(1.2); z-index: 0; pointer-events: none;">`;
                mainImageStyle = "object-fit: contain; object-position: center; border-radius: 15px; -webkit-mask-image: linear-gradient(to bottom, black 85%, transparent 100%); mask-image: linear-gradient(to bottom, black 85%, transparent 100%);";
            } else {
                // STYLE 3: ẢNH BÌNH THƯỜNG (FULL KHUNG)
                mainImageStyle = "object-fit: cover; object-position: center; border-radius: 15px; -webkit-mask-image: linear-gradient(to bottom, black 85%, transparent 100%); mask-image: linear-gradient(to bottom, black 85%, transparent 100%);";
            }

            iconHtml = `
            <div style="position: relative; width: 100%; height: 260px; border-radius: 16px; overflow: hidden; border: 1px solid ${fishGlowColor}; box-shadow: 0 15px 35px rgba(0,0,0,0.6), 0 0 30px ${fishGlowColor}; margin-bottom: 25px; background: #000;">
                ${bgLayer}
                <img src="${fishImg.src}" style="position: relative; z-index: 1; width: 100%; height: 100%; ${mainImageStyle} ${!isBlackBorder ? 'filter: drop-shadow(0 10px 20px rgba(0,0,0,0.8));' : ''}">
            </div>`;
        }

        document.getElementById('modal-visual').innerHTML = iconHtml; 

        // =====================================
        // TRẢ LẠI THÔNG TIN TIẾNG ANH CHO MODAL
        // =====================================
        // Lấy đoạn miêu tả Tiếng Anh trực tiếp từ thẻ <p> trên web
        const engDesc = card.querySelector('p').textContent.trim();

        document.getElementById('modal-title').textContent = originalName; // Tên Tiếng Anh
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
                        document.getElementById('quiz-desc').textContent = engDesc; // Đổ miêu tả Tiếng Anh
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
            document.getElementById('normal-desc').textContent = engDesc; // Đổ miêu tả Tiếng Anh
        }

// Thêm lệnh khóa cuộn màn hình khi mở Modal
        if (modal) {
            modal.classList.add('show');
            document.body.classList.add('no-scroll');
        }
    });
});

// Thêm lệnh mở khóa cuộn màn hình khi đóng Modal
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

// 🛠️ HÀM KIỂM TRA LỀ: Nếu Puffy đứng gần mép phải (< 380px), lật bảng chat sang trái
function checkPuffyBounds() {
    if (!aiWidget) return;
    const rect = aiWidget.getBoundingClientRect();
    if (rect.left > window.innerWidth - 380) {
        aiWidget.classList.add('flip-x');
    } else {
        aiWidget.classList.remove('flip-x');
    }
}

if (guideModel && aiWidget) {
    // 🛠️ TÍNH NĂNG TẮT/MỞ: Click để mở, click lần nữa để đóng
    guideModel.addEventListener('click', () => { 
        if (didDragAI) return; // Nếu đang kéo thì không tính là click
        
        // Nếu đang mở thì đóng lại
        if (aiWidget.classList.contains('show-chat')) {
            aiWidget.classList.remove('show-chat');
        } 
        // Nếu đang đóng thì bật lên
        else {
            checkPuffyBounds(); // Quét lề trước khi bung bảng chat
            aiWidget.classList.add('show-chat');
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
        const rect = aiWidget.getBoundingClientRect(); 
        aiOffsetX = e.clientX - rect.left; 
        aiOffsetY = e.clientY - rect.top;
        aiWidget.style.transition = 'none';
    });
    
document.addEventListener('mousemove', (e) => {
        if (!isDraggingAI) return;
        didDragAI = true; 
        
        // Tính toán tọa độ mới
        let newX = e.clientX - aiOffsetX;
        let newY = e.clientY - aiOffsetY;

        // Lấy kích thước thực tế của Puffy
        const widgetWidth = aiWidget.offsetWidth;
        const widgetHeight = aiWidget.offsetHeight;

        // 🛠️ CHẶN VIỀN: Ép tọa độ không được nhỏ hơn 0 và không lớn hơn kích thước màn hình
        newX = Math.max(0, Math.min(newX, window.innerWidth - widgetWidth));
        newY = Math.max(0, Math.min(newY, window.innerHeight - widgetHeight));

        aiWidget.style.left = `${newX}px`;
        aiWidget.style.top = `${newY}px`;
        
        checkPuffyBounds(); // Liên tục quét lề khi người dùng đang kéo
    });
    
    document.addEventListener('mouseup', () => { 
        if (isDraggingAI) {
            isDraggingAI = false; 
            aiWidget.style.transition = 'all 2s cubic-bezier(0.45, 0.05, 0.55, 0.95)';
            setTimeout(() => { didDragAI = false; }, 100);
        }
    });
}

function puffyFreeRoam() {
    if (!aiWidget) return;
    if (TourManager.isActive || aiWidget.classList.contains('show-chat') || isDraggingAI) return; 
    const padding = 100;
    const randomX = Math.random() * (window.innerWidth - padding * 2) + padding;
    const randomY = Math.random() * (window.innerHeight / 2 - padding) + padding; 
    aiWidget.style.left = `${randomX}px`;
    aiWidget.style.top = `${randomY}px`;
    // Quét lề sau khi Puffy tự bơi xong (đợi 2.1s cho hiệu ứng trượt kết thúc)
    setTimeout(checkPuffyBounds, 2100); 
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
        
        // 🔒 KHÓA BẢNG ĐIỀU KHIỂN: Không cho click Mini-map & Nút điều hướng khi đi Tour
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
        
        // 🔓 MỞ KHÓA LẠI: Trả lại quyền điều khiển Mini-map & Nút điều hướng cho người chơi
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

// Khởi tạo Két sắt dạng Array (để lưu trữ được nhiều ký tự giống nhau)
window.collectedSecretChars = window.collectedSecretChars || [];
// Phòng trường hợp lỡ cache dạng Set cũ, tự chuyển thành Array
if (window.collectedSecretChars instanceof Set) window.collectedSecretChars = Array.from(window.collectedSecretChars); 

// MÃ MASTER CHUẨN XÁC 38 KÝ TỰ (Có trùng lặp)
const MASTER_KEY = "EMCAMONBANHVIDACHIULAMBANVOI1DUANHUEM.";

function handlePuffySearch(query) {
    const safeQuery = query.trim(); 
    const upperQuery = safeQuery.toUpperCase();
    if (upperQuery.replace(/\s+/g, '') === "TEAMBUILDING") {
PufferAI.say("1/2 của câu đố đã xong nhớ giải cả 1/2 còn lại nhé! 🧩");
        
        // Đợi 2.5 giây (2500ms) rồi mới nói tiếp câu thứ 2
        setTimeout(() => {
            // Khung chat 2: Kích hoạt dịch chuyển
            PufferAI.say("Kích hoạt cổng dịch chuyển thời gian! Đang đưa bạn trở về chuyến Teambuilding... 🚌✨");
            
            // Đợi thêm 3 giây (3000ms) nữa để đọc xong câu 2 rồi mới chuyển trang
            setTimeout(() => {
                window.location.href = "days/pass.html"; 
            }, 3500);

        }, 4500);
        return; // Dừng luôn hàm, không chạy các lệnh tìm kiếm cá ở dưới nữa
    }

    // ==========================================
    // 🚀 TÍNH NĂNG GIẢI MÃ THÔNG MINH (CHỐNG SPAM TRÙNG LẶP)
    // ==========================================
    
// TRƯỜNG HỢP 1: Nhập 1 lần đúng cả câu 38 ký tự
    if (upperQuery.length === MASTER_KEY.length) {
        if (upperQuery === MASTER_KEY) {
            PufferAI.say("💎 MẬT MÃ CHÍNH XÁC!<br><br>📁 <b>HỆ THỐNG ĐÃ MỞ KHÓA TÀI LIỆU MẬT</b><br>🔑 Pass của bạn là:<br><span style='font-family: monospace; font-size: 1.2rem; color: #00ffc8; letter-spacing: 2px; display: inline-block; margin-top: 10px; border: 1px dashed #00ffc8; padding: 8px 15px; background: rgba(0, 255, 200, 0.1); border-radius: 8px;'>30/10/2024</span><br><br><i>(Hãy dùng mã này để giải 1 câu đố nhé! 🎁)<br><br>Notice: Giải xong thì ghi lời giải vào ô dưới đây </i>");
            return;
        } else {
            PufferAI.say(`❌ Chuỗi mã ${MASTER_KEY.length} ký tự không chính xác. Hãy kiểm tra lại thứ tự chữ cái!`);
            return;
        }
    }

    // TRƯỜNG HỢP 2: Nhập từng mảnh ghép
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
    // ==========================================
    // LOGIC TÌM KIẾM BÌNH THƯỜNG
    // ==========================================
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
        
        if (found) {
            startIdx = found.idx; 
        } else {
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
    const totalFish = allFishCards.length;

    let foundZone = zonesData.find(z => z.keys.some(k => safeQuery.includes(k)));
    const isAskingCount = safeQuery.includes('bao nhiêu') || safeQuery.includes('tổng số') || safeQuery.includes('mấy') || safeQuery.includes('tổng cộng');

    if (foundZone) {
        if (isAskingCount) {
            const fishInZone = allFishCards.filter(card => {
                const d = getElementDepth(card);
                return d >= foundZone.min && d < foundZone.max;
            });
            PufferAI.say(`Khu vực <b>${foundZone.name}</b> hiện đang có <b>${fishInZone.length}</b> loài sinh vật được ghi nhận trong cơ sở dữ liệu! 🐡`);
        } else {
            PufferAI.say(`🌊 <b>${foundZone.name}</b>: ${foundZone.desc}`);
        }
        return;
    }

    if (isAskingCount && (safeQuery.includes('loài') || safeQuery.includes('cá') || safeQuery.includes('tổng'))) {
        PufferAI.say(`Hệ thống đang lưu trữ tổng cộng <b>${totalFish}</b> loài sinh vật biển sâu khác nhau! Bạn có muốn khám phá vùng nào không? 🌊`);
        return;
    }

    const allWeirdCards = [];
    let targetFishCard = null;
    let targetFishName = ""; 

    allFishCards.forEach(card => {
        const originalName = card.getAttribute('data-en-name') || card.querySelector('h2').textContent.trim();
        const meta = card.querySelector('.meta').textContent;
        const weirdnessMatch = meta.match(/Weirdness:\s*([\d.]+)/i);
        const weirdness = weirdnessMatch ? parseFloat(weirdnessMatch[1]) : 0;
        
        if (weirdness > 7) allWeirdCards.push(card);

        const normalizedOriginal = originalName.toLowerCase().replace(/['\- ]/g, '');
        const normalizedQuery = safeQuery.replace(/['\- ]/g, '');
        const viNameMatch = (viNames[originalName] || "").toLowerCase().replace(/['\- ]/g, '');

        if (normalizedQuery.includes(normalizedOriginal) || (viNameMatch !== "" && normalizedQuery.includes(viNameMatch))) {
            targetFishCard = card;
            targetFishName = originalName;
        }
    });

const unsolved = allWeirdCards.filter(card => {
        const oName = card.getAttribute('data-en-name') || card.querySelector('h2').textContent.trim();
        return !solvedCreatures.has(oName);
    });

    // ==========================================
    // 🚀 LOGIC CHỜ CÂU TRẢ LỜI CÓ/KHÔNG
    // ==========================================
    if (window.waitingForUnsolvedNav) {
        if (['có', 'co', 'yes', 'y', 'ok', 'đi'].includes(safeQuery)) {
            window.waitingForUnsolvedNav = false;
            if (unsolved.length > 0) {
                const originalName = unsolved[0].getAttribute('data-en-name') || unsolved[0].querySelector('h2').textContent.trim();
                const viName = viNames[originalName] || originalName;
                PufferAI.say(`Lên đường thôi! Đang dẫn tới <b>${viName}</b>... 🚀`);
                unsolved[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Đưa Puffy tới vị trí của thẻ cá
                if (aiWidget) {
                    aiWidget.style.left = unsolved[0].classList.contains('right-align') ? "10vw" : "65vw";
                    aiWidget.style.top = "40vh";
                }
            } else {
                PufferAI.say("Tuyệt vời! Bạn đã giải mã hết rồi! 🏆");
            }
            return; // Dừng xử lý các lệnh bên dưới
        } else if (['không', 'khong', 'no', 'n', 'ko', 'thôi'].includes(safeQuery)) {
            window.waitingForUnsolvedNav = false;
            PufferAI.say("Okela! Bạn cứ từ từ tận hưởng chuyến đi nhé. Có gì cần cứ gọi Puffy! 🐡");
            return; // Dừng xử lý các lệnh bên dưới
        } else {
            // Nếu người dùng hỏi câu khác, tự động hủy trạng thái chờ và trả lời câu mới
            window.waitingForUnsolvedNav = false;
        }
    }

    // ==========================================
    // LOGIC TÌM KIẾM SINH VẬT & LỊCH SỬ
    // ==========================================
    if (targetFishCard) {
        const viName = viNames[targetFishName] || targetFishName;
        const extraInfo = (typeof extendedDetails !== 'undefined' && extendedDetails[targetFishName]) ? extendedDetails[targetFishName] : (viShortDescs[targetFishName] || "Sinh vật biển sâu bí ẩn...");
        
        PufferAI.say(`🐟 <b>${viName}</b>: ${extraInfo} <br><br><i>(Tôi biết đáp án giải đố, nhưng không gian lận nhé! 🤫)</i>`);
        
        targetFishCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        if (aiWidget) {
            aiWidget.style.left = targetFishCard.classList.contains('right-align') ? "10vw" : "65vw";
            aiWidget.style.top = "40vh";
        }
    }
    // 🛠️ HỎI SỐ LƯỢNG CÒN LẠI (ĐÃ FIX)
    else if (safeQuery.includes('chưa') || safeQuery.includes('còn')) {
        if (unsolved.length > 0) {
            window.waitingForUnsolvedNav = true; // Bật cờ chờ người dùng trả lời
            PufferAI.say(`Hệ thống báo cáo: Bạn còn <b>${unsolved.length}</b> sinh vật mang mảnh ghép chưa giải mã! 🧩<br><br>👉 Bạn có muốn tôi dẫn đường đến sinh vật gần nhất không? (Gõ: <b>Có</b> hoặc <b>Không</b>)`);
        } else {
            PufferAI.say("Đỉnh quá! Bạn đã thu thập đủ 38 mảnh ghép rồi! 🏆 Hãy ráp chúng lại và nhập Mật mã đi nào!");
        }
    } 
    else if (safeQuery.includes('lịch sử') || safeQuery.includes('mốc') || safeQuery.includes('tàu')) {
        const milestones = document.querySelectorAll('.milestone');
        if (milestones.length > 0) {
            const target = milestones[Math.floor(Math.random() * milestones.length)];
            PufferAI.say(`Radar phát hiện di tích: <b>${target.querySelector('h3').textContent}</b>! ⚓`);
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    else {
        PufferAI.say("Puffy chưa rõ. Bạn có thể nhập Mã bí mật vừa thu thập, hỏi 'còn bao nhiêu con', 'tìm tàu', hoặc gõ 'tour' nhé!");
    }
}
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    // Đợi thêm một chút (ví dụ 500ms) để các thư viện như GSAP kịp tính toán vị trí
    setTimeout(() => {
        preloader.classList.add('loaded');
        
        // Sau khi load xong thì cho phép cuộn trang
        document.body.style.overflow = 'auto';
    }, 500);
});

// Trong khi đang load thì không cho cuộn trang để tránh lỗi vị trí
document.body.style.overflow = 'hidden';
