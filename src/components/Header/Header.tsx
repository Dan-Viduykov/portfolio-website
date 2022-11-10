import { FC } from "react";
import Container from "@/components/Container";
import styles from "./Header.module.scss";
import Image from "next/image";

interface HeaderProps {
    className?: string;
}

const Header: FC<HeaderProps> = ({ className }) => {
    return (
        <header className={`${styles.header} ${className}`}>
            <Container className={styles.container}>
                <div className={styles.logo}>
                    <Image src={''} alt='' />
                    <p></p>
                </div>
            </Container>
        </header>
    )
}

export default Header