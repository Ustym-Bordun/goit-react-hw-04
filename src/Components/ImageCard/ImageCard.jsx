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
    <div
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
      <p className={css.text}>Creator: {name}</p>
      <p className={css.text}>Likes: {likes}</p>
      <p className={css.text}>
        {description
          ? description.slice(0, 1).toUpperCase() + description.slice(1)
          : "There's no description"}
      </p>
    </div>
  );
};

export default ImageCard;
