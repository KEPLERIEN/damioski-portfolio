import React from 'react';
import { motion } from 'framer-motion';
import './Jobs.scss';
import '../styles/Background.scss';
import rttbImage from '../../assets/rttb.jpg';
import winoaImage from '../../assets/bureau-winoa.jpg';

const Jobs = () => {
    // Variants pour les animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: -50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { 
                type: "spring", 
                stiffness: 100, 
                damping: 12
            }
        }
    };
    
    // Variants pour l'effet hover sur les cartes
    const cardHoverVariants = {
        hover: { 
            scale: 1.05, 
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.6)",
            transition: { 
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.section 
            id="jobs" 
            className="jobs-section nextjs-background"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <div className="content-wrapper">
                <motion.h2 variants={itemVariants}>Experiences Professionnelles</motion.h2>
                
                <div className="timeline">
                    <motion.div className="timeline-item" variants={itemVariants}>
                        <div className="timeline-content left">
                            <motion.div 
                                className="timeline-job-card"
                                whileHover="hover"
                                variants={cardHoverVariants}
                            >
                                <div className="job-period">Mai 2023 - Juillet 2023</div>
                                <div className="job-image">
                                    <img src={rttbImage} alt="Régie des Transports du Territoire de Belfort" />
                                </div>
                            </motion.div>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content right">
                            <div className="timeline-job-details">
                                <h3>Régie des Transports du Territoire de Belfort</h3>
                                <p className="job-location">Rue des 3 Réseaux, 90400 Danjoutin</p>
                                <p className="job-title">Développeur java et technicien réseau d'entreprise</p>
                                <p className="job-contract">Stage en année de BTS</p>
                                <ul className="job-tasks">
                                    <li>Développement de jobs Talend Open Studio pour mise en place d'une API</li>
                                    <li>Schématisation du réseau d'entreprise</li>
                                    <li>Documentation API</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="timeline-item" variants={itemVariants}>
                        <div className="timeline-content left">
                            <div className="timeline-job-details">
                                <h3>Winoa France</h3>
                                <p className="job-location">600 Av. de Savoie, 38570 Le Cheylas</p>
                                <p className="job-title">Administrateur Systèmes et Réseaux</p>
                                <p className="job-contract">Alternant en License III</p>
                                <ul className="job-tasks">
                                    <li>Gestion des utilisateurs du site</li>
                                    <li>Amélioration en continue du réseau informatique</li>
                                    <li>Relation informatique Bureaux - Usine</li>
                                    <li>Gestion des projets informatisés du site</li>
                                    <li>Documentation informatique de l'entreprise et de ses outils</li>
                                </ul>
                            </div>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content right">
                            <motion.div 
                                className="timeline-job-card"
                                whileHover="hover"
                                variants={cardHoverVariants}
                            >
                                <div className="job-period">Octobre 2026 - Aujourd'hui</div>
                                <div className="job-image">
                                    <img src={winoaImage} alt="Winoa France" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Jobs; 
