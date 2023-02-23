import React from 'react';
import { useState, useEffect } from 'react';
import { getFirestore } from '../../utils/firebase';
import { useRouter } from 'next/router';
import Cardinfo_projects from '../Cardinfo_projects/Cardinfo_projects';
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const getProjects = async () => {
      try {
        const db = getFirestore();
        const itemsCollection = db.collection(`projects`);
        const itemSnapshot = await itemsCollection.get();

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
    <>
      <Subtitle>UMAI</Subtitle>
      <Title>Proyectos</Title>
      <div className={`grid inner`}>
        {!loading &&
          projects.map(({ id, title, student, catId, ano, img, desc }) => (
            <div key={id} className={`col_4`} data-aos="flip-left">
              <Cardinfo_projects
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
        {loading && <p className={`loading`}>Loading...</p>}
      </div>
    </>
  );
};

export default Projects;
