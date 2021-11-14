import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

//components
import PhotoCollection from "../../components/restaurant/PhotosCollection";


const Photos = () => {
  const [photos, setPhotos] = useState([
    "https://b.zmtcdn.com/data/pictures/0/18930190/8b41602a27ac441ba909237947be73ec.jpg",
    "https://b.zmtcdn.com/data/reviews_photos/faf/e76d6bc3df21781ca49c93dd4d4edfaf_1624699914.jpg",
    "https://b.zmtcdn.com/data/dish_photos/e56/c6942fc1a954329fe4ed8bdf9a481e56.jpg",
    "https://b.zmtcdn.com/data/pictures/0/18930190/8b41602a27ac441ba909237947be73ec.jpg",
    "https://b.zmtcdn.com/data/reviews_photos/faf/e76d6bc3df21781ca49c93dd4d4edfaf_1624699914.jpg",
    "https://b.zmtcdn.com/data/dish_photos/e56/c6942fc1a954329fe4ed8bdf9a481e56.jpg",
    "https://b.zmtcdn.com/data/pictures/0/18930190/8b41602a27ac441ba909237947be73ec.jpg",
    "https://b.zmtcdn.com/data/reviews_photos/faf/e76d6bc3df21781ca49c93dd4d4edfaf_1624699914.jpg",
    "https://b.zmtcdn.com/data/dish_photos/e56/c6942fc1a954329fe4ed8bdf9a481e56.jpg",
    "https://b.zmtcdn.com/data/pictures/0/18930190/8b41602a27ac441ba909237947be73ec.jpg",
    "https://b.zmtcdn.com/data/reviews_photos/faf/e76d6bc3df21781ca49c93dd4d4edfaf_1624699914.jpg",
    "https://b.zmtcdn.com/data/dish_photos/e56/c6942fc1a954329fe4ed8bdf9a481e56.jpg",

  ]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

  const closeViewer = () => {
    setIsMenuOpen(false);
  };

  const openViewer = (index) => {
    setIsMenuOpen(true);
  };

  return (
    <>
      {isMenuOpen && (
        <ImageViewer
          src={photos}
          currentIndex={currentImg}
          disableScroll={false}
          onClose={closeViewer}
        />
      )}
      <div className="flex flex-wrap gap-2">
        {photos.map((photo) => (
          <PhotoCollection image={photo} openViewer={openViewer} />
        ))}
      </div>
    </>
  );
}

export default Photos;