import { useState, useEffect } from 'react';
import { getFirestore } from '../../utils/firebase';
import { useRouter } from 'next/router';
import Card from '../Card/Card';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const getProducts = async () => {
      try {
        const db = getFirestore();
        const itemsCollection = db.collection(`projects`);
        const itemSnapshot = await itemsCollection.get();

        const categoryItems = db.collection(`category`);
        const categorySnapshot = await categoryItems.get();

        const items = itemSnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(items);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const goToProduct = (id) => router.push(`/cardsProjects/${id}`);

  return (
    <div className={`grid inner`}>
      {!loading &&
        products.map(({ id, title, student, catId, ano, img, desc }) => (
          <div key={id} className={`col_4`}>
            <Card
              title={title}
              id={id}
              catId={catId}
              student={student}
              img={img}
              ano={ano}
              desc={desc}
            />
            {/* <button onClick={() => goToProduct(id)}>View project</button> */}
          </div>
        ))}
      {loading && <p className={`col_12`}>Loading...</p>}
    </div>
  );
};

export default Products;
