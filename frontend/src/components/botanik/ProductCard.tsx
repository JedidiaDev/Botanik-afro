
"use client";

import Image from "next/image";
import type { Product } from "@/config/botanik";

type ProductCardProps = {
  product: Product;
  onAdd?: () => void;
  onFavorite?: () => void;
  onOpen?: () => void;
};

export default function ProductCard({ product, onAdd, onFavorite, onOpen }: ProductCardProps) {
  return (
    <article className="produit-card card" onClick={onOpen}>
      <div className="produit-img">
        {product.badge ? (
          <span className={`badge ${product.badgeClass ?? "badge-gold"}`}>{product.badge}</span>
        ) : null}
        <button
          aria-label={`Ajouter ${product.name} aux favoris`}
          className="produit-fav"
          onClick={(event) => {
            event.stopPropagation();
            onFavorite?.();
          }}
          type="button"
        >
          ♡
        </button>
        <Image alt={product.alt} fill sizes="(max-width: 720px) 50vw, (max-width: 1080px) 50vw, 25vw" src={product.image} />
      </div>
      <div className="produit-body">
        <div className="produit-cat">{product.category}</div>
        <h3>{product.name}</h3>
        <div className="produit-rating">
          {product.rating} <span>({product.reviews})</span>
        </div>
        <div className="produit-foot">
          <span className="produit-price">{product.price}</span>
          <button
            aria-label={`Ajouter ${product.name} au panier`}
            className="produit-add"
            onClick={(event) => {
              event.stopPropagation();
              onAdd?.();
            }}
            type="button"
          >
            ＋
          </button>
        </div>
      </div>
    </article>
  );
}
