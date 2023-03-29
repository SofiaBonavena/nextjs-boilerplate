import React from 'react';
import { useState, useEffect } from 'react';
import { getFirestore } from '../../utils/firebase';
import { useRouter } from 'next/router';
import Cardinfo_projects from '../Cardinfo_projects/Cardinfo_projects';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projects_disenio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const getProjects = async () => {
      try {
        const db = getFirestore();
        const itemsCollection = db.collection(`projects`);
        const itemSnapshot = await itemsCollection
          .where(`catId`, `==`, `5ZwBKjH8v0RECt4V0lba`)
          .get();

        const categoryItems = db.collection(`category`);
        const categorySnapshot = await categoryItems.get();

        const items = itemSnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProjects(items);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getProjects();
  }, []);

  const goToProjects = (id) => router.push(`/cardsProjects/${id}`);

  // Animacion
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={`grid inner`}>
      {!loading &&
        projects.map(({ id, title, student, catId, ano, img, desc }) => (
            <Cardinfo_projects key={id}
              title={title}
              id={id}
              student={student}
              img={img}
              ano={ano}
              desc={desc}
            />
        ))}
      {loading && <p className={`col_12`}>Loading...</p>}
    </div>
  );
};

export default Projects_disenio;
