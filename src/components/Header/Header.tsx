import { FC } from "react";
import Container from "@/components/Container";
import styles from "./Header.module.scss";

interface HeaderProps {
    className?: string;
}

const Header: FC<HeaderProps> = ({ className }) => {
    return (
        <header className={`${styles.header} ${className}`}>
            <Container className={styles.container}>
                Header
            </Container>
        </header>
    )
}

export default Header