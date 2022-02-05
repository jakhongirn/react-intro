
import MainNavigation from './MainNavigation';
import classes from './styles/Layout.module.css';

function Layout(props) {
    return ( 
        <div>
            <MainNavigation />
            <main className={classes.main}>
                {props.children}
            </main>
        </div>
     );
}

export default Layout;
