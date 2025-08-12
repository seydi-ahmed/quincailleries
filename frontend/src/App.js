import React, { useEffect, useState } from "react";

// URL de base backend
const BASE_URL = "http://localhost:8080/api"; //

// Composant Notification simple
const Notification = ({ message, type, onClose }) => {
  if (!message) return null;
  return (
    <div className={`message ${type === "error" ? "error" : "success"}`}>
      {message}
      <button onClick={onClose} style={{ marginLeft: 10 }}>
        x
      </button>
    </div>
  );
};

// Formulaire ajout / édition quincaillerie
const StoreForm = ({ store, onSave, onCancel }) => {
  const [nom, setName] = useState(store ? store.nom : "");
  const [address, setAddress] = useState(store ? store.address : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nom.trim()) return alert("Le nom est obligatoire");
    onSave({ ...store, nom, address });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{store ? "Modifier Quincaillerie" : "Ajouter Quincaillerie"}</h3>
      <label>Nom</label>
      <input
        type="text"
        value={nom}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label>Adresse</label>
      <textarea value={address} onChange={(e) => setAddress(e.target.value)} />
      <button type="submit">{store ? "Enregistrer" : "Ajouter"}</button>
      <button
        type="button"
        onClick={onCancel}
        style={{ marginLeft: "10px", backgroundColor: "#ef4444" }}
      >
        Annuler
      </button>
    </form>
  );
};

// Formulaire ajout / édition produit
const ProductForm = ({ product, onSave, onCancel }) => {
  const [nom, setName] = useState(product ? product.nom : "");
  const [prix, setprix] = useState(product ? product.prix : "");
  const [quantite, setquantite] = useState(product ? product.quantite : 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nom.trim()) return alert("Le nom est obligatoire");
    if (prix === "" || isNaN(prix)) return alert("Prix invalide");
    onSave({ ...product, nom, prix: parseFloat(prix), quantite });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{product ? "Modifier Produit" : "Ajouter Produit"}</h3>
      <label>Nom</label>
      <input
        type="text"
        value={nom}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label>Prix</label>
      <input
        type="number"
        step="0.01"
        value={prix}
        onChange={(e) => setprix(e.target.value)}
        required
      />
      <label>Quantité</label>
      <input
        type="number"
        value={quantite}
        min="0"
        onChange={(e) => setquantite(parseInt(e.target.value, 10) || 0)}
      />
      <button type="submit">{product ? "Enregistrer" : "Ajouter"}</button>
      <button
        type="button"
        onClick={onCancel}
        style={{ marginLeft: "10px", backgroundColor: "#ef4444" }}
      >
        Annuler
      </button>
    </form>
  );
};

// Liste des quincailleries
const StoreList = ({ stores, selectedId, onSelect, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Quincailleries</h2>
      {stores.length === 0 && <p>Aucune quincaillerie disponible</p>}
      <div style={{ maxHeight: "300px", overflowY: "auto" }}>
        {stores.map((store) => (
          <div
            key={store.id}
            className={`list-item ${selectedId === store.id ? "selected" : ""}`}
            onClick={() => onSelect(store)}
          >
            <span>{store.nom}</span>
            <span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit(store);
                }}
              >
                ✏️
              </button>{" "}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(store.id);
                }}
                style={{ backgroundColor: "#dc2626" }}
              >
                🗑️
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Liste produits pour une quincaillerie donnée
const ProductList = ({ products, onEdit, onDelete, onUpdateStock }) => {
  const [stockChange, setStockChange] = useState({}); // productId => valeur

  const handleStockUpdate = (productId) => {
    const change = parseInt(stockChange[productId], 10);
    if (isNaN(change) || change === 0) {
      alert(
        "Saisissez un nombre différent de 0 pour la modification de stock."
      );
      return;
    }
    onUpdateStock(productId, change);
    setStockChange((prev) => ({ ...prev, [productId]: "" }));
  };

  return (
    <div>
      <h2>Produits</h2>
      {products.length === 0 && (
        <p>Sélectionne une quincaillerie pour voir ses produits.</p>
      )}
      <div style={{ maxHeight: "300px", overflowY: "auto" }}>
        {products.map((product) => (
          <div key={product.id} className="list-item">
            <div style={{ flex: 2 }}>
              <strong>{product.nom}</strong> - {product.prix.toFixed(2)} € -{" "}
              <em>Stock: {product.quantite}</em>
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <input
                type="number"
                placeholder="± quantité"
                value={stockChange[product.id] || ""}
                onChange={(e) =>
                  setStockChange((prev) => ({
                    ...prev,
                    [product.id]: e.target.value,
                  }))
                }
                style={{ width: "80px" }}
              />
              <button onClick={() => handleStockUpdate(product.id)}>
                Mettre à jour stock
              </button>
              <button onClick={() => onEdit(product)}>✏️</button>
              <button
                onClick={() => onDelete(product.id)}
                style={{ backgroundColor: "#dc2626" }}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);
  const [products, setProducts] = useState([]);

  const [storeFormVisible, setStoreFormVisible] = useState(false);
  const [storeToEdit, setStoreToEdit] = useState(null);

  const [productFormVisible, setProductFormVisible] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  const [notification, setNotification] = useState({ message: "", type: "" });

  // Fonctions backend CRUD

  // Charger toutes les quincailleries
  const fetchStores = async () => {
    try {
      const res = await fetch(`${BASE_URL}/quincailleries`);
      if (!res.ok) throw new Error("Erreur chargement quincailleries");
      const data = await res.json();
      console.log("fetchStores data:", data);
      setStores(data);
    } catch (err) {
      setNotification({ message: err.message, type: "error" });
    }
  };

  // Charger produits d'une quincaillerie
  const fetchProducts = async (storeId) => {
    try {
      const res = await fetch(`${BASE_URL}/quincailleries/${storeId}/products`);
      if (!res.ok) throw new Error("Erreur chargement produits");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      setNotification({ message: err.message, type: "error" });
      setProducts([]);
    }
  };

  // Création / mise à jour quincaillerie
  const saveStore = async (store) => {
    try {
      if (store.id) {
        // update
        const res = await fetch(`${BASE_URL}/quincailleries/${store.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(store),
        });
        if (!res.ok) throw new Error("Erreur mise à jour quincaillerie");
        setNotification({
          message: "Quincaillerie mise à jour",
          type: "success",
        });
      } else {
        // create
        const res = await fetch(`${BASE_URL}/quincailleries`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(store),
        });
        if (!res.ok) throw new Error("Erreur création quincaillerie");
        setNotification({ message: "Quincaillerie ajoutée", type: "success" });
      }
      setStoreFormVisible(false);
      setStoreToEdit(null);
      fetchStores();
    } catch (err) {
      setNotification({ message: err.message, type: "error" });
    }
  };

  // Suppression quincaillerie
  const deleteStore = async (id) => {
    if (!window.confirm("Confirmer suppression de la quincaillerie ?")) return;
    try {
      const res = await fetch(`${BASE_URL}/quincailleries/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Erreur suppression quincaillerie");
      setNotification({ message: "Quincaillerie supprimée", type: "success" });
      if (selectedStore && selectedStore.id === id) {
        setSelectedStore(null);
        setProducts([]);
      }
      fetchStores();
    } catch (err) {
      setNotification({ message: err.message, type: "error" });
    }
  };

  // Création / mise à jour produit
  const saveProduct = async (product) => {
    if (!selectedStore) return alert("Sélectionne une quincaillerie avant");
    try {
      if (product.id) {
        // update
        const res = await fetch(
          `${BASE_URL}/quincailleries/${selectedStore.id}/products/${product.id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
          }
        );
        if (!res.ok) throw new Error("Erreur mise à jour produit");
        setNotification({ message: "Produit mis à jour", type: "success" });
      } else {
        // create
        const res = await fetch(
          `${BASE_URL}/quincailleries/${selectedStore.id}/products`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
          }
        );
        if (!res.ok) throw new Error("Erreur création produit");
        setNotification({ message: "Produit ajouté", type: "success" });
      }
      setProductFormVisible(false);
      setProductToEdit(null);
      fetchProducts(selectedStore.id);
    } catch (err) {
      setNotification({ message: err.message, type: "error" });
    }
  };

  // Suppression produit
  const deleteProduct = async (productId) => {
    if (!selectedStore) return alert("Sélectionne une quincaillerie avant");
    if (!window.confirm("Confirmer suppression du produit ?")) return;
    try {
      const res = await fetch(
        `${BASE_URL}/quincailleries/${selectedStore.id}/products/${productId}`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) throw new Error("Erreur suppression produit");
      setNotification({ message: "Produit supprimé", type: "success" });
      fetchProducts(selectedStore.id);
    } catch (err) {
      setNotification({ message: err.message, type: "error" });
    }
  };

  // Mise à jour stock (ajout / retrait quantité)
  const updateStock = async (productId, quantiteChange) => {
    if (!selectedStore) return alert("Sélectionne une quincaillerie avant");
    try {
      const res = await fetch(
        `${BASE_URL}/quincailleries/${selectedStore.id}/products/${productId}/stock/update?quantiteChange=${quantiteChange}`,
        {
          method: "POST",
        }
      );
      if (!res.ok) throw new Error("Erreur mise à jour stock");
      setNotification({ message: "Stock mis à jour", type: "success" });
      fetchProducts(selectedStore.id);
    } catch (err) {
      setNotification({ message: err.message, type: "error" });
    }
  };

  // Hooks
  useEffect(() => {
    fetchStores();
  }, []);

  useEffect(() => {
    if (selectedStore) {
      fetchProducts(selectedStore.id);
    } else {
      setProducts([]);
    }
  }, [selectedStore]);

  return (
    <div className="container">
      <h1>🌟 Gestion Quincailleries</h1>
      <Notification
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: "", type: "" })}
      />
      <div className="flex">
        <div className="card" style={{ maxWidth: "350px" }}>
          <StoreList
            stores={stores}
            selectedId={selectedStore ? selectedStore.id : null}
            onSelect={setSelectedStore}
            onEdit={(store) => {
              setStoreToEdit(store);
              setStoreFormVisible(true);
            }}
            onDelete={deleteStore}
          />
          {!storeFormVisible && (
            <button
              onClick={() => setStoreFormVisible(true)}
              style={{ marginTop: "10px", width: "100%" }}
            >
              ➕ Ajouter Quincaillerie
            </button>
          )}
          {storeFormVisible && (
            <StoreForm
              store={storeToEdit}
              onSave={saveStore}
              onCancel={() => {
                setStoreFormVisible(false);
                setStoreToEdit(null);
              }}
            />
          )}
        </div>

        <div className="card" style={{ flex: 2 }}>
          {selectedStore ? (
            <>
              <h2>
                Produits pour <em>{selectedStore.nom}</em>
              </h2>
              <ProductList
                products={products}
                onEdit={(product) => {
                  setProductToEdit(product);
                  setProductFormVisible(true);
                }}
                onDelete={deleteProduct}
                onUpdateStock={updateStock}
              />
              {!productFormVisible && (
                <button
                  onClick={() => setProductFormVisible(true)}
                  style={{ marginTop: "10px" }}
                >
                  ➕ Ajouter Produit
                </button>
              )}
              {productFormVisible && (
                <ProductForm
                  product={productToEdit}
                  onSave={saveProduct}
                  onCancel={() => {
                    setProductFormVisible(false);
                    setProductToEdit(null);
                  }}
                />
              )}
            </>
          ) : (
            <p>Sélectionne une quincaillerie pour voir ses produits.</p>
          )}
        </div>
      </div>
      <footer style={{ marginTop: 40, textAlign: "center", color: "#666" }}>
        Mouhamed Diouf
      </footer>
    </div>
  );
}

export default App;
