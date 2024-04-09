import ItemCountContainer from "../ItemCount/ItemCountContainer";
import style from "./ItemDetail.css";

const ItemDetail = ({
  img,
  title,
  price,
  description,
  stock,
  onAdd,
  total,
}) => {
  return (
    <div className={style.divcard}>
      <article className={style.CardItem}>
        <header className={style.Header}>
          <h2 className={style.ItemHeader}>{title}</h2>
        </header>
        <picture>
          <img src={img} alt="" className={style.ItemImg} />
        </picture>
        <section>
          <p className={style.Info}>{description}</p>
          <p className={style.Info}>{price}</p>
        </section>
        <footer className={style.ItemFooter}>
          {total && <h3>Ya tienes {total} en el carrito </h3>}
          <ItemCountContainer stock={stock} onAdd={onAdd} total={total} />
        </footer>
      </article>
    </div>
  );
};

export default ItemDetail;
