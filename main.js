var images=[
    "C:\Users\agrah\Desktop\VS code\cp78\129165031-stock-vector-indian-woman-with-necklace-wearing-traditional-hindu-clothes-profile-picture-avatar-cartoon-characte.jpg",
    "C:\Users\agrah\Desktop\VS code\cp78\images (1).jpg",
    "C:\Users\agrah\Desktop\VS code\cp78\download.png",
    "C:\Users\agrah\Desktop\VS code\cp78\download.jpg",
    "C:\Users\agrah\Desktop\VS code\cp78\images.jpg",
    "C:\Users\agrah\Desktop\VS code\cp78\download (1).jpg",
  ];
  var name_family_member=[
    "rita",
    "manish",
    "harishn",
    "kiran",
    "rajesh",
    "I",
  ];
  var i=0;
  function next(){
  document.getElementById("album").src = images[i];
    i=i+1;
      if(i == 6)
    {
      i=0
    };
    document.getElementById("name_of_house_member").innerHTML=name_family_member[i];
    if(i == 6)
    {
      i=0
    };
  };