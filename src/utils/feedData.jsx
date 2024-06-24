const instagramFeed = [
  {
    id: 1,
    username: "food.explorer",
    time: "1h",
    profileImg:
      "https://plus.unsplash.com/premium_photo-1686090446908-60fbb45f2805?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D",
    postImg:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    mutualFrndImg1:
      "https://images.unsplash.com/photo-1495216875107-c6c043eb703f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    mutualFrndImg2:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
    likeCount: "200k",
    caption: "Exploring new flavors every day!",
    commentCount: "100",
  },
  {
    id: 2,
    username: "nature.lover",
    time: "1h",
    profileImg:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww",
    postImg:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww",
    mutualFrndImg1:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
    mutualFrndImg2:
      "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    likeCount: "200k",
    caption: "Nature's beauty is unparalleled.",
    commentCount: "300",
  },
  {
    id: 3,
    username: "reelsofworld",
    time: "1h",
    profileImg:
      "https://images.unsplash.com/photo-1625690303837-654c9666d2d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmlkZW9ncmFwaHl8ZW58MHx8MHx8fDA%3D",
    postImg:
      "https://images.unsplash.com/photo-1530578686886-94d5d19ba040?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcHR1cmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    mutualFrndImg1:
      "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    mutualFrndImg2:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    likeCount: "200k",
    caption: "Capturing the world's best moments.",
    commentCount: "100",
  },
  {
    id: 4,
    username: "carlover",
    time: "1h",
    profileImg:
      "https://images.unsplash.com/photo-1678961221220-5e098c583a44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4dXJ5Y2FyfGVufDB8fDB8fHww",
    postImg:
      "https://images.unsplash.com/photo-1646650924981-05774497ca26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGx1eHVyeWNhcnxlbnwwfHwwfHx8MA%3D%3D",
    mutualFrndImg1:
      "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljfGVufDB8fDB8fHww",
    mutualFrndImg2:
      "https://plus.unsplash.com/premium_photo-1661369243179-1c3a69f646c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBldHN8ZW58MHx8MHx8fDA%3D",
    likeCount: "200k",
    caption: "The thrill of speed and luxury.",
    commentCount: "400",
  },
  {
    id: 5,
    username: "godness",
    time: "1h",
    profileImg:
      "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29kfGVufDB8fDB8fHww",
    postImg:
      "https://plus.unsplash.com/premium_photo-1669863266283-557f9e170d85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29kbmVzc3xlbnwwfHwwfHx8MA%3D%3D",
    mutualFrndImg1:
      "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z29kfGVufDB8fDB8fHww",
    mutualFrndImg2:
      "https://images.unsplash.com/photo-1521336575822-6da63fb45455?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    likeCount: "100k",
    caption: "Finding peace and divinity.",
    commentCount: "200",
  },
  {
    id: 6,
    username: "travel.guru",
    time: "2h",
    profileImg:
      "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsZXJ8ZW58MHx8MHx8fDA%3D",
    postImg:
      "https://images.unsplash.com/photo-1518787289325-94c6917b88ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRlc3RpbmF0aW9ufGVufDB8fDB8fHww",
    mutualFrndImg1:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fHww",
    mutualFrndImg2:
      "https://images.unsplash.com/photo-1617284101128-4b2025d00c55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbGVyfGVufDB8fDB8fHww",
    likeCount: "150k",
    caption: "Wanderlust calling!",
    commentCount: "80",
  },
  {
    id: 7,
    username: "tech.savvy",
    time: "4h",
    profileImg:
      "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    postImg:
      "https://images.unsplash.com/photo-1699602048589-0f492f833270?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEFJfGVufDB8fDB8fHww",
    mutualFrndImg1:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    mutualFrndImg2:
      "https://images.unsplash.com/photo-1503437313881-503a91226402?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    likeCount: "220k",
    caption: "Innovating for a better tomorrow.",
    commentCount: "200",
  },
  {
    id: 8,
    username: "art.creator",
    time: "5h",
    profileImg:
      "https://images.unsplash.com/photo-1517697471339-4aa32003c11a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFydGlzdHxlbnwwfHwwfHx8MA%3D%3D",
    postImg:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJ0fGVufDB8fDB8fHww",
    mutualFrndImg1:
      "https://images.unsplash.com/photo-1588786849373-642245e7bd15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aXN0fGVufDB8fDB8fHww",
    mutualFrndImg2:
      "https://images.unsplash.com/photo-1581548133861-ad7a282a1d62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRlc2lnbmVyfGVufDB8fDB8fHww",
    likeCount: "170k",
    caption: "Art is the journey of a free soul.",
    commentCount: "90",
  },
  {
    id: 9,
    username: "fashion.icon",
    time: "6h",
    profileImg:
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    postImg:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    mutualFrndImg1:
      "https://plus.unsplash.com/premium_photo-1708110921152-850148b86156?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
    mutualFrndImg2:
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R5bGV8ZW58MHx8MHx8fDA%3D",
    likeCount: "190k",
    caption: "Elegance never goes out of style.",
    commentCount: "110",
  },
  {
    id: 10,
    username: "fitness.freak",
    time: "7h",
    profileImg:
      "https://plus.unsplash.com/premium_vector-1715877729452-24314933b793?bg=FFFFFF&w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D",
    postImg:
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D",
    mutualFrndImg1:
      "https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D",
    mutualFrndImg2:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltfGVufDB8fDB8fHww",
    likeCount: "210k",
    caption: "Push harder than yesterday.",
    commentCount: "130",
  },
  {
    id: 11,
    username: "book.worm",
    time: "8h",
    profileImg:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    postImg:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    mutualFrndImg1:
      "https://plus.unsplash.com/premium_photo-1681825268400-c561bd47d586?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    mutualFrndImg2:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJvb2t8ZW58MHx8MHx8fDA%3D",
    likeCount: "160k",
    caption: "Lost in a good book.",
    commentCount: "95",
  },
  {
    id: 12,
    username: "pet.lover",
    time: "9h",
    profileImg:
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBldHN8ZW58MHx8MHx8fDA%3D",
    postImg:
      "https://images.unsplash.com/photo-1563460716037-460a3ad24ba9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBldHN8ZW58MHx8MHx8fDA%3D",
    mutualFrndImg1:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBldHN8ZW58MHx8MHx8fDA%3D",
    mutualFrndImg2:
      "https://images.unsplash.com/photo-1504595403659-9088ce801e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGV0c3xlbnwwfHwwfHx8MA%3D%3D",
    likeCount: "230k",
    caption: "Pets make life better.",
    commentCount: "140",
  },
  {
    id: 13,
    username: "music.enthusiast",
    time: "10h",
    profileImg:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
    postImg:
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D",
    mutualFrndImg1:
      "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWNpYW58ZW58MHx8MHx8fDA%3D",
    mutualFrndImg2:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
    likeCount: "175k",
    caption: "Music is life.",
    commentCount: "115",
  },
  {
    id: 14,
    username: "movie.buff",
    time: "11h",
    profileImg:
      "https://plus.unsplash.com/premium_photo-1710961232986-36cead00da3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW92aWVzfGVufDB8fDB8fHww",
    postImg:
      "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mutualFrndImg1:
      "https://images.unsplash.com/photo-1546872006-42c78c0ccb29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWN0b3J8ZW58MHx8MHx8fDA%3D",
    mutualFrndImg2:
      "https://plus.unsplash.com/premium_photo-1685306874263-edfbf00b9bcd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFjdG9yfGVufDB8fDB8fHww",
    likeCount: "195k",
    caption: "Lights, camera, action!",
    commentCount: "125",
  },
  {
    id: 15,
    username: "science.geek",
    time: "12h",
    profileImg:
      "https://plus.unsplash.com/premium_vector-1715426360447-3df85e8c685f?bg=FFFFFF&w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2NpZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    postImg:
      "https://images.unsplash.com/photo-1607359023867-ce2ed72cc1b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDMzfHxzY2llbmNlfGVufDB8fDB8fHww",
    mutualFrndImg1:
      "https://images.unsplash.com/photo-1607988795691-3d0147b43231?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2NpZW50aXN0fGVufDB8fDB8fHww",
    mutualFrndImg2:
      "https://plus.unsplash.com/premium_photo-1663047128269-b3fa9381a0a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNjaWVudGlzdHxlbnwwfHwwfHx8MA%3D%3D",
    likeCount: "184k",
    caption: "Exploring the wonders of science.",
    commentCount: "105",
  },
  {
    id: 16,
    username: "history.buff",
    time: "13h",
    profileImg:
      "https://plus.unsplash.com/premium_photo-1661963996750-24c93354eecc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGlzdG9yeXxlbnwwfHwwfHx8MA%3D%3D",
    postImg:
      "https://images.unsplash.com/photo-1617515818885-2cc57efe1a3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHxtb251bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    mutualFrndImg1:
      "https://images.unsplash.com/photo-1582232537449-3b91bcb81d05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fG1vbnVtZW50fGVufDB8fDB8fHww",
    mutualFrndImg2:
      "https://media.istockphoto.com/id/1495892403/photo/egypt-cairo-asian-male-tourist-sitting-on-rocks-with-great-pyramid-of-giza-in-background.webp?b=1&s=170667a&w=0&k=20&c=cIUtmCju2p97FHry-1uBtgXlnzFOLMcOUKoYfvl0LWU=",
    likeCount: "178k",
    caption: "Delving into the past.",
    commentCount: "90",
  },
  {
    id: 17,
    username: "car.enthusiast",
    time: "14h",
    profileImg:
      "https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyfGVufDB8fDB8fHww",
    postImg:
      "https://images.unsplash.com/photo-1598586958772-8bf368215c2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
    mutualFrndImg1:
      "https://plus.unsplash.com/premium_photo-1683134240084-ba074973f75e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
    mutualFrndImg2:
      "https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
    likeCount: "220k",
    caption: "Driven by passion.",
    commentCount: "140",
  },
  {
    id: 18,
    username: "photography.lover",
    time: "15h",
    profileImg:
      "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D",
    postImg:
      "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D",
    mutualFrndImg1:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D",
    mutualFrndImg2:
      "https://images.unsplash.com/photo-1590071089561-2087ff1fc418?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww",
    likeCount: "205k",
    caption: "Capturing moments.",
    commentCount: "130",
  },
  {
    id: 19,
    username: "adventure.seeker",
    time: "16h",
    profileImg:
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWR2ZW50dXJlfGVufDB8fDB8fHww",
    postImg:
      "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWR2ZW50dXJlfGVufDB8fDB8fHww",
    mutualFrndImg1:
      "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    mutualFrndImg2:
      "https://plus.unsplash.com/premium_photo-1682390303366-7463dcbec281?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    likeCount: "240k",
    caption: "Adventure awaits!",
    commentCount: "150",
  },
  {
    id: 20,
    username: "baker.extraordinaire",
    time: "17h",
    profileImg:
      "https://images.unsplash.com/photo-1612884610549-ce221d92514a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFrZXJ8ZW58MHx8MHx8fDA%3D",
    postImg:
      "https://plus.unsplash.com/premium_photo-1681999951238-68b5628caaae?q=80&w=1799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mutualFrndImg1:
      "https://plus.unsplash.com/premium_photo-1664273237592-591fba2f7a07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFraW5nfGVufDB8fDB8fHww",
    mutualFrndImg2:
      "https://images.unsplash.com/photo-1532499016263-f2c3e89de9cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFraW5nfGVufDB8fDB8fHww",
    likeCount: "450k",
    caption: "Baking with love.",
    commentCount: "125",
  },
];

export default instagramFeed;
