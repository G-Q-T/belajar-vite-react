    import { Container } from "react-bootstrap";
    import AppNavbar from "../components/AppNavbar";
import { Outlet } from "react-router-dom";
export default function MainLayout(){

    return(
        <>
        <AppNavbar />
        <div className="d-flex flex-colomn min-vh-100 bg-grey">
            <main className="flex -grow-1 pb-4">
                <Container>
                    <Outlet />
                </Container>
            </main>
                <footer className="bg-white border-top py-3 text-center text-muted mt-auto">
        <Container>
            <small>&Copy;{new Date().getFullYear()} Develop By Qolil

            </small>
        </Container>
                </footer>
        </div>
            </>
    )
}