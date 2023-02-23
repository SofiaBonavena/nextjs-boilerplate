import React, { useState } from 'react';
import styles from './Cardinfo_projects.module.css';
import Image from 'next/image';
import Lightbox from '../Lightbox/Lightbox';

const Cardinfo_projects = ({ title, id, student, img, ano, desc }) => {
  const [stateModal, setStateModal] = useState(false);

  const changeStateModal = () => {
    if (stateModal) {
      setStateModal(false);
    } else if (!stateModal) {
      setStateModal(true);
    }
  };

  return (
    <div className={`card ${styles['container']}`}>
      <div>
        <figure className={styles['figurecontainer']}>
          <Image src={img} alt="Placeholder image" width={1200} height={900} />
        </figure>
      </div>
      <div className={`card-content ${styles['cardconteiner']}`}>
        <div className="media">
          <div className={`media-content ${styles['mediacontainer']}`}>
            <p className={`title is-4 ${styles['title']}`}>{title}</p>
          </div>
        </div>
        <div onClick={() => changeStateModal()}>
          <Lightbox
            changeStateModal={changeStateModal}
            stateModal={stateModal}
            src={img}
            student={student}
            ano={ano}
            desc={desc}
          />
          <a className={`button ${styles['boton']}`}>VER</a>
        </div>
      </div>
    </div>
  );
};

export default Cardinfo_projects;
