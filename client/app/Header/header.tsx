import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import styles from "./header.module.css";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image"

const pages = ["My Cookbook", "Browse Community"]

export default function Header() {
    return (
        <Box sx={{ width: 50, height: 50}}>
            <AppBar className={styles.AppBar}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Link href="/">
                            <Image width={50} height={50} 
                                src="/kinaChef2.png" alt="chef kina" /> 
                                    <Box className={styles.Box} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
                                        {pages.map((page) => (
                                        <Button
                                            key={page}
                                            sx={{ my: 2, color: 'white'}}
                                        >
                                            {page}
                                        </Button>
                                        ))}
                                    </Box>
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar >
        </Box>
    )
}