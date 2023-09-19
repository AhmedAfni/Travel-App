import images from "./images";

export const keywordsData = [
    { id: '1', keyword: 'Forest' },
    { id: '2', keyword: 'Mountains' },
    { id: '3', keyword: 'City' },
    { id: '4', keyword: 'Beach' },
    { id: '5', keyword: 'No Wifi' },
    // Add more keywords as needed
  ];
  
export const placesData = [
    { id: '1', name: 'Sea Diving', distance: 2, image: images.place1 },
    { id: '2', name: 'Mountain Trip', distance: 1.8, image: images.place2 },
    { id: '3', name: 'Europa Diving', distance: 4, image: images.place3 },
    { id: '4', name: 'We Live', distance: 1.8, image: images.place4 },
  ]
  
export const placesFeaturedData = [
    { id: '1', name: 'Sea Diving', distance: 2, image: images.place4, star: 4.8 },
    { id: '2', name: 'Mountain Trip', distance: 1.8, image: images.place4, star: 5 },
    { id: '3', name: 'Europa Diving', distance: 4, image: images.place4, star: 4.7},
    { id: '4', name: 'We Live', distance: 1.8, image: images.place4, star: 5},
  ]