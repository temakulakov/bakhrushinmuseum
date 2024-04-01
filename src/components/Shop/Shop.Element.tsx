import React from 'react';
import styles from './Shop.Element.module.scss';
import { motion, useMotionValue, useTransform, MotionStyle } from 'framer-motion';
import { IShop } from '../../types';

interface IProps {
    item: IShop;
}

const ShopElement: React.FC<IProps> = ({ item }) => {
    const cardX = useMotionValue(0);
    const cardY = useMotionValue(0);
    const rotateX = useTransform(cardY, [-300, 300], [10, -10]);
    const rotateY = useTransform(cardX, [-300, 300], [-10, 10]);
    const cardStyle: MotionStyle = {
        rotateX: useTransform(cardY, [-300, 300], [25, -25]),
        rotateY: useTransform(cardX, [-300, 300], [-25, 25]),
        boxShadow: "0px 0px 30px -7px rgba(0,0,0,0.45)",
        borderRadius: '3px',
        backgroundColor: "white",
        width: '192px',
        height: '246px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transformStyle: "preserve-3d",
        perspective: 800
    };

    const imageStyle: MotionStyle = {
        borderRadius: '3px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transformStyle: "preserve-3d",
        perspective: 1100,
        rotateX: useTransform(cardY, [-500, 500], [45, -45]),
        rotateY: useTransform(cardX, [-500, 500], [-45, 45])
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const offsetX = event.clientX - window.innerWidth / 2;
        const offsetY = event.clientY - window.innerHeight / 2;

        cardX.set(offsetX);
        cardY.set(offsetY);
    };

    const handleMouseLeave = () => {
        cardX.set(0);
        cardY.set(0);
    };

    return (
        <motion.div
            className={styles.wrapper}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 800 }}
        >
            <motion.div style={{ margin: "auto", transformStyle: "preserve-3d", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", rotateX, rotateY }}>
                <motion.div style={cardStyle}>
                    <motion.img src={item.imageUrl} alt={item.title} style={imageStyle} />
                </motion.div>
                <h2>{item.title}</h2>
                <p>{item.price}₽</p>
            </motion.div>
        </motion.div>
    );
};

export default ShopElement;
