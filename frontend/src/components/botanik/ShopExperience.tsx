"use client";

import { useState } from "react";
import Image from "next/image";
import ProductCard from "./ProductCard";
import { products, type Product } from "@/config/botanik";
import { Search } from "lucide-react";

function Toast({ message }: { message: string }) {
  return (
    <div className={`toast ${message ? "show" : ""}`}>
      <span className="dot">✓</span>
      <span>{message}</span>
    </div>
  );
}

function ProductModal({
  product,
  onClose,
  onToast,
}: {
  product: Product | null;
  onClose: () => void;
  onToast: (message: string) => void;
}) {
  const [qty, setQty] = useState(1);

  return (
    <div
      className={`modal-overlay ${product ? "open" : ""}`}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {product ? (
        <div className="modal modal-lg">
          <button className="modal-close" onClick={onClose} type="button">
            ✕
          </button>
          <div className="modal-product">
            <Image alt={product.alt} height={600} src={product.image} width={600} />
            <div>
              <div className="produit-cat">{product.category}</div>
              <h3>{product.name}</h3>
              <div className="produit-rating" style={{ marginBottom: 16 }}>
                {product.rating} <span>({product.reviews} avis)</span>
              </div>
              <p style={{ color: "var(--santal)", fontSize: 14.5, marginBottom: 18 }}>
                Un rituel formulé à partir d&apos;ingrédients botaniques africains, pensé
                pour nourrir intensément les longueurs sans effet gras.
              </p>
              <span className="produit-price" style={{ fontSize: 24 }}>
                {product.price}
              </span>
              <div className="qty-row">
                <div className="qty-control">
                  <button onClick={() => setQty((value) => Math.max(1, value - 1))} type="button">
                    −
                  </button>
                  <span>{qty}</span>
                  <button onClick={() => setQty((value) => value + 1)} type="button">
                    ＋
                  </button>
                </div>
              </div>
              <button
                className="btn btn-primary btn-block"
                onClick={() => {
                  onClose();
                  onToast("Produit ajouté au panier");
                }}
                type="button"
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default function ShopExperience() {
  const [activeTexture, setActiveTexture] = useState("3A");
  const [toast, setToast] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  function showToast(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(""), 2800);
  }

  return (
    <>
      <div className="shop-wrap">
        <aside className="sidebar reveal">
          <div className="search-bar" style={{ marginBottom: 0 }}>
            <Search size={18} />
            <input placeholder="Rechercher un produit…" type="text" />
          </div>

          <h4>Catégorie</h4>
          {[
            ["Hydratation", "18", true],
            ["Traitement", "12", false],
            ["Soin profond", "9", false],
            ["Entretien", "14", false],
            ["Accessoires", "7", false],
          ].map(([label, count, checked]) => (
            <label className="check-item" key={String(label)}>
              <span>
                <input defaultChecked={Boolean(checked)} type="checkbox" /> {label}
              </span>
              <span className="count">{count}</span>
            </label>
          ))}

          <h4>Texture</h4>
          <div className="swatches">
            {["3A", "3C", "4A", "4C"].map((texture) => (
              <button
                className={`swatch ${activeTexture === texture ? "active" : ""}`}
                key={texture}
                onClick={() => setActiveTexture(texture)}
                type="button"
              >
                {texture}
              </button>
            ))}
          </div>

          <h4>Budget</h4>
          <div className="price-range">
            <span style={{ color: "var(--santal)", fontSize: 12.5 }}>2k</span>
            <input defaultValue="18000" max="30000" min="2000" type="range" />
            <span style={{ color: "var(--santal)", fontSize: 12.5 }}>30k</span>
          </div>

          <h4>Avis</h4>
          <label className="check-item">
            <span>★★★★★ & plus</span>
          </label>
          <label className="check-item">
            <span>★★★★ & plus</span>
          </label>

          <button className="btn btn-ghost btn-block btn-sm" style={{ marginTop: 26 }} type="button">
            Réinitialiser
          </button>
        </aside>

        <div>
          <div className="toolbar reveal">
            <span className="result-count">60 produits</span>
            <select className="sort-select" defaultValue="Popularité">
              <option>Popularité</option>
              <option>Prix croissant</option>
              <option>Prix décroissant</option>
              <option>Nouveautés</option>
              <option>Meilleures notes</option>
            </select>
          </div>

          <div className="produits-grid reveal-stagger">
            {products.map((product) => (
              <ProductCard
                key={product.name}
                onAdd={() => showToast("Ajouté au panier")}
                onFavorite={() => showToast("Ajouté aux favoris")}
                onOpen={() => setSelectedProduct(product)}
                product={product}
              />
            ))}
          </div>

          <div className="pagination reveal">
            <div className="page-num active">1</div>
            <div className="page-num">2</div>
            <div className="page-num">3</div>
            <div className="page-num">→</div>
          </div>
        </div>
      </div>
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onToast={showToast} />
      <Toast message={toast} />
    </>
  );
}
