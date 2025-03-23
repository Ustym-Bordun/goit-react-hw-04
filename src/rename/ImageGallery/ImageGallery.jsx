import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ photos, onOpenModal }) => {
  return (
    <ul className={css.list}>
      {photos.map(photo => {
        const {
          id,
          // created_at,
          likes,
          description,
          alt_description,
          user: {
            name,
            // portfolio_url
          },
          urls,
        } = photo;

        return (
          <li key={id}>
            <ImageCard
              likes={likes}
              description={description}
              alt_description={alt_description}
              name={name}
              urls={urls}
              onOpenModal={onOpenModal}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
