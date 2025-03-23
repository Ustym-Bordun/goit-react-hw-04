import { useState, useEffect } from 'react';

// import Section from '../Section/Section';
// import Container from '../Container/Container';

import fetchPhotos from '../../service/imageApi';

import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import NothingSearched from '../NothingSearched/NothingSearched';
import ZeroPhotosFound from '../ZeroPhotosFound/ZeroPhotosFound';
import TotalPhotosInfo from '../TotalPhotosInfo/TotalPhotosInfo';

import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ClearPhotosBtn from '../ClearPhotosBtn/ClearPhotosBtn';
import ImageModal from '../ImageModal/ImageModal';

import css from './App.module.css';

function App() {
  const [photosData, setPhotosData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [photosTerm, setPhotosTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPageNum, setLastPageNum] = useState(0);
  const [totalPhotosNum, setTotalPhotosNum] = useState(0);
  const [somethingSearched, setSomethingSearched] = useState(false);

  const [photoForModal, setPhotoForModal] = useState(null);
  const [modalAltDescription, setModalAltDescription] = useState(null);

  const handleSubmit = searchQuery => {
    setPhotosTerm(searchQuery);
    setCurrentPage(1);
    setPhotosData([]);
  };

  useEffect(() => {
    if (photosTerm === '') return;

    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const { results, total_pages, total } = await fetchPhotos(
          photosTerm,
          currentPage
        );
        setPhotosData(prevPhotos => [...prevPhotos, ...results]);

        setLastPageNum(total_pages);
        setTotalPhotosNum(total);
      } catch (error) {
        console.log('there was an error', error);
        setError(true);
      } finally {
        setSomethingSearched(true);
        setIsLoading(false);
      }
    };
    asyncWrapper();
  }, [photosTerm, currentPage]);

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };
  const handleClearPhotos = () => {
    setPhotosData([]);
    setSomethingSearched(false);
  };
  const handleOpenModal = (modalPhotoUlr, altDescriptionForModal) => {
    setPhotoForModal(modalPhotoUlr);
    setModalAltDescription(altDescriptionForModal);
  };
  const handleCloseModal = () => {
    setPhotoForModal(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />

      {error ? (
        <ErrorMessage />
      ) : photosData.length > 0 ? (
        <div className={css.imageGalleryWrapper}>
          <TotalPhotosInfo totalPhotos={totalPhotosNum} />
          <ClearPhotosBtn onClearPhotos={handleClearPhotos} />

          <ImageGallery photos={photosData} onOpenModal={handleOpenModal} />
        </div>
      ) : (
        somethingSearched && <ZeroPhotosFound />
      )}

      {isLoading && <Loader />}

      {photosData.length > 0 && lastPageNum > currentPage && !isLoading && (
        <LoadMoreBtn onloadMore={handleLoadMore} />
      )}

      {!somethingSearched && <NothingSearched />}

      <ImageModal
        photo={photoForModal}
        onModalClose={handleCloseModal}
        altDescription={modalAltDescription}
      />
    </>
  );
}

export default App;
