import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaTimes, FaHeart, FaShare, FaPlus } from 'react-icons/fa';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=800&h=600&fit=crop',
    alt: 'Fresh Red Apples',
    title: 'Fresh Red Apples',
    description: 'Crisp and juicy apples handpicked from our partner farms',
    category: 'Apples'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&h=600&fit=crop',
    alt: 'Golden Bananas',
    title: 'Golden Bananas',
    description: 'Perfectly ripe bananas rich in potassium and energy',
    category: 'Bananas'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=800&h=600&fit=crop',
    alt: 'Juicy Oranges',
    title: 'Juicy Oranges',
    description: 'Vitamin C rich oranges for immune system boost',
    category: 'Citrus'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=800&h=600&fit=crop',
    alt: 'Tropical Mangoes',
    title: 'Tropical Mangoes',
    description: 'Sweet and aromatic mangoes, the king of fruits',
    category: 'Tropical'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1550258987-190a62d4fa60?w=800&h=600&fit=crop',
    alt: 'Fresh Pineapples',
    title: 'Fresh Pineapples',
    description: 'Tropical pineapple with natural digestive enzymes',
    category: 'Tropical'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&h=600&fit=crop',
    alt: 'Sweet Strawberries',
    title: 'Sweet Strawberries',
    description: 'Antioxidant-rich strawberries for heart health',
    category: 'Berries'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1550258987-190a62d4fa60?w=800&h=600&fit=crop',
    alt: 'Mixed Fruit Bowl',
    title: 'Mixed Fruit Bowl',
    description: 'Colorful assortment of fresh seasonal fruits',
    category: 'Mixed'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=800&h=600&fit=crop',
    alt: 'Fruit Packaging',
    title: 'Eco-Friendly Packaging',
    description: 'Sustainably packaged fruits for your convenience',
    category: 'Packaging'
  }
];

const categories = ['All', 'Apples', 'Bananas', 'Citrus', 'Tropical', 'Berries', 'Mixed', 'Packaging'];

const FruitGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1;
    setSelectedImage(filteredImages[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };

  return (
    <section id="gallery" className="py-8 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="font-brand text-2xl sm:text-4xl md:text-5xl font-bold text-primary" style={{ color: '#FDF8E1' }}>
            A Feast for Your Eyes
          </h2>
          <p className="mt-2 sm:mt-4 text-base sm:text-lg text-secondary max-w-2xl mx-auto" style={{ color: '#FDF8E1' }}>
            Explore the vibrant colors and freshness of our handcrafted fruit boxes.
          </p>
        </div>

        <div className="columns-2 md:columns-3 gap-4">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="mb-4 break-inside-avoid relative overflow-hidden rounded-2xl shadow-soft group cursor-pointer"
              onClick={() => openModal(image, index)}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img src={image.src} alt={`Fruit Box ${index + 1}`} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center justify-center bg-[#18492B] rounded-full p-2 shadow-md transition-all duration-300">
                  <FaPlus className="h-8 w-8 text-accent" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full rounded-2xl shadow-soft-lg"
            />
            <button
              className="absolute top-6 right-6 text-white hover:text-accent transition-colors"
              onClick={closeModal}
            >
              <span className="inline-flex items-center justify-center bg-[#18492B] rounded-full p-2 shadow-md transition-all duration-300">
                <FaTimes className="h-8 w-8 text-accent" />
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FruitGallery; 