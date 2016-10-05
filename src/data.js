let data = {
    gallery: [
      {animal:'walrus', adj:'eerie', title:"Bull's Eye", price:'$150,000', img:'./images1/walrus_eerie_1.png'},
      {animal:'walrus', adj:'eerie', title:"Fisherman's Cry", price:'$275,000', img:'./images1/walrus_eerie_2.jpg'},
      {animal:'walrus', adj:'eerie', title:"'Haha' Watson", price:'$375,000', img:'./images1/walrus_eerie_3.png'},
      {animal:'walrus', adj:'funny', title:'Drew A Walrus', price:'$2,500,000', img:'./images1/walrus_funny1.jpg'},
      {animal:'walrus', adj:'funny', title:'Call Me Sir', price:'$500,000', img:'./images1/walrus_funny2.jpg'},
      {animal:'walrus', adj:'funny', title:'Ride Sweetly', price:'$1,000,000', img:'./images1/walrus_funny3.png'},
      {animal:'walrus', adj:'weird', title:'Walrus Burger', price:'$450,000', img:'./images1/walrusWeird1.jpg'},
      {animal:'walrus', adj:'weird', title:'Lost', price:'$125,000', img:'./images1/walrusWeird2.jpg'},
      {animal:'walrus', adj:'weird', title:'How Do You Do?', price:'', img:'./images1/walrusWeird3.jpg'},

      {animal:'dragon', adj:'eerie', title:'Borchanchi', price:'$150,000', img:'./images1/eerieDragon1.jpg'},
      {animal:'dragon', adj:'eerie', title:"Hell's Fury", price:'$375,000', img:'./images1/eerieDragon2.jpg'},
      {animal:'dragon', adj:'eerie', title:'Demon Skull', price:'$500,000', img:'./images1/eerieDragon3.jpg'},
      {animal:'dragon', adj:'funny', title:'Tarut', price:'$1,000,000', img:'./images1/funnyDragon1.jpg'},
      {animal:'dragon', adj:'funny', title:'Lady "Huh"', price:'$800,000', img:'./images1/funnyDragon2.jpg'},
      {animal:'dragon', adj:'funny', title:"Putla's Fun Dining", price:'$250,000', img:'./images1/funnyDragon3.jpg'},

      {animal:'dragon', adj:'weird', title:'When You Sleep', price:'$400,000', img:'./images1/weirdDragon1.jpg'},
      {animal:'dragon', adj:'weird', title:'Percy the Dragon', price:'$150,000', img:'./images1/weirdDragon2.jpg'},
      {animal:'dragon', adj:'weird', title:'Palandraba', price:'', img:'./images1/weirdDragon3.jpg'},

      {animal:'cat', adj:'eerie', title:'We All See', price:'$1,750,000', img:'./images1/eeriecat1.jpg'},
      {animal:'cat', adj:'eerie', title:"We're All Mad Here", price:'$145,000', img:'./images1/eeriecat2.jpg'},

      {animal:'cat', adj:'eerie', title:'The Eye King', price:'$2,000,000', img:'./images1/eeriecat3.jpg'},
      {animal:'cat', adj:'funny', title:"I'm A Bird", price:'$300,000', img:'./images1/funnycat1.jpg'},
      {animal:'cat', adj:'funny', title:'Joseph Beard', price:'$100,000', img:'./images1/funnycat2.jpg'},
      {animal:'cat', adj:'funny', title:'Photobombed', price:'$750,000', img:'./images1/funnycat3.jpg'},
      {animal:'cat', adj:'weird', title:'I Recall', price:'$225,000', img:'./images1/weirdcat1.jpg'},
      {animal:'cat', adj:'weird', title:'Cat-epillar', price:'$600,000', img:'./images1/weirdcat2.jpg'},
      {animal:'cat', adj:'weird', title:'Simon Says', price:'$575,000', img:'./images1/weirdcat3.jpg'},

      {animal:'unicorn', adj:'eerie', title:"Clementine's Fate", price:'$1,500,000', img:'./images1/eerieunicorn1.jpg'},
      {animal:'unicorn', adj:'eerie', title:'In The Distance', price:'$500,000', img:'./images1/eerieunicorn2.jpg'},
      {animal:'unicorn', adj:'eerie', title:'Maureen', price:'$850,000', img:'./images1/eerieunicorn3.jpg'},
      {animal:'unicorn', adj:'funny', title:'Sprinkle Potty', price:'$2,000,000', img:'./images1/funnyunicorn1.jpg'},
      {animal:'unicorn', adj:'funny', title:"Mom, I'm A Unicorn", price:'$550,000', img:'./images1/funnyunicorn2.jpg'},
      {animal:'unicorn', adj:'funny', title:'Party Ready', price:'$250,000', img:'./images1/funnyunicorn3.jpg'},
      {animal:'unicorn', adj:'weird', title:'Thirst is Real', price:'$500,000', img:'./images1/weirdunicorn1.jpg'},
      {animal:'unicorn', adj:'weird', title:'Galant', price:'$125,000', img:'./images1/weirdunicorn2.jpg'},
      {animal:'unicorn', adj:'weird', title:'Forever Detriment', price:'$575,000', img:'./images1/weirdunicorn3.jpg'},

      {animal:'giraffe', adj:'eerie', title:"Death's Revenge", price:'$100,000', img:'./images1/eerieGiraffe1.jpg'},
      {animal:'giraffe', adj:'eerie', title:'Bug-ography', price:'$575,000', img:'./images1/eerieGiraffe2.jpg'},
      {animal:'giraffe', adj:'eerie', title:'Fallen Fire', price:'3,500,000', img:'./images1/eerieGiraffe3.jpg'},
      {animal:'giraffe', adj:'funny', title:'Shall I Dance', price:'$250,000', img:'./images1/funnyGiraffe1.jpg'},
      {animal:'giraffe', adj:'funny', title:'First Class', price:'100,000', img:'./images1/funnyGiraffe2.jpg'},
      {animal:'giraffe', adj:'funny', title:"Who's Timmy", price:'$450,000', img:'./images1/funnyGiraffe3.png'},
      {animal:'giraffe', adj:'weird', title:'The Abyss', price:'$900,000', img:'./images1/weirdGiraffe1.jpg'},
      {animal:'giraffe', adj:'weird', title:'The Walk', price:'$350,000', img:'./images1/weirdGiraffe2.jpg'},
      {animal:'giraffe', adj:'weird', title:'Adelaine', price:'$275,000', img:'./images1/weirdGiraffe3.jpg'},
    ]
  };

data.getGallery = function() {
  return this.gallery
};

data.getData = function() {
  return this;
}

export default data;
