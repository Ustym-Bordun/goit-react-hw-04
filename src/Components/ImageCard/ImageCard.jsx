import css from './ImageCard.module.css';

const ImageCard = ({
  likes,
  description,
  alt_description,
  name,
  urls: { small, regular },
  onOpenModal,
}) => {
  return (
    <button
      className={css.card}
      onClick={() => onOpenModal(regular, alt_description)}
    >
      <img
        className={css.img}
        src={small}
        alt={
          alt_description
            ? alt_description.slice(0, 1).toUpperCase() +
              alt_description.slice(1)
            : "There's no description"
        }
      />
      <div className={css.info}>
        {description && (
          <p className={css.title}>
            {description
              ? description.slice(0, 1).toUpperCase() + description.slice(1)
              : "There's no description"}
          </p>
        )}

        <div className={css.infoBottom}>
          <p className={css.creator}>
            Creator: {name.slice(0, 1).toUpperCase() + name.slice(1)}
          </p>
          <p className={css.likes}>Likes: {likes}</p>
        </div>
      </div>
    </button>
  );
};

export default ImageCard;
